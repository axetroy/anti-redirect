import { Provider } from "../provider";

export class QQMailProvider extends Provider {
  test = /.*/;
  private container = document.querySelector("#contentDiv0");
  constructor() {
    super();
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {
    if (this.container && this.container.contains(aElement)) {
      if (aElement.onclick) {
        aElement.onclick = function() {};
      }
    }
  }
}
