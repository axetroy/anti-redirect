import { Provider } from '../provider';
import { REDIRECT_ORIGIN_HREF } from '../utils';
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
      aElement.setAttribute(REDIRECT_ORIGIN_HREF, aElement.href);
      aElement.href = url;
      this.emit(this.ANTI_REDIRECT_DONE_EVENT, aElement);
    }
  }
}
