import { IProvider } from "@/provider";
import { antiRedirect, decreaseRedirect, getRedirect, increaseRedirect } from "@/utils";
import http from "gm-http";
import pRetry from "p-retry";

export class BaiduProvider implements IProvider {
  public test = /www\.baidu\.com\/link\?url=/;
  public resolve(aElement: HTMLAnchorElement) {
    if (getRedirect(aElement) <= 2 && this.test.test(aElement.href)) {
      increaseRedirect(aElement);

      pRetry(() => this.handlerOneElement(aElement), { retries: 3 })
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
      const res = await http.request({
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
      return Promise.reject(new Error(`[http]: ${aElement.href} fail`));
    }
  }
}
