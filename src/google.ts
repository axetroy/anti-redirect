import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';

import {RedirectOnUrl} from '../lib/redirect-on-url';

class GoogleRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }

  handlerOne(aEle: HTMLAnchorElement): Subscription {
    return Observable.of(aEle)
      .subscribe((aEle: HTMLAnchorElement) => {
        if (aEle.getAttribute('onmousedown')) {
          aEle.removeAttribute('onmousedown');
          this.DEBUG && (aEle.style.backgroundColor = 'green');
        }
        if (aEle.getAttribute('data-href')) {
          aEle.href = aEle.getAttribute('data-href');
          this.DEBUG && (aEle.style.backgroundColor = 'green');
        }
      });
  }

}

export default new GoogleRedirect(
  /www\.google\./,
  null,
  null
)