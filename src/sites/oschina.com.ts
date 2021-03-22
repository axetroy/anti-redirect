import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class OSChinaProvider implements IProvider {
  public test = /oschina\.net\/action\/GoToLink\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));
  }
}
