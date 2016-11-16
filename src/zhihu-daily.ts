import {RedirectOnUrl} from './redirect-on-url';

class ZhihuDailyRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
  log() {
    console.log('bootstrap zhihu daily');
  }
}

export default new ZhihuDailyRedirect(
  /daily\.zhihu\.com/,
  /zhihu\.com\/\?target=/,
  /zhihu\.com\/\?target=(.*)/
)