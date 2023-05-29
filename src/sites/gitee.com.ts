import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class GiteeProvider implements IProvider {
  public test = /gitee\.com\/link\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
