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

export class Provider implements Provider$ {
  test = /example/;
  config = { debug: false };
  constructor() {}
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
