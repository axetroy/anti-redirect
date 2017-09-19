import http from 'gm-http';
import { Provider } from '../provider';
import { throttleDecorator } from '../utils';

export class BaiduVideoProvider extends Provider {
  test = /v\.baidu\.com\/link\?url=/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  @throttleDecorator(500)
  onHover(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href)) return;
    http
      .get(aElement.href)
      .then((res: Response$) => {
        if (res.finalUrl) {
          this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement, res.finalUrl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}
