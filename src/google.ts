import { Provider } from './provider';
export class GoogleProvider extends Provider {
  test = /nothing/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    if (aElement.getAttribute('onmousedown')) {
      aElement.removeAttribute('onmousedown');
    }
    if (aElement.getAttribute('data-href')) {
      aElement.href = aElement.getAttribute('data-href');
      this.config.debug && (aElement.style.backgroundColor = 'green');
    }
  }
}
