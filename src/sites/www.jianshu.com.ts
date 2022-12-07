import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class JianShuProvider implements IProvider {
  public test = (aElement: HTMLAnchorElement) => {
    const isLink1 = /links\.jianshu\.com\/go/.test(aElement.href);
    const isLink2 = /link\.jianshu\.com(\/)?\?t=/.test(aElement.href);
    const isLink3 = /jianshu\.com\/go-wild\/?\?(.*)url=/.test(aElement.href);

    if (isLink1 || isLink2 || isLink3) {
      return true;
    }

    return false;
  };
  public resolve(aElement: HTMLAnchorElement) {
    const search = new URL(aElement.href).searchParams;
    antiRedirect(aElement, search.get("to") || search.get("t") || search.get("url"));
  }
}
