import {Observable} from 'rxjs';
import Http from './src/http';

let inview;
const TIMEOUT = 2000;
const debug = false;
const http = new Http({
  timeout: TIMEOUT
});

const STATUS = {
  ing: 'redirect-ing',
  done: 'redirect-done'
};

function request(aElement) {
  if (!/baidu\.com\/link\?url=/.test(aElement.href) || aElement.getAttribute(STATUS.ing) || aElement.getAttribute(STATUS.done)) return;
  aElement.setAttribute(STATUS.ing, 1);
  let url = aElement.href.replace(/^https?/, 'https');
  url += `&timestamp=${new Date().getTime()}`;
  Observable.fromPromise(http.head(url))
    .retry(2)
    .timeout(TIMEOUT)
    .subscribe(function (res) {
      aElement.href = res.finalUrl;
      aElement.removeAttribute(STATUS.ing);
      aElement.setAttribute(STATUS.done, 1);
      debug && (aElement.style.backgroundColor = 'green');
    }, function () {
      aElement.removeAttribute(STATUS.ing);
    }, function () {
      aElement.removeAttribute(STATUS.ing);
    });
}

function requestOneByOne() {
  Observable.from([].slice.call(document.querySelectorAll('#content_left a')))
    .subscribe(function (aElement) {
      inview && inview.is(aElement) && request(aElement);
    })
}

function handleOneRes(res) {
  let responseText = res.responseText;

  // remove the image/script/css resource
  responseText = responseText.replace(/(src=[^>]*|link=[^>])/g, '');

  let html = document.createElement('html');
  html.innerHTML = responseText;

  Observable.of(html.querySelectorAll('.f>a'))
    .timeout(100)
    .map(nodeList=> [].slice.call(nodeList).map(function (ele) {
      let local = [].slice.call(document.querySelectorAll('.t>a')).find(remoteEle=>(remoteEle.innerText || remoteEle.textContent) === (ele.innerText || ele.textContent));
      return local ? {local, remote: ele} : void 0;
    }).filter(v=>!!v))
    .subscribe(function (items) {
      items.forEach(function (item) {
        item.local.href = item.remote.href;
        item.local.setAttribute(STATUS.done, 1);
        debug && (item.local.style.backgroundColor = 'red');
      })
    });
}

function requestAll() {
  let skipArray: any[] = location.search.match(/pn=(\d+)/) || [''];
  let skip: number = skipArray.length === 2 ? +skipArray[1] : 0;
  let url = window.top.location.href.replace(/(\&)(tn=\w+)(\&)/img, '$1' + 'tn=baidulocal' + '$3');
  url += `&timestamp=${new Date().getTime()}`;
  Observable.forkJoin(
    Observable.fromPromise(http.get(url)),
    Observable.fromPromise(http.get(url.replace(/pn=(\d+)/, `pn=${skip + 10}`)))
  ).retry(2)
    .timeout(TIMEOUT)
    .subscribe(function (resList) {
      if (!resList || !resList.length) return;
      resList.forEach(function (res) {
        handleOneRes(res);
      })
    });
}

Observable.fromEvent(document, 'mousemove')
  .throttle(()=>Observable.timer(100))
  .map((event: any)=> {
    let target = event.toElement;
    return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
  })
  .filter(ele=>ele.nodeName === 'A')
  .subscribe(request);

Observable.fromEvent(window, 'scroll')
  .debounce(()=>Observable.timer(300))
  .subscribe(requestOneByOne);

Observable.fromEvent(document, 'DOMContentLoaded')
  .do(function () {
    inview = require('in-view');
    inview('#content_left a')
      .on('enter', function (aElement) {
        request(aElement);
      });
  })
  .do(requestAll)
  .flatMap(()=> {
    return Observable.create(function (observer) {
      new MutationObserver(function (mutations = []) {
        if (!mutations.length) return;
        observer.next();
      }).observe(document.body, {childList: true})
    }).debounce(()=>Observable.timer(500));
  })
  .subscribe(function () {
    requestAll();
    requestOneByOne();
  });