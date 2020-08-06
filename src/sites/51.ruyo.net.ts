import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class RuyoProvider implements IProvider {
  public test = /\/[^\?]*\?u=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("u"));
  }
}
