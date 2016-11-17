import {Observable} from 'rxjs/Observable';
import {CONFIG} from './config';
const DEBUG = CONFIG.debug;

class RedirectOnUrl {
  public match: boolean = false;
  public DEBUG: boolean = DEBUG;
  public logCount: number = 0;

  constructor(public domainTester, public urlTester, public matcher, public ASelector = 'a') {
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

  scroll() {
    return Observable.fromEvent(document, 'scroll')
      .debounceTime(500)
      .flatMap(()=>Observable.from([].slice.call(document.querySelectorAll(this.ASelector))))
      .subscribe((aEle: HTMLAnchorElement)=> {
        this.handlerOneEle(aEle).subscribe(function () {
        });
      });
  }

  mouseover(): Observable<HTMLAnchorElement> {
    return Observable.fromEvent(document, 'mousemove')
      .debounce(()=>Observable.timer(100))
      .map(function (event: any): HTMLElement {
        let target = event.target;
        return target.nodeName === 'A' ? target : target.parentNode.nodeName === 'A' ? target.parentNode : target;
      })
      .filter(function (ele: HTMLElement) {
        return ele.nodeName === 'A';
      });
  }

  log(project?: string): void {
    if (this.logCount < 1) {
      console.log(
        "%c Anti-Redirect %c Copyright \xa9 2015-%s %s",
        'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
        "font-size:12px;color:#999999;",
        (new Date).getFullYear(),
        '\n' + (project || '')
      );
      this.logCount++;
    }
  }

  bootstrap(): void {
    if (!this.match) return;
    Observable.fromEvent(document, 'DOMContentLoaded')
      .delay(300)
      .subscribe(()=> {

        this.scroll();

        this.mouseover().subscribe((aEle: HTMLAnchorElement)=> {
          this.handlerOneEle(aEle)
        });

        this.log();

      });
  }
}

export {RedirectOnUrl};