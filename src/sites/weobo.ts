import { Provider } from '../provider';

export class WeboProvider extends Provider {
  test = /t\.cn\/\w+/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href) || !/^https?:\/\//.test(aElement.title))
      return;

    const url: string = decodeURIComponent(aElement.title);

    if (url) {
      aElement.href = url;
      this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
    }
  }
}
