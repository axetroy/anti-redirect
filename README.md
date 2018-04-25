### GM 脚本，反重定向

[![Build Status](https://travis-ci.org/axetroy/anti-redirect.svg?branch=master)](https://travis-ci.org/axetroy/anti-redirect)
[![npm version](https://badge.fury.io/js/anti-redirect.svg)](https://badge.fury.io/js/anti-redirect)
[![Greenkeeper badge](https://badges.greenkeeper.io/axetroy/anti-redirect.svg)](https://greenkeeper.io/)
![Node](https://img.shields.io/badge/node-%3E=6.0-blue.svg?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green.svg)

去除各搜索引擎/常用网站的重定向

### 反馈地址

> 反馈最好能带上出问题的网页地址

* https://github.com/axetroy/anti-redirect/issues/new
* https://github.com/axetroy/anti-redirect/issues/new
* https://github.com/axetroy/anti-redirect/issues/new

### 如果这能够帮助到你, 不妨点个 star, 你的支持就是我更新的动力

[点击从 Github 安装](https://github.com/axetroy/anti-redirect/raw/gh-pages/anti-redirect.min.user.js)

[点击从 GreasyFork 安装](<https://greasyfork.org/scripts/11915-anti-redirect-typescript/code/anti-redirect%20(typescript).user.js>)

### 工作原理

1. 根据 URL 上暴露出来的跳转链接，正则匹配提取真实的地址，例如知乎，Google
2. 如果 A 标签的内容为真实的地址，则替换，例如百度贴吧
3. 逐一发送请求，获取真实的地址，例如百度搜索
4. 根据请求特殊页面，这个特殊页面没有重定向地址，然后覆盖当前页，例如百度搜索，搜狗搜索
5. 覆盖原本的链接点击事件，比如 qq 邮箱

### 更新日志

[https://github.com/axetroy/anti-redirect/blob/master/CHANGELOG.md](https://github.com/axetroy/anti-redirect/blob/master/CHANGELOG.md)

### 支持的站点

- [x] 知乎
- [x] 知乎专栏
- [x] 知乎日报
- [x] Google搜索
- [x] 谷歌文档
- [x] 360搜索
- [x] 新浪微博
- [x] Twitter
- [x] 搜狗搜索
- [x] 百度搜索
- [x] 百度视频
- [x] 百度学术
- [x] 掘金
- [x] QQ邮箱
- [x] Mozilla
- [x] 简书

### 我想支持更多的站点

点击这个[链接](https://github.com/axetroy/anti-redirect/issues/new)，提交 issues，说出你想要支持的站点

### 贡献代码

需要通过 NodeJs 把 TypeScript 编译成 javascript

```bash
git clone https://github.com/axetroy/anti-redirect.git

cd ./anti-redirect

npm install
npm run watch
```

### 贡献者

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->

| [<img src="https://avatars1.githubusercontent.com/u/9758711?v=3" width="100px;"/><br /><sub>Axetroy</sub>](http://axetroy.github.io)<br />[💻](https://github.com/axetroyanti-redirect/anti-redirect/commits?author=axetroy) [🐛](https://github.com/axetroyanti-redirect/anti-redirect/issues?q=author%3Aaxetroy) 🎨 |
| :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |


<!-- ALL-CONTRIBUTORS-LIST:END -->

### 开源许可

The MIT License (MIT)

Copyright (c) 2018 axetroy

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
