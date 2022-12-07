import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class SteamProvider implements IProvider {
  public test = /steamcommunity\.com\/linkfilter\/\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));
  }
}
