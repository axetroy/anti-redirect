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
// @name    remove_baidu_redirect
// @author  burningall
// @description test
// @version     2016.11.10
// @include     *www.baidu.com*
// @grant       GM_xmlhttpRequest
// @connect     *
// @run-at      document-start
// @compatible  chrome  两个字，破费
// @compatible  firefox  两个字，破费
// @license     The MIT License (MIT); http://opensource.org/licenses/MIT
// @supportURL      http://www.burningall.com
// @contributionURL troy450409405@gmail.com|alipay.com
// @namespace https://greasyfork.org/zh-CN/users/3400-axetroy
// ==/UserScript==
`, {entryOnly: true, raw: true})
  ]
};