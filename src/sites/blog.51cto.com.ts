import { IProvider } from "@/provider";

export class Blog51CTO implements IProvider {
  public test = true;
  private container: HTMLElement;
  public resolve(aElement: HTMLAnchorElement) {
    this.container = document.querySelector(".article-detail");
    if (this.container?.contains(aElement)) {
      if (!aElement.onclick && aElement.href) {
        aElement.onclick = function antiRedirectOnClickFn(e) {
          e.stopPropagation();
          e.preventDefault();
          e.stopImmediatePropagation();

          const $a = document.createElement("a");

          $a.href = aElement.href;
          $a.target = aElement.target;

          $a.click();
        };
      }
    }
  }
}
