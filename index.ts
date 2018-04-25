require("es6-promise/auto");
require("reflect-metadata");
import http from "gm-http";
import { App } from "./src/app";
import { ZhihuZhuanlanProvider } from "./src/sites/zhihu-zhuanlan";
import { ZhihuDailyProvider } from "./src/sites/zhihu-daily";
import { TiebaProvider } from "./src/sites/tieba";
import { GoogleProvider } from "./src/sites/google";
import { GoogleDocsProvider } from "./src/sites/google-docs";
import { ZhihuProvider } from "./src/sites/zhihu";
import { SoProvider } from "./src/sites/so";
import { WeboProvider } from "./src/sites/weobo";
import { TwitterProvider } from "./src/sites/twitter";
import { SoGouProvider } from "./src/sites/sogou";
import { BaiduProvider } from "./src/sites/baidu";
import { BaiduVideoProvider } from "./src/sites/baidu-video";
import { BaiduXueshuProvider } from "./src/sites/baidu-xueshu";
import { JuejinProvider } from "./src/sites/juejin";
import { QQMailProvider } from "./src/sites/qq.mail";
import { MozillaProvider } from "./src/sites/mozilla";
import { JianShuProvider } from "./src/sites/jianshu";

const app = new App();
const isDebug: boolean = process.env.NODE_ENV !== "production";

http.setConfig({ debug: isDebug });

app
  .setConfig({
    debug: isDebug
  })
  .provide([
    {
      // 测试地址: https://www.zhihu.com/question/25258775
      name: "知乎",
      test: /www\.zhihu\.com/,
      provider: ZhihuProvider
    },
    {
      // 测试地址: https://zhuanlan.zhihu.com/p/20549978
      name: "知乎专栏",
      test: /zhuanlan\.zhihu\.com/,
      provider: ZhihuZhuanlanProvider
    },
    {
      // 测试地址:
      name: "知乎日报",
      test: /daily\.zhihu\.com/,
      provider: ZhihuDailyProvider
    },
    {
      name: "Google搜索",
      test: /\w+\.google\./,
      provider: GoogleProvider
    },
    {
      // 测试地址: https://docs.google.com/spreadsheets/d/1TFcEXMcKrwoIAECIVyBU0GPoSmRqZ7A0VBvqeKYVSww/htmlview
      name: "Google Docs",
      test: /docs\.google\.com/,
      provider: GoogleDocsProvider
    },
    {
      // 测试地址: https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=chrome
      name: "360搜索",
      test: /www\.so\.com/,
      provider: SoProvider
    },
    {
      name: "新浪微博",
      test: /\.weibo\.com/,
      provider: WeboProvider
    },
    {
      name: "Twitter",
      test: /twitter\.com/,
      provider: TwitterProvider
    },
    {
      // 测试: http://www.sogou.com/web?query=chrome&_asf=www.sogou.com&_ast=&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=1527&sst0=1504347367611&lkt=0%2C0%2C0&sugsuv=00091651B48CA45F593B61A29B131405&sugtime=1504347367611
      name: "搜狗搜索",
      test: /www\.sogou\.com/,
      provider: SoGouProvider
    },
    {
      // 测试: https://www.baidu.com/s?wd=chrome&rsv_spt=1&rsv_iqid=0xcb136237000ed40e&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baidulocal&rsv_enter=1&rsv_sug3=7&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&inputT=813&rsv_sug4=989&timestamp=1504349229266&rn=50&vf_bl=1
      name: "百度搜索",
      test: /www\.baidu\.com/,
      provider: BaiduProvider
    },
    {
      name: "百度视频",
      test: /v\.baidu\.com/,
      provider: BaiduVideoProvider
    },
    {
      name: "百度学术",
      test: /xueshu\.baidu\.com/,
      provider: BaiduXueshuProvider
    },
    {
      // 测试地址: http://tieba.baidu.com/p/5300844180
      name: "百度贴吧",
      test: /tieba\.baidu\.com/,
      provider: TiebaProvider
    },
    {
      // 测试地址: https://juejin.im/entry/59ac8fa551882524241a8802?utm_source=gold_browser_extension
      name: "掘金",
      test: /juejin\.im/,
      provider: JuejinProvider
    },
    {
      name: "QQ邮箱",
      test: /mail\.qq\.com/,
      provider: QQMailProvider
    },
    {
      // 测试地址: https://addons.mozilla.org/zh-CN/firefox/addon/evernote-web-clipper/
      name: "Mozilla",
      test: /addons\.mozilla\.org/,
      provider: MozillaProvider
    },
    {
      // 测试地址: https://addons.mozilla.org/zh-CN/firefox/addon/evernote-web-clipper/
      name: "简书",
      test: /www\.jianshu\.com/,
      provider: JianShuProvider
    }
  ])
  .bootstrap();
