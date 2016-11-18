import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {http, Response$, timeout} from '../lib/http';
import {log} from '../lib/log';
import {CONFIG} from './config';


const DEBUG = CONFIG.debug;
const status = {
  ing: 'redirect-ing',
  done: 'redirect-done'
};
let inview;

class RedirectOnRequest {
  public match: boolean;
  public DEBUG = DEBUG;
  public status: any = status;

  constructor(public domainTester: RegExp, public urlTester: RegExp, public matcher: RegExp, public ASelector?: string) {
    this.ASelector = this.ASelector || 'a';
    this.match = domainTester.test(document.domain);
  }

  public handlerOneResponse(res: Response$): any {
    return res;
  }

  private handlerOne(aElement: HTMLAnchorElement): Subscription {
    if (!this.urlTester.test(aElement.href) || aElement.getAttribute(status.ing) || aElement.getAttribute(status.done)) return;
    let protocol: string = location.protocol.replace(/:$/, '');   // in chrome[:http], but in firefox is:[http:]
    let url: string = aElement.href.replace(/^https?/, protocol) + `&timestamp=${new Date().getTime()}`;
    aElement.style.cursor = 'progress';
    aElement.setAttribute(status.ing, '1');
    return http.get(url)
      .retry(2)
      .timeout(timeout)
      .map((res: Response$): Response$=> this.handlerOneResponse(res))
      .do((res: Response$)=> {
        if (this.urlTester.test(res.finalUrl)) throw new Error('invalid final url');
      })
      .subscribe(function (res: Response$): void {
        aElement.href = res.finalUrl;
        aElement.removeAttribute(status.ing);
        aElement.setAttribute(status.done, '1');
        DEBUG && (aElement.style.backgroundColor = 'green');
      }, function (): void {
        aElement.style.cursor = null;
        aElement.removeAttribute(status.ing);
      }, function (): void {
        aElement.style.cursor = null;
        aElement.removeAttribute(status.ing);
      });
  }

  private handlerOneByOne(): Subscription {
    return Observable.from([].slice.call(document.querySelectorAll(this.ASelector)))
      .subscribe((aElement: HTMLAnchorElement): void => {
        inview && inview.is(aElement) && this.handlerOne(aElement);
      });
  }

  public onInit(...agm): any {

  }

  private scroll(): Subscription {
    return Observable.fromEvent(window, 'scroll')
      .debounce(()=>Observable.timer(200))
      .subscribe(()=> {
        this.handlerOneByOne();
      });
  }

  private mouseover(): Subscription {
    return Observable.fromEvent(document, 'mousemove')
      .throttle(()=>Observable.timer(100))
      .map((event: any): HTMLAnchorElement=> {
        let target = event.toElement;
        return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
      })
      .filter((ele: HTMLAnchorElement): boolean=>ele.nodeName === 'A')
      .subscribe((aEle)=> {
        this.handlerOne(aEle);
      });
  }

  public bootstrap(): void {
    if (!this.match) return;
    Observable.fromEvent(document, 'DOMContentLoaded')
      .debounce(()=>Observable.timer(200))
      .delay(200)
      .flatMap((): Observable<void>=> {
        return Observable.create((observer) => {
          new MutationObserver((mutations = [])=> {
            if (!mutations.length) return;
            observer.next();
          }).observe(document.body, {childList: true})
        }).debounce(()=>Observable.timer(100));
      })
      .subscribe(()=> {

        this.onInit();

        inview = require('in-view');
        inview(this.ASelector).on('enter', (aEle: HTMLAnchorElement) => this.handlerOne(aEle));

        this.scroll();

        this.mouseover();

        this.handlerOneByOne();

        log();

      });
  }
}

export {RedirectOnRequest};