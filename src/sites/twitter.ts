import { Provider } from '../provider';

export class TwitterProvider extends Provider {
  test = /t\.co\/\w+/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href) || !/^https?:\/\//.test(aElement.title))
      return;

    const url: string = decodeURIComponent(aElement.title);

    if (url) {
      aElement.href = url;
      this.config.debug && (aElement.style.backgroundColor = 'green');
    }
  }
}
