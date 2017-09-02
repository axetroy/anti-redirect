import * as throttle from 'lodash.throttle';
import * as debounce from 'lodash.debounce';
import * as inView from 'in-view';

export const REDIRECT_NUM = 'redirect-num';

/**
 * 根据url上的路径匹配，去除重定向
 * @param {HTMLAnchorElement} aElement
 * @param {RegExp} tester
 * @param {boolean} debug
 */
export function antiRedirect(
  aElement: HTMLAnchorElement,
  tester: RegExp,
  debug?: boolean
) {
  let matcher: string[] = tester.exec(aElement.href);
  if (!matcher || !matcher.length || !matcher[1]) return;

  let url: string = '';
  try {
    url = decodeURIComponent(matcher[1]);
  } catch (e) {
    url = /https?:\/\//.test(matcher[1]) ? matcher[1] : '';
  }
  if (url) {
    aElement.setAttribute('origin-href', aElement.getAttribute('href'));
    aElement.href = url;
    debug && (aElement.style.backgroundColor = 'green');
  }
}

class Query {
  object: any = {};

  constructor(public queryStr: String) {
    this.object = this.toObject(queryStr.replace(/^\?+/, ''));
  }

  private toObject(queryStr: String) {
    let obj = {};
    queryStr.split('&').forEach(item => {
      let arr = item.split('=') || [];
      let key = arr[0] || '';
      let value = arr[1] || '';
      try {
        key = decodeURIComponent(arr[0] || '');
        value = decodeURIComponent(arr[1] || '');
      } catch (err) {}
      key && (obj[key] = value);
    });
    return obj;
  }

  public toString(): String {
    let arr: string[] = [];
    for (let key in this.object) {
      if (this.object.hasOwnProperty(key)) {
        let value = this.object[key];
        arr.push(key + '=' + value);
      }
    }
    return arr.length ? '?' + arr.join('&') : '';
  }
}

export function queryParser(queryString: string): Query {
  return new Query(queryString);
}

export function getText(htmlElement: HTMLElement): string {
  return (htmlElement.innerText || htmlElement.textContent).trim();
}

export function throttleDecorator(wait: number, options = {}) {
  return function(target, name, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function() {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: throttle(descriptor.value, wait, options)
        });
        return this[name];
      }
    };
  };
}

export function debounceDecorator(wait: number, options = {}) {
  return function(target, name, descriptor) {
    return {
      configurable: true,
      enumerable: descriptor.enumerable,
      get: function() {
        Object.defineProperty(this, name, {
          configurable: true,
          enumerable: descriptor.enumerable,
          value: debounce(descriptor.value, wait, options)
        });
        return this[name];
      }
    };
  };
}

export function isInView(element: HTMLElement): boolean {
  return <boolean>inView.is(element);
}

export function getRedirect(aElement: HTMLAnchorElement): number {
  return +(aElement.getAttribute(REDIRECT_NUM) || 0);
}

export function increaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  aElement.setAttribute(REDIRECT_NUM, num + 1 + '');
}

export function decreaseRedirect(aElement: HTMLAnchorElement): void {
  const num: number = getRedirect(aElement);
  if (num > 0) {
    aElement.setAttribute(REDIRECT_NUM, num - 1 + '');
  }
}
