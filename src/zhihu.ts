import {RedirectOnUrl} from './redirect-on-url';

class ZhihuRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
  log() {
    console.log('bootstrap zhihu');
  }
}

export default new ZhihuRedirect(
  /www\.zhihu\.com/,
  /zhihu\.com\/\?target=/,
  /zhihu\.com\/\?target=(.*)/
)