export interface IProviderConstructor {
  new (): IProvider;
}

export type tester = (aElement: HTMLAnchorElement) => boolean;

export interface IProvider {
  isDebug?: boolean;
  test: RegExp | tester | boolean | null;
  onInit?(): Promise<this>;
  resolve(aElementList: HTMLAnchorElement): void;
}
