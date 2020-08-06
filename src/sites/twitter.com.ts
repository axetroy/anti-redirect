import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class TwitterProvider implements IProvider {
  public test = /t\.co\/\w+/;
  public resolve(aElement: HTMLAnchorElement) {
    if (
      !this.test.test(aElement.href) ||
      !/^https?:\/\//.test(aElement.title)
    ) {
      return;
    }

    const url: string = decodeURIComponent(aElement.title);

    if (url) {
      antiRedirect(aElement, url);
    }
  }
}
