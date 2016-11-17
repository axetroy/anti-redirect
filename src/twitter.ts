import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {RedirectOnUrl} from './redirect-on-url';

class TwitterRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }

  handlerOneEle(aEle: HTMLAnchorElement):Subscription {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement)=> {
        return this.urlTester.test(ele.href) && /^https?:\/\//.test(ele.title);
      })
      .subscribe((aEle: HTMLAnchorElement)=> {
        let url: string = decodeURIComponent(aEle.title);
        if (url) {
          aEle.href = url;
          this.DEBUG && (aEle.style.backgroundColor = 'green');
        }
      })
  }

}

export default new TwitterRedirect(
  /twitter\.com/,
  /t\.co\/\w+/,
  null
)