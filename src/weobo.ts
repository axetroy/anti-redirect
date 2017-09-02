import { Provider } from './provider';

export class WeboProvider extends Provider {
  test = /t\.cn\/\w+/;
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
