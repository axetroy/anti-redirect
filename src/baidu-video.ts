import {RedirectOnRequest} from '../lib/redirect-on-request';
import {Response$} from '../lib/http';

class BaiduVideoRedirect extends RedirectOnRequest {
  constructor(domainTester, urlTester, matcher, ASelector = 'a') {
    super(domainTester, urlTester, matcher, ASelector);
  }

  handlerOneResponse(res: Response$) {
    let url: string[] = res.response.match(/URL='(.*)'/);
    if (url.length && url[1]) {
      res.finalUrl = url[1];
    }
    return res;
  }
}

export default new BaiduVideoRedirect(
  /v.baidu\.com/,
  /v\.baidu\.com\/link\?url=/,
  null
)