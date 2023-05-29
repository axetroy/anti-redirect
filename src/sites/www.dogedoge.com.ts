import { IProvider } from "@/provider";
import { antiRedirect, decreaseRedirect, getRedirect, increaseRedirect } from "@/utils";
import http from "gm-http";

export class DogeDogeProvider implements IProvider {
  public test = /www\.dogedoge\.com\/rd\/.{1,}/;
  public resolve(aElement: HTMLAnchorElement) {
    if (getRedirect(aElement) <= 2 && this.test.test(aElement.href)) {
      increaseRedirect(aElement);
      this.handlerOneElement(aElement)
        .then((res) => {
          decreaseRedirect(aElement);
        })
        .catch((err) => {
          decreaseRedirect(aElement);
        });
    }
  }

  private async handlerOneElement(aElement: HTMLAnchorElement): Promise<unknown> {
    try {
      const res: Response$ = await http.request({
        url: aElement.href,
        method: "GET",
        anonymous: true,
      });
      if (res.finalUrl) {
        antiRedirect(aElement, res.finalUrl);
      }
      return res;
    } catch (err) {
      console.error(err);
    }
  }
}
