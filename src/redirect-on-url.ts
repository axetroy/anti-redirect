import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {log} from '../lib/log';
import {CONFIG} from './config';
const DEBUG = CONFIG.debug;


class RedirectOnUrl {
  public match: boolean = false;
  public DEBUG: boolean = DEBUG;

  constructor(public domainTester: RegExp, public urlTester: RegExp, public matcher: RegExp, public ASelector?: string) {
    this.ASelector = this.ASelector || 'a';
    this.match = domainTester.test(document.domain);
  }

  /**
   * 默认，处理一个A元素
   * @param aEle
   */
  private handler(aEle: HTMLAnchorElement): void {
    let matcher: string[] = this.matcher.exec(aEle.href);
    if (!matcher || !matcher.length || !matcher[1]) return;
    let url: string = '';
    try {
      url = decodeURIComponent(matcher[1]);
    } catch (e) {
      url = /https?:\/\//.test(matcher[1]) ? matcher[1] : '';
    }
    if (url) {
      aEle.href = url;
      DEBUG && (aEle.style.backgroundColor = 'green');
    }
  }

  public handlerOne(aEle: HTMLAnchorElement): Subscription {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement)=> {
        return this.urlTester.test(ele.href)
      })
      .subscribe((aEle: HTMLAnchorElement)=> {
        this.handler(aEle);
      });
  }

  private handlerOneByOne(): Observable<HTMLAnchorElement> {
    return Observable.from([].slice.call(document.querySelectorAll(this.ASelector)))
      .filter((target: HTMLAnchorElement): boolean=> !!(target.nodeName === 'A' && target.href));
  }

  private scroll(): Subscription {
    return Observable.fromEvent(document, 'scroll')
      .debounceTime(500)
      .flatMap(()=>this.handlerOneByOne())
      .subscribe((aEle: HTMLAnchorElement)=> this.handlerOne(aEle));
  }

  private mouseover(): Observable<HTMLAnchorElement> {
    return Observable.fromEvent(document, 'mousemove')
      .throttle(()=>Observable.timer(100))
      .map((event: any): HTMLElement => {
        let target = event.target;
        return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
      })
      .filter((ele: HTMLElement): boolean =>ele.nodeName === 'A');
  }

  public onInit(...agm): any {

  }

  public bootstrap(): void {
    if (!this.match) return;
    Observable.fromEvent(document, 'DOMContentLoaded')
      .delay(1000)
      .flatMap(()=>this.handlerOneByOne().filter((aEle: HTMLAnchorElement): boolean=>require('in-view').is(aEle)))
      .subscribe((aEle: HTMLAnchorElement)=> {

        this.onInit();

        this.handlerOne(aEle);

        this.scroll();

        this.mouseover().subscribe((aEle: HTMLAnchorElement)=> this.handlerOne(aEle));

        log();

      });
  }
}

export {RedirectOnUrl};