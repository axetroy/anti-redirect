import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class LogonewsProvider implements IProvider {
  public test = /link\.logonews\.cn\/\?url=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("url"));
  }
}
