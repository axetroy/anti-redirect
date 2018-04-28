/**
 * Created by axetroy on 16-9-15.
 */

import * as webpack from "webpack";
import * as path from "path";
import * as moment from "moment";
const pkg = require("./package.json");

// webpack.config.js
const webpackConfig: webpack.Configuration = {
  entry: {
    "anti-redirect": path.join(__dirname, "index.ts")
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].user.js"
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".coffee", ".js", ".ts"]
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
  },
  mode: "none",
  plugins: [
    new webpack.DefinePlugin(
      (() => {
        const result = { "process.env.NODE_ENV": '"development"' };
        for (const key in process.env) {
          if (process.env.hasOwnProperty(key)) {
            result["process.env." + key] = JSON.stringify(process.env[key]);
          }
        }
        return result;
      })()
    ),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name              ${pkg.name}
// @author            ${pkg.author}
// @collaborator      ${pkg.author}
// @description       ${pkg.description}
// @version           ${pkg.version}
// @update            ${moment().format("YYYY-MM-DD HH:mm:ss")}
// @grant             GM_xmlhttpRequest
// @include           *www.baidu.com*
// @include           *tieba.baidu.com*
// @include           *v.baidu.com*
// @include           *xueshu.baidu.com*
// @include           *www.google.*
// @include           *docs.google.*
// @include           *mail.google.*
// @include           *encrypted.google.com*
// @include           *www.so.com*
// @include           *www.zhihu.com*
// @include           *daily.zhihu.com*
// @include           *zhuanlan.zhihu.com*
// @include           *weibo.com*
// @include           *twitter.com*
// @include           *www.sogou.com*
// @include           *juejin.im*
// @include           *mail.qq.com*
// @include           *addons.mozilla.org*
// @include           *www.jianshu.com*
// @connect           *
// @compatible        chrome  完美运行
// @compatible        firefox  完美运行
// @supportURL        http://www.burningall.com
// @run-at            document-start
// @contributionURL   troy450409405@gmail.com|alipay.com
// @downloadURL       https://github.com/axetroy/anti-redirect/raw/master/dist/anti-redirect.user.js
// @namespace         https://greasyfork.org/zh-CN/users/3400-axetroy
// @license           The MIT License (MIT); http://opensource.org/licenses/MIT
// ==/UserScript==

// Github源码: https://github.com/axetroy/anti-redirect
// 如果这能帮助到你，欢迎在 Github 上点击 star 和 follow.
// 你的支持就是我更新的动力

`,
      entryOnly: true,
      raw: true
    })
  ]
};

module.exports = webpackConfig;