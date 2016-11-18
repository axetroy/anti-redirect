import {RedirectOnUrl} from '../lib/redirect-on-url';

class ZhihuDailyRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
}

export default new ZhihuDailyRedirect(
  /daily\.zhihu\.com/,
  /zhihu\.com\/\?target=/,
  /zhihu\.com\/\?target=(.*)/
)