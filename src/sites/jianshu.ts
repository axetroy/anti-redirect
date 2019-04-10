import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class JianShuProvider implements IProvider {
  public test = /link\.jianshu\.com\/\?t=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("t"));
  }
}
