declare function GM_xmlhttpRequest(agm: any): any;

import * as _ from 'underscore';
import {Observable} from 'rxjs/Observable';

interface Response$ {
  response: string,
  readyState: number,
  responseHeaders: any,
  responseText: string,
  status: number,
  statusText: string,
  context: any,
  finalUrl: string
}

interface Options$ {
  binary?: boolean,
  context?: any,
  data?: any,
  headers?: any,
  method: string,
  onabort?(response: Response$): void
  onerror?(response: Response$): void
  onload?(): void
  onprogress?(): void
  onreadystatechange?(response: Response$): void
  ontimeout?(response: Response$): void,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous: boolean,
  timeout?: number,
  upload?: any,
  url: string
}

interface DefaultRequestOptions$ {
  binary?: boolean,
  context?: any,
  data?: any,
  headers?: any,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous?: boolean,
  timeout?: number,
  upload?: any
}

interface RequestOptions$ {
  binary?: boolean,
  context?: any,
  data?: any,
  headers?: any,
  method: string,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous?: boolean,
  timeout?: number,
  upload?: any,
  url: string
}

interface GetOptions$ {
  binary?: boolean,
  context?: any,
  data?: any,
  headers?: any,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous?: boolean,
  timeout?: number,
  upload?: any
}

interface PostOptions$ {
  binary?: boolean,
  context?: any,
  headers?: any,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous?: boolean,
  timeout?: number,
  upload?: any
}

interface HeadOptions$ {
  binary?: boolean,
  context?: any,
  headers?: any,
  overrideMimeType?: string,
  user?: string,
  password?: string,
  synchronous?: boolean,
  timeout?: number,
  upload?: any
}

class Http {

  constructor(private options?: DefaultRequestOptions$) {
  }

  request(requestOptions: RequestOptions$): Observable<Response$> {
    let options: Options$ = _.extend({}, this.options, requestOptions);
    let {onreadystatechange, onerror, onabort, ontimeout} = options;

    return Observable.create(function (observer) {

      // options.synchronous = true;   // async
      options.onreadystatechange = function (response: Response$) {
        _.isFunction(onreadystatechange) && onreadystatechange.call(this, response);
        if (response.readyState !== 4) return;
        response.status >= 200 && response.status < 400 && response.finalUrl ? observer.next(response) : observer.error(response);
        observer.complete();
      };

      options.onerror = function (response: Response$) {
        _.isFunction(onerror) && onerror.call(this, response);
        observer.error(response);
        observer.complete();
      };

      options.onabort = function (response: Response$) {
        _.isFunction(onabort) && onabort.call(this, response);
        observer.error(response);
        observer.complete();
      };

      options.ontimeout = function (response: Response$) {
        _.isFunction(ontimeout) && ontimeout.call(this, response);
        observer.error(response);
        observer.complete();
      };

      GM_xmlhttpRequest(_.extend({}, options));
    });
  }

  get(url: string, options?: GetOptions$): Observable<Response$> {
    const requestOptions: RequestOptions$ = _.extend(options || {}, {url, method: 'GET'});
    return this.request(requestOptions);
  }

  post(url: string, data, options?: PostOptions$): Observable<Response$> {
    return this.request(_.extend(options || {}, {url, method: 'POST', data}));
  }

  head(url: string, options?: HeadOptions$): Observable<Response$> {
    return this.request(_.extend(options || {}, {url, method: 'HEAD'}));
  }
}

const timeout = 2000;
let http = new Http({timeout});

export {http, Response$, timeout};