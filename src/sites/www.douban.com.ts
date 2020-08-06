import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class DouBanProvider implements IProvider {
  public test = /douban\.com\/link2\/?\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));
  }
}
