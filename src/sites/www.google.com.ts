import { IProvider } from "@/provider";
import { antiRedirect } from "../utils";

export class GoogleProvider implements IProvider {
  public test = true;
  public resolve(aElement: HTMLAnchorElement) {
    const traceProperties = ["ping", "data-jsarwt", "data-usg", "data-ved"];

    // 移除追踪
    for (const property of traceProperties) {
      if (aElement.getAttribute(property)) {
        aElement.removeAttribute(property);
      }
    }

    // 移除多余的事件
    if (aElement.getAttribute("onmousedown")) {
      aElement.removeAttribute("onmousedown");
    }

    // 尝试去除重定向
    if (aElement.getAttribute("data-href")) {
      const realUrl: string = aElement.getAttribute("data-href");
      antiRedirect(aElement, realUrl);
    }

    const url = new URL(aElement.href);

    if (url.searchParams.get("url")) {
      antiRedirect(aElement, url.searchParams.get("url"));
    }
  }
}
