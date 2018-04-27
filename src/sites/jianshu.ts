import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class JianShuProvider implements IProvider {
  public test = /link\.jianshu\.com\/\?t=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
