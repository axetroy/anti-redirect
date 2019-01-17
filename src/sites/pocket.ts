import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class PocketProvider implements IProvider {
  public test = /getpocket\.com\/redirect\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
