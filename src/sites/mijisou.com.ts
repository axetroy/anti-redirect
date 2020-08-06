import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class MiJiProvider implements IProvider {
  public test = /mijisou\.com\/url_proxy\?proxyurl=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("proxyurl"));
  }
}
