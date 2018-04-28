import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class GoogleDocsProvider implements IProvider {
  public test = /www\.google\.com\/url\?q=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
