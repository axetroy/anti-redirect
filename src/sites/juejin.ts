import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class JuejinProvider implements IProvider {
  public test = /link\.juejin\.im\/\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
