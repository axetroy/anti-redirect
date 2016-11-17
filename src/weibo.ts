import {Observable} from 'rxjs/Observable';
import {RedirectOnUrl} from './redirect-on-url';

class WeiboRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }

  handlerOneEle(aEle: HTMLAnchorElement): Observable<any> {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement)=> {
        return this.urlTester.test(ele.href) && /^https?:\/\//.test(ele.title);
      })
      .do((aEle: HTMLAnchorElement)=> {
        let url: string = decodeURIComponent(aEle.title);
        if (url) {
          aEle.href = url;
          this.DEBUG && (aEle.style.backgroundColor = 'green');
        }
      })
  }

}

export default new WeiboRedirect(
  /weibo\.com/,
  /t\.cn\/\w+/,
  null
)