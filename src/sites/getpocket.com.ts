import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class PocketProvider implements IProvider {
  public test = /getpocket\.com\/redirect\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));
  }
}
