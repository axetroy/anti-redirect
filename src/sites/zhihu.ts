import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class ZhihuProvider implements IProvider {
  public test = /zhihu\.com\/\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
