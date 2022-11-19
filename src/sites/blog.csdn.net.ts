import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class CSDNProvider implements IProvider {
  public test = /^https?:\/\//;
  private container: HTMLElement;
  public resolve(aElement: HTMLAnchorElement) {
    this.container = document.querySelector("#content_views");
    if (this.container?.contains(aElement)) {
      if (!aElement.onclick && aElement.origin !== window.location.origin) {
        antiRedirect(aElement, aElement.href, { force: true });
        aElement.onclick = (e) => {
          // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
          if (e.stopPropagation) {
            e.stopPropagation();
          }

          aElement.setAttribute("target", "_blank");
        };
      }
    }
  }
}
