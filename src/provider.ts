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
  public test = /example/;
  public ANTI_REDIRECT_DONE_EVENT = 'anti-redirect-done'; // 监听某个A标签，成功去除重定向之后
  private ANTI_REDIRECT_ORIGIN_HREF = 'anti-redirect-origin-href';
  public config = { debug: false };
  constructor() {
    super();

    /**
     * 在这里统一处理所有A链接的跳转
     * provider只需要发送事件即可
     */
    this.on(
      this.ANTI_REDIRECT_DONE_EVENT,
      (aElement: HTMLAnchorElement, realHref: string) => {
        if (realHref) {
          this.config.debug && (aElement.style.backgroundColor = 'green');
          aElement.setAttribute(this.ANTI_REDIRECT_ORIGIN_HREF, aElement.href);
          aElement.href = realHref;
        }
      }
    );
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
