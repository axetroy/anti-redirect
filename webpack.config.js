/**
 * Created by axetroy on 16-9-15.
 */

var webpack = require('webpack');
var path = require('path');
var moment = require('moment');

// webpack.config.js
module.exports = {
  entry: {
    "anti-redirect": path.join(__dirname, 'index.ts'),
    "anti-redirect.min": path.join(__dirname, 'index.ts')
  },
  output: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].user.js'
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.coffee', '.js', '.ts']
  },
  module: {
    loaders: [
      {test: /\.tsx?$/, loader: 'ts-loader'}
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {warnings: false},
      sourceMap: false,
      test: /\.min\.user\.js$/
    }),
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name              anti-redirect (typescript)
// @author            axetroy
// @collaborator      axetroy
// @description       反重定向
// @version           1.0.0
// @update            ${moment().format('YYYY-MM-DD HH:mm:ss')}
// @grant             GM_xmlhttpRequest
// @include           *www.baidu.com*
// @include           *tieba.baidu.com*
// @include           *v.baidu.com*
// @include           *www.google.*
// @include           *www.so.com*
// @include           *www.zhihu.com*
// @include           *daily.zhihu.com*
// @include           *weibo.com*
// @include           *twitter.com*
// @connect           *
// @compatible        chrome  完美运行
// @compatible        firefox  完美运行
// @supportURL        http://www.burningall.com
// @run-at            document-start
// @contributionURL   troy450409405@gmail.com|alipay.com
// @downloadURL       https://github.com/axetroy/anti-redirect/raw/master/dist/anti-redirect.min.user.js
// @namespace         https://greasyfork.org/zh-CN/users/3400-axetroy
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==

// Github源码:https://github.com/axetroy/anti-redirect

`, entryOnly: true, raw: true
    })
  ]
};

// {entryOnly: true, raw: true}