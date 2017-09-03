import { Provider } from '../provider';
export class TiebaProvider extends Provider {
  test = /jump\d*\.bdimg\.com/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
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
      aElement.href = url;
      this.config.debug && (aElement.style.backgroundColor = 'green');
    }
  }
}
