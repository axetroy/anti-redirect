import { IProvider } from "@/provider";

export class QQMailProvider implements IProvider {
  public test = true;
  private container: HTMLElement;
  public resolve(aElement: HTMLAnchorElement) {
    this.container = document.querySelector("#contentDiv");
    if (this.container?.contains(aElement)) {
      if (aElement.onclick) {
        aElement.onclick = (e) => {
          // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
          if (e.stopPropagation) {
            e.stopPropagation();
          }
        };
      }
    }
  }
}
