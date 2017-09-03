import { Provider } from '../provider';
import { antiRedirect } from '../utils';

export class ZhihuProvider extends Provider {
  test = /zhihu\.com\/\?target=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, this.test, this.config.debug);
  }
}
