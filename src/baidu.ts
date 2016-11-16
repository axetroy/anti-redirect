import {Observable} from 'rxjs/Observable';
import {http, Response$, timeout} from './http';
import {RedirectOnRequest} from './redirect-on-request';

interface Items$ {
  local: HTMLAnchorElement,
  remote: HTMLAnchorElement
}

function getText(htmlElement: HTMLElement): string {
  return htmlElement.innerText || htmlElement.textContent;
}

class BaiduRedirect extends RedirectOnRequest {
  constructor(domainTester, urlTester, matcher, ASelector = 'a') {
    super(domainTester, urlTester, matcher, ASelector);
  }

  handlerAll(): void {
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
      .timeout(timeout)
      .subscribe((resList: Response$[]): void => {
        if (!resList || !resList.length) return;
        resList.forEach(res=> {
          return this.handlerAllOne(res);
        });
      });
  }

  handlerAllOne(res: Response$): void {
    let responseText: string = res.responseText.replace(/(src=[^>]*|link=[^>])/g, '');
    let html: HTMLHtmlElement = document.createElement('html');
    html.innerHTML = responseText;
    Observable.of(html.querySelectorAll('.f>a'))
      .map((nodeList)=> [].slice.call(nodeList).map(function (ele) {
        let local = [].slice.call(document.querySelectorAll('.t>a')).find((remoteEle: HTMLAnchorElement)=>getText(remoteEle) === getText(ele));
        return local ? {local, remote: ele} : void 0;
      })
        .filter(v=>!!v))
      .subscribe((items: Items$[]): void => {
        items.filter(item=> {
          return !this.urlTester.test(item.remote.href);
        })
          .forEach((item)=> {
            item.local.href = item.remote.href;
            item.local.setAttribute(this.status.done, '1');
            this.DEBUG && (item.local.style.backgroundColor = 'red');
          })
      });
  }

  log(): void {
    console.log('bootstrap baidu');
  }

}

export default new BaiduRedirect(
  /www\.baidu\.com/,
  /www\.baidu\.com\/link\?url=/,
  null,
  '#content_left a'
);