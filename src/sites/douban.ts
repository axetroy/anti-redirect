import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class DouBanProvider implements IProvider {
  public test = /douban\.com\/link2\/?\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
