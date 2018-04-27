import http from "gm-http";
import { IProvider } from "../provider";
import { antiRedirect } from "../utils";

export class BaiduVideoProvider implements IProvider {
  public test = /v\.baidu\.com\/link\?url=/;
  public resolve(aElement: HTMLAnchorElement) {
    http
      .get(aElement.href)
      .then((res: Response$) => {
        if (res.finalUrl) {
          antiRedirect(aElement, res.finalUrl);
        }
      })
      .catch(err => {
        console.error(err);
      });
  }
}
