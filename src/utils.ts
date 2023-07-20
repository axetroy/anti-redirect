import * as debounce from "lodash.debounce";
import * as throttle from "lodash.throttle";

export enum Marker {
  RedirectCount = "redirect-count",
  RedirectStatusDone = "anti-redirect-origin-href",
}

type DecoratorMethodFunction = (originMethod: Function, context: ClassMemberDecoratorContext) => any;

/**
 * 根据url上的路径匹配，去除重定向
 * @param {HTMLAnchorElement} aElement
 * @param {RegExp} tester
 * @returns {boolean}
 */
export function matchLinkFromUrl(aElement: HTMLAnchorElement, tester: RegExp): string {
  const matcher: string[] = tester.exec(aElement.href);
  if (!(matcher?.length && matcher[1])) {
    return "";
  }

  let url = "";
  try {
    url = decodeURIComponent(matcher[1]);
  } catch (e) {
    url = /https?:\/\//.test(matcher[1]) ? matcher[1] : "";
  }
  return url;
}

class Query {
  private object: Record<string, string> = {};

  constructor(public queryStr: string) {
    this.object = this.toObject(queryStr.replace(/^\?+/, ""));
  }

  private toObject(queryStr: string) {
    const obj: Record<string, string> = {};
    queryStr.split("&").forEach((item) => {
      const arr: string[] = item.split("=") || [];
      let key: string = arr[0] || "";
      let value: string = arr[1] || "";
      try {
        key = decodeURIComponent(arr[0] || "");
        value = decodeURIComponent(arr[1] || "");
      } catch (err) {
        //
      }
      if (key) {
        obj[key] = value;
      }
    });
    return obj;
  }

  public toString(): string {
    const arr: string[] = [];
    for (const key in this.object) {
      if (Object.prototype.hasOwnProperty.call(this.object, key)) {
        const value = this.object[key];
        arr.push(`${key}=${value}`);
      }
    }
    return arr.length ? `?${arr.join("&")}` : "";
  }
}

export function queryParser(queryString: string): Query {
  return new Query(queryString);
}

export function getText(htmlElement: HTMLElement): string {
  return (htmlElement.innerText || htmlElement.textContent).trim();
}

export function throttleDecorator(wait: number, options = {}): DecoratorMethodFunction {
  return (originMethod, context: ClassMemberDecoratorContext) => {
    return throttle(originMethod, wait, options);
  };
}

export function debounceDecorator(wait: number, options = {}): DecoratorMethodFunction {
  return (originMethod, context: ClassMemberDecoratorContext) => {
    return debounce(originMethod, wait, options);
  };
}

export function isInView(element: HTMLElement): boolean {
  const rect = element.getBoundingClientRect();

  const vWidth = window.innerWidth || document.documentElement.clientWidth;
  const vHeight = window.innerHeight || document.documentElement.clientHeight;

  const efp = (x, y) => {
    return document.elementFromPoint(x, y);
  };

  // Return false if it's not in the viewport
  if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
    return false;
  }

  // Return true if any of its four corners are visible
  return (
    element.contains(efp(rect.left, rect.top)) ||
    element.contains(efp(rect.right, rect.top)) ||
    element.contains(efp(rect.right, rect.bottom)) ||
    element.contains(efp(rect.left, rect.bottom))
  );
}

export function getRedirect(aElement: HTMLAnchorElement): number {
  return +(aElement.getAttribute(Marker.RedirectCount) || 0);
}

export function increaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  aElement.setAttribute(Marker.RedirectCount, `${num}${1}`);
}

export function decreaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  if (num > 0) {
    aElement.setAttribute(Marker.RedirectCount, `${num - 1}`);
  }
}

interface IAntiRedirectOption {
  debug?: boolean;
  force?: boolean;
}

/**
 * 去除重定向
 * @param aElement A标签元素
 * @param realUrl 真实的地址
 * @param options
 */
export function antiRedirect(aElement: HTMLAnchorElement, realUrl: string, options: IAntiRedirectOption = {}) {
  options.debug = typeof options.debug === "undefined" ? process.env.NODE_ENV !== "production" : options.debug;

  options.force = options.force;

  if (!options.force && (!realUrl || aElement.href === realUrl)) {
    return;
  }
  if (options.debug) {
    aElement.style.backgroundColor = "green";
  }
  aElement.setAttribute(Marker.RedirectStatusDone, aElement.href);
  aElement.href = realUrl;
}
