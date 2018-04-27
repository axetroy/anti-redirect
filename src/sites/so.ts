import { IProvider } from "../provider";
import { matchLinkFromUrl, antiRedirect } from "../utils";

export class SoProvider implements IProvider {
  public test = /so\.com\/link\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, matchLinkFromUrl(aElement, this.test));

    const dataUrl: string = aElement.getAttribute("data-url");
    if (dataUrl) {
      aElement.href = dataUrl;
    }
  }
}
