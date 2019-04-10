import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class SoProvider implements IProvider {
  public test = /so\.com\/link\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));

    const dataUrl: string = aElement.getAttribute("data-url");
    if (dataUrl) {
      aElement.href = dataUrl;
    }
  }
}
