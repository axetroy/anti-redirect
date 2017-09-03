import { Provider } from '../provider';
import { antiRedirect } from '../utils';

export class GoogleDocsProvider extends Provider {
  test = /www\.google\.com\/url\?q=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, this.test, this.config.debug);
  }
}
