import { IProvider } from "@/provider";

export class CSDNProvider implements IProvider {
  public test = /^http:\/\//;
  private container: HTMLElement;
  public resolve(aElement: HTMLAnchorElement) {
    this.container = document.querySelector("#content_views");
    if (this.container && this.container.contains(aElement)) {
      if (!aElement.onclick) {
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
