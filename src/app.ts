import {
  Provider$,
  ProviderConstructor$,
  onHoverHandler$,
  onScrollHandle$
} from './provider';

import { isInView, debounceDecorator, getRedirect } from './utils';

interface ProviderConfig$ {
  name: string;
  test: RegExp;
  provider: ProviderConstructor$;
}

export interface AppConfig$ {
  debug: boolean;
}

export class App {
  private config: AppConfig$;
  private provides: ProviderConfig$[] = [];
  private onScrollHandler: onScrollHandle$[] = [];
  private onHoverHandler: onHoverHandler$[] = [];
  setConfig(config: AppConfig$): this {
    this.config = config;
    return this;
  }
  provide(providers: ProviderConfig$[]): this {
    this.provides = providers;
    return this;
  }
  private getProvider(): ProviderConfig$[] {
    const matchProviders: ProviderConfig$[] = [];
    const provides: ProviderConfig$[] = [...this.provides];
    while (provides.length) {
      const provideConfig: ProviderConfig$ = provides.shift();
      // 匹配域名，适合正确
      if (provideConfig.test.test(document.domain)) {
        matchProviders.push(provideConfig);
      }
    }
    return matchProviders;
  }
  private onHover(event: Event) {
    const target: HTMLAnchorElement = <HTMLAnchorElement>event.target;
    if (target.tagName !== 'A') return;
    this.onHoverHandler.forEach((func: onHoverHandler$) => {
      func(target);
    });
  }
  @debounceDecorator(300)
  private onScroll() {
    // 筛选所有在可视区域内的A标签
    const allInviewAElements: HTMLAnchorElement[] = [].slice
      .call(document.querySelectorAll('a[href^="http"]'))
      .filter(
        (aElement: HTMLAnchorElement) =>
          isInView(aElement) && getRedirect(aElement) <= 2
      );

    this.onScrollHandler.forEach((func: onScrollHandle$) => {
      func(allInviewAElements);
    });
  }
  bootstrap() {
    addEventListener('DOMContentLoaded', () => {
      const providers = this.getProvider();
      while (providers.length) {
        const provideConfig: ProviderConfig$ = providers.shift();
        console.info(`[Anti-redirect]: Load ${provideConfig.name}`);
        const providerConstructor: ProviderConstructor$ =
          provideConfig.provider;
        const provider: Provider$ = new providerConstructor()
          .setConfig(this.config)
          .onInit();
        this.onScrollHandler.push(provider.onScroll.bind(provider));
        this.onHoverHandler.push(provider.onHover.bind(provider));
      }
    });
    addEventListener('scroll', this.onScroll.bind(this));
    addEventListener('mousemove', this.onHover.bind(this));

    console.log(
      '%c Anti-Redirect %c Copyright \xa9 2015-%s %s',
      'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
      'font-size:12px;color:#999999;',
      new Date().getFullYear(),
      '\n' + 'Author @Axetroy'
    );
  }
}
