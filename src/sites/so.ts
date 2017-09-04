import { Provider } from '../provider';
import { antiRedirect, REDIRECT_ORIGIN_HREF } from '../utils';

export class SoProvider extends Provider {
  test = /so\.com\/link\?url=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    const isSuccess: boolean = antiRedirect(aElement, this.test);
    isSuccess && this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
    aElement.removeAttribute('data-res'); // 去除点击追踪
    aElement.href = aElement.href.replace(/\&(q|t|ts|src)=[^\&]*/g, '');
    const dataUrl: string = aElement.getAttribute('data-url');
    if (dataUrl) {
      aElement.setAttribute(REDIRECT_ORIGIN_HREF, aElement.href);
      aElement.href = dataUrl;
    }
  }
}
