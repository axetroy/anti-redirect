import 'rxjs/add/observable/from';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/timer';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/retry';
import 'rxjs/add/operator/timeout';
import {Observable} from 'rxjs/Observable';
import {Http, Response$} from './src/http';

let inview;
const TIMEOUT = 2000;
const DEBUG = false;
const REDIRECT_REG = /www\.baidu\.com\/link\?url=/;
const http = new Http({timeout: TIMEOUT});

const STATUS = {
  ing: 'redirect-ing',
  done: 'redirect-done'
};

interface Items$ {
  local: HTMLAnchorElement,
  remote: HTMLAnchorElement
}

function getText(htmlElement: HTMLElement): string {
  return htmlElement.innerText || htmlElement.textContent;
}

function request(aElement: HTMLAnchorElement): void {
  if (!REDIRECT_REG.test(aElement.href) || aElement.getAttribute(STATUS.ing) || aElement.getAttribute(STATUS.done)) return;
  let url: string = aElement.href.replace(/^https?/, 'https') + `&timestamp=${new Date().getTime()}`;
  aElement.style.cursor = 'progress';
  aElement.setAttribute(STATUS.ing, '1');
  http.get(url)
    .retry(2)
    .timeout(TIMEOUT)
    .map((res: Response$)=> {
      if (REDIRECT_REG.test(res.finalUrl)) {
        if (!res.response || /<\/noscript>$/.test(res.response.trim())) throw res;
        let url = res.response.match(/URL=\'?https?:\/\/[^'"]+/).join('').match(/https?:\/\/[^'"]+/)[0];
        if (!url || !/^https?/.test(url) || REDIRECT_REG.test(url)) throw res;
        res.finalUrl = url;
      }
      return res;
    })
    .subscribe(function (res: Response$): void {
      aElement.href = res.finalUrl;
      aElement.removeAttribute(STATUS.ing);
      aElement.setAttribute(STATUS.done, '1');
      DEBUG && (aElement.style.backgroundColor = 'green');
    }, function (err: Response$): void {
      aElement.style.cursor = null;
      aElement.removeAttribute(STATUS.ing);
    }, function (): void {
      aElement.style.cursor = null;
      aElement.removeAttribute(STATUS.ing);
    });
}

function requestOneByOne(): void {
  Observable.from([].slice.call(document.querySelectorAll('#content_left a')))
    .subscribe(function (aElement: HTMLAnchorElement): void {
      inview && inview.is(aElement) && request(aElement);
    })
}

function handleOneRes(res: Response$): void {
  let responseText: string = res.responseText.replace(/(src=[^>]*|link=[^>])/g, '');
  let html: HTMLHtmlElement = document.createElement('html');
  html.innerHTML = responseText;
  Observable.of(html.querySelectorAll('.f>a'))
    .map((nodeList)=> [].slice.call(nodeList).map(function (ele) {
      let local = [].slice.call(document.querySelectorAll('.t>a')).find((remoteEle: HTMLAnchorElement)=>getText(remoteEle) === getText(ele));
      return local ? {local, remote: ele} : void 0;
    }).filter(v=>!!v))
    .subscribe(function (items: Items$[]): void {
      items.filter(item=>!REDIRECT_REG.test(item.remote.href))
        .forEach(function (item) {
          item.local.href = item.remote.href;
          item.local.setAttribute(STATUS.done, '1');
          DEBUG && (item.local.style.backgroundColor = 'red');
        })
    });
}

function requestAll(): void {
  let skipArray: any[] = location.search.match(/pn=(\d+)/) || [''];
  let skip: number = skipArray.length === 2 ? +skipArray[1] : 0;
  const href: string = window.top.location.href;
  if (!/www\.baidu\.com\/s/.test(href)) return;
  let url: string = href.replace(/(\&)(tn=\w+)(\&)/img, '$1' + 'tn=baidulocal' + '$3') + `&timestamp=${new Date().getTime()}`;
  if (url.indexOf('tn=baidulocal') === -1) url += '&tn=baidulocal';
  Observable.forkJoin(
    http.get(url),
    http.get(url.replace(/pn=(\d+)/, `pn=${skip + 10}`))
  ).retry(2)
    .timeout(TIMEOUT)
    .subscribe(function (resList: Response$[]): void {
      if (!resList || !resList.length) return;
      resList.forEach(res=>handleOneRes(res));
    });
}

Observable.fromEvent(document, 'mousemove')
  .throttle(()=>Observable.timer(100))
  .map((event: any): HTMLAnchorElement=> {
    let target = event.toElement;
    return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
  })
  .filter((ele: HTMLAnchorElement)=>ele.nodeName === 'A')
  .subscribe(request);

Observable.fromEvent(window, 'scroll')
  .debounce(()=>Observable.timer(200))
  .subscribe(requestOneByOne);

Observable.fromEvent(document, 'DOMContentLoaded')
  .do(function () {
    inview = require('in-view');
    inview('#content_left a').on('enter', request);
  })
  .do(requestAll)
  .flatMap((): Observable<void>=> {
    return Observable.create(function (observer) {
      new MutationObserver(function (mutations = []) {
        if (!mutations.length) return;
        observer.next();
      }).observe(document.body, {childList: true})
    }).debounce(()=>Observable.timer(500));
  })
  .subscribe(function (): void {
    requestAll();
    requestOneByOne();
  });