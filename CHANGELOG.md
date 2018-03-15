<a name="2.6.1"></a>
## [2.6.1](https://github.com/axetroy/anti-redirect/compare/v2.6.0...v2.6.1) (2018-03-15)


### Bug Fixes

* 修复so.com再翻页中有问题的bug ([7ae798f](https://github.com/axetroy/anti-redirect/commit/7ae798f))


### Features

* 添加支持火狐浏览器扩展页支持 ([b9f9d4d](https://github.com/axetroy/anti-redirect/commit/b9f9d4d))



<a name="2.6.0"></a>
# [2.6.0](https://github.com/axetroy/anti-redirect/compare/v2.5.0...v2.6.0) (2018-02-20)


### Features

* 添加支持火狐浏览器扩展页面的重定向 ([51c91f7](https://github.com/axetroy/anti-redirect/commit/51c91f7))



<a name="2.5.0"></a>
# [2.5.0](https://github.com/axetroy/anti-redirect/compare/v2.4.1...v2.5.0) (2018-02-20)


### Features

* 支持去除QQ邮箱重定向 ([34d0d66](https://github.com/axetroy/anti-redirect/commit/34d0d66))



<a name="2.4.1"></a>
## [2.4.1](https://github.com/axetroy/anti-redirect/compare/v2.4.0...v2.4.1) (2018-01-04)


### Bug Fixes

* 修复百度学术有部分跳转链接没有去除的问题 ([d10755a](https://github.com/axetroy/anti-redirect/commit/d10755a))



<a name="2.4.0"></a>
# [2.4.0](https://github.com/axetroy/anti-redirect/compare/v2.3.1...v2.4.0) (2018-01-04)


### Features

* 支持百度学术 ([446f5b9](https://github.com/axetroy/anti-redirect/commit/446f5b9))



<a name="2.3.1"></a>
## [2.3.1](https://github.com/axetroy/anti-redirect/compare/v2.3.0...v2.3.1) (2017-09-19)


### Bug Fixes

* **sogou:** 修复搜狗搜索下, 和翻页脚本不兼容的问题 ([6ebf396](https://github.com/axetroy/anti-redirect/commit/6ebf396))



<a name="2.3.0"></a>
# [2.3.0](https://github.com/axetroy/anti-redirect/compare/v2.2.0...v2.3.0) (2017-09-04)


### Features

* 如果页面处于初始的状态，没有滚动过，则出发一次onScroll事件 ([5f112d3](https://github.com/axetroy/anti-redirect/commit/5f112d3))
* 百度贴吧去除重定向成功之后，添加成功的标记 ([35c952a](https://github.com/axetroy/anti-redirect/commit/35c952a))



<a name="2.2.0"></a>
# [2.2.0](https://github.com/axetroy/anti-redirect/compare/v2.1.0...v2.2.0) (2017-09-04)


### Features

* **changelog:** support generate CHANGELOG ([bcb24ea](https://github.com/axetroy/anti-redirect/commit/bcb24ea))
* provider继承自事件发生器，监听页面滚动，会自动去除重定向 ([168e4d8](https://github.com/axetroy/anti-redirect/commit/168e4d8))
* 支持掘金去除重定向 ([ad55ca9](https://github.com/axetroy/anti-redirect/commit/ad55ca9))



<a name="2.1.0"></a>
# [2.1.0](https://github.com/axetroy/anti-redirect/compare/v2.0.0...v2.1.0) (2017-09-03)


### Features

* add es6-promise polyfill ([46d95c6](https://github.com/axetroy/anti-redirect/commit/46d95c6))
* 支持 google docs站点 ([11eafae](https://github.com/axetroy/anti-redirect/commit/11eafae))



<a name="2.0.0"></a>
# [2.0.0](https://github.com/axetroy/anti-redirect/compare/1.2.0...v2.0.0) (2017-09-02)


### Bug Fixes

* fix a bug about class Query ([bd1505d](https://github.com/axetroy/anti-redirect/commit/bd1505d))
* fix about class Query ([d3ca05d](https://github.com/axetroy/anti-redirect/commit/d3ca05d))
* typo ([56912cd](https://github.com/axetroy/anti-redirect/commit/56912cd))
* 修复贴吧部分重定向无法去处的问题 ([a8b92cb](https://github.com/axetroy/anti-redirect/commit/a8b92cb))


### Features

* add meta info ([61dfab9](https://github.com/axetroy/anti-redirect/commit/61dfab9))



<a name="1.2.0"></a>
# [1.2.0](https://github.com/axetroy/anti-redirect/compare/1.1.0...1.2.0) (2016-12-29)


### Features

* 支持sogou搜索 ([1316e26](https://github.com/axetroy/anti-redirect/commit/1316e26))



<a name="1.1.0"></a>
# [1.1.0](https://github.com/axetroy/anti-redirect/compare/1.0.1...1.1.0) (2016-12-29)


### Features

* 支持知乎专栏 ([eed370d](https://github.com/axetroy/anti-redirect/commit/eed370d))



<a name="1.0.1"></a>
## [1.0.1](https://github.com/axetroy/anti-redirect/compare/c366c51...1.0.1) (2016-12-23)


### Bug Fixes

* **google:** 修复谷歌搜索反重定向不正确的问题，以及重构部分代码 ([edc68d4](https://github.com/axetroy/anti-redirect/commit/edc68d4))
* **proto:** 修复获取下，获取协议的兼容性，以及应用启动的部分参数 ([d2bb7ef](https://github.com/axetroy/anti-redirect/commit/d2bb7ef))
* 修复360so解析地址不正确的问题(锅是360的，不关我事) ([859ab94](https://github.com/axetroy/anti-redirect/commit/859ab94))
* 修复重构，留下尚未更改的地方 ([6096c6e](https://github.com/axetroy/anti-redirect/commit/6096c6e))


### Features

* rebuild ([e8030dd](https://github.com/axetroy/anti-redirect/commit/e8030dd))
* **more:** 重构脚本，支持更多站点 ([c366c51](https://github.com/axetroy/anti-redirect/commit/c366c51))
* **new:** 新增weibo/twitter的去除跳转，以及重构一些代码 ([cb07843](https://github.com/axetroy/anti-redirect/commit/cb07843))
* **tieba:** 添加对百度贴吧反重定向的支持 ([516ef7e](https://github.com/axetroy/anti-redirect/commit/516ef7e))
* add baidu-video support ([b421c6e](https://github.com/axetroy/anti-redirect/commit/b421c6e))



