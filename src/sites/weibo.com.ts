import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class WeboProvider implements IProvider {
  public test = /t\.cn\/\w+/;
  public resolve(aElement: HTMLAnchorElement) {
    if (!(this.test.test(aElement.href) && /^https?:\/\//.test(aElement.title))) {
      return;
    }

    const url: string = decodeURIComponent(aElement.title);

    if (url) {
      aElement.href = url;
      antiRedirect(aElement, url);
    }
  }
}
