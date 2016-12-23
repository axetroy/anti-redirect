import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {http, Response$, timeout} from '../lib/http';
import Query from '../lib/query';
import {RedirectOnRequest} from '../lib/redirect-on-request';

interface Items$ {
  local: HTMLAnchorElement,
  remote: HTMLAnchorElement
}

function getText(htmlElement: HTMLElement): string {
  return (htmlElement.innerText || htmlElement.textContent).trim();
}

class BaiduRedirect extends RedirectOnRequest {
  constructor(domainTester, urlTester, matcher, ASelector = 'a') {
    super(domainTester, urlTester, matcher, ASelector);
  }

  public handlerOneResponse(res) {
    if (this.urlTester.test(res.finalUrl)) {
      if (!res.response || /<\/noscript>$/.test(res.response.trim())) throw res;
      let url = res.response.match(/URL=\'?https?:\/\/[^'"]+/).join('').match(/https?:\/\/[^'"]+/)[0];
      if (!url || !/^https?/.test(url) || this.urlTester.test(url)) throw res;
      res.finalUrl = url;
    }
    return res;
  }

  public onInit(): Subscription {
    if (!/www\.baidu\.com\/s/.test(window.top.location.href)) return;
    const query = new Query(window.top.location.search);
    const skip = query.object.pn || 0;

    query.object.tn = 'baidulocal';
    query.object.timestamp = new Date().getTime();
    query.object.rn = 50;

    const url: string = `${location.protocol.replace(/:$/, '')}://${location.host + location.pathname + query}`;

    return Observable.forkJoin(
      http.get(url),
      http.get(url.replace(/pn=(\d+)/, `pn=${skip + 10}`))
    ).retry(2)
      .timeout(timeout)
      .subscribe((resList: Response$[]): void => {
        if (!resList || !resList.length) return;
        resList.forEach(res=> {
          return this.handlerOneRequestPage(res);
        });
      });
  }

  private handlerOneRequestPage(res: Response$): void {
    let responseText: string = res.responseText.replace(/(src=[^>]*|link=[^>])/g, '');
    let html: HTMLHtmlElement = document.createElement('html');
    html.innerHTML = responseText;
    Observable.of(html.querySelectorAll('.f>a'))
      .map((nodeList)=> [].slice.call(nodeList).map((ele: HTMLAnchorElement)=> {
        let local = [].slice.call(document.querySelectorAll('.t>a')).find((remoteEle: HTMLAnchorElement)=>getText(remoteEle) === getText(ele));
        return local ? {local, remote: ele} : void 0;
      })
        .filter(v=>!!v))
      .subscribe((items: Items$[]): void => {
        items
          .filter(item=> !this.urlTester.test(item.remote.href))
          .forEach((item)=> {
            this.urlTester.test(item.local.href) && item.local.setAttribute('origin-href', item.local.href);
            item.local.href = item.remote.href;
            item.local.setAttribute(this.status.done, '1');
            this.DEBUG && (item.local.style.backgroundColor = 'red');
          })
      });
  }

}

export default new BaiduRedirect(
  /www\.baidu\.com/,
  /www\.baidu\.com\/link\?url=/,
  null,
  '#content_left a'
);