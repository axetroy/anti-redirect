import { IProvider } from "@/provider";
import { antiRedirect, matchLinkFromUrl } from "@/utils";

export class MozillaProvider implements IProvider {
  public test = /outgoing\.prod\.mozaws\.net\/v\d\/\w+\/(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));
  }
}
