import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class ZhihuZhuanlanProvider implements IProvider {
  public test = /link\.zhihu\.com\/\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
