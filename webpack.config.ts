/**
 * Created by axetroy on 16-9-15.
 */

import { format } from "date-fns";
import * as path from "path";
import * as webpack from "webpack";
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const pkg = require("./package.json");

// webpack.config.js
const webpackConfig: webpack.Configuration = {
  entry: {
    "anti-redirect": path.join(__dirname, "index.ts"),
  },
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "[name].user.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".js", ".ts"],
    plugins: [new TsconfigPathsPlugin({ configFile: "./tsconfig.json" })],
  },
  module: {
    rules: [{ test: /\.tsx?$/, loader: "ts-loader" }],
  },
  mode: "none",
  plugins: [
    new webpack.DefinePlugin(
      (() => {
        const result = { "process.env.NODE_ENV": '"development"' };
        for (const key in process.env) {
          if (process.env.hasOwnProperty(key)) {
            result[`process.env.${key}`] = JSON.stringify(process.env[key]);
          }
        }
        return result;
      })()
    ),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.BannerPlugin({
      banner: `// ==UserScript==
// @name              ${pkg.name}
// @author            ${pkg.author}
// @description       ${pkg.description}
// @version           ${pkg.version}
// @update            ${format(new Date(), "yyyy-MM-dd HH:mm:ss")}
// @grant             GM_xmlhttpRequest
// @match             *://www.baidu.com/*
// @match             *://tieba.baidu.com/*
// @match             *://v.baidu.com/*
// @match             *://xueshu.baidu.com/*
// @include           *://www.google*
// @match             *://www.google.com/*
// @match             *://docs.google.com/*
// @match             *://mail.google.com/*
// @match             *://play.google.com/*
// @match             *://www.youtube.com/*
// @match             *://encrypted.google.com/*
// @match             *://www.so.com/*
// @match             *://www.zhihu.com/*
// @match             *://daily.zhihu.com/*
// @match             *://zhuanlan.zhihu.com/*
// @match             *://weibo.com/*
// @match             *://twitter.com/*
// @match             *://www.sogou.com/*
// @match             *://juejin.im/*
// @match             *://juejin.cn/*
// @match             *://mail.qq.com/*
// @match             *://addons.mozilla.org/*
// @match             *://www.jianshu.com/*
// @match             *://www.douban.com/*
// @match             *://getpocket.com/*
// @match             *://www.dogedoge.com/*
// @match             *://51.ruyo.net/*
// @match             *://steamcommunity.com/*
// @match             *://mijisou.com/*
// @match             *://blog.csdn.net/*
// @match             *://*.blog.csdn.net/*
// @match             *://*.oschina.net/*
// @match             *://app.yinxiang.com/*
// @match             *://www.logonews.cn/*
// @match             *://afdian.net/*
// @match             *://blog.51cto.com/*
// @match             *://xie.infoq.cn/*
// @match             *://gitee.com/*
// @match             *://sspai.com/*
// @connect           www.baidu.com
// @connect           *
// @compatible        chrome  完美运行
// @compatible        firefox  完美运行
// @supportURL        https://github.com/axetroy/anti-redirect/issues/new/choose
// @homepage          https://github.com/axetroy/anti-redirect
// @run-at            document-start
// @contributionURL   troy450409405@gmail.com|alipay.com
// @downloadURL       https://github.com/axetroy/anti-redirect/raw/gh-pages/anti-redirect.user.js
// @updateURL         https://github.com/axetroy/anti-redirect/raw/gh-pages/anti-redirect.user.js
// @namespace         https://greasyfork.org/zh-CN/users/3400-axetroy
// @license           Anti 996 License; https://github.com/axetroy/anti-redirect/blob/master/LICENSE
// ==/UserScript==

// Github源码: https://github.com/axetroy/anti-redirect

// 如果这能帮助到你，欢迎在 Github 上点击 star 和 follow.

// 或者在支付宝搜索 " 511118132 " 领取红包

// 你的支持就是我更新的动力

`,
      entryOnly: true,
      raw: true,
    }),
  ],
};

module.exports = webpackConfig;
