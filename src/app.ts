import { IProvider, IProviderConstructor } from "./provider";

import {
  isInView,
  debounceDecorator,
  throttleDecorator,
  getRedirect,
  Marker
} from "./utils";

interface IProviderConfig {
  name: string;
  test: RegExp;
  provider: IProviderConstructor;
}

export interface IAppConfig {
  isDebug: boolean;
}

export class App {
  private config: IAppConfig;
  private provides: IProvider[] = [];
  constructor() {
    console.log(
      "%c Anti-Redirect %c Copyright \xa9 2015-%s %s",
      'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;',
      "font-size:12px;color:#999999;",
      new Date().getFullYear(),
      "\n" + "Author @Axetroy"
    );
    console.log("[anti-redirect]: 如果发现页面重定向未去除，欢迎反馈!")
  }
  private isMatchProvider(
    aElement: HTMLAnchorElement,
    provider: IProvider
  ): boolean {
    if (aElement.getAttribute(Marker.RedirectStatusDone)) {
      return false;
    }
    if (provider.test instanceof RegExp && !provider.test.test(aElement.href)) {
      return false;
    }
    if (typeof provider.test === "function" && !provider.test(aElement)) {
      return false;
    }
    if (provider.test instanceof Boolean && !provider.test) {
      return false;
    }
    return true;
  }
  public setConfig(config: IAppConfig): this {
    this.config = config;
    return this;
  }
  public registerProvider(providers: IProviderConfig[]): this {
    const providesOnThisPage: IProvider[] = [];
    for (const provideConfig of providers) {
      // 匹配域名，适合正确
      if (provideConfig.test.test(document.domain)) {
        const provider = new provideConfig.provider();
        provider.isDebug = this.config.isDebug;
        this.provides.push(provider);
        console.info(`[Anti-redirect]: 加载引擎 ${provideConfig.name}`);
      }
    }
    return this;
  }
  @throttleDecorator(50)
  private onHover(event: Event) {
    const aElement: HTMLAnchorElement = event.target as HTMLAnchorElement;
    if (aElement.tagName !== "A") {
      return;
    }
    // trigger on hover handler
    for (const provider of this.provides) {
      if (this.isMatchProvider(aElement, provider)) {
        provider.resolve(aElement);
      }
    }
  }
  @debounceDecorator(300)
  private onScroll() {
    // 筛选所有在可视区域内的A标签
    const visibleElements: HTMLAnchorElement[] = [].slice
      .call(document.querySelectorAll('a[href^="http"]'))
      .filter(
        (aElement: HTMLAnchorElement) =>
          isInView(aElement) && getRedirect(aElement) <= 2
      );
    // trigger scroll handler
    for (const provider of this.provides) {
      for (const aElement of visibleElements) {
        if (this.isMatchProvider(aElement, provider)) {
          provider.resolve(aElement);
        }
      }
    }
  }
  private async pageOnReady() {
    for (const provider of this.provides) {
      if (provider.onInit) {
        await provider.onInit();
      }
      // 如果页面处于初始的状态，没有滚动过，则出发一次onScroll事件
      if (window.scrollY <= 0) {
        this.onScroll();
      }
    }
  }
  public bootstrap() {
    addEventListener("scroll", this.onScroll.bind(this));
    addEventListener("mousemove", this.onHover.bind(this));
    addEventListener("DOMContentLoaded", this.pageOnReady.bind(this));
  }
}
