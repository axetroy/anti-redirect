import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class AfDianNetProvider implements IProvider {
  public test = /afdian\.net\/link\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
