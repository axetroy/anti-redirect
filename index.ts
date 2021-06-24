require("reflect-metadata");
import { App } from "@/app";
import { RuyoProvider } from "@/sites/51.ruyo.net";
import { MozillaProvider } from "@/sites/addons.mozilla.org";
import { YinXiangProvider } from "@/sites/app.yinxiang.com";
import { CSDNProvider } from "@/sites/blog.csdn.net";
import { OSChinaProvider } from "@/sites/oschina.com";
import { ZhihuDailyProvider } from "@/sites/daily.zhihu.com";
import { GoogleDocsProvider } from "@/sites/docs.google.com";
import { PocketProvider } from "@/sites/getpocket.com";
import { GmailProvider } from "@/sites/gmail.google.com";
import { JuejinProvider } from "@/sites/juejin.com";
import { QQMailProvider } from "@/sites/mail.qq.com";
import { MiJiProvider } from "@/sites/mijisou.com";
import { GooglePlayProvider } from "@/sites/play.google.com";
import { SteamProvider } from "@/sites/steamcommunity.com";
import { TiebaProvider } from "@/sites/tieba.baidu.com";
import { TwitterProvider } from "@/sites/twitter.com";
import { BaiduVideoProvider } from "@/sites/video.baidu.com";
import { WeboProvider } from "@/sites/weibo.com";
import { BaiduProvider } from "@/sites/www.baidu.com";
import { DogeDogeProvider } from "@/sites/www.dogedoge.com";
import { DouBanProvider } from "@/sites/www.douban.com";
import { GoogleProvider } from "@/sites/www.google.com";
import { JianShuProvider } from "@/sites/www.jianshu.com";
import { SoProvider } from "@/sites/www.so.com";
import { SoGouProvider } from "@/sites/www.sogou.com";
import { YoutubeProvider } from "@/sites/www.youtube.com";
import { ZhihuProvider } from "@/sites/www.zhihu.com";
import { BaiduXueshuProvider } from "@/sites/xueshu.baidu.com";
import { ZhihuZhuanlanProvider } from "@/sites/zhuanlan.zhihu.com";
import { CnBingProvider } from "@/sites/cn.bing.com";
import http from "gm-http";

const app = new App();
const isDebug: boolean = process.env.NODE_ENV !== "production";

http.setConfig({ debug: isDebug });

app
  .setConfig({ isDebug })
  .registerProvider([
    {
      // 测试地址: https://www.zhihu.com/question/25258775
      name: "知乎",
      test: /www\.zhihu\.com/,
      provider: ZhihuProvider,
    },
    {
      // 测试地址: https://zhuanlan.zhihu.com/p/20549978
      name: "知乎专栏",
      test: /zhuanlan\.zhihu\.com/,
      provider: ZhihuZhuanlanProvider,
    },
    {
      // 测试地址:
      name: "知乎日报",
      test: /daily\.zhihu\.com/,
      provider: ZhihuDailyProvider,
    },
    {
      name: "Google搜索",
      test: /\w+\.google\./,
      provider: GoogleProvider,
    },
    {
      // 测试地址: https://docs.google.com/spreadsheets/d/1TFcEXMcKrwoIAECIVyBU0GPoSmRqZ7A0VBvqeKYVSww/htmlview
      name: "Google Docs",
      test: /docs\.google\.com/,
      provider: GoogleDocsProvider,
    },
    {
      name: "Gmail",
      test: /mail\.google\.com/,
      provider: GmailProvider,
    },
    {
      // 测试地址: https://play.google.com/store/movies/details/%E7%A7%BB%E5%8B%95%E8%BF%B7%E5%AE%AE_%E6%AD%BB%E4%BA%A1%E8%A7%A3%E8%97%A5?id=YNy7gRqwtMk
      name: "Google Play",
      test: /play\.google\.com/,
      provider: GooglePlayProvider,
    },
    {
      // 测试地址: https://www.youtube.com/watch?v=XTXSRRSv1bY
      name: "Google Youtube",
      test: /www\.youtube\.com/,
      provider: YoutubeProvider,
    },
    {
      // 测试地址: https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=chrome
      name: "360搜索",
      test: /www\.so\.com/,
      provider: SoProvider,
    },
    {
      name: "新浪微博",
      test: /\.weibo\.com/,
      provider: WeboProvider,
    },
    {
      name: "Twitter",
      test: /twitter\.com/,
      provider: TwitterProvider,
    },
    {
      // 测试: http://www.sogou.com/web?query=chrome&_asf=www.sogou.com&_ast=&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=1527&sst0=1504347367611&lkt=0%2C0%2C0&sugsuv=00091651B48CA45F593B61A29B131405&sugtime=1504347367611
      name: "搜狗搜索",
      test: /www\.sogou\.com/,
      provider: SoGouProvider,
    },
    {
      // 测试: https://www.baidu.com/s?wd=chrome&rsv_spt=1&rsv_iqid=0xcb136237000ed40e&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baidulocal&rsv_enter=1&rsv_sug3=7&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&inputT=813&rsv_sug4=989&timestamp=1504349229266&rn=50&vf_bl=1
      name: "百度搜索",
      test: /www\.baidu\.com/,
      provider: BaiduProvider,
    },
    {
      // 测试: https://www.baidu.com/s?wd=chrome&pn=20&oq=chrome&tn=baiduhome_pg&ie=utf-8&usm=3&rsv_idx=2&rsv_pq=e043900d0000752d&rsv_t=6bb0UqEwp2Tle6TAMBDlU3Wg%2BSxoqvvOhZKyQgM%2BVQP8Gc54QZLhcDcj62eGfNG75aq5&rsv_page=1
      name: "百度视频",
      test: /v\.baidu\.com/,
      provider: BaiduVideoProvider,
    },
    {
      // 测试: http://xueshu.baidu.com/s?wd=paperuri%3A%28ae4d6b5da05eca552dab05aeefb966e6%29&ie=utf-8&filter=sc_long_sign&sc_ks_para=q%3D%E2%80%9C%E4%BA%92%E8%81%94%E7%BD%91%2B%E5%81%A5%E5%BA%B7%E7%AE%A1%E7%90%86%E2%80%9D%E6%A8%A1%E5%BC%8F%E6%8E%A2%E8%AE%A8%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8&tn=SE_baiduxueshu_c1gjeupa
      name: "百度学术",
      test: /xueshu\.baidu\.com/,
      provider: BaiduXueshuProvider,
    },
    {
      // 测试地址: http://tieba.baidu.com/p/5300844180
      name: "百度贴吧",
      test: /tieba\.baidu\.com/,
      provider: TiebaProvider,
    },
    {
      // 测试地址: https://juejin.im/entry/59ac8fa551882524241a8802?utm_source=gold_browser_extension
      name: "掘金",
      test: /juejin\.im/,
      provider: JuejinProvider,
    },
    {
      name: "QQ邮箱",
      test: /mail\.qq\.com/,
      provider: QQMailProvider,
    },
    {
      // 测试地址: https://addons.mozilla.org/zh-CN/firefox/addon/evernote-web-clipper/
      name: "Mozilla",
      test: /addons\.mozilla\.org/,
      provider: MozillaProvider,
    },
    {
      // 测试地址: https://www.jianshu.com/p/979776ca44b8
      // https://www.jianshu.com/p/fc8abc65bbb2
      name: "简书",
      test: /www\.jianshu\.com/,
      provider: JianShuProvider,
    },
    {
      // 测试地址: https://www.douban.com/doulist/240962/
      // 测试地址: https://www.douban.com/search?cat=1002&q=%E9%BB%91%E9%95%9C
      name: "豆瓣",
      test: /douban\.com/,
      provider: DouBanProvider,
    },
    {
      // 测试地址: https://getpocket.com/a/recommended/
      // 需要登陆
      name: "Pocket",
      test: /getpocket\.com/,
      provider: PocketProvider,
    },
    {
      // 测试地址: https://www.dogedoge.com/results?q=chrome
      name: "DogeDoge",
      test: /www\.dogedoge\.com/,
      provider: DogeDogeProvider,
    },
    {
      // 测试地址: https://51.ruyo.net/15053.html
      name: "Ruyo",
      test: /51\.ruyo\.net/,
      provider: RuyoProvider,
    },
    {
      // 测试地址: https://steamcommunity.com/sharedfiles/filedetails/?id=1311535531
      name: "Steam",
      test: /steamcommunity\.com/,
      provider: SteamProvider,
    },
    {
      // 测试地址: https://mijisou.com/?q=chrome&category_general=on&time_range=&language=zh-CN&pageno=1
      name: "秘迹",
      test: /mijisou\.com/,
      provider: MiJiProvider,
    },
    {
      // 测试地址: https://github.com/axetroy/anti-redirect/issues/350
      name: "CSDN",
      test: /blog\.csdn\.net/,
      provider: CSDNProvider,
    },
    {
      // 测试地址：https://my.oschina.net/chipo/blog/3067672
      name: "OS China",
      test: /oschina\.net/,
      provider: OSChinaProvider,
    },
    {
      // 测试地址: https://github.com/axetroy/anti-redirect/issues/350
      name: "印象笔记",
      test: /app\.yinxiang\.com/,
      provider: YinXiangProvider,
    },
    {
      // 测试地址: https://cn.bing.com/search?q=GitHub&ensearch=1
      name: "必应中国",
      test: /cn\.bing\.com/,
      provider: CnBingProvider,
    },
  ])
  .bootstrap();
