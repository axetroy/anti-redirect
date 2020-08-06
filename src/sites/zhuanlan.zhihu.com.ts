import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class ZhihuZhuanlanProvider implements IProvider {
  public test = /link\.zhihu\.com\/\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
