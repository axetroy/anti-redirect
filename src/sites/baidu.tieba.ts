import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";
export class TiebaProvider implements IProvider {
  public test = /jump\d*\.bdimg\.com/;
  public resolve(aElement: HTMLAnchorElement) {
    if (!this.test.test(aElement.href)) {
      return;
    }
    let url: string = "";
    const text: string = aElement.innerText || aElement.textContent || "";
    try {
      url = decodeURIComponent(text);
    } catch (e) {
      url = /https?:\/\//.test(text) ? text : "";
    }
    if (url) {
      antiRedirect(aElement, url);
    }
  }
}
