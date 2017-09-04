import { Provider } from '../provider';
import { antiRedirect } from '../utils';

export class ZhihuProvider extends Provider {
  test = /zhihu\.com\/\?target=(.*)/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    const isSuccess: boolean = antiRedirect(aElement, this.test);
    isSuccess && this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
  }
}
