import { IProvider } from "@/provider";

export class CnBingProvider implements IProvider {
  public test = true;
  private container: HTMLElement;
  public resolve(aElement: HTMLAnchorElement) {
    this.container = document.querySelector("#b_results")
    if (this.container && this.container.contains(aElement)) {
      aElement.removeAttribute('onclick')
      // Replace with a clone to remove all event listeners
      aElement.parentElement.replaceChild(
        aElement.cloneNode(true),
        aElement,
      );
    }
  }
}
