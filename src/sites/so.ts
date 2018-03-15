import { Provider } from '../provider';
import { matchLinkFromUrl } from '../utils';

export class SoProvider extends Provider {
  test = /so\.com\/link\?url=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    this.emit(
      this.ANTI_REDIRECT_DONE_EVENT,
      aElement,
      matchLinkFromUrl(aElement, this.test)
    );

    const dataUrl: string = aElement.getAttribute('data-url');
    if (dataUrl) {
      aElement.href = dataUrl;
    }
  }
}
