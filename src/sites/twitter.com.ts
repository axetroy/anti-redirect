import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class TwitterProvider implements IProvider {
  public test = /t\.co\/\w+/;
  public resolve(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href)) {
      return;
    }

    if (/https?:\/\//.test(aElement.title)) {
      const url: string = decodeURIComponent(aElement.title);

      antiRedirect(aElement, url);
      return;
    }

    const innerText = aElement.innerText.replace(/…$/, "");

    if (/https?:\/\//.test(innerText)) {
      antiRedirect(aElement, innerText);
      return;
    }
  }
}
