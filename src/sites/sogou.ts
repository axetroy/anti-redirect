import http from 'gm-http';
import { Provider } from '../provider';
import { queryParser, getText, throttleDecorator } from '../utils';

export class SoGouProvider extends Provider {
  test = /www\.sogou\.com\/link\?url=/;
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  @throttleDecorator(500)
  onHover(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href)) return;
    http
      .get(aElement.href)
      .then((res: Response$) => {
        if (res.finalUrl) {
          aElement.href = res.finalUrl;
          this.config.debug && (aElement.style.backgroundColor = 'green');
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
  private parsePage(res: Response$): void {
    let responseText: string = res.responseText.replace(
      /(src=[^>]*|link=[^>])/g,
      ''
    );
    let html: HTMLHtmlElement = document.createElement('html');
    html.innerHTML = responseText;

    // let selector = '#main .results div.vrwrap>h3';
    // let selector = '#main .results h3>a';
    let selector = '#main .results a[href*="www.sogou.com/link?url="]';
    let remotes = [].slice.call(
      html.querySelectorAll('#main .results a[href]')
    );
    let locals = [].slice.call(document.querySelectorAll(selector));

    locals.forEach(localEle => {
      remotes.forEach(remoteEle => {
        let localText = getText(localEle);
        let remoteText = getText(remoteEle);

        // 通用按钮，例如【点击下载】
        if (localEle.classList.contains('str-public-btn')) {
          localText = getText(localEle.parentNode);
          remoteText = getText(remoteEle.parentNode);
        } else if (localEle.classList.contains('str_img')) {
          // 图片
          localText = getText(localEle.parentNode.parentNode);
          remoteText = getText(remoteEle.parentNode.parentNode);
        }

        if (!localText || localText !== remoteText) return;

        this.test.test(localEle.href) &&
          localEle.setAttribute('origin-href', localEle.href);
        localEle.href = remoteEle.href;
        this.config.debug && (localEle.style.backgroundColor = 'red');
      });
    });
  }
  onInit() {
    if (!/www\.sogou\.com\/web/.test(window.top.location.href)) return;
    const query = queryParser(window.top.location.search);

    // 搜索使用http搜索，得到的是直接链接
    const url: string = `${location.protocol
      .replace(/:$/, '')
      .replace('s', '')}://${location.host + location.pathname + query}`;

    http
      .get(url)
      .then((res: Response$) => {
        this.parsePage(res);
      })
      .catch(err => {
        console.error(err);
      });
    return this;
  }
}
