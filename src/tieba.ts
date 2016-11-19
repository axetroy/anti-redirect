import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {RedirectOnUrl} from '../lib/redirect-on-url';

class BaiduTiebaRedirect extends RedirectOnUrl {
  constructor(domainTester: RegExp, urlTester: RegExp, matcher?: RegExp) {
    super(domainTester, urlTester, matcher);
  }

  handlerOne(aEle: HTMLAnchorElement): Subscription {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement): boolean=> this.urlTester.test(ele.href))
      .subscribe((aEle: HTMLAnchorElement)=> {
        let url: string = '';
        let text: string = aEle.innerText || aEle.textContent || '';
        try {
          url = decodeURIComponent(text);
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