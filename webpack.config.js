/**
 * Created by axetroy on 16-9-15.
 */

var webpack = require('webpack');
var path = require('path');

// webpack.config.js
module.exports = {
  entry: {
    "bd_fuck": path.join(__dirname, 'index.ts')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].user.js'
  },
  resolve: {
    extensions: ['', '.coffee', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  plugins: [
    new webpack.BannerPlugin(
`// ==UserScript==
// @name              remove the jump link in BAIDU (typescript)
// @author            axetroy
// @collaborator      axetroy
// @description       去除百度搜索跳转链接
// @version           2016.11.10
// @grant             GM_xmlhttpRequest
// @include           *www.baidu.com*
// @connect           *
// @compatible        chrome  完美运行
// @compatible        firefox  完美运行
// @supportURL        http://www.burningall.com
// @run-at            document-start
// @contributionURL   troy450409405@gmail.com|alipay.com
// @namespace         https://greasyfork.org/zh-CN/users/3400-axetroy
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==

// Github源码:https://github.com/axetroy/bd-fuck

`, {entryOnly: true, raw: true})
  ]
};