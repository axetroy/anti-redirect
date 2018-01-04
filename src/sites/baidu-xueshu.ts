import { Provider } from '../provider';

export class BaiduXueshuProvider extends Provider {
  test = /xueshu\.baidu\.com\/\?(.*)/; // 此处无用
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    const realLink = aElement.getAttribute('data-link');
    if (realLink) {
      this.emit(
        this.ANTI_REDIRECT_DONE_EVENT,
        aElement,
        decodeURIComponent(realLink)
      );
    }
  }
}
