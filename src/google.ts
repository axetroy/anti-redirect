import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {CONFIG} from './config';
const DEBUG = CONFIG.debug;

import {RedirectOnUrl} from './redirect-on-url';

class GoogleRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }

  handlerOneEle(aEle: HTMLAnchorElement): Subscription {
    return Observable.of(aEle)
      .subscribe(function (aEle: HTMLAnchorElement) {
        if (aEle.getAttribute('onmousedown')) {
          aEle.removeAttribute('onmousedown');
          DEBUG && (aEle.style.backgroundColor = 'green');
        }
        if (aEle.getAttribute('data-href')) {
          aEle.href = aEle.getAttribute('data-href');
          DEBUG && (aEle.style.backgroundColor = 'green');
        }
      });
  }

}

export default new GoogleRedirect(
  /www\.google\./,
  null,
  null
)