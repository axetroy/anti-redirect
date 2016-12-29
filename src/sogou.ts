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

class SogouRedirect extends RedirectOnRequest {
  constructor(domainTester, urlTester, matcher, ASelector = 'a') {
    super(domainTester, urlTester, matcher, ASelector);
  }

  public handlerOneResponse(res) {
    if (this.urlTester.test(res.finalUrl)) {
      let url = res.response.match(/URL=\'?https?:\/\/[^'"]+/).join('').match(/https?:\/\/[^'"]+/)[0];
      if (!url || !/^https?/.test(url) || this.urlTester.test(url)) throw res;
      res.finalUrl = url;
    }
    return res;
  }

  public onInit(): Subscription {
    if (!/www\.sogou\.com\/web/.test(window.top.location.href)) return;
    const query = new Query(window.top.location.search);

    // 搜索使用http搜索，得到的是直接链接
    const url: string = `${location.protocol.replace(/:$/, '').replace('s', '')}://${location.host + location.pathname + query}`;

    return Observable.forkJoin(
      http.get(url)
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

    // let selector = '#main .results div.vrwrap>h3';
    // let selector = '#main .results h3>a';
    let selector = '#main .results a[href*="www.sogou.com/link?url="]';
    let remotes = [].slice.call(html.querySelectorAll('#main .results a[href]'));
    let locals = [].slice.call(document.querySelectorAll(selector));

    locals.forEach((localEle) => {
      remotes.forEach((remoteEle) => {
        let localText = getText(localEle);
        let remoteText = getText(remoteEle);

        // 通用按钮，例如【点击下载】
        if (localEle.classList.contains('str-public-btn')) {
          localText = getText(localEle.parentNode);
          remoteText = getText(remoteEle.parentNode);
        }
        // 图片
        else if (localEle.classList.contains('str_img')) {
          localText = getText(localEle.parentNode.parentNode);
          remoteText = getText(remoteEle.parentNode.parentNode);
        }

        if (!localText || localText !== remoteText) return;

        this.urlTester.test(localEle.href) && localEle.setAttribute('origin-href', localEle.href);
        localEle.href = remoteEle.href;
        this.DEBUG && (localEle.style.backgroundColor = 'red');

      });
    });
  }

}

export default new SogouRedirect(
  /www\.sogou\.com/,
  /www\.sogou\.com\/link\?url=/,
  null,
  '#content_left a'
);