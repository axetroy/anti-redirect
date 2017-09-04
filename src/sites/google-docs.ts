import { Provider } from '../provider';
import { antiRedirect } from '../utils';

export class GoogleDocsProvider extends Provider {
  test = /www\.google\.com\/url\?q=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    const isSuccess = antiRedirect(aElement, this.test);
    isSuccess && this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
  }
}
