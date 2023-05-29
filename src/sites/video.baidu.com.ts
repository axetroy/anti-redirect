import { IProvider } from "@/provider";
import { antiRedirect } from "@/utils";
import http from "gm-http";

export class BaiduVideoProvider implements IProvider {
  public test = /v\.baidu\.com\/link\?url=/;
  public resolve(aElement: HTMLAnchorElement) {
    http
      .request({
        url: aElement.href,
        method: "GET",
        anonymous: true,
      })
      .then((res: Response$) => {
        if (res.finalUrl) {
          antiRedirect(aElement, res.finalUrl);
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }
}
