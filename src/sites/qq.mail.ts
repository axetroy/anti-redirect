import { IProvider } from "../provider";

export class QQMailProvider implements IProvider {
  public test = true;
  private container = document.querySelector("#contentDiv0");
  public resolve(aElement: HTMLAnchorElement) {
    if (this.container && this.container.contains(aElement)) {
      if (aElement.onclick) {
        aElement.onclick = () => {
          //
        };
      }
    }
  }
}
