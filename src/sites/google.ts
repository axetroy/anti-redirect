import { Provider } from '../provider';
export class GoogleProvider extends Provider {
  test = /nothing/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    if (aElement.getAttribute('onmousedown')) {
      aElement.removeAttribute('onmousedown');
    }
    if (aElement.getAttribute('data-href')) {
      aElement.href = aElement.getAttribute('data-href');
      this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
    }
  }
}
