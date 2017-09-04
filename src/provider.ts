import EventEmitter from '@axetroy/event-emitter.js';

export interface ProviderConstructor$ {
  new (): Provider$;
}

export interface AppConfig$ {
  debug: boolean;
}

export type onHoverHandler$ = (aElement: HTMLAnchorElement) => void;
export type onScrollHandle$ = (aElementList: HTMLAnchorElement[]) => void;

export interface Provider$ {
  test: RegExp;
  config: AppConfig$;
  setConfig(config: AppConfig$): this;
  onScroll(aElementList: HTMLAnchorElement[]): void;
  onHover(aElement: HTMLAnchorElement): void;
  onInit(): this;
}

export class Provider extends EventEmitter implements Provider$ {
  test = /example/;
  ANTI_REDIRECT_DONE_EVENT = 'anti-redirect-done'; // 监听某个A标签，成功去除重定向之后
  config = { debug: false };
  constructor() {
    super();
    this.on(this.ANTI_REDIRECT_DONE_EVENT, (aElement: HTMLAnchorElement) => {
      this.config.debug && (aElement.style.backgroundColor = 'green');
    });
  }
  setConfig(config: AppConfig$): this {
    this.config = config;
    return this;
  }
  onScroll(aElementList: HTMLAnchorElement[]) {}
  onHover(aElement: HTMLAnchorElement) {}
  onInit() {
    return this;
  }
}
