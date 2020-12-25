import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class YinXiangProvider implements IProvider {
  public test = /^http:\/\//;
  public resolve(aElement: HTMLAnchorElement) {
    // 编辑器
    if (aElement.hasAttribute("data-mce-href")) {
      if (!aElement.onclick) {
        antiRedirect(aElement, aElement.href, { force: true });
        aElement.onclick = (e) => {
          // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
          if (e.stopPropagation) {
            e.stopPropagation();
          }
          aElement.setAttribute("target", "_blank");
          window.top
            ? window.top.open(aElement.href)
            : window.open(aElement.href);
        };
      }
    }
    // 分享页面
    else if (
      /^https:\/\/app\.yinxiang\.com\/OutboundRedirect\.action\?dest=/.test(
        aElement.href
      )
    ) {
      antiRedirect(aElement, new URL(aElement.href).searchParams.get("dest"));
    }
  }
  public async onInit(): Promise<this> {
    const handler = (e) => {
      const dom = e.target as HTMLElement;

      const tagName = dom.tagName.toUpperCase();

      switch (tagName) {
        case "A":
          this.resolve(dom as HTMLAnchorElement);
          break;
        case "IFRAME":
          if (dom.hasAttribute("anti-redirect-handled")) {
            return;
          }
          dom.setAttribute("anti-redirect-handled", "1");
          (dom as HTMLIFrameElement).contentWindow.document.addEventListener(
            "mouseover",
            handler
          );
          break;
      }
    };

    document.addEventListener("mouseover", handler);
    return this;
  }
}
