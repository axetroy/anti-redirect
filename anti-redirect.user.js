// ==UserScript==
// @name              anti-redirect
// @author            Axetroy
// @description       去除重定向, 支持谷歌/百度/搜狗/360/知乎/贴吧/简书/豆瓣/微博...
// @version           2.21.6
// @update            2023-07-20 17:27:53
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


/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const utils_1 = __webpack_require__(2);
let App = exports.App = (() => {
    var _a;
    let _instanceExtraInitializers = [];
    let _onHover_decorators;
    let _onScroll_decorators;
    return _a = class App {
            constructor() {
                this.config = (__runInitializers(this, _instanceExtraInitializers), void 0);
                this.provides = [];
                console.log("%c Anti-Redirect %c Copyright \xa9 2015-%s %s", 'font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;font-size:64px;color:#00bbee;-webkit-text-fill-color:#00bbee;-webkit-text-stroke: 1px #00bbee;', "font-size:12px;color:#999999;", new Date().getFullYear(), "\n" + "Author @Axetroy");
                console.log("[Anti Redirect]: 如果发现页面重定向未去除，欢迎反馈!");
                console.log(`%c[Anti Redirect]: 支付宝搜索 "%c511118132%c" 领取红包支持作者!`, "font-size: 12px;", "font-size: 16px;color: red", "font-size: 12px;");
            }
            /**
             * A 标签是否匹配服务提供者
             * @param aElement
             * @param provider
             */
            isMatchProvider(aElement, provider) {
                if (aElement.getAttribute(utils_1.Marker.RedirectStatusDone)) {
                    return false;
                }
                if (provider.test instanceof RegExp && !provider.test.test(aElement.href)) {
                    return false;
                }
                if (typeof provider.test === "function" && !provider.test(aElement)) {
                    return false;
                }
                if (provider.test instanceof Boolean) {
                    return provider.test;
                }
                return true;
            }
            /**
             * 当鼠标移动到 A 标签上时
             * @param event
             */
            onHover(event) {
                const aElement = event.target;
                if (aElement.tagName !== "A") {
                    return;
                }
                // trigger on hover handler
                for (const provider of this.provides) {
                    if (this.isMatchProvider(aElement, provider)) {
                        provider.resolve(aElement);
                    }
                }
            }
            /**
             * 当页面滚动时
             */
            onScroll() {
                // 筛选所有在可视区域内的A标签
                const visibleElements = [].slice
                    .call(document.querySelectorAll("a[href]"))
                    .filter((aElement) => {
                    return aElement.href.indexOf("http") > -1 && (0, utils_1.isInView)(aElement) && (0, utils_1.getRedirect)(aElement) <= 2;
                });
                // trigger scroll handler
                for (const provider of this.provides) {
                    for (const aElement of visibleElements) {
                        if (this.isMatchProvider(aElement, provider)) {
                            provider.resolve(aElement);
                        }
                    }
                }
            }
            /**
             * 当页面准备就绪时，进行初始化动作
             */
            pageOnReady() {
                return __awaiter(this, void 0, void 0, function* () {
                    for (const provider of this.provides) {
                        if (provider.onInit) {
                            yield provider.onInit();
                        }
                        // 如果页面处于初始的状态，没有滚动过，则出发一次onScroll事件
                        if (window.scrollY <= 0) {
                            this.onScroll();
                        }
                    }
                });
            }
            /**
             * 设置配置
             * @param config
             */
            setConfig(config) {
                this.config = config;
                return this;
            }
            /**
             * 注册服务提供者
             * @param providers
             */
            registerProvider(providers) {
                for (const provideConfig of providers) {
                    // test 如果是 boolean
                    if (provideConfig.test === false) {
                        continue;
                    }
                    // test 如果是正则表达式
                    if (provideConfig.test instanceof RegExp && !provideConfig.test.test(document.domain)) {
                        continue;
                    }
                    // test 如果是一个function
                    if (typeof provideConfig.test === "function" && provideConfig.test() === false) {
                        continue;
                    }
                    const provider = new provideConfig.provider();
                    provider.isDebug = this.config.isDebug;
                    this.provides.push(provider);
                    console.info(`[Anti-redirect]: 加载引擎 ${provideConfig.name}`);
                    console.info(`当前页面: '${location.href}'`);
                }
                return this;
            }
            /**
             * 启动应用
             */
            bootstrap() {
                addEventListener("scroll", this.onScroll.bind(this));
                addEventListener("mousemove", this.onHover.bind(this));
                addEventListener("DOMContentLoaded", this.pageOnReady.bind(this));
            }
        },
        (() => {
            _onHover_decorators = [(0, utils_1.throttleDecorator)(50)];
            _onScroll_decorators = [(0, utils_1.debounceDecorator)(300)];
            __esDecorate(_a, null, _onHover_decorators, { kind: "method", name: "onHover", static: false, private: false, access: { has: obj => "onHover" in obj, get: obj => obj.onHover } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _onScroll_decorators, { kind: "method", name: "onScroll", static: false, private: false, access: { has: obj => "onScroll" in obj, get: obj => obj.onScroll } }, null, _instanceExtraInitializers);
        })(),
        _a;
})();


/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.antiRedirect = exports.decreaseRedirect = exports.increaseRedirect = exports.getRedirect = exports.isInView = exports.debounceDecorator = exports.throttleDecorator = exports.getText = exports.queryParser = exports.matchLinkFromUrl = exports.Marker = void 0;
const debounce = __webpack_require__(3);
const throttle = __webpack_require__(4);
var Marker;
(function (Marker) {
    Marker["RedirectCount"] = "redirect-count";
    Marker["RedirectStatusDone"] = "anti-redirect-origin-href";
})(Marker || (exports.Marker = Marker = {}));
/**
 * 根据url上的路径匹配，去除重定向
 * @param {HTMLAnchorElement} aElement
 * @param {RegExp} tester
 * @returns {boolean}
 */
function matchLinkFromUrl(aElement, tester) {
    const matcher = tester.exec(aElement.href);
    if (!((matcher === null || matcher === void 0 ? void 0 : matcher.length) && matcher[1])) {
        return "";
    }
    let url = "";
    try {
        url = decodeURIComponent(matcher[1]);
    }
    catch (e) {
        url = /https?:\/\//.test(matcher[1]) ? matcher[1] : "";
    }
    return url;
}
exports.matchLinkFromUrl = matchLinkFromUrl;
class Query {
    constructor(queryStr) {
        this.queryStr = queryStr;
        this.object = {};
        this.object = this.toObject(queryStr.replace(/^\?+/, ""));
    }
    toObject(queryStr) {
        const obj = {};
        queryStr.split("&").forEach((item) => {
            const arr = item.split("=") || [];
            let key = arr[0] || "";
            let value = arr[1] || "";
            try {
                key = decodeURIComponent(arr[0] || "");
                value = decodeURIComponent(arr[1] || "");
            }
            catch (err) {
                //
            }
            if (key) {
                obj[key] = value;
            }
        });
        return obj;
    }
    toString() {
        const arr = [];
        for (const key in this.object) {
            if (Object.prototype.hasOwnProperty.call(this.object, key)) {
                const value = this.object[key];
                arr.push(`${key}=${value}`);
            }
        }
        return arr.length ? `?${arr.join("&")}` : "";
    }
}
function queryParser(queryString) {
    return new Query(queryString);
}
exports.queryParser = queryParser;
function getText(htmlElement) {
    return (htmlElement.innerText || htmlElement.textContent).trim();
}
exports.getText = getText;
function throttleDecorator(wait, options = {}) {
    return (originMethod, context) => {
        return throttle(originMethod, wait, options);
    };
}
exports.throttleDecorator = throttleDecorator;
function debounceDecorator(wait, options = {}) {
    return (originMethod, context) => {
        return debounce(originMethod, wait, options);
    };
}
exports.debounceDecorator = debounceDecorator;
function isInView(element) {
    const rect = element.getBoundingClientRect();
    const vWidth = window.innerWidth || document.documentElement.clientWidth;
    const vHeight = window.innerHeight || document.documentElement.clientHeight;
    const efp = (x, y) => {
        return document.elementFromPoint(x, y);
    };
    // Return false if it's not in the viewport
    if (rect.right < 0 || rect.bottom < 0 || rect.left > vWidth || rect.top > vHeight) {
        return false;
    }
    // Return true if any of its four corners are visible
    return (element.contains(efp(rect.left, rect.top)) ||
        element.contains(efp(rect.right, rect.top)) ||
        element.contains(efp(rect.right, rect.bottom)) ||
        element.contains(efp(rect.left, rect.bottom)));
}
exports.isInView = isInView;
function getRedirect(aElement) {
    return +(aElement.getAttribute(Marker.RedirectCount) || 0);
}
exports.getRedirect = getRedirect;
function increaseRedirect(aElement) {
    const num = getRedirect(aElement);
    aElement.setAttribute(Marker.RedirectCount, `${num}${1}`);
}
exports.increaseRedirect = increaseRedirect;
function decreaseRedirect(aElement) {
    const num = getRedirect(aElement);
    if (num > 0) {
        aElement.setAttribute(Marker.RedirectCount, `${num - 1}`);
    }
}
exports.decreaseRedirect = decreaseRedirect;
/**
 * 去除重定向
 * @param aElement A标签元素
 * @param realUrl 真实的地址
 * @param options
 */
function antiRedirect(aElement, realUrl, options = {}) {
    options.debug = typeof options.debug === "undefined" ? "production" !== "production" : options.debug;
    options.force = options.force;
    if (!options.force && (!realUrl || aElement.href === realUrl)) {
        return;
    }
    if (options.debug) {
        aElement.style.backgroundColor = "green";
    }
    aElement.setAttribute(Marker.RedirectStatusDone, aElement.href);
    aElement.href = realUrl;
}
exports.antiRedirect = antiRedirect;


/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = throttle;


/***/ }),
/* 5 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuyoProvider = void 0;
const utils_1 = __webpack_require__(2);
class RuyoProvider {
    constructor() {
        this.test = /\/[^\?]*\?u=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("u"));
    }
}
exports.RuyoProvider = RuyoProvider;


/***/ }),
/* 6 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MozillaProvider = void 0;
const utils_1 = __webpack_require__(2);
class MozillaProvider {
    constructor() {
        this.test = /outgoing\.prod\.mozaws\.net\/v\d\/\w+\/(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, (0, utils_1.matchLinkFromUrl)(aElement, this.test));
    }
}
exports.MozillaProvider = MozillaProvider;


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YinXiangProvider = void 0;
const utils_1 = __webpack_require__(2);
class YinXiangProvider {
    constructor() {
        this.test = /^http:\/\//;
    }
    resolve(aElement) {
        // 编辑器
        if (aElement.hasAttribute("data-mce-href")) {
            if (!aElement.onclick) {
                (0, utils_1.antiRedirect)(aElement, aElement.href, { force: true });
                aElement.onclick = (e) => {
                    // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    aElement.setAttribute("target", "_blank");
                    window.top ? window.top.open(aElement.href) : window.open(aElement.href);
                };
            }
        }
        // 分享页面
        else if (/^https:\/\/app\.yinxiang\.com\/OutboundRedirect\.action\?dest=/.test(aElement.href)) {
            (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("dest"));
        }
    }
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            const handler = (e) => {
                const dom = e.target;
                const tagName = dom.tagName.toUpperCase();
                switch (tagName) {
                    case "A": {
                        this.resolve(dom);
                        break;
                    }
                    case "IFRAME": {
                        if (dom.hasAttribute("anti-redirect-handled")) {
                            return;
                        }
                        dom.setAttribute("anti-redirect-handled", "1");
                        dom.contentWindow.document.addEventListener("mouseover", handler);
                        break;
                    }
                }
            };
            document.addEventListener("mouseover", handler);
            return this;
        });
    }
}
exports.YinXiangProvider = YinXiangProvider;


/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CSDNProvider = void 0;
const utils_1 = __webpack_require__(2);
class CSDNProvider {
    constructor() {
        this.test = /^https?:\/\//;
    }
    resolve(aElement) {
        var _a;
        this.container = document.querySelector("#content_views");
        if ((_a = this.container) === null || _a === void 0 ? void 0 : _a.contains(aElement)) {
            if (!aElement.onclick && aElement.origin !== window.location.origin) {
                (0, utils_1.antiRedirect)(aElement, aElement.href, { force: true });
                aElement.onclick = (e) => {
                    // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                    aElement.setAttribute("target", "_blank");
                };
            }
        }
    }
}
exports.CSDNProvider = CSDNProvider;


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OSChinaProvider = void 0;
const utils_1 = __webpack_require__(2);
class OSChinaProvider {
    constructor() {
        this.test = /oschina\.net\/action\/GoToLink\?url=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("url"));
    }
}
exports.OSChinaProvider = OSChinaProvider;


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhihuDailyProvider = void 0;
const utils_1 = __webpack_require__(2);
class ZhihuDailyProvider {
    constructor() {
        this.test = /zhihu\.com\/\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.ZhihuDailyProvider = ZhihuDailyProvider;


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleDocsProvider = void 0;
const utils_1 = __webpack_require__(2);
class GoogleDocsProvider {
    constructor() {
        this.test = /www\.google\.com\/url\?q=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("q"));
    }
}
exports.GoogleDocsProvider = GoogleDocsProvider;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PocketProvider = void 0;
const utils_1 = __webpack_require__(2);
class PocketProvider {
    constructor() {
        this.test = /getpocket\.com\/redirect\?url=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("url"));
    }
}
exports.PocketProvider = PocketProvider;


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GmailProvider = void 0;
const utils_1 = __webpack_require__(2);
class GmailProvider {
    constructor() {
        this.test = true;
        this.REDIRECT_PROPERTY = "data-saferedirecturl";
    }
    resolve(aElement) {
        // 移除这个属性，那么 a 链接就不会跳转
        // FIXME: gmail 是多层 iframe 嵌套
        if (aElement.getAttribute(this.REDIRECT_PROPERTY)) {
            aElement.removeAttribute(this.REDIRECT_PROPERTY);
            (0, utils_1.antiRedirect)(aElement, aElement.href);
        }
    }
}
exports.GmailProvider = GmailProvider;


/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JuejinProvider = void 0;
const utils_1 = __webpack_require__(2);
class JuejinProvider {
    constructor() {
        this.test = /link\.juejin\.(im|cn)\/\?target=(.*)/;
    }
    resolve(aElement) {
        const finalURL = new URL(aElement.href).searchParams.get("target");
        (0, utils_1.antiRedirect)(aElement, finalURL);
        if (this.test.test(aElement.title)) {
            aElement.title = finalURL;
        }
    }
}
exports.JuejinProvider = JuejinProvider;


/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.QQMailProvider = void 0;
class QQMailProvider {
    constructor() {
        this.test = true;
    }
    resolve(aElement) {
        var _a;
        this.container = document.querySelector("#contentDiv");
        if ((_a = this.container) === null || _a === void 0 ? void 0 : _a.contains(aElement)) {
            if (aElement.onclick) {
                aElement.onclick = (e) => {
                    // 阻止事件冒泡, 因为上层元素绑定的click事件会重定向
                    if (e.stopPropagation) {
                        e.stopPropagation();
                    }
                };
            }
        }
    }
}
exports.QQMailProvider = QQMailProvider;


/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MiJiProvider = void 0;
const utils_1 = __webpack_require__(2);
class MiJiProvider {
    constructor() {
        this.test = /mijisou\.com\/url_proxy\?proxyurl=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("proxyurl"));
    }
}
exports.MiJiProvider = MiJiProvider;


/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GooglePlayProvider = void 0;
const utils_1 = __webpack_require__(2);
class GooglePlayProvider {
    test(aElement) {
        if (/google\.com\/url\?q=(.*)/.test(aElement.href)) {
            return true;
        }
        else if (/^\/store\/apps\/details/.test(location.pathname)) {
            return true;
        }
        return false;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("q"));
        // 移除开发者栏目下的重定向
        const eles = [].slice.call(document.querySelectorAll("a.hrTbp"));
        for (const ele of eles) {
            if (!ele.href) {
                continue;
            }
            if (ele.getAttribute(utils_1.Marker.RedirectStatusDone)) {
                continue;
            }
            ele.setAttribute(utils_1.Marker.RedirectStatusDone, ele.href);
            ele.setAttribute("target", "_blank");
            ele.addEventListener("click", (event) => {
                event.stopPropagation();
            }, true);
        }
    }
}
exports.GooglePlayProvider = GooglePlayProvider;


/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SteamProvider = void 0;
const utils_1 = __webpack_require__(2);
class SteamProvider {
    constructor() {
        this.test = /steamcommunity\.com\/linkfilter\/\?url=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("url"));
    }
}
exports.SteamProvider = SteamProvider;


/***/ }),
/* 19 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TiebaProvider = void 0;
const utils_1 = __webpack_require__(2);
class TiebaProvider {
    constructor() {
        this.test = /jump\d*\.bdimg\.com/;
    }
    resolve(aElement) {
        if (!this.test.test(aElement.href)) {
            return;
        }
        let url = "";
        const text = aElement.innerText || aElement.textContent || "";
        try {
            if (/https?:\/\//.test(text)) {
                url = decodeURIComponent(text);
            }
        }
        catch (e) {
            url = /https?:\/\//.test(text) ? text : "";
        }
        if (url) {
            (0, utils_1.antiRedirect)(aElement, url);
        }
    }
}
exports.TiebaProvider = TiebaProvider;


/***/ }),
/* 20 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TwitterProvider = void 0;
const utils_1 = __webpack_require__(2);
class TwitterProvider {
    constructor() {
        this.test = /t\.co\/\w+/;
    }
    resolve(aElement) {
        if (!this.test.test(aElement.href)) {
            return;
        }
        if (/https?:\/\//.test(aElement.title)) {
            const url = decodeURIComponent(aElement.title);
            (0, utils_1.antiRedirect)(aElement, url);
            return;
        }
        const innerText = aElement.innerText.replace(/…$/, "");
        if (/https?:\/\//.test(innerText)) {
            (0, utils_1.antiRedirect)(aElement, innerText);
            return;
        }
    }
}
exports.TwitterProvider = TwitterProvider;


/***/ }),
/* 21 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaiduVideoProvider = void 0;
const utils_1 = __webpack_require__(2);
const gm_http_1 = __webpack_require__(22);
class BaiduVideoProvider {
    constructor() {
        this.test = /v\.baidu\.com\/link\?url=/;
    }
    resolve(aElement) {
        gm_http_1.default
            .request({
            url: aElement.href,
            method: "GET",
            anonymous: true,
        })
            .then((res) => {
            if (res.finalUrl) {
                (0, utils_1.antiRedirect)(aElement, res.finalUrl);
            }
        })
            .catch((err) => {
            console.error(err);
        });
    }
}
exports.BaiduVideoProvider = BaiduVideoProvider;


/***/ }),
/* 22 */
/***/ (function(module) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_535__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_535__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_535__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_535__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_535__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_535__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_535__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_535__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_535__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_535__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_535__(__nested_webpack_require_535__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Created by axetroy on 17-6-23.
 */
/// <reference path="./index.d.ts" />
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
function isFunction(func) {
    return typeof func === "function";
}
var Http = (function () {
    function Http(config) {
        if (config === void 0) { config = {}; }
        this.config = config;
    }
    Http.prototype.setConfig = function (config) {
        if (config === void 0) { config = {}; }
        this.config = __assign({}, this.config, config);
    };
    Http.prototype.create = function (config) {
        return new Http(config);
    };
    Http.prototype.request = function (config) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var commonRequestConfig = {
                method: config.method,
                url: config.url,
                data: config.body,
                header: config.headers
            };
            var GM_xmlhttpRequestConfig = __assign({}, commonRequestConfig, config, _this.config);
            var onreadystatechange = GM_xmlhttpRequestConfig.onreadystatechange, onerror = GM_xmlhttpRequestConfig.onerror, onabort = GM_xmlhttpRequestConfig.onabort, ontimeout = GM_xmlhttpRequestConfig.ontimeout;
            GM_xmlhttpRequestConfig.synchronous = true; // async
            GM_xmlhttpRequestConfig.onreadystatechange = function (response) {
                try {
                    isFunction(onreadystatechange) &&
                        onreadystatechange.call(this, response);
                }
                catch (err) {
                    reject(err);
                }
                if (response.readyState !== 4)
                    return;
                response.status >= 200 && response.status < 400
                    ? resolve(response)
                    : reject(response);
            };
            GM_xmlhttpRequestConfig.onerror = function (response) {
                try {
                    isFunction(onerror) && onerror.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            GM_xmlhttpRequestConfig.onabort = function (response) {
                try {
                    isFunction(onabort) && onabort.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            GM_xmlhttpRequestConfig.ontimeout = function (response) {
                try {
                    isFunction(ontimeout) && ontimeout.call(this, response);
                    reject(response);
                }
                catch (err) {
                    reject(err);
                }
            };
            if (_this.config.debug) {
                console.log("%c[" + commonRequestConfig.method.toUpperCase() + "]%c: " + commonRequestConfig.url, "color: green", "color: #000;text-style: under-line");
            }
            GM_xmlhttpRequest(__assign({}, GM_xmlhttpRequestConfig));
        });
    };
    Http.prototype.get = function (url, data, headers, config) {
        if (headers === void 0) { headers = {}; }
        if (config === void 0) { config = {}; }
        return this.request(__assign({ url: url, method: "GET", body: data, headers: headers }, config));
    };
    Http.prototype.post = function (url, data, headers, config) {
        if (headers === void 0) { headers = {}; }
        if (config === void 0) { config = {}; }
        return this.request(__assign({ url: url, method: "POST", body: data, headers: headers }, config));
    };
    Http.prototype.put = function (url, data, headers, config) {
        if (headers === void 0) { headers = {}; }
        if (config === void 0) { config = {}; }
        return this.request(__assign({ url: url, method: "POST", body: data, headers: headers }, config));
    };
    Http.prototype["delete"] = function (url, data, headers, config) {
        if (headers === void 0) { headers = {}; }
        if (config === void 0) { config = {}; }
        return this.request(__assign({ url: url, method: "DELETE", body: data, headers: headers }, config));
    };
    Http.prototype.head = function (url, data, headers, config) {
        if (headers === void 0) { headers = {}; }
        if (config === void 0) { config = {}; }
        return this.request(__assign({ url: url, method: "HEAD", body: data, headers: headers }, config));
    };
    return Http;
}());
exports.Http = Http;
var timeout = 5000;
exports.timeout = timeout;
var http = new Http({ timeout: timeout });
exports.http = http;
exports.default = http;


/***/ })
/******/ ]);
});

/***/ }),
/* 23 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WeboProvider = void 0;
const utils_1 = __webpack_require__(2);
class WeboProvider {
    constructor() {
        this.test = /t\.cn\/\w+/;
    }
    resolve(aElement) {
        if (!(this.test.test(aElement.href) && /^https?:\/\//.test(aElement.title))) {
            return;
        }
        const url = decodeURIComponent(aElement.title);
        if (url) {
            aElement.href = url;
            (0, utils_1.antiRedirect)(aElement, url);
        }
    }
}
exports.WeboProvider = WeboProvider;


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaiduProvider = void 0;
const utils_1 = __webpack_require__(2);
const gm_http_1 = __webpack_require__(22);
const p_retry_1 = __webpack_require__(25);
class BaiduProvider {
    constructor() {
        this.test = /www\.baidu\.com\/link\?url=/;
    }
    resolve(aElement) {
        console.log(aElement);
        if ((0, utils_1.getRedirect)(aElement) <= 2 && this.test.test(aElement.href)) {
            (0, utils_1.increaseRedirect)(aElement);
            (0, p_retry_1.default)(() => this.handlerOneElement(aElement), { retries: 3 })
                .then((res) => {
                (0, utils_1.decreaseRedirect)(aElement);
            })
                .catch((err) => {
                (0, utils_1.decreaseRedirect)(aElement);
            });
        }
    }
    handlerOneElement(aElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield gm_http_1.default.request({
                    url: aElement.href,
                    method: "GET",
                    anonymous: true,
                });
                if (res.finalUrl) {
                    (0, utils_1.antiRedirect)(aElement, res.finalUrl);
                }
                return res;
            }
            catch (err) {
                console.error(err);
                return Promise.reject(new Error(`[http]: ${aElement.href} fail`));
            }
        });
    }
}
exports.BaiduProvider = BaiduProvider;


/***/ }),
/* 25 */
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AbortError": () => (/* binding */ AbortError),
/* harmony export */   "default": () => (/* binding */ pRetry)
/* harmony export */ });
/* harmony import */ var retry__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);


const networkErrorMsgs = new Set([
	'Failed to fetch', // Chrome
	'NetworkError when attempting to fetch resource.', // Firefox
	'The Internet connection appears to be offline.', // Safari
	'Network request failed', // `cross-fetch`
	'fetch failed', // Undici (Node.js)
]);

class AbortError extends Error {
	constructor(message) {
		super();

		if (message instanceof Error) {
			this.originalError = message;
			({message} = message);
		} else {
			this.originalError = new Error(message);
			this.originalError.stack = this.stack;
		}

		this.name = 'AbortError';
		this.message = message;
	}
}

const decorateErrorWithCounts = (error, attemptNumber, options) => {
	// Minus 1 from attemptNumber because the first attempt does not count as a retry
	const retriesLeft = options.retries - (attemptNumber - 1);

	error.attemptNumber = attemptNumber;
	error.retriesLeft = retriesLeft;
	return error;
};

const isNetworkError = errorMessage => networkErrorMsgs.has(errorMessage);

const getDOMException = errorMessage => globalThis.DOMException === undefined
	? new Error(errorMessage)
	: new DOMException(errorMessage);

async function pRetry(input, options) {
	return new Promise((resolve, reject) => {
		options = {
			onFailedAttempt() {},
			retries: 10,
			...options,
		};

		const operation = retry__WEBPACK_IMPORTED_MODULE_0__.operation(options);

		operation.attempt(async attemptNumber => {
			try {
				resolve(await input(attemptNumber));
			} catch (error) {
				if (!(error instanceof Error)) {
					reject(new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`));
					return;
				}

				if (error instanceof AbortError) {
					operation.stop();
					reject(error.originalError);
				} else if (error instanceof TypeError && !isNetworkError(error.message)) {
					operation.stop();
					reject(error);
				} else {
					decorateErrorWithCounts(error, attemptNumber, options);

					try {
						await options.onFailedAttempt(error);
					} catch (error) {
						reject(error);
						return;
					}

					if (!operation.retry(error)) {
						reject(operation.mainError());
					}
				}
			}
		});

		if (options.signal && !options.signal.aborted) {
			options.signal.addEventListener('abort', () => {
				operation.stop();
				const reason = options.signal.reason === undefined
					? getDOMException('The operation was aborted.')
					: options.signal.reason;
				reject(reason instanceof Error ? reason : getDOMException(reason));
			}, {
				once: true,
			});
		}
	});
}


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(27);

/***/ }),
/* 27 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var RetryOperation = __webpack_require__(28);

exports.operation = function(options) {
  var timeouts = exports.timeouts(options);
  return new RetryOperation(timeouts, {
      forever: options && (options.forever || options.retries === Infinity),
      unref: options && options.unref,
      maxRetryTime: options && options.maxRetryTime
  });
};

exports.timeouts = function(options) {
  if (options instanceof Array) {
    return [].concat(options);
  }

  var opts = {
    retries: 10,
    factor: 2,
    minTimeout: 1 * 1000,
    maxTimeout: Infinity,
    randomize: false
  };
  for (var key in options) {
    opts[key] = options[key];
  }

  if (opts.minTimeout > opts.maxTimeout) {
    throw new Error('minTimeout is greater than maxTimeout');
  }

  var timeouts = [];
  for (var i = 0; i < opts.retries; i++) {
    timeouts.push(this.createTimeout(i, opts));
  }

  if (options && options.forever && !timeouts.length) {
    timeouts.push(this.createTimeout(i, opts));
  }

  // sort the array numerically ascending
  timeouts.sort(function(a,b) {
    return a - b;
  });

  return timeouts;
};

exports.createTimeout = function(attempt, opts) {
  var random = (opts.randomize)
    ? (Math.random() + 1)
    : 1;

  var timeout = Math.round(random * Math.max(opts.minTimeout, 1) * Math.pow(opts.factor, attempt));
  timeout = Math.min(timeout, opts.maxTimeout);

  return timeout;
};

exports.wrap = function(obj, options, methods) {
  if (options instanceof Array) {
    methods = options;
    options = null;
  }

  if (!methods) {
    methods = [];
    for (var key in obj) {
      if (typeof obj[key] === 'function') {
        methods.push(key);
      }
    }
  }

  for (var i = 0; i < methods.length; i++) {
    var method   = methods[i];
    var original = obj[method];

    obj[method] = function retryWrapper(original) {
      var op       = exports.operation(options);
      var args     = Array.prototype.slice.call(arguments, 1);
      var callback = args.pop();

      args.push(function(err) {
        if (op.retry(err)) {
          return;
        }
        if (err) {
          arguments[0] = op.mainError();
        }
        callback.apply(this, arguments);
      });

      op.attempt(function() {
        original.apply(obj, args);
      });
    }.bind(obj, original);
    obj[method].options = options;
  }
};


/***/ }),
/* 28 */
/***/ ((module) => {

function RetryOperation(timeouts, options) {
  // Compatibility for the old (timeouts, retryForever) signature
  if (typeof options === 'boolean') {
    options = { forever: options };
  }

  this._originalTimeouts = JSON.parse(JSON.stringify(timeouts));
  this._timeouts = timeouts;
  this._options = options || {};
  this._maxRetryTime = options && options.maxRetryTime || Infinity;
  this._fn = null;
  this._errors = [];
  this._attempts = 1;
  this._operationTimeout = null;
  this._operationTimeoutCb = null;
  this._timeout = null;
  this._operationStart = null;
  this._timer = null;

  if (this._options.forever) {
    this._cachedTimeouts = this._timeouts.slice(0);
  }
}
module.exports = RetryOperation;

RetryOperation.prototype.reset = function() {
  this._attempts = 1;
  this._timeouts = this._originalTimeouts.slice(0);
}

RetryOperation.prototype.stop = function() {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }
  if (this._timer) {
    clearTimeout(this._timer);
  }

  this._timeouts       = [];
  this._cachedTimeouts = null;
};

RetryOperation.prototype.retry = function(err) {
  if (this._timeout) {
    clearTimeout(this._timeout);
  }

  if (!err) {
    return false;
  }
  var currentTime = new Date().getTime();
  if (err && currentTime - this._operationStart >= this._maxRetryTime) {
    this._errors.push(err);
    this._errors.unshift(new Error('RetryOperation timeout occurred'));
    return false;
  }

  this._errors.push(err);

  var timeout = this._timeouts.shift();
  if (timeout === undefined) {
    if (this._cachedTimeouts) {
      // retry forever, only keep last error
      this._errors.splice(0, this._errors.length - 1);
      timeout = this._cachedTimeouts.slice(-1);
    } else {
      return false;
    }
  }

  var self = this;
  this._timer = setTimeout(function() {
    self._attempts++;

    if (self._operationTimeoutCb) {
      self._timeout = setTimeout(function() {
        self._operationTimeoutCb(self._attempts);
      }, self._operationTimeout);

      if (self._options.unref) {
          self._timeout.unref();
      }
    }

    self._fn(self._attempts);
  }, timeout);

  if (this._options.unref) {
      this._timer.unref();
  }

  return true;
};

RetryOperation.prototype.attempt = function(fn, timeoutOps) {
  this._fn = fn;

  if (timeoutOps) {
    if (timeoutOps.timeout) {
      this._operationTimeout = timeoutOps.timeout;
    }
    if (timeoutOps.cb) {
      this._operationTimeoutCb = timeoutOps.cb;
    }
  }

  var self = this;
  if (this._operationTimeoutCb) {
    this._timeout = setTimeout(function() {
      self._operationTimeoutCb();
    }, self._operationTimeout);
  }

  this._operationStart = new Date().getTime();

  this._fn(this._attempts);
};

RetryOperation.prototype.try = function(fn) {
  console.log('Using RetryOperation.try() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = function(fn) {
  console.log('Using RetryOperation.start() is deprecated');
  this.attempt(fn);
};

RetryOperation.prototype.start = RetryOperation.prototype.try;

RetryOperation.prototype.errors = function() {
  return this._errors;
};

RetryOperation.prototype.attempts = function() {
  return this._attempts;
};

RetryOperation.prototype.mainError = function() {
  if (this._errors.length === 0) {
    return null;
  }

  var counts = {};
  var mainError = null;
  var mainErrorCount = 0;

  for (var i = 0; i < this._errors.length; i++) {
    var error = this._errors[i];
    var message = error.message;
    var count = (counts[message] || 0) + 1;

    counts[message] = count;

    if (count >= mainErrorCount) {
      mainError = error;
      mainErrorCount = count;
    }
  }

  return mainError;
};


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DogeDogeProvider = void 0;
const utils_1 = __webpack_require__(2);
const gm_http_1 = __webpack_require__(22);
class DogeDogeProvider {
    constructor() {
        this.test = /www\.dogedoge\.com\/rd\/.{1,}/;
    }
    resolve(aElement) {
        if ((0, utils_1.getRedirect)(aElement) <= 2 && this.test.test(aElement.href)) {
            (0, utils_1.increaseRedirect)(aElement);
            this.handlerOneElement(aElement)
                .then((res) => {
                (0, utils_1.decreaseRedirect)(aElement);
            })
                .catch((err) => {
                (0, utils_1.decreaseRedirect)(aElement);
            });
        }
    }
    handlerOneElement(aElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const res = yield gm_http_1.default.request({
                    url: aElement.href,
                    method: "GET",
                    anonymous: true,
                });
                if (res.finalUrl) {
                    (0, utils_1.antiRedirect)(aElement, res.finalUrl);
                }
                return res;
            }
            catch (err) {
                console.error(err);
            }
        });
    }
}
exports.DogeDogeProvider = DogeDogeProvider;


/***/ }),
/* 30 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DouBanProvider = void 0;
const utils_1 = __webpack_require__(2);
class DouBanProvider {
    constructor() {
        this.test = /douban\.com\/link2\/?\?url=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("url"));
    }
}
exports.DouBanProvider = DouBanProvider;


/***/ }),
/* 31 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleProvider = void 0;
const utils_1 = __webpack_require__(2);
class GoogleProvider {
    constructor() {
        this.test = true;
    }
    resolve(aElement) {
        const traceProperties = ["ping", "data-jsarwt", "data-usg", "data-ved"];
        // 移除追踪
        for (const property of traceProperties) {
            if (aElement.getAttribute(property)) {
                aElement.removeAttribute(property);
            }
        }
        // 移除多余的事件
        if (aElement.getAttribute("onmousedown")) {
            aElement.removeAttribute("onmousedown");
        }
        // 尝试去除重定向
        if (aElement.getAttribute("data-href")) {
            const realUrl = aElement.getAttribute("data-href");
            (0, utils_1.antiRedirect)(aElement, realUrl);
        }
        const url = new URL(aElement.href);
        if (url.searchParams.get("url")) {
            (0, utils_1.antiRedirect)(aElement, url.searchParams.get("url"));
        }
    }
}
exports.GoogleProvider = GoogleProvider;


/***/ }),
/* 32 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JianShuProvider = void 0;
const utils_1 = __webpack_require__(2);
class JianShuProvider {
    constructor() {
        this.test = (aElement) => {
            const isLink1 = /links\.jianshu\.com\/go/.test(aElement.href);
            const isLink2 = /link\.jianshu\.com(\/)?\?t=/.test(aElement.href);
            const isLink3 = /jianshu\.com\/go-wild\/?\?(.*)url=/.test(aElement.href);
            if (isLink1 || isLink2 || isLink3) {
                return true;
            }
            return false;
        };
    }
    resolve(aElement) {
        const search = new URL(aElement.href).searchParams;
        (0, utils_1.antiRedirect)(aElement, search.get("to") || search.get("t") || search.get("url"));
    }
}
exports.JianShuProvider = JianShuProvider;


/***/ }),
/* 33 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoProvider = void 0;
const utils_1 = __webpack_require__(2);
class SoProvider {
    constructor() {
        this.test = /so\.com\/link\?(.*)/;
    }
    resolve(aElement) {
        const url = aElement.getAttribute("data-mdurl") || aElement.getAttribute("e-landurl");
        if (url) {
            (0, utils_1.antiRedirect)(aElement, url);
        }
        // remove track
        aElement.removeAttribute("e_href");
        aElement.removeAttribute("data-res");
    }
}
exports.SoProvider = SoProvider;


/***/ }),
/* 34 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SoGouProvider = void 0;
const utils_1 = __webpack_require__(2);
const gm_http_1 = __webpack_require__(22);
class SoGouProvider {
    constructor() {
        this.test = /www\.sogou\.com\/link\?url=/;
    }
    resolve(aElement) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                if ((0, utils_1.getRedirect)(aElement) <= 2 && this.test.test(aElement.href)) {
                    (0, utils_1.increaseRedirect)(aElement);
                    const res = yield gm_http_1.default.request({
                        url: aElement.href,
                        method: "GET",
                        anonymous: true,
                    });
                    (0, utils_1.decreaseRedirect)(aElement);
                    const finalUrl = res.finalUrl;
                    if (finalUrl && !this.test.test(finalUrl)) {
                        (0, utils_1.antiRedirect)(aElement, res.finalUrl);
                    }
                    else {
                        const matcher = res.responseText.match(/URL=['"]([^'"]+)['"]/);
                        if (matcher === null || matcher === void 0 ? void 0 : matcher[1]) {
                            (0, utils_1.antiRedirect)(aElement, res.finalUrl);
                        }
                    }
                }
            }
            catch (err) {
                (0, utils_1.decreaseRedirect)(aElement);
                console.error(err);
            }
        });
    }
    parsePage(res) {
        const responseText = res.responseText.replace(/(src=[^>]*|link=[^>])/g, "");
        const html = document.createElement("html");
        html.innerHTML = responseText;
        // let selector = '#main .results div.vrwrap>h3';
        // let selector = '#main .results h3>a';
        const selector = '#main .results a[href*="www.sogou.com/link?url="]';
        const remotes = [].slice.call(html.querySelectorAll("#main .results a[href]"));
        const locals = [].slice.call(document.querySelectorAll(selector));
        for (const localEle of locals) {
            for (const remoteEle of remotes) {
                let localText = (0, utils_1.getText)(localEle);
                let remoteText = (0, utils_1.getText)(remoteEle);
                // 通用按钮，例如【点击下载】
                if (localEle.classList.contains("str-public-btn")) {
                    localText = (0, utils_1.getText)(localEle.parentNode);
                    remoteText = (0, utils_1.getText)(remoteEle.parentNode);
                }
                else if (localEle.classList.contains("str_img")) {
                    // 图片
                    localText = (0, utils_1.getText)(localEle.parentNode.parentNode);
                    remoteText = (0, utils_1.getText)(remoteEle.parentNode.parentNode);
                }
                if (!localText || localText !== remoteText) {
                    return;
                }
                (0, utils_1.antiRedirect)(localEle, remoteEle.href);
            }
        }
    }
    onInit() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!/www\.sogou\.com\/web/.test(window.top.location.href)) {
                return;
            }
            const query = (0, utils_1.queryParser)(window.top.location.search);
            // 搜索使用http搜索，得到的是直接链接
            const url = `${location.protocol.replace(/:$/, "").replace("s", "")}://${location.host + location.pathname + query}`;
            gm_http_1.default
                .get(url)
                .then((res) => {
                this.parsePage(res);
            })
                .catch((err) => {
                console.error(err);
            });
            return this;
        });
    }
}
exports.SoGouProvider = SoGouProvider;


/***/ }),
/* 35 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.YoutubeProvider = void 0;
const utils_1 = __webpack_require__(2);
class YoutubeProvider {
    constructor() {
        this.test = /www\.youtube\.com\/redirect\?.{1,}/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("q"));
    }
}
exports.YoutubeProvider = YoutubeProvider;


/***/ }),
/* 36 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhihuProvider = void 0;
const utils_1 = __webpack_require__(2);
class ZhihuProvider {
    constructor() {
        this.test = /zhihu\.com\/\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.ZhihuProvider = ZhihuProvider;


/***/ }),
/* 37 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaiduXueshuProvider = void 0;
const utils_1 = __webpack_require__(2);
class BaiduXueshuProvider {
    constructor() {
        this.test = /xueshu\.baidu\.com\/s?\?(.*)/; // 此处无用
    }
    resolve(aElement) {
        const realHref = aElement.getAttribute("data-link") || aElement.getAttribute("data-url");
        if (realHref) {
            (0, utils_1.antiRedirect)(aElement, decodeURIComponent(realHref));
        }
    }
}
exports.BaiduXueshuProvider = BaiduXueshuProvider;


/***/ }),
/* 38 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZhihuZhuanlanProvider = void 0;
const utils_1 = __webpack_require__(2);
class ZhihuZhuanlanProvider {
    constructor() {
        this.test = /link\.zhihu\.com\/\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.ZhihuZhuanlanProvider = ZhihuZhuanlanProvider;


/***/ }),
/* 39 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LogonewsProvider = void 0;
const utils_1 = __webpack_require__(2);
class LogonewsProvider {
    constructor() {
        this.test = /link\.logonews\.cn\/\?url=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("url"));
    }
}
exports.LogonewsProvider = LogonewsProvider;


/***/ }),
/* 40 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AfDianNetProvider = void 0;
const utils_1 = __webpack_require__(2);
class AfDianNetProvider {
    constructor() {
        this.test = /afdian\.net\/link\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.AfDianNetProvider = AfDianNetProvider;


/***/ }),
/* 41 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Blog51CTO = void 0;
class Blog51CTO {
    constructor() {
        this.test = true;
    }
    resolve(aElement) {
        var _a;
        this.container = document.querySelector(".article-detail");
        if ((_a = this.container) === null || _a === void 0 ? void 0 : _a.contains(aElement)) {
            if (!aElement.onclick && aElement.href) {
                aElement.onclick = function antiRedirectOnClickFn(e) {
                    e.stopPropagation();
                    e.preventDefault();
                    e.stopImmediatePropagation();
                    const $a = document.createElement("a");
                    $a.href = aElement.href;
                    $a.target = aElement.target;
                    $a.click();
                };
            }
        }
    }
}
exports.Blog51CTO = Blog51CTO;


/***/ }),
/* 42 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InfoQProvider = void 0;
const utils_1 = __webpack_require__(2);
class InfoQProvider {
    constructor() {
        this.test = /infoq\.cn\/link\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.InfoQProvider = InfoQProvider;


/***/ }),
/* 43 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GiteeProvider = void 0;
const utils_1 = __webpack_require__(2);
class GiteeProvider {
    constructor() {
        this.test = /gitee\.com\/link\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.GiteeProvider = GiteeProvider;


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSPaiProvider = void 0;
const utils_1 = __webpack_require__(2);
class SSPaiProvider {
    constructor() {
        this.test = /sspai\.com\/link\?target=(.*)/;
    }
    resolve(aElement) {
        (0, utils_1.antiRedirect)(aElement, new URL(aElement.href).searchParams.get("target"));
    }
}
exports.SSPaiProvider = SSPaiProvider;


/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(1);
const _51_ruyo_net_1 = __webpack_require__(5);
const addons_mozilla_org_1 = __webpack_require__(6);
const app_yinxiang_com_1 = __webpack_require__(7);
const blog_csdn_net_1 = __webpack_require__(8);
const oschina_com_1 = __webpack_require__(9);
const daily_zhihu_com_1 = __webpack_require__(10);
const docs_google_com_1 = __webpack_require__(11);
const getpocket_com_1 = __webpack_require__(12);
const gmail_google_com_1 = __webpack_require__(13);
const juejin_com_1 = __webpack_require__(14);
const mail_qq_com_1 = __webpack_require__(15);
const mijisou_com_1 = __webpack_require__(16);
const play_google_com_1 = __webpack_require__(17);
const steamcommunity_com_1 = __webpack_require__(18);
const tieba_baidu_com_1 = __webpack_require__(19);
const twitter_com_1 = __webpack_require__(20);
const video_baidu_com_1 = __webpack_require__(21);
const weibo_com_1 = __webpack_require__(23);
const www_baidu_com_1 = __webpack_require__(24);
const www_dogedoge_com_1 = __webpack_require__(29);
const www_douban_com_1 = __webpack_require__(30);
const www_google_com_1 = __webpack_require__(31);
const www_jianshu_com_1 = __webpack_require__(32);
const www_so_com_1 = __webpack_require__(33);
const www_sogou_com_1 = __webpack_require__(34);
const www_youtube_com_1 = __webpack_require__(35);
const www_zhihu_com_1 = __webpack_require__(36);
const xueshu_baidu_com_1 = __webpack_require__(37);
const zhuanlan_zhihu_com_1 = __webpack_require__(38);
const www_logonews_cn_1 = __webpack_require__(39);
const afadian_net_1 = __webpack_require__(40);
const blog_51cto_com_1 = __webpack_require__(41);
const infoq_cn_1 = __webpack_require__(42);
const gitee_com_1 = __webpack_require__(43);
const sspai_com_1 = __webpack_require__(44);
const gm_http_1 = __webpack_require__(22);
const app = new app_1.App();
const isDebug = "production" !== "production";
gm_http_1.default.setConfig({ debug: isDebug });
app
    .setConfig({ isDebug })
    .registerProvider([
    {
        // 测试地址: https://www.zhihu.com/question/25258775
        name: "知乎",
        test: /www\.zhihu\.com/,
        provider: www_zhihu_com_1.ZhihuProvider,
    },
    {
        // 测试地址: https://zhuanlan.zhihu.com/p/20549978
        name: "知乎专栏",
        test: /zhuanlan\.zhihu\.com/,
        provider: zhuanlan_zhihu_com_1.ZhihuZhuanlanProvider,
    },
    {
        // 测试地址:
        name: "知乎日报",
        test: /daily\.zhihu\.com/,
        provider: daily_zhihu_com_1.ZhihuDailyProvider,
    },
    {
        name: "Google搜索",
        test: /\w+\.google\./,
        provider: www_google_com_1.GoogleProvider,
    },
    {
        // 测试地址: https://docs.google.com/spreadsheets/d/1TFcEXMcKrwoIAECIVyBU0GPoSmRqZ7A0VBvqeKYVSww/htmlview
        name: "Google Docs",
        test: /docs\.google\.com/,
        provider: docs_google_com_1.GoogleDocsProvider,
    },
    {
        name: "Gmail",
        test: /mail\.google\.com/,
        provider: gmail_google_com_1.GmailProvider,
    },
    {
        // 测试地址: https://play.google.com/store/movies/details/%E7%A7%BB%E5%8B%95%E8%BF%B7%E5%AE%AE_%E6%AD%BB%E4%BA%A1%E8%A7%A3%E8%97%A5?id=YNy7gRqwtMk
        name: "Google Play",
        test: /play\.google\.com/,
        provider: play_google_com_1.GooglePlayProvider,
    },
    {
        // 测试地址: https://www.youtube.com/watch?v=XTXSRRSv1bY
        name: "Google Youtube",
        test: /www\.youtube\.com/,
        provider: www_youtube_com_1.YoutubeProvider,
    },
    {
        // 测试地址: https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=chrome
        name: "360搜索",
        test: /www\.so\.com/,
        provider: www_so_com_1.SoProvider,
    },
    {
        name: "新浪微博",
        test: /\.weibo\.com/,
        provider: weibo_com_1.WeboProvider,
    },
    // 测试: https://twitter.com/ftium4/status/1512815116810522631
    {
        name: "Twitter",
        test: /twitter\.com/,
        provider: twitter_com_1.TwitterProvider,
    },
    {
        // 测试: http://www.sogou.com/web?query=chrome&_asf=www.sogou.com&_ast=&w=01019900&p=40040100&ie=utf8&from=index-nologin&s_from=index&sut=1527&sst0=1504347367611&lkt=0%2C0%2C0&sugsuv=00091651B48CA45F593B61A29B131405&sugtime=1504347367611
        name: "搜狗搜索",
        test: /www\.sogou\.com/,
        provider: www_sogou_com_1.SoGouProvider,
    },
    {
        // 测试: https://www.baidu.com/s?wd=chrome&rsv_spt=1&rsv_iqid=0xcb136237000ed40e&issp=1&f=8&rsv_bp=0&rsv_idx=2&ie=utf-8&tn=baidulocal&rsv_enter=1&rsv_sug3=7&rsv_sug1=7&rsv_sug7=101&rsv_sug2=0&inputT=813&rsv_sug4=989&timestamp=1504349229266&rn=50&vf_bl=1
        name: "百度搜索",
        test: /www\.baidu\.com/,
        provider: www_baidu_com_1.BaiduProvider,
    },
    {
        // 测试: https://www.baidu.com/s?wd=chrome&pn=20&oq=chrome&tn=baiduhome_pg&ie=utf-8&usm=3&rsv_idx=2&rsv_pq=e043900d0000752d&rsv_t=6bb0UqEwp2Tle6TAMBDlU3Wg%2BSxoqvvOhZKyQgM%2BVQP8Gc54QZLhcDcj62eGfNG75aq5&rsv_page=1
        name: "百度视频",
        test: /v\.baidu\.com/,
        provider: video_baidu_com_1.BaiduVideoProvider,
    },
    {
        // 测试: http://xueshu.baidu.com/s?wd=paperuri%3A%28ae4d6b5da05eca552dab05aeefb966e6%29&ie=utf-8&filter=sc_long_sign&sc_ks_para=q%3D%E2%80%9C%E4%BA%92%E8%81%94%E7%BD%91%2B%E5%81%A5%E5%BA%B7%E7%AE%A1%E7%90%86%E2%80%9D%E6%A8%A1%E5%BC%8F%E6%8E%A2%E8%AE%A8%E5%8F%8A%E5%85%B6%E5%BA%94%E7%94%A8&tn=SE_baiduxueshu_c1gjeupa
        name: "百度学术",
        test: /xueshu\.baidu\.com/,
        provider: xueshu_baidu_com_1.BaiduXueshuProvider,
    },
    {
        // 测试地址: http://tieba.baidu.com/p/5300844180
        name: "百度贴吧",
        test: /tieba\.baidu\.com/,
        provider: tieba_baidu_com_1.TiebaProvider,
    },
    {
        // 测试地址: https://juejin.im/entry/59ac8fa551882524241a8802?utm_source=gold_browser_extension
        name: "掘金",
        test: /juejin\.(im|cn)/,
        provider: juejin_com_1.JuejinProvider,
    },
    {
        name: "QQ邮箱",
        test: /mail\.qq\.com/,
        provider: mail_qq_com_1.QQMailProvider,
    },
    {
        // 测试地址: https://addons.mozilla.org/zh-CN/firefox/addon/evernote-web-clipper/
        name: "Mozilla",
        test: /addons\.mozilla\.org/,
        provider: addons_mozilla_org_1.MozillaProvider,
    },
    {
        // 测试地址: https://www.jianshu.com/p/979776ca44b8
        // https://www.jianshu.com/p/fc8abc65bbb2
        name: "简书",
        test: /www\.jianshu\.com/,
        provider: www_jianshu_com_1.JianShuProvider,
    },
    {
        // 测试地址: https://www.douban.com/doulist/240962/
        // 测试地址: https://www.douban.com/search?cat=1002&q=%E9%BB%91%E9%95%9C
        name: "豆瓣",
        test: /douban\.com/,
        provider: www_douban_com_1.DouBanProvider,
    },
    {
        // 测试地址: https://getpocket.com/a/recommended/
        // 需要登陆
        name: "Pocket",
        test: /getpocket\.com/,
        provider: getpocket_com_1.PocketProvider,
    },
    {
        // 测试地址: https://www.dogedoge.com/results?q=chrome
        name: "DogeDoge",
        test: /www\.dogedoge\.com/,
        provider: www_dogedoge_com_1.DogeDogeProvider,
    },
    {
        // 测试地址: https://51.ruyo.net/15053.html
        name: "Ruyo",
        test: /51\.ruyo\.net/,
        provider: _51_ruyo_net_1.RuyoProvider,
    },
    {
        // 测试地址: https://steamcommunity.com/sharedfiles/filedetails/?id=1311535531
        name: "Steam",
        test: /steamcommunity\.com/,
        provider: steamcommunity_com_1.SteamProvider,
    },
    {
        // 测试地址: https://mijisou.com/?q=chrome&category_general=on&time_range=&language=zh-CN&pageno=1
        name: "秘迹",
        test: /mijisou\.com/,
        provider: mijisou_com_1.MiJiProvider,
    },
    {
        // 测试地址: https://github.com/axetroy/anti-redirect/issues/350
        name: "CSDN",
        test: /blog\.csdn\.net/,
        provider: blog_csdn_net_1.CSDNProvider,
    },
    {
        // 测试地址：https://my.oschina.net/chipo/blog/3067672
        name: "OS China",
        test: /oschina\.net/,
        provider: oschina_com_1.OSChinaProvider,
    },
    {
        // 测试地址: https://github.com/axetroy/anti-redirect/issues/350
        name: "印象笔记",
        test: /app\.yinxiang\.com/,
        provider: app_yinxiang_com_1.YinXiangProvider,
    },
    {
        // 测试地址: https://www.logonews.cn/2021073002420141.html
        name: "标志情报局",
        test: /www\.logonews\.cn/,
        provider: www_logonews_cn_1.LogonewsProvider,
    },
    {
        // 测试地址: https://afdian.net/a/xiaofanEric
        name: "爱发电",
        test: /afdian\.net/,
        provider: afadian_net_1.AfDianNetProvider,
    },
    {
        // 测试地址: https://blog.51cto.com/u_11512826/2068421
        name: "51CTO博客",
        test: /blog\.51cto\.com/,
        provider: blog_51cto_com_1.Blog51CTO,
    },
    {
        // 测试地址: https://xie.infoq.cn/link?target=https%3A%2F%2Fwww.finclip.com%2F%3Fchannel%3Dinfoqseo
        name: 'InfoQ',
        test: /infoq\.cn/,
        provider: infoq_cn_1.InfoQProvider
    },
    {
        // 测试地址: https://gitee.com/Tencent/ncnn
        name: 'Gitee',
        test: /gitee.com/,
        provider: gitee_com_1.GiteeProvider
    },
    {
        // 测试地址: https://sspai.com/post/77499
        name: '少数派',
        test: /sspai\.com/,
        provider: sspai_com_1.SSPaiProvider
    }
])
    .bootstrap();

})();

/******/ })()
;