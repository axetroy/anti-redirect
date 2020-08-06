import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class GoogleDocsProvider implements IProvider {
  public test = /www\.google\.com\/url\?q=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("q"));
  }
}
