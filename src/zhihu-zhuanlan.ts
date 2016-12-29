import {RedirectOnUrl} from '../lib/redirect-on-url';

class ZhihuZhuanlanRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
}

export default new ZhihuZhuanlanRedirect(
  /zhuanlan\.zhihu\.com/,
  /link\.zhihu\.com\/\?target=/,
  /link\.zhihu\.com\/\?target=(.*)/
)