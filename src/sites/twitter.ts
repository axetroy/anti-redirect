import { Provider } from '../provider';

export class TwitterProvider extends Provider {
  test = /t\.co\/\w+/;
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
      this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement, url);
    }
  }
}
