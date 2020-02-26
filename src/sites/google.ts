import { IProvider } from "../provider";
export class GoogleProvider implements IProvider {
  public test = true;
  public resolve(aElement: HTMLAnchorElement) {
    // 移除追踪
    if (aElement.getAttribute("ping")) {
      aElement.removeAttribute("ping");
    }
  }
}
