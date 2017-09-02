import http from 'gm-http';
import { Provider } from './provider';
import {
  queryParser,
  throttleDecorator,
  getRedirect,
  increaseRedirect,
  decreaseRedirect
} from './utils';

export class BaiduProvider extends Provider {
  test = /www\.baidu\.com\/link\?url=/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {
    aElementList.forEach((aElement: HTMLAnchorElement) => {
      if (getRedirect(aElement) <= 2 && this.test.test(aElement.href)) {
        increaseRedirect(aElement);
        this.handlerOneElement(aElement)
          .then(res => {
            decreaseRedirect(aElement);
          })
          .catch(err => {
            console.error(err);
            decreaseRedirect(aElement);
          });
      }
    });
  }

  async handlerOneElement(aElement: HTMLAnchorElement): Promise<any> {
    const res: Response$ = await http.get(aElement.href);
    if (res.finalUrl) {
      aElement.href = res.finalUrl;
      this.config.debug && (aElement.style.backgroundColor = 'green');
    }
    return res;
  }

  @throttleDecorator(500)
  onHover(aElement: HTMLAnchorElement, callback?: Function) {
    if (!this.test.test(aElement.href)) return;
    this.handlerOneElement(aElement).catch(err => {
      console.error(err);
    });
  }

  // private parsePage(res: Response$): void {}

  onInit() {
    // if (!/www\.baidu\.com\/s/.test(window.top.location.href)) return;
    // const query = queryParser(window.top.location.search);
    // const skip = query.object.pn || 0;
    //
    // query.object.tn = 'baidulocal';
    // query.object.timestamp = new Date().getTime();
    // query.object.rn = 50;
    //
    // const url: string = `${location.protocol.replace(
    //   /:$/,
    //   ''
    // )}://${location.host + location.pathname + query}`;
    //
    // Promise.all([
    //   http.get(url),
    //   http.get(url.replace(/pn=(\d+)/, `pn=${skip + 10}`))
    // ])
    //   .then((resList: Response$[]) => {
    //     if (!resList || !resList.length) return;
    //     resList.forEach(res => {
    //       return this.parsePage(res);
    //     });
    //   })
    //   .catch(err => {
    //     console.error(err);
    //   });

    return this;
  }
}
