import { IProvider } from "@/provider";
import { antiRedirect, Marker } from "@/utils";
export class GooglePlayProvider implements IProvider {
  public test(aElement: HTMLAnchorElement) {
    if (/google\.com\/url\?q=(.*)/.test(aElement.href)) {
      return true;
    } else if (/^\/store\/apps\/details/.test(location.pathname)) {
      return true;
    }

    return false;
  }
  public resolve(aElement: HTMLAnchorElement) {
    antiRedirect(aElement, new URL(aElement.href).searchParams.get("q"));

    // 移除开发者栏目下的重定向
    const eles = [].slice.call(document.querySelectorAll("a.hrTbp"));

    for (const ele of eles) {
      if (!ele.href) {
        continue;
      }
      if (ele.getAttribute(Marker.RedirectStatusDone)) {
        continue;
      }

      ele.setAttribute(Marker.RedirectStatusDone, ele.href);
      ele.setAttribute("target", "_blank");

      ele.addEventListener(
        "click",
        event => {
          event.stopPropagation();
        },
        true
      );
    }
  }
}
