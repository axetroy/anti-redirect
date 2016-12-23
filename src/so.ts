import {RedirectOnUrl} from '../lib/redirect-on-url';

class SoRedirect extends RedirectOnUrl {
  constructor(domainTester, urlTester, matcher) {
    super(domainTester, urlTester, matcher);
  }

  public handlerOneCallBack(aEle: HTMLAnchorElement): void {
    aEle.removeAttribute('data-res');   // 去除点击追踪
    aEle.href = aEle.href.replace(/\&(q|t|ts|src)=[^\&]*/g, '');
  }

}

export default new SoRedirect(
  /www\.so\.com/,
  /so\.com\/link\?url=/,
  /so\.com\/link\?url=(.*)/
)