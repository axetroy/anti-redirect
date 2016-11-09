declare function GM_xmlhttpRequest(agm: any): any;

import * as _ from 'underscore';
const Q = require('q');

interface Response$ {
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

  request(requestOptions: RequestOptions$): Promise<Response$> {
    let options: Options$ = _.extend({}, this.options, requestOptions);
    let deferred = Q.defer();
    let {onreadystatechange, onerror, onabort, ontimeout} = options;

    options.synchronous = true;   // async

    options.onreadystatechange = function (response: Response$) {
      _.isFunction(onreadystatechange) && onreadystatechange.call(this, response);
      if (response.readyState !== 4) return;
      if (/^(2|3)/.test(response.status + '') || response.finalUrl) {
        deferred.resolve(response);
      }
      else {
        deferred.reject(response);
      }
    };

    options.onerror = function (response: Response$) {
      _.isFunction(onerror) && onerror.call(this, response);
      deferred.reject(response);
    };

    options.onabort = function (response: Response$) {
      _.isFunction(onabort) && onabort.call(this, response);
      deferred.reject(response);
    };

    options.ontimeout = function (response: Response$) {
      _.isFunction(ontimeout) && ontimeout.call(this, response);
      deferred.reject(response);
    };

    const distOptions = _.extend({}, options);

    GM_xmlhttpRequest(distOptions);
    return deferred.promise;
  }

  get(url: string, options?: GetOptions$): Promise<Response$> {
    const requestOptions: RequestOptions$ = _.extend(options || {}, {url, method: 'GET'});
    return this.request(requestOptions);
  }

  post(url: string, data, options?: PostOptions$): Promise<Response$> {
    return this.request(_.extend(options || {}, {url, method: 'POST', data}));
  }

  head(url: string, options?: HeadOptions$): Promise<Response$> {
    return this.request(_.extend(options || {}, {url, method: 'HEAD'}));
  }
}

export default Http;