import {Observable} from 'rxjs/Observable';
import {CONFIG} from './config';
const DEBUG = CONFIG.debug;

class RedirectOnUrl {
  public match: boolean = false;

  constructor(private domainTester, private urlTester, private matcher, private ASelector = 'a') {
    this.match = domainTester.test(document.domain);
  }

  handlerOneEle(aEle: HTMLAnchorElement): Observable<any> {
    return Observable.of(aEle)
      .filter((ele: HTMLAnchorElement)=> {
        return this.urlTester.test(ele.href)
      })
      .do((aEle: HTMLAnchorElement)=> {
        let matcher: string[] = this.matcher.exec(aEle.href);
        if (!matcher || !matcher.length || !matcher[1]) return;
        let url: string = decodeURIComponent(matcher[1]);
        if (url) {
          aEle.href = url;
          DEBUG && (aEle.style.backgroundColor = 'green');
        }
      })
  }

  scroll(): Observable<any> {
    return Observable.fromEvent(document, 'mousemove')
      .debounce(()=>Observable.timer(500))
      .flatMap(()=>Observable.from([].slice.call(document.querySelectorAll(this.ASelector))))
      .do((aEle: HTMLAnchorElement)=> {
        this.handlerOneEle(aEle).subscribe(function () {
        });
      })
  }

  mouseover(): Observable<HTMLAnchorElement> {
    return Observable.fromEvent(document, 'mousemove')
      .throttle(()=>Observable.timer(100))
      .map(function (event: any): HTMLElement {
        let target = event.target;
        return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
      })
      .filter(function (ele: HTMLElement) {
        return ele.nodeName === 'A'
      })
      .flatMap((aEle: HTMLAnchorElement)=>this.handlerOneEle(aEle))
  }

  log(str?: string): void {
    console.log(str || 'boostrap anti-redirect');
  }

  bootstrap(): void {
    if (!this.match) return;
    Observable.fromEvent(document, 'DOMContentLoaded')
      .flatMap(()=>Observable.timer(1000))
      .subscribe(()=> {

        this.log();

        this.scroll().subscribe(function () {

        });

        this.mouseover().subscribe(function () {

        })

      });
  }
}

export {RedirectOnUrl};