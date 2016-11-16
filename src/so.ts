import {RedirectOnUrl} from './redirect-on-url';

class SoRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
  log() {
    console.log('bootstrap 360 so');
  }
}

export default new SoRedirect(
  /www\.so\.com/,
  /so\.com\/link\?url=/,
  /so\.com\/link\?url=(.*)/
)