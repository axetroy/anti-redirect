import { Provider } from '../provider';
import { antiRedirect } from '../utils';

export class SoProvider extends Provider {
  test = /so\.com\/link\?url=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, this.test, this.config.debug);
    aElement.removeAttribute('data-res'); // 去除点击追踪
    aElement.href = aElement.href.replace(/\&(q|t|ts|src)=[^\&]*/g, '');
    const dataUrl: string = aElement.getAttribute('data-url');
    if (dataUrl) {
      aElement.setAttribute('origin-href', aElement.href);
      aElement.href = dataUrl;
      this.config.debug && (aElement.style.backgroundColor = 'green');
    }
  }
}
