import {RedirectOnUrl} from '../lib/redirect-on-url';

class SoRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }
}

export default new SoRedirect(
  /www\.so\.com/,
  /so\.com\/link\?url=/,
  /so\.com\/link\?url=(.*)/
)