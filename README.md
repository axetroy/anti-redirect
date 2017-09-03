### GM脚本，反重定向
[![Build Status](https://travis-ci.org/axetroy/anti-redirect.svg?branch=master)](https://travis-ci.org/axetroy/anti-redirect)
[![npm version](https://badge.fury.io/js/anti-redirect.svg)](https://badge.fury.io/js/anti-redirect)
[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/anti-redirect.svg)](https://greenkeeper.io/)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg)

去除各搜索引擎/常用网站的重定向

### 反馈地址

> 反馈最好能带上出问题的网页地址

- https://github.com/axetroy/anti-redirect/issues/new
- https://github.com/axetroy/anti-redirect/issues/new
- https://github.com/axetroy/anti-redirect/issues/new

### 如果这能够帮助到你, 不妨点个start, 你的支持就是我更新的动力

[点击从Github安装](https://github.com/axetroy/anti-redirect/raw/gh-pages/anti-redirect.min.user.js)

[点击从GreasyFork安装](https://greasyfork.org/scripts/11915-anti-redirect-typescript/code/anti-redirect%20(typescript).user.js)

### 更新日志

[https://github.com/axetroy/anti-redirect/releases](https://github.com/axetroy/anti-redirect/releases)

### 支持的站点

```typescript
app
  .setConfig({
    debug: isDebug
  })
  .provide({
    // 测试地址: https://www.zhihu.com/question/25258775
    name: '知乎',
    test: /www\.zhihu\.com/,
    provider: ZhihuProvider
  })
  .provide({
    // 测试地址: https://zhuanlan.zhihu.com/p/20549978
    name: '知乎专栏',
    test: /zhuanlan\.zhihu\.com/,
    provider: ZhihuZhuanlanProvider
  })
  .provide({
    // 测试地址:
    name: '知乎日报',
    test: /daily\.zhihu\.com/,
    provider: ZhihuDailyProvider
  })
  .provide({
    name: 'Google搜索',
    test: /\w+\.google\./,
    provider: GoogleProvider
  })
  .provide({
    // 测试地址: https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=chrome
    name: '360搜索',
    test: /www\.so\.com/,
    provider: SoProvider
  })
  .provide({
    name: '新浪微博',
    test: /\.weibo\.com/,
    provider: WeboProvider
  })
  .provide({
    name: 'Twitter',
    test: /twitter\.com/,
    provider: TwitterProvider
  })
  .provide({
    // 测试: http://www.sogou.com/web?query=chrome&_asf=www.sogou.com&_ast=&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=1527&sst0=1504347367611&lkt=0%2C0%2C0&sugsuv=00091651B48CA45F593B61A29B131405&sugtime=1504347367611
    name: '搜狗搜索',
    test: /www\.sogou\.com/,
    provider: SoGouProvider
  })
  .provide({
    // 测试: https://www.baidu.com/s?wd=chrome&rsv_spt=1&rsv_iqid=0xcb136237000ed40e&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baidulocal&rsv_enter=1&rsv_sug3=7&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&inputT=813&rsv_sug4=989&timestamp=1504349229266&rn=50&vf_bl=1
    name: '百度搜索',
    test: /www\.baidu\.com/,
    provider: BaiduProvider
  })
  .provide({
    name: '百度视频',
    test: /v\.baidu\.com/,
    provider: BaiduVideoProvider
  })
  .provide({
    // 测试地址: http://tieba.baidu.com/p/5300844180
    name: '百度贴吧',
    test: /tieba\.baidu\.com/,
    provider: TiebaProvider
  })
  .bootstrap();
```

### 我想支持更多的站点

点击这个[链接](https://github.com/axetroy/anti-redirect/issues/new)，提交issues，说出你想要支持的站点

### 贡献代码

```bash
git clone https://github.com/axetroy/anti-redirect.git

cd ./anti-redirect

npm install
npm run watch
```

### 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroyanti-redirect/anti-redirect/commits?author=axetroy) [🐛](https://github.com/axetroyanti-redirect/anti-redirect/issues?q=author%3Aaxetroy) 🎨 |
| :---: |
<!-- ALL-CONTRIBUTORS-LIST:END -->

### 开源许可

The MIT License (MIT)

Copyright (c) 2016 axetroy

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
