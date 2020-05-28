import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class GoogleProvider implements IProvider {
  public test = true;
  public resolve(aElement: HTMLAnchorElement) {
    // 移除多余的事件
    if (aElement.getAttribute("onmousedown")) {
      aElement.removeAttribute("onmousedown");
    }
    if (aElement.getAttribute("data-href")) {
      const realUrl: string = aElement.getAttribute("data-href");
      antiRedirect(aElement, realUrl);
    }
  }
}
