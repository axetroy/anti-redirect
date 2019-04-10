import { IProvider } from "../provider";
import { antiRedirect, matchLinkFromUrl } from "../utils";
export class GooglePlayProvider implements IProvider {
  public test = /google\.com\/url\?q=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("q"));
  }
}
