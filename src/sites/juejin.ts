import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class JuejinProvider implements IProvider {
  public test = /link\.juejin\.im\/\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
