import { Provider } from '../provider';
export class TiebaProvider extends Provider {
  test = /jump\d*\.bdimg\.com/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      this.onHover(aElement);
    });
  }
  onHover(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href)) return;
    let url: string = '';
    let text: string = aElement.innerText || aElement.textContent || '';
    try {
      url = decodeURIComponent(text);
    } catch (e) {
      url = /https?:\/\//.test(text) ? text : '';
    }
    if (url) {
      this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement, url);
    }
  }
}
