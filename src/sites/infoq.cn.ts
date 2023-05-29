import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";

export class InfoQProvider implements IProvider {
  public test = /infoq\.cn\/link\?target=(.*)/;
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("target"));
  }
}
