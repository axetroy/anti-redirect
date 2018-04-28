import { IProvider } from "../provider";
import { antiRedirect } from "../utils";
export class GmailProvider implements IProvider {
  public test = true;
  private REDIRECT_PROPERTY = "data-saferedirecturl";
  public resolve(aElement: HTMLAnchorElement) {
    // 移除这个属性，那么 a 链接就不会跳转
    // FIXME: gmail 是多层 iframe 嵌套
    if (aElement.getAttribute(this.REDIRECT_PROPERTY)) {
      aElement.removeAttribute(this.REDIRECT_PROPERTY);
      antiRedirect(aElement, aElement.href);
    }
  }
}
