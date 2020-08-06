import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class YoutubeProvider implements IProvider {
  public test = /www\.youtube\.com\/redirect\?.{1,}/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("q"));
  }
}
