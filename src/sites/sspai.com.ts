import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class SSPaiProvider implements IProvider {
  public test = /sspai\.com\/link\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
