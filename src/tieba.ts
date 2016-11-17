import {Observable} from 'rxjs/Observable';
import {RedirectOnUrl} from './redirect-on-url';

class BaiduTiebaRedirect extends RedirectOnUrl {
  constructor(domainTester: RegExp, urlTester: RegExp, matcher?: RegExp) {
    super(domainTester, urlTester, matcher);
  }

  handlerOneEle(aEle: HTMLAnchorElement) {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement)=> {
        return this.urlTester.test(ele.href);
      })
      .subscribe((aEle: HTMLAnchorElement)=> {
        let url: string = '';
        let text = aEle.innerText || aEle.textContent;
        try {
          url = decodeURIComponent(aEle.innerText || aEle.textContent);
        } catch (e) {
          url = /https?:\/\//.test(text) ? text : '';
        }
        if (url) {
          aEle.href = url;
          this.DEBUG && (aEle.style.backgroundColor = 'green');
        }
      })
  }

}

export default new BaiduTiebaRedirect(
  /tieba\.baidu\.com/,
  /jump\.bdimg\.com/,
  null,
)