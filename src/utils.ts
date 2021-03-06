import * as inView from "in-view";
import * as debounce from "lodash.debounce";
import * as throttle from "lodash.throttle";

export enum Marker {
  RedirectCount = "redirect-count",
  RedirectStatusDone = "anti-redirect-origin-href",
}

type DecoratorFunction<T> = (
  target: T,
  property: string,
  descriptor: PropertyDescriptor
) => any;

/**
 * 根据url上的路径匹配，去除重定向
 * @param {HTMLAnchorElement} aElement
 * @param {RegExp} tester
 * @returns {boolean}
 */
export function matchLinkFromUrl(
  aElement: HTMLAnchorElement,
  tester: RegExp
): string {
  const matcher: string[] = tester.exec(aElement.href);
  if (!matcher || !matcher.length || !matcher[1]) {
    return "";
  }

  let url: string = "";
  try {
    url = decodeURIComponent(matcher[1]);
  } catch (e) {
    url = /https?:\/\//.test(matcher[1]) ? matcher[1] : "";
  }
  return url;
}

class Query {
  private object: any = {};

  constructor(public queryStr: string) {
    this.object = this.toObject(queryStr.replace(/^\?+/, ""));
  }

  private toObject(queryStr: string) {
    const obj = {};
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
      if (this.object.hasOwnProperty(key)) {
        const value = this.object[key];
        arr.push(key + "=" + value);
      }
    }
    return arr.length ? "?" + arr.join("&") : "";
  }
}

export function queryParser(queryString: string): Query {
  return new Query(queryString);
}

export function getText(htmlElement: HTMLElement): string {
  return (htmlElement.innerText || htmlElement.textContent).trim();
}

export function throttleDecorator<T>(
  wait: number,
  options = {}
): DecoratorFunction<T> {
  return (target, name, descriptor) => {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get() {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, wait, options),
        });
        return this[name];
      },
    };
  };
}

export function debounceDecorator<T>(
  wait: number,
  options = {}
): DecoratorFunction<T> {
  return (target, name, descriptor) => {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get() {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: debounce(descriptor.value, wait, options),
        });
        return this[name];
      },
    };
  };
}

export function isInView(element: HTMLElement): boolean {
  return inView.is(element) as boolean;
}

export function getRedirect(aElement: HTMLAnchorElement): number {
  return +(aElement.getAttribute(Marker.RedirectCount) || 0);
}

export function increaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  aElement.setAttribute(Marker.RedirectCount, num + 1 + "");
}

export function decreaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  if (num > 0) {
    aElement.setAttribute(Marker.RedirectCount, num - 1 + "");
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
export function antiRedirect(
  aElement: HTMLAnchorElement,
  realUrl: string,
  options: IAntiRedirectOption = {}
) {
  options.debug =
    typeof options.debug === "undefined"
      ? process.env.NODE_ENV !== "production"
      : options.debug;

  options.force = options.force || false;

  if (!options.force && (!realUrl || aElement.href === realUrl)) {
    return;
  }
  if (options.debug) {
    aElement.style.backgroundColor = "green";
  }
  aElement.setAttribute(Marker.RedirectStatusDone, aElement.href);
  aElement.href = realUrl;
}
