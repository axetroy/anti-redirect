// ==UserScript==
// @name              anti-redirect
// @author            Axetroy
// @description       去除重定向, 支持谷歌/百度/搜狗/360/知乎/贴吧/简书/豆瓣/微博...
// @version           2.21.7
// @update            2023-09-03 13:51:39
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
let App = (() => {
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
            const _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
            _onHover_decorators = [(0, utils_1.throttleDecorator)(50)];
            _onScroll_decorators = [(0, utils_1.debounceDecorator)(300)];
            __esDecorate(_a, null, _onHover_decorators, { kind: "method", name: "onHover", static: false, private: false, access: { has: obj => "onHover" in obj, get: obj => obj.onHover }, metadata: _metadata }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _onScroll_decorators, { kind: "method", name: "onScroll", static: false, private: false, access: { has: obj => "onScroll" in obj, get: obj => obj.onScroll }, metadata: _metadata }, null, _instanceExtraInitializers);
            if (_metadata) Object.defineProperty(_a, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        })(),
        _a;
})();
exports.App = App;


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
/* harmony export */   AbortError: () => (/* binding */ AbortError),
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

async function pRetry(input, options) {
	return new Promise((resolve, reject) => {
		options = {
			onFailedAttempt() {},
			retries: 10,
			...options,
		};

		const operation = retry__WEBPACK_IMPORTED_MODULE_0__.operation(options);

		const abortHandler = () => {
			operation.stop();
			reject(options.signal?.reason);
		};

		if (options.signal && !options.signal.aborted) {
			options.signal.addEventListener('abort', abortHandler, {once: true});
		}

		const cleanUp = () => {
			options.signal?.removeEventListener('abort', abortHandler);
			operation.stop();
		};

		operation.attempt(async attemptNumber => {
			try {
				const result = await input(attemptNumber);
				cleanUp();
				resolve(result);
			} catch (error) {
				try {
					if (!(error instanceof Error)) {
						throw new TypeError(`Non-error was thrown: "${error}". You should only throw errors.`);
					}

					if (error instanceof AbortError) {
						throw error.originalError;
					}

					if (error instanceof TypeError && !isNetworkError(error.message)) {
						throw error;
					}

					await options.onFailedAttempt(decorateErrorWithCounts(error, attemptNumber, options));

					if (!operation.retry(error)) {
						throw operation.mainError();
					}
				} catch (finalError) {
					decorateErrorWithCounts(finalError, attemptNumber, options);
					cleanUp();
					reject(finalError);
				}
			}
		});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ0Q7UUFDRSx5Q0FBeUM7UUFDekMsSUFBSSxFQUFFLEtBQUs7UUFDWCxJQUFJLEVBQUUsYUFBYTtRQUNuQixRQUFRLEVBQUUsK0JBQWlCO0tBQzVCO0lBQ0Q7UUFDRSxrREFBa0Q7UUFDbEQsSUFBSSxFQUFFLFNBQVM7UUFDZixJQUFJLEVBQUUsa0JBQWtCO1FBQ3hCLFFBQVEsRUFBRSwwQkFBUztLQUNwQjtJQUNEO1FBQ0UsK0ZBQStGO1FBQy9GLElBQUksRUFBRSxPQUFPO1FBQ2IsSUFBSSxFQUFFLFdBQVc7UUFDakIsUUFBUSxFQUFFLHdCQUFhO0tBQ3hCO0lBQ0Q7UUFDRSx1Q0FBdUM7UUFDdkMsSUFBSSxFQUFFLE9BQU87UUFDYixJQUFJLEVBQUUsV0FBVztRQUNqQixRQUFRLEVBQUUseUJBQWE7S0FDeEI7SUFDRDtRQUNFLHFDQUFxQztRQUNyQyxJQUFJLEVBQUUsS0FBSztRQUNYLElBQUksRUFBRSxZQUFZO1FBQ2xCLFFBQVEsRUFBRSx5QkFBYTtLQUN4QjtDQUNGLENBQUM7S0FDRCxTQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvdXRpbHMudHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL25vZGVfbW9kdWxlcy9sb2Rhc2guZGVib3VuY2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL25vZGVfbW9kdWxlcy9sb2Rhc2gudGhyb3R0bGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy81MS5ydXlvLm5ldC50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL2FkZG9ucy5tb3ppbGxhLm9yZy50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL2FwcC55aW54aWFuZy5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9ibG9nLmNzZG4ubmV0LnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvb3NjaGluYS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9kYWlseS56aGlodS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9kb2NzLmdvb2dsZS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9nZXRwb2NrZXQuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvZ21haWwuZ29vZ2xlLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL2p1ZWppbi5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9tYWlsLnFxLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL21pamlzb3UuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvcGxheS5nb29nbGUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvc3RlYW1jb21tdW5pdHkuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvdGllYmEuYmFpZHUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvdHdpdHRlci5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy92aWRlby5iYWlkdS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL25vZGVfbW9kdWxlcy9nbS1odHRwL2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy93ZWliby5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy93d3cuYmFpZHUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9ub2RlX21vZHVsZXMvcC1yZXRyeS9pbmRleC5qcyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vbm9kZV9tb2R1bGVzL3JldHJ5L2luZGV4LmpzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9ub2RlX21vZHVsZXMvcmV0cnkvbGliL3JldHJ5LmpzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9ub2RlX21vZHVsZXMvcmV0cnkvbGliL3JldHJ5X29wZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3d3dy5kb2dlZG9nZS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy93d3cuZG91YmFuLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3d3dy5nb29nbGUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvd3d3LmppYW5zaHUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvd3d3LnNvLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3d3dy5zb2dvdS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy93d3cueW91dHViZS5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy93d3cuemhpaHUuY29tLnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMveHVlc2h1LmJhaWR1LmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3podWFubGFuLnpoaWh1LmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3d3dy5sb2dvbmV3cy5jbi50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL2FmYWRpYW4ubmV0LnRzIiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9zcmMvc2l0ZXMvYmxvZy41MWN0by5jb20udHMiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC8uL3NyYy9zaXRlcy9pbmZvcS5jbi50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL2dpdGVlLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0Ly4vc3JjL3NpdGVzL3NzcGFpLmNvbS50cyIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FudGktcmVkaXJlY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FudGktcmVkaXJlY3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9hbnRpLXJlZGlyZWN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYW50aS1yZWRpcmVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FudGktcmVkaXJlY3QvLi9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJUHJvdmlkZXIsIElQcm92aWRlckNvbnN0cnVjdG9yIH0gZnJvbSBcIi4vcHJvdmlkZXJcIjtcbmltcG9ydCB7IE1hcmtlciwgZGVib3VuY2VEZWNvcmF0b3IsIGdldFJlZGlyZWN0LCBpc0luVmlldywgdGhyb3R0bGVEZWNvcmF0b3IgfSBmcm9tIFwiLi91dGlsc1wiO1xuXG50eXBlIHRlc3RlciA9ICgpID0+IGJvb2xlYW47XG5cbmludGVyZmFjZSBJUHJvdmlkZXJDb25maWcge1xuICBuYW1lOiBzdHJpbmc7XG4gIHRlc3Q6IFJlZ0V4cCB8IGJvb2xlYW4gfCB0ZXN0ZXI7XG4gIHByb3ZpZGVyOiBJUHJvdmlkZXJDb25zdHJ1Y3Rvcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQXBwQ29uZmlnIHtcbiAgaXNEZWJ1ZzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIEFwcCB7XG4gIHByaXZhdGUgY29uZmlnOiBJQXBwQ29uZmlnO1xuICBwcml2YXRlIHByb3ZpZGVzOiBJUHJvdmlkZXJbXSA9IFtdO1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIFwiJWMgQW50aS1SZWRpcmVjdCAlYyBDb3B5cmlnaHQgXFx4YTkgMjAxNS0lcyAlc1wiLFxuICAgICAgJ2ZvbnQtZmFtaWx5OiBcIkhlbHZldGljYSBOZXVlXCIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7Zm9udC1zaXplOjY0cHg7Y29sb3I6IzAwYmJlZTstd2Via2l0LXRleHQtZmlsbC1jb2xvcjojMDBiYmVlOy13ZWJraXQtdGV4dC1zdHJva2U6IDFweCAjMDBiYmVlOycsXG4gICAgICBcImZvbnQtc2l6ZToxMnB4O2NvbG9yOiM5OTk5OTk7XCIsXG4gICAgICBuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCksXG4gICAgICBcIlxcblwiICsgXCJBdXRob3IgQEF4ZXRyb3lcIixcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKFwiW0FudGkgUmVkaXJlY3RdOiDlpoLmnpzlj5HnjrDpobXpnaLph43lrprlkJHmnKrljrvpmaTvvIzmrKLov47lj43ppoghXCIpO1xuICAgIGNvbnNvbGUubG9nKFxuICAgICAgYCVjW0FudGkgUmVkaXJlY3RdOiDmlK/ku5jlrp3mkJzntKIgXCIlYzUxMTExODEzMiVjXCIg6aKG5Y+W57qi5YyF5pSv5oyB5L2c6ICFIWAsXG4gICAgICBcImZvbnQtc2l6ZTogMTJweDtcIixcbiAgICAgIFwiZm9udC1zaXplOiAxNnB4O2NvbG9yOiByZWRcIixcbiAgICAgIFwiZm9udC1zaXplOiAxMnB4O1wiLFxuICAgICk7XG4gIH1cbiAgLyoqXG4gICAqIEEg5qCH562+5piv5ZCm5Yy56YWN5pyN5Yqh5o+Q5L6b6ICFXG4gICAqIEBwYXJhbSBhRWxlbWVudFxuICAgKiBAcGFyYW0gcHJvdmlkZXJcbiAgICovXG4gIHByaXZhdGUgaXNNYXRjaFByb3ZpZGVyKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCwgcHJvdmlkZXI6IElQcm92aWRlcik6IGJvb2xlYW4ge1xuICAgIGlmIChhRWxlbWVudC5nZXRBdHRyaWJ1dGUoTWFya2VyLlJlZGlyZWN0U3RhdHVzRG9uZSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLnRlc3QgaW5zdGFuY2VvZiBSZWdFeHAgJiYgIXByb3ZpZGVyLnRlc3QudGVzdChhRWxlbWVudC5ocmVmKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHByb3ZpZGVyLnRlc3QgPT09IFwiZnVuY3Rpb25cIiAmJiAhcHJvdmlkZXIudGVzdChhRWxlbWVudCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHByb3ZpZGVyLnRlc3QgaW5zdGFuY2VvZiBCb29sZWFuKSB7XG4gICAgICByZXR1cm4gcHJvdmlkZXIudGVzdCBhcyBib29sZWFuO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICAvKipcbiAgICog5b2T6byg5qCH56e75Yqo5YiwIEEg5qCH562+5LiK5pe2XG4gICAqIEBwYXJhbSBldmVudFxuICAgKi9cbiAgQHRocm90dGxlRGVjb3JhdG9yKDUwKVxuICBwcml2YXRlIG9uSG92ZXIoZXZlbnQ6IEV2ZW50KSB7XG4gICAgY29uc3QgYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxBbmNob3JFbGVtZW50O1xuICAgIGlmIChhRWxlbWVudC50YWdOYW1lICE9PSBcIkFcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyB0cmlnZ2VyIG9uIGhvdmVyIGhhbmRsZXJcbiAgICBmb3IgKGNvbnN0IHByb3ZpZGVyIG9mIHRoaXMucHJvdmlkZXMpIHtcbiAgICAgIGlmICh0aGlzLmlzTWF0Y2hQcm92aWRlcihhRWxlbWVudCwgcHJvdmlkZXIpKSB7XG4gICAgICAgIHByb3ZpZGVyLnJlc29sdmUoYUVsZW1lbnQpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICAvKipcbiAgICog5b2T6aG16Z2i5rua5Yqo5pe2XG4gICAqL1xuICBAZGVib3VuY2VEZWNvcmF0b3IoMzAwKVxuICBwcml2YXRlIG9uU2Nyb2xsKCkge1xuICAgIC8vIOetm+mAieaJgOacieWcqOWPr+inhuWMuuWfn+WGheeahEHmoIfnrb5cbiAgICBjb25zdCB2aXNpYmxlRWxlbWVudHM6IEhUTUxBbmNob3JFbGVtZW50W10gPSBbXS5zbGljZVxuICAgICAgLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcImFbaHJlZl1cIikpXG4gICAgICAuZmlsdGVyKChhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpID0+IHtcbiAgICAgICAgcmV0dXJuIGFFbGVtZW50LmhyZWYuaW5kZXhPZihcImh0dHBcIikgPiAtMSAmJiBpc0luVmlldyhhRWxlbWVudCkgJiYgZ2V0UmVkaXJlY3QoYUVsZW1lbnQpIDw9IDI7XG4gICAgICB9KTtcbiAgICAvLyB0cmlnZ2VyIHNjcm9sbCBoYW5kbGVyXG4gICAgZm9yIChjb25zdCBwcm92aWRlciBvZiB0aGlzLnByb3ZpZGVzKSB7XG4gICAgICBmb3IgKGNvbnN0IGFFbGVtZW50IG9mIHZpc2libGVFbGVtZW50cykge1xuICAgICAgICBpZiAodGhpcy5pc01hdGNoUHJvdmlkZXIoYUVsZW1lbnQsIHByb3ZpZGVyKSkge1xuICAgICAgICAgIHByb3ZpZGVyLnJlc29sdmUoYUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiDlvZPpobXpnaLlh4blpIflsLHnu6rml7bvvIzov5vooYzliJ3lp4vljJbliqjkvZxcbiAgICovXG4gIHByaXZhdGUgYXN5bmMgcGFnZU9uUmVhZHkoKSB7XG4gICAgZm9yIChjb25zdCBwcm92aWRlciBvZiB0aGlzLnByb3ZpZGVzKSB7XG4gICAgICBpZiAocHJvdmlkZXIub25Jbml0KSB7XG4gICAgICAgIGF3YWl0IHByb3ZpZGVyLm9uSW5pdCgpO1xuICAgICAgfVxuICAgICAgLy8g5aaC5p6c6aG16Z2i5aSE5LqO5Yid5aeL55qE54q25oCB77yM5rKh5pyJ5rua5Yqo6L+H77yM5YiZ5Ye65Y+R5LiA5qyhb25TY3JvbGzkuovku7ZcbiAgICAgIGlmICh3aW5kb3cuc2Nyb2xsWSA8PSAwKSB7XG4gICAgICAgIHRoaXMub25TY3JvbGwoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLyoqXG4gICAqIOiuvue9rumFjee9rlxuICAgKiBAcGFyYW0gY29uZmlnXG4gICAqL1xuICBwdWJsaWMgc2V0Q29uZmlnKGNvbmZpZzogSUFwcENvbmZpZyk6IHRoaXMge1xuICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiDms6jlhozmnI3liqHmj5DkvpvogIVcbiAgICogQHBhcmFtIHByb3ZpZGVyc1xuICAgKi9cbiAgcHVibGljIHJlZ2lzdGVyUHJvdmlkZXIocHJvdmlkZXJzOiBJUHJvdmlkZXJDb25maWdbXSk6IHRoaXMge1xuICAgIGZvciAoY29uc3QgcHJvdmlkZUNvbmZpZyBvZiBwcm92aWRlcnMpIHtcbiAgICAgIC8vIHRlc3Qg5aaC5p6c5pivIGJvb2xlYW5cbiAgICAgIGlmIChwcm92aWRlQ29uZmlnLnRlc3QgPT09IGZhbHNlKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgLy8gdGVzdCDlpoLmnpzmmK/mraPliJnooajovr7lvI9cbiAgICAgIGlmIChwcm92aWRlQ29uZmlnLnRlc3QgaW5zdGFuY2VvZiBSZWdFeHAgJiYgIXByb3ZpZGVDb25maWcudGVzdC50ZXN0KGRvY3VtZW50LmRvbWFpbikpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICAvLyB0ZXN0IOWmguaenOaYr+S4gOS4qmZ1bmN0aW9uXG4gICAgICBpZiAodHlwZW9mIHByb3ZpZGVDb25maWcudGVzdCA9PT0gXCJmdW5jdGlvblwiICYmIHByb3ZpZGVDb25maWcudGVzdCgpID09PSBmYWxzZSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IHByb3ZpZGVDb25maWcucHJvdmlkZXIoKTtcbiAgICAgIHByb3ZpZGVyLmlzRGVidWcgPSB0aGlzLmNvbmZpZy5pc0RlYnVnO1xuICAgICAgdGhpcy5wcm92aWRlcy5wdXNoKHByb3ZpZGVyKTtcbiAgICAgIGNvbnNvbGUuaW5mbyhgW0FudGktcmVkaXJlY3RdOiDliqDovb3lvJXmk44gJHtwcm92aWRlQ29uZmlnLm5hbWV9YCk7XG4gICAgICBjb25zb2xlLmluZm8oYOW9k+WJjemhtemdojogJyR7bG9jYXRpb24uaHJlZn0nYCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiDlkK/liqjlupTnlKhcbiAgICovXG4gIHB1YmxpYyBib290c3RyYXAoKSB7XG4gICAgYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCB0aGlzLm9uU2Nyb2xsLmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbkhvdmVyLmJpbmQodGhpcykpO1xuICAgIGFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIHRoaXMucGFnZU9uUmVhZHkuYmluZCh0aGlzKSk7XG4gIH1cbn1cbiIsImltcG9ydCAqIGFzIGRlYm91bmNlIGZyb20gXCJsb2Rhc2guZGVib3VuY2VcIjtcbmltcG9ydCAqIGFzIHRocm90dGxlIGZyb20gXCJsb2Rhc2gudGhyb3R0bGVcIjtcblxuZXhwb3J0IGVudW0gTWFya2VyIHtcbiAgUmVkaXJlY3RDb3VudCA9IFwicmVkaXJlY3QtY291bnRcIixcbiAgUmVkaXJlY3RTdGF0dXNEb25lID0gXCJhbnRpLXJlZGlyZWN0LW9yaWdpbi1ocmVmXCIsXG59XG5cbi8vIHJvbWUtaWdub3JlIGxpbnQvc3VzcGljaW91cy9ub0V4cGxpY2l0QW55OiBhbGxvdyByZXR1cm4gYW55dGhpbmdcbnR5cGUgRGVjb3JhdG9yTWV0aG9kRnVuY3Rpb24gPSAob3JpZ2luTWV0aG9kOiBGdW5jdGlvbiwgY29udGV4dDogQ2xhc3NNZW1iZXJEZWNvcmF0b3JDb250ZXh0KSA9PiBhbnk7XG5cbi8qKlxuICog5qC55o2udXJs5LiK55qE6Lev5b6E5Yy56YWN77yM5Y676Zmk6YeN5a6a5ZCRXG4gKiBAcGFyYW0ge0hUTUxBbmNob3JFbGVtZW50fSBhRWxlbWVudFxuICogQHBhcmFtIHtSZWdFeHB9IHRlc3RlclxuICogQHJldHVybnMge2Jvb2xlYW59XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaExpbmtGcm9tVXJsKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCwgdGVzdGVyOiBSZWdFeHApOiBzdHJpbmcge1xuICBjb25zdCBtYXRjaGVyOiBzdHJpbmdbXSA9IHRlc3Rlci5leGVjKGFFbGVtZW50LmhyZWYpO1xuICBpZiAoIShtYXRjaGVyPy5sZW5ndGggJiYgbWF0Y2hlclsxXSkpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIGxldCB1cmwgPSBcIlwiO1xuICB0cnkge1xuICAgIHVybCA9IGRlY29kZVVSSUNvbXBvbmVudChtYXRjaGVyWzFdKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHVybCA9IC9odHRwcz86XFwvXFwvLy50ZXN0KG1hdGNoZXJbMV0pID8gbWF0Y2hlclsxXSA6IFwiXCI7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn1cblxuY2xhc3MgUXVlcnkge1xuICBwcml2YXRlIG9iamVjdDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBxdWVyeVN0cjogc3RyaW5nKSB7XG4gICAgdGhpcy5vYmplY3QgPSB0aGlzLnRvT2JqZWN0KHF1ZXJ5U3RyLnJlcGxhY2UoL15cXD8rLywgXCJcIikpO1xuICB9XG5cbiAgcHJpdmF0ZSB0b09iamVjdChxdWVyeVN0cjogc3RyaW5nKSB7XG4gICAgY29uc3Qgb2JqOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgcXVlcnlTdHIuc3BsaXQoXCImXCIpLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IGFycjogc3RyaW5nW10gPSBpdGVtLnNwbGl0KFwiPVwiKSB8fCBbXTtcbiAgICAgIGxldCBrZXk6IHN0cmluZyA9IGFyclswXSB8fCBcIlwiO1xuICAgICAgbGV0IHZhbHVlOiBzdHJpbmcgPSBhcnJbMV0gfHwgXCJcIjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChhcnJbMF0gfHwgXCJcIik7XG4gICAgICAgIHZhbHVlID0gZGVjb2RlVVJJQ29tcG9uZW50KGFyclsxXSB8fCBcIlwiKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvL1xuICAgICAgfVxuICAgICAgaWYgKGtleSkge1xuICAgICAgICBvYmpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nIHtcbiAgICBjb25zdCBhcnI6IHN0cmluZ1tdID0gW107XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5vYmplY3QpIHtcbiAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwodGhpcy5vYmplY3QsIGtleSkpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLm9iamVjdFtrZXldO1xuICAgICAgICBhcnIucHVzaChgJHtrZXl9PSR7dmFsdWV9YCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhcnIubGVuZ3RoID8gYD8ke2Fyci5qb2luKFwiJlwiKX1gIDogXCJcIjtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlQYXJzZXIocXVlcnlTdHJpbmc6IHN0cmluZyk6IFF1ZXJ5IHtcbiAgcmV0dXJuIG5ldyBRdWVyeShxdWVyeVN0cmluZyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0KGh0bWxFbGVtZW50OiBIVE1MRWxlbWVudCk6IHN0cmluZyB7XG4gIHJldHVybiAoaHRtbEVsZW1lbnQuaW5uZXJUZXh0IHx8IGh0bWxFbGVtZW50LnRleHRDb250ZW50KS50cmltKCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB0aHJvdHRsZURlY29yYXRvcih3YWl0OiBudW1iZXIsIG9wdGlvbnMgPSB7fSk6IERlY29yYXRvck1ldGhvZEZ1bmN0aW9uIHtcbiAgcmV0dXJuIChvcmlnaW5NZXRob2QsIGNvbnRleHQ6IENsYXNzTWVtYmVyRGVjb3JhdG9yQ29udGV4dCkgPT4ge1xuICAgIHJldHVybiB0aHJvdHRsZShvcmlnaW5NZXRob2QsIHdhaXQsIG9wdGlvbnMpO1xuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2VEZWNvcmF0b3Iod2FpdDogbnVtYmVyLCBvcHRpb25zID0ge30pOiBEZWNvcmF0b3JNZXRob2RGdW5jdGlvbiB7XG4gIHJldHVybiAob3JpZ2luTWV0aG9kLCBjb250ZXh0OiBDbGFzc01lbWJlckRlY29yYXRvckNvbnRleHQpID0+IHtcbiAgICByZXR1cm4gZGVib3VuY2Uob3JpZ2luTWV0aG9kLCB3YWl0LCBvcHRpb25zKTtcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzSW5WaWV3KGVsZW1lbnQ6IEhUTUxFbGVtZW50KTogYm9vbGVhbiB7XG4gIGNvbnN0IHJlY3QgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gIGNvbnN0IHZXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcbiAgY29uc3QgdkhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xuXG4gIGNvbnN0IGVmcCA9ICh4LCB5KSA9PiB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoeCwgeSk7XG4gIH07XG5cbiAgLy8gUmV0dXJuIGZhbHNlIGlmIGl0J3Mgbm90IGluIHRoZSB2aWV3cG9ydFxuICBpZiAocmVjdC5yaWdodCA8IDAgfHwgcmVjdC5ib3R0b20gPCAwIHx8IHJlY3QubGVmdCA+IHZXaWR0aCB8fCByZWN0LnRvcCA+IHZIZWlnaHQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICAvLyBSZXR1cm4gdHJ1ZSBpZiBhbnkgb2YgaXRzIGZvdXIgY29ybmVycyBhcmUgdmlzaWJsZVxuICByZXR1cm4gKFxuICAgIGVsZW1lbnQuY29udGFpbnMoZWZwKHJlY3QubGVmdCwgcmVjdC50b3ApKSB8fFxuICAgIGVsZW1lbnQuY29udGFpbnMoZWZwKHJlY3QucmlnaHQsIHJlY3QudG9wKSkgfHxcbiAgICBlbGVtZW50LmNvbnRhaW5zKGVmcChyZWN0LnJpZ2h0LCByZWN0LmJvdHRvbSkpIHx8XG4gICAgZWxlbWVudC5jb250YWlucyhlZnAocmVjdC5sZWZ0LCByZWN0LmJvdHRvbSkpXG4gICk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZWRpcmVjdChhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpOiBudW1iZXIge1xuICByZXR1cm4gKyhhRWxlbWVudC5nZXRBdHRyaWJ1dGUoTWFya2VyLlJlZGlyZWN0Q291bnQpIHx8IDApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5jcmVhc2VSZWRpcmVjdChhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpOiB2b2lkIHtcbiAgY29uc3QgbnVtOiBudW1iZXIgPSBnZXRSZWRpcmVjdChhRWxlbWVudCk7XG4gIGFFbGVtZW50LnNldEF0dHJpYnV0ZShNYXJrZXIuUmVkaXJlY3RDb3VudCwgYCR7bnVtfSR7MX1gKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlY3JlYXNlUmVkaXJlY3QoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KTogdm9pZCB7XG4gIGNvbnN0IG51bTogbnVtYmVyID0gZ2V0UmVkaXJlY3QoYUVsZW1lbnQpO1xuICBpZiAobnVtID4gMCkge1xuICAgIGFFbGVtZW50LnNldEF0dHJpYnV0ZShNYXJrZXIuUmVkaXJlY3RDb3VudCwgYCR7bnVtIC0gMX1gKTtcbiAgfVxufVxuXG5pbnRlcmZhY2UgSUFudGlSZWRpcmVjdE9wdGlvbiB7XG4gIGRlYnVnPzogYm9vbGVhbjtcbiAgZm9yY2U/OiBib29sZWFuO1xufVxuXG4vKipcbiAqIOWOu+mZpOmHjeWumuWQkVxuICogQHBhcmFtIGFFbGVtZW50IEHmoIfnrb7lhYPntKBcbiAqIEBwYXJhbSByZWFsVXJsIOecn+WunueahOWcsOWdgFxuICogQHBhcmFtIG9wdGlvbnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGFudGlSZWRpcmVjdChhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQsIHJlYWxVcmw6IHN0cmluZywgb3B0aW9uczogSUFudGlSZWRpcmVjdE9wdGlvbiA9IHt9KSB7XG4gIG9wdGlvbnMuZGVidWcgPSB0eXBlb2Ygb3B0aW9ucy5kZWJ1ZyA9PT0gXCJ1bmRlZmluZWRcIiA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA6IG9wdGlvbnMuZGVidWc7XG5cbiAgb3B0aW9ucy5mb3JjZSA9IG9wdGlvbnMuZm9yY2U7XG5cbiAgaWYgKCFvcHRpb25zLmZvcmNlICYmICghcmVhbFVybCB8fCBhRWxlbWVudC5ocmVmID09PSByZWFsVXJsKSkge1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgIGFFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiZ3JlZW5cIjtcbiAgfVxuICBhRWxlbWVudC5zZXRBdHRyaWJ1dGUoTWFya2VyLlJlZGlyZWN0U3RhdHVzRG9uZSwgYUVsZW1lbnQuaHJlZik7XG4gIGFFbGVtZW50LmhyZWYgPSByZWFsVXJsO1xufVxuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRlYm91bmNlO1xuIiwiLyoqXG4gKiBsb2Rhc2ggKEN1c3RvbSBCdWlsZCkgPGh0dHBzOi8vbG9kYXNoLmNvbS8+XG4gKiBCdWlsZDogYGxvZGFzaCBtb2R1bGFyaXplIGV4cG9ydHM9XCJucG1cIiAtbyAuL2BcbiAqIENvcHlyaWdodCBqUXVlcnkgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzIDxodHRwczovL2pxdWVyeS5vcmcvPlxuICogUmVsZWFzZWQgdW5kZXIgTUlUIGxpY2Vuc2UgPGh0dHBzOi8vbG9kYXNoLmNvbS9saWNlbnNlPlxuICogQmFzZWQgb24gVW5kZXJzY29yZS5qcyAxLjguMyA8aHR0cDovL3VuZGVyc2NvcmVqcy5vcmcvTElDRU5TRT5cbiAqIENvcHlyaWdodCBKZXJlbXkgQXNoa2VuYXMsIERvY3VtZW50Q2xvdWQgYW5kIEludmVzdGlnYXRpdmUgUmVwb3J0ZXJzICYgRWRpdG9yc1xuICovXG5cbi8qKiBVc2VkIGFzIHRoZSBgVHlwZUVycm9yYCBtZXNzYWdlIGZvciBcIkZ1bmN0aW9uc1wiIG1ldGhvZHMuICovXG52YXIgRlVOQ19FUlJPUl9URVhUID0gJ0V4cGVjdGVkIGEgZnVuY3Rpb24nO1xuXG4vKiogVXNlZCBhcyByZWZlcmVuY2VzIGZvciB2YXJpb3VzIGBOdW1iZXJgIGNvbnN0YW50cy4gKi9cbnZhciBOQU4gPSAwIC8gMDtcblxuLyoqIGBPYmplY3QjdG9TdHJpbmdgIHJlc3VsdCByZWZlcmVuY2VzLiAqL1xudmFyIHN5bWJvbFRhZyA9ICdbb2JqZWN0IFN5bWJvbF0nO1xuXG4vKiogVXNlZCB0byBtYXRjaCBsZWFkaW5nIGFuZCB0cmFpbGluZyB3aGl0ZXNwYWNlLiAqL1xudmFyIHJlVHJpbSA9IC9eXFxzK3xcXHMrJC9nO1xuXG4vKiogVXNlZCB0byBkZXRlY3QgYmFkIHNpZ25lZCBoZXhhZGVjaW1hbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCYWRIZXggPSAvXlstK10weFswLTlhLWZdKyQvaTtcblxuLyoqIFVzZWQgdG8gZGV0ZWN0IGJpbmFyeSBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNCaW5hcnkgPSAvXjBiWzAxXSskL2k7XG5cbi8qKiBVc2VkIHRvIGRldGVjdCBvY3RhbCBzdHJpbmcgdmFsdWVzLiAqL1xudmFyIHJlSXNPY3RhbCA9IC9eMG9bMC03XSskL2k7XG5cbi8qKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyB3aXRob3V0IGEgZGVwZW5kZW5jeSBvbiBgcm9vdGAuICovXG52YXIgZnJlZVBhcnNlSW50ID0gcGFyc2VJbnQ7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgZ2xvYmFsYCBmcm9tIE5vZGUuanMuICovXG52YXIgZnJlZUdsb2JhbCA9IHR5cGVvZiBnbG9iYWwgPT0gJ29iamVjdCcgJiYgZ2xvYmFsICYmIGdsb2JhbC5PYmplY3QgPT09IE9iamVjdCAmJiBnbG9iYWw7XG5cbi8qKiBEZXRlY3QgZnJlZSB2YXJpYWJsZSBgc2VsZmAuICovXG52YXIgZnJlZVNlbGYgPSB0eXBlb2Ygc2VsZiA9PSAnb2JqZWN0JyAmJiBzZWxmICYmIHNlbGYuT2JqZWN0ID09PSBPYmplY3QgJiYgc2VsZjtcblxuLyoqIFVzZWQgYXMgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbCBvYmplY3QuICovXG52YXIgcm9vdCA9IGZyZWVHbG9iYWwgfHwgZnJlZVNlbGYgfHwgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblxuLyoqIFVzZWQgZm9yIGJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzLiAqL1xudmFyIG9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLyoqXG4gKiBVc2VkIHRvIHJlc29sdmUgdGhlXG4gKiBbYHRvU3RyaW5nVGFnYF0oaHR0cDovL2VjbWEtaW50ZXJuYXRpb25hbC5vcmcvZWNtYS0yNjIvNy4wLyNzZWMtb2JqZWN0LnByb3RvdHlwZS50b3N0cmluZylcbiAqIG9mIHZhbHVlcy5cbiAqL1xudmFyIG9iamVjdFRvU3RyaW5nID0gb2JqZWN0UHJvdG8udG9TdHJpbmc7XG5cbi8qIEJ1aWx0LWluIG1ldGhvZCByZWZlcmVuY2VzIGZvciB0aG9zZSB3aXRoIHRoZSBzYW1lIG5hbWUgYXMgb3RoZXIgYGxvZGFzaGAgbWV0aG9kcy4gKi9cbnZhciBuYXRpdmVNYXggPSBNYXRoLm1heCxcbiAgICBuYXRpdmVNaW4gPSBNYXRoLm1pbjtcblxuLyoqXG4gKiBHZXRzIHRoZSB0aW1lc3RhbXAgb2YgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhhdCBoYXZlIGVsYXBzZWQgc2luY2VcbiAqIHRoZSBVbml4IGVwb2NoICgxIEphbnVhcnkgMTk3MCAwMDowMDowMCBVVEMpLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi40LjBcbiAqIEBjYXRlZ29yeSBEYXRlXG4gKiBAcmV0dXJucyB7bnVtYmVyfSBSZXR1cm5zIHRoZSB0aW1lc3RhbXAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uZGVmZXIoZnVuY3Rpb24oc3RhbXApIHtcbiAqICAgY29uc29sZS5sb2coXy5ub3coKSAtIHN0YW1wKTtcbiAqIH0sIF8ubm93KCkpO1xuICogLy8gPT4gTG9ncyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpdCB0b29rIGZvciB0aGUgZGVmZXJyZWQgaW52b2NhdGlvbi5cbiAqL1xudmFyIG5vdyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gcm9vdC5EYXRlLm5vdygpO1xufTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVib3VuY2VkIGZ1bmN0aW9uIHRoYXQgZGVsYXlzIGludm9raW5nIGBmdW5jYCB1bnRpbCBhZnRlciBgd2FpdGBcbiAqIG1pbGxpc2Vjb25kcyBoYXZlIGVsYXBzZWQgc2luY2UgdGhlIGxhc3QgdGltZSB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uIHdhc1xuICogaW52b2tlZC4gVGhlIGRlYm91bmNlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGAgbWV0aG9kIHRvIGNhbmNlbFxuICogZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG8gaW1tZWRpYXRlbHkgaW52b2tlIHRoZW0uXG4gKiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYCBzaG91bGQgYmUgaW52b2tlZCBvbiB0aGVcbiAqIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YCB0aW1lb3V0LiBUaGUgYGZ1bmNgIGlzIGludm9rZWRcbiAqIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24uIFN1YnNlcXVlbnRcbiAqIGNhbGxzIHRvIHRoZSBkZWJvdW5jZWQgZnVuY3Rpb24gcmV0dXJuIHRoZSByZXN1bHQgb2YgdGhlIGxhc3QgYGZ1bmNgXG4gKiBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgZGVib3VuY2VkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLmRlYm91bmNlYCBhbmQgYF8udGhyb3R0bGVgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gZGVib3VuY2UuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gZGVsYXkuXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz1mYWxzZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSBsZWFkaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQuXG4gKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubWF4V2FpdF1cbiAqICBUaGUgbWF4aW11bSB0aW1lIGBmdW5jYCBpcyBhbGxvd2VkIHRvIGJlIGRlbGF5ZWQgYmVmb3JlIGl0J3MgaW52b2tlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgZGVib3VuY2VkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBjb3N0bHkgY2FsY3VsYXRpb25zIHdoaWxlIHRoZSB3aW5kb3cgc2l6ZSBpcyBpbiBmbHV4LlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Jlc2l6ZScsIF8uZGVib3VuY2UoY2FsY3VsYXRlTGF5b3V0LCAxNTApKTtcbiAqXG4gKiAvLyBJbnZva2UgYHNlbmRNYWlsYCB3aGVuIGNsaWNrZWQsIGRlYm91bmNpbmcgc3Vic2VxdWVudCBjYWxscy5cbiAqIGpRdWVyeShlbGVtZW50KS5vbignY2xpY2snLCBfLmRlYm91bmNlKHNlbmRNYWlsLCAzMDAsIHtcbiAqICAgJ2xlYWRpbmcnOiB0cnVlLFxuICogICAndHJhaWxpbmcnOiBmYWxzZVxuICogfSkpO1xuICpcbiAqIC8vIEVuc3VyZSBgYmF0Y2hMb2dgIGlzIGludm9rZWQgb25jZSBhZnRlciAxIHNlY29uZCBvZiBkZWJvdW5jZWQgY2FsbHMuXG4gKiB2YXIgZGVib3VuY2VkID0gXy5kZWJvdW5jZShiYXRjaExvZywgMjUwLCB7ICdtYXhXYWl0JzogMTAwMCB9KTtcbiAqIHZhciBzb3VyY2UgPSBuZXcgRXZlbnRTb3VyY2UoJy9zdHJlYW0nKTtcbiAqIGpRdWVyeShzb3VyY2UpLm9uKCdtZXNzYWdlJywgZGVib3VuY2VkKTtcbiAqXG4gKiAvLyBDYW5jZWwgdGhlIHRyYWlsaW5nIGRlYm91bmNlZCBpbnZvY2F0aW9uLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3BvcHN0YXRlJywgZGVib3VuY2VkLmNhbmNlbCk7XG4gKi9cbmZ1bmN0aW9uIGRlYm91bmNlKGZ1bmMsIHdhaXQsIG9wdGlvbnMpIHtcbiAgdmFyIGxhc3RBcmdzLFxuICAgICAgbGFzdFRoaXMsXG4gICAgICBtYXhXYWl0LFxuICAgICAgcmVzdWx0LFxuICAgICAgdGltZXJJZCxcbiAgICAgIGxhc3RDYWxsVGltZSxcbiAgICAgIGxhc3RJbnZva2VUaW1lID0gMCxcbiAgICAgIGxlYWRpbmcgPSBmYWxzZSxcbiAgICAgIG1heGluZyA9IGZhbHNlLFxuICAgICAgdHJhaWxpbmcgPSB0cnVlO1xuXG4gIGlmICh0eXBlb2YgZnVuYyAhPSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihGVU5DX0VSUk9SX1RFWFQpO1xuICB9XG4gIHdhaXQgPSB0b051bWJlcih3YWl0KSB8fCAwO1xuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gISFvcHRpb25zLmxlYWRpbmc7XG4gICAgbWF4aW5nID0gJ21heFdhaXQnIGluIG9wdGlvbnM7XG4gICAgbWF4V2FpdCA9IG1heGluZyA/IG5hdGl2ZU1heCh0b051bWJlcihvcHRpb25zLm1heFdhaXQpIHx8IDAsIHdhaXQpIDogbWF4V2FpdDtcbiAgICB0cmFpbGluZyA9ICd0cmFpbGluZycgaW4gb3B0aW9ucyA/ICEhb3B0aW9ucy50cmFpbGluZyA6IHRyYWlsaW5nO1xuICB9XG5cbiAgZnVuY3Rpb24gaW52b2tlRnVuYyh0aW1lKSB7XG4gICAgdmFyIGFyZ3MgPSBsYXN0QXJncyxcbiAgICAgICAgdGhpc0FyZyA9IGxhc3RUaGlzO1xuXG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICBsYXN0SW52b2tlVGltZSA9IHRpbWU7XG4gICAgcmVzdWx0ID0gZnVuYy5hcHBseSh0aGlzQXJnLCBhcmdzKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gbGVhZGluZ0VkZ2UodGltZSkge1xuICAgIC8vIFJlc2V0IGFueSBgbWF4V2FpdGAgdGltZXIuXG4gICAgbGFzdEludm9rZVRpbWUgPSB0aW1lO1xuICAgIC8vIFN0YXJ0IHRoZSB0aW1lciBmb3IgdGhlIHRyYWlsaW5nIGVkZ2UuXG4gICAgdGltZXJJZCA9IHNldFRpbWVvdXQodGltZXJFeHBpcmVkLCB3YWl0KTtcbiAgICAvLyBJbnZva2UgdGhlIGxlYWRpbmcgZWRnZS5cbiAgICByZXR1cm4gbGVhZGluZyA/IGludm9rZUZ1bmModGltZSkgOiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiByZW1haW5pbmdXYWl0KHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lLFxuICAgICAgICByZXN1bHQgPSB3YWl0IC0gdGltZVNpbmNlTGFzdENhbGw7XG5cbiAgICByZXR1cm4gbWF4aW5nID8gbmF0aXZlTWluKHJlc3VsdCwgbWF4V2FpdCAtIHRpbWVTaW5jZUxhc3RJbnZva2UpIDogcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gc2hvdWxkSW52b2tlKHRpbWUpIHtcbiAgICB2YXIgdGltZVNpbmNlTGFzdENhbGwgPSB0aW1lIC0gbGFzdENhbGxUaW1lLFxuICAgICAgICB0aW1lU2luY2VMYXN0SW52b2tlID0gdGltZSAtIGxhc3RJbnZva2VUaW1lO1xuXG4gICAgLy8gRWl0aGVyIHRoaXMgaXMgdGhlIGZpcnN0IGNhbGwsIGFjdGl2aXR5IGhhcyBzdG9wcGVkIGFuZCB3ZSdyZSBhdCB0aGVcbiAgICAvLyB0cmFpbGluZyBlZGdlLCB0aGUgc3lzdGVtIHRpbWUgaGFzIGdvbmUgYmFja3dhcmRzIGFuZCB3ZSdyZSB0cmVhdGluZ1xuICAgIC8vIGl0IGFzIHRoZSB0cmFpbGluZyBlZGdlLCBvciB3ZSd2ZSBoaXQgdGhlIGBtYXhXYWl0YCBsaW1pdC5cbiAgICByZXR1cm4gKGxhc3RDYWxsVGltZSA9PT0gdW5kZWZpbmVkIHx8ICh0aW1lU2luY2VMYXN0Q2FsbCA+PSB3YWl0KSB8fFxuICAgICAgKHRpbWVTaW5jZUxhc3RDYWxsIDwgMCkgfHwgKG1heGluZyAmJiB0aW1lU2luY2VMYXN0SW52b2tlID49IG1heFdhaXQpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRpbWVyRXhwaXJlZCgpIHtcbiAgICB2YXIgdGltZSA9IG5vdygpO1xuICAgIGlmIChzaG91bGRJbnZva2UodGltZSkpIHtcbiAgICAgIHJldHVybiB0cmFpbGluZ0VkZ2UodGltZSk7XG4gICAgfVxuICAgIC8vIFJlc3RhcnQgdGhlIHRpbWVyLlxuICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgcmVtYWluaW5nV2FpdCh0aW1lKSk7XG4gIH1cblxuICBmdW5jdGlvbiB0cmFpbGluZ0VkZ2UodGltZSkge1xuICAgIHRpbWVySWQgPSB1bmRlZmluZWQ7XG5cbiAgICAvLyBPbmx5IGludm9rZSBpZiB3ZSBoYXZlIGBsYXN0QXJnc2Agd2hpY2ggbWVhbnMgYGZ1bmNgIGhhcyBiZWVuXG4gICAgLy8gZGVib3VuY2VkIGF0IGxlYXN0IG9uY2UuXG4gICAgaWYgKHRyYWlsaW5nICYmIGxhc3RBcmdzKSB7XG4gICAgICByZXR1cm4gaW52b2tlRnVuYyh0aW1lKTtcbiAgICB9XG4gICAgbGFzdEFyZ3MgPSBsYXN0VGhpcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZnVuY3Rpb24gY2FuY2VsKCkge1xuICAgIGlmICh0aW1lcklkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcklkKTtcbiAgICB9XG4gICAgbGFzdEludm9rZVRpbWUgPSAwO1xuICAgIGxhc3RBcmdzID0gbGFzdENhbGxUaW1lID0gbGFzdFRoaXMgPSB0aW1lcklkID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgcmV0dXJuIHRpbWVySWQgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IHRyYWlsaW5nRWRnZShub3coKSk7XG4gIH1cblxuICBmdW5jdGlvbiBkZWJvdW5jZWQoKSB7XG4gICAgdmFyIHRpbWUgPSBub3coKSxcbiAgICAgICAgaXNJbnZva2luZyA9IHNob3VsZEludm9rZSh0aW1lKTtcblxuICAgIGxhc3RBcmdzID0gYXJndW1lbnRzO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0Q2FsbFRpbWUgPSB0aW1lO1xuXG4gICAgaWYgKGlzSW52b2tpbmcpIHtcbiAgICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGxlYWRpbmdFZGdlKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgICBpZiAobWF4aW5nKSB7XG4gICAgICAgIC8vIEhhbmRsZSBpbnZvY2F0aW9ucyBpbiBhIHRpZ2h0IGxvb3AuXG4gICAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgICAgIHJldHVybiBpbnZva2VGdW5jKGxhc3RDYWxsVGltZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0aW1lcklkID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRpbWVySWQgPSBzZXRUaW1lb3V0KHRpbWVyRXhwaXJlZCwgd2FpdCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbiAgZGVib3VuY2VkLmNhbmNlbCA9IGNhbmNlbDtcbiAgZGVib3VuY2VkLmZsdXNoID0gZmx1c2g7XG4gIHJldHVybiBkZWJvdW5jZWQ7XG59XG5cbi8qKlxuICogQ3JlYXRlcyBhIHRocm90dGxlZCBmdW5jdGlvbiB0aGF0IG9ubHkgaW52b2tlcyBgZnVuY2AgYXQgbW9zdCBvbmNlIHBlclxuICogZXZlcnkgYHdhaXRgIG1pbGxpc2Vjb25kcy4gVGhlIHRocm90dGxlZCBmdW5jdGlvbiBjb21lcyB3aXRoIGEgYGNhbmNlbGBcbiAqIG1ldGhvZCB0byBjYW5jZWwgZGVsYXllZCBgZnVuY2AgaW52b2NhdGlvbnMgYW5kIGEgYGZsdXNoYCBtZXRob2QgdG9cbiAqIGltbWVkaWF0ZWx5IGludm9rZSB0aGVtLiBQcm92aWRlIGBvcHRpb25zYCB0byBpbmRpY2F0ZSB3aGV0aGVyIGBmdW5jYFxuICogc2hvdWxkIGJlIGludm9rZWQgb24gdGhlIGxlYWRpbmcgYW5kL29yIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIGB3YWl0YFxuICogdGltZW91dC4gVGhlIGBmdW5jYCBpcyBpbnZva2VkIHdpdGggdGhlIGxhc3QgYXJndW1lbnRzIHByb3ZpZGVkIHRvIHRoZVxuICogdGhyb3R0bGVkIGZ1bmN0aW9uLiBTdWJzZXF1ZW50IGNhbGxzIHRvIHRoZSB0aHJvdHRsZWQgZnVuY3Rpb24gcmV0dXJuIHRoZVxuICogcmVzdWx0IG9mIHRoZSBsYXN0IGBmdW5jYCBpbnZvY2F0aW9uLlxuICpcbiAqICoqTm90ZToqKiBJZiBgbGVhZGluZ2AgYW5kIGB0cmFpbGluZ2Agb3B0aW9ucyBhcmUgYHRydWVgLCBgZnVuY2AgaXNcbiAqIGludm9rZWQgb24gdGhlIHRyYWlsaW5nIGVkZ2Ugb2YgdGhlIHRpbWVvdXQgb25seSBpZiB0aGUgdGhyb3R0bGVkIGZ1bmN0aW9uXG4gKiBpcyBpbnZva2VkIG1vcmUgdGhhbiBvbmNlIGR1cmluZyB0aGUgYHdhaXRgIHRpbWVvdXQuXG4gKlxuICogSWYgYHdhaXRgIGlzIGAwYCBhbmQgYGxlYWRpbmdgIGlzIGBmYWxzZWAsIGBmdW5jYCBpbnZvY2F0aW9uIGlzIGRlZmVycmVkXG4gKiB1bnRpbCB0byB0aGUgbmV4dCB0aWNrLCBzaW1pbGFyIHRvIGBzZXRUaW1lb3V0YCB3aXRoIGEgdGltZW91dCBvZiBgMGAuXG4gKlxuICogU2VlIFtEYXZpZCBDb3JiYWNobydzIGFydGljbGVdKGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vZGVib3VuY2luZy10aHJvdHRsaW5nLWV4cGxhaW5lZC1leGFtcGxlcy8pXG4gKiBmb3IgZGV0YWlscyBvdmVyIHRoZSBkaWZmZXJlbmNlcyBiZXR3ZWVuIGBfLnRocm90dGxlYCBhbmQgYF8uZGVib3VuY2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gdGhyb3R0bGUuXG4gKiBAcGFyYW0ge251bWJlcn0gW3dhaXQ9MF0gVGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhyb3R0bGUgaW52b2NhdGlvbnMgdG8uXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnM9e31dIFRoZSBvcHRpb25zIG9iamVjdC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMubGVhZGluZz10cnVlXVxuICogIFNwZWNpZnkgaW52b2tpbmcgb24gdGhlIGxlYWRpbmcgZWRnZSBvZiB0aGUgdGltZW91dC5cbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMudHJhaWxpbmc9dHJ1ZV1cbiAqICBTcGVjaWZ5IGludm9raW5nIG9uIHRoZSB0cmFpbGluZyBlZGdlIG9mIHRoZSB0aW1lb3V0LlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgdGhyb3R0bGVkIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAvLyBBdm9pZCBleGNlc3NpdmVseSB1cGRhdGluZyB0aGUgcG9zaXRpb24gd2hpbGUgc2Nyb2xsaW5nLlxuICogalF1ZXJ5KHdpbmRvdykub24oJ3Njcm9sbCcsIF8udGhyb3R0bGUodXBkYXRlUG9zaXRpb24sIDEwMCkpO1xuICpcbiAqIC8vIEludm9rZSBgcmVuZXdUb2tlbmAgd2hlbiB0aGUgY2xpY2sgZXZlbnQgaXMgZmlyZWQsIGJ1dCBub3QgbW9yZSB0aGFuIG9uY2UgZXZlcnkgNSBtaW51dGVzLlxuICogdmFyIHRocm90dGxlZCA9IF8udGhyb3R0bGUocmVuZXdUb2tlbiwgMzAwMDAwLCB7ICd0cmFpbGluZyc6IGZhbHNlIH0pO1xuICogalF1ZXJ5KGVsZW1lbnQpLm9uKCdjbGljaycsIHRocm90dGxlZCk7XG4gKlxuICogLy8gQ2FuY2VsIHRoZSB0cmFpbGluZyB0aHJvdHRsZWQgaW52b2NhdGlvbi5cbiAqIGpRdWVyeSh3aW5kb3cpLm9uKCdwb3BzdGF0ZScsIHRocm90dGxlZC5jYW5jZWwpO1xuICovXG5mdW5jdGlvbiB0aHJvdHRsZShmdW5jLCB3YWl0LCBvcHRpb25zKSB7XG4gIHZhciBsZWFkaW5nID0gdHJ1ZSxcbiAgICAgIHRyYWlsaW5nID0gdHJ1ZTtcblxuICBpZiAodHlwZW9mIGZ1bmMgIT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoRlVOQ19FUlJPUl9URVhUKTtcbiAgfVxuICBpZiAoaXNPYmplY3Qob3B0aW9ucykpIHtcbiAgICBsZWFkaW5nID0gJ2xlYWRpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMubGVhZGluZyA6IGxlYWRpbmc7XG4gICAgdHJhaWxpbmcgPSAndHJhaWxpbmcnIGluIG9wdGlvbnMgPyAhIW9wdGlvbnMudHJhaWxpbmcgOiB0cmFpbGluZztcbiAgfVxuICByZXR1cm4gZGVib3VuY2UoZnVuYywgd2FpdCwge1xuICAgICdsZWFkaW5nJzogbGVhZGluZyxcbiAgICAnbWF4V2FpdCc6IHdhaXQsXG4gICAgJ3RyYWlsaW5nJzogdHJhaWxpbmdcbiAgfSk7XG59XG5cbi8qKlxuICogQ2hlY2tzIGlmIGB2YWx1ZWAgaXMgdGhlXG4gKiBbbGFuZ3VhZ2UgdHlwZV0oaHR0cDovL3d3dy5lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtbGFuZ3VhZ2UtdHlwZXMpXG4gKiBvZiBgT2JqZWN0YC4gKGUuZy4gYXJyYXlzLCBmdW5jdGlvbnMsIG9iamVjdHMsIHJlZ2V4ZXMsIGBuZXcgTnVtYmVyKDApYCwgYW5kIGBuZXcgU3RyaW5nKCcnKWApXG4gKlxuICogQHN0YXRpY1xuICogQG1lbWJlck9mIF9cbiAqIEBzaW5jZSAwLjEuMFxuICogQGNhdGVnb3J5IExhbmdcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgVGhlIHZhbHVlIHRvIGNoZWNrLlxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYHRydWVgIGlmIGB2YWx1ZWAgaXMgYW4gb2JqZWN0LCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3Qoe30pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3QoWzEsIDIsIDNdKTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0KF8ubm9vcCk7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc09iamVjdChudWxsKTtcbiAqIC8vID0+IGZhbHNlXG4gKi9cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbHVlKSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuICByZXR1cm4gISF2YWx1ZSAmJiAodHlwZSA9PSAnb2JqZWN0JyB8fCB0eXBlID09ICdmdW5jdGlvbicpO1xufVxuXG4vKipcbiAqIENoZWNrcyBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLiBBIHZhbHVlIGlzIG9iamVjdC1saWtlIGlmIGl0J3Mgbm90IGBudWxsYFxuICogYW5kIGhhcyBhIGB0eXBlb2ZgIHJlc3VsdCBvZiBcIm9iamVjdFwiLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBjaGVjay5cbiAqIEByZXR1cm5zIHtib29sZWFufSBSZXR1cm5zIGB0cnVlYCBpZiBgdmFsdWVgIGlzIG9iamVjdC1saWtlLCBlbHNlIGBmYWxzZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKHt9KTtcbiAqIC8vID0+IHRydWVcbiAqXG4gKiBfLmlzT2JqZWN0TGlrZShbMSwgMiwgM10pO1xuICogLy8gPT4gdHJ1ZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKF8ubm9vcCk7XG4gKiAvLyA9PiBmYWxzZVxuICpcbiAqIF8uaXNPYmplY3RMaWtlKG51bGwpO1xuICogLy8gPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNPYmplY3RMaWtlKHZhbHVlKSB7XG4gIHJldHVybiAhIXZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0Jztcbn1cblxuLyoqXG4gKiBDaGVja3MgaWYgYHZhbHVlYCBpcyBjbGFzc2lmaWVkIGFzIGEgYFN5bWJvbGAgcHJpbWl0aXZlIG9yIG9iamVjdC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAY2F0ZWdvcnkgTGFuZ1xuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gY2hlY2suXG4gKiBAcmV0dXJucyB7Ym9vbGVhbn0gUmV0dXJucyBgdHJ1ZWAgaWYgYHZhbHVlYCBpcyBhIHN5bWJvbCwgZWxzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLmlzU3ltYm9sKFN5bWJvbC5pdGVyYXRvcik7XG4gKiAvLyA9PiB0cnVlXG4gKlxuICogXy5pc1N5bWJvbCgnYWJjJyk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1N5bWJvbCh2YWx1ZSkge1xuICByZXR1cm4gdHlwZW9mIHZhbHVlID09ICdzeW1ib2wnIHx8XG4gICAgKGlzT2JqZWN0TGlrZSh2YWx1ZSkgJiYgb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWx1ZSkgPT0gc3ltYm9sVGFnKTtcbn1cblxuLyoqXG4gKiBDb252ZXJ0cyBgdmFsdWVgIHRvIGEgbnVtYmVyLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4wLjBcbiAqIEBjYXRlZ29yeSBMYW5nXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byBwcm9jZXNzLlxuICogQHJldHVybnMge251bWJlcn0gUmV0dXJucyB0aGUgbnVtYmVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRvTnVtYmVyKDMuMik7XG4gKiAvLyA9PiAzLjJcbiAqXG4gKiBfLnRvTnVtYmVyKE51bWJlci5NSU5fVkFMVUUpO1xuICogLy8gPT4gNWUtMzI0XG4gKlxuICogXy50b051bWJlcihJbmZpbml0eSk7XG4gKiAvLyA9PiBJbmZpbml0eVxuICpcbiAqIF8udG9OdW1iZXIoJzMuMicpO1xuICogLy8gPT4gMy4yXG4gKi9cbmZ1bmN0aW9uIHRvTnVtYmVyKHZhbHVlKSB7XG4gIGlmICh0eXBlb2YgdmFsdWUgPT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gdmFsdWU7XG4gIH1cbiAgaWYgKGlzU3ltYm9sKHZhbHVlKSkge1xuICAgIHJldHVybiBOQU47XG4gIH1cbiAgaWYgKGlzT2JqZWN0KHZhbHVlKSkge1xuICAgIHZhciBvdGhlciA9IHR5cGVvZiB2YWx1ZS52YWx1ZU9mID09ICdmdW5jdGlvbicgPyB2YWx1ZS52YWx1ZU9mKCkgOiB2YWx1ZTtcbiAgICB2YWx1ZSA9IGlzT2JqZWN0KG90aGVyKSA/IChvdGhlciArICcnKSA6IG90aGVyO1xuICB9XG4gIGlmICh0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdmFsdWUgPT09IDAgPyB2YWx1ZSA6ICt2YWx1ZTtcbiAgfVxuICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UocmVUcmltLCAnJyk7XG4gIHZhciBpc0JpbmFyeSA9IHJlSXNCaW5hcnkudGVzdCh2YWx1ZSk7XG4gIHJldHVybiAoaXNCaW5hcnkgfHwgcmVJc09jdGFsLnRlc3QodmFsdWUpKVxuICAgID8gZnJlZVBhcnNlSW50KHZhbHVlLnNsaWNlKDIpLCBpc0JpbmFyeSA/IDIgOiA4KVxuICAgIDogKHJlSXNCYWRIZXgudGVzdCh2YWx1ZSkgPyBOQU4gOiArdmFsdWUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRocm90dGxlO1xuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBSdXlvUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9cXC9bXlxcP10qXFw/dT0oLiopLztcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJ1XCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCwgbWF0Y2hMaW5rRnJvbVVybCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBNb3ppbGxhUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9vdXRnb2luZ1xcLnByb2RcXC5tb3phd3NcXC5uZXRcXC92XFxkXFwvXFx3K1xcLyguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG1hdGNoTGlua0Zyb21VcmwoYUVsZW1lbnQsIHRoaXMudGVzdCkpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFlpblhpYW5nUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9eaHR0cDpcXC9cXC8vO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAvLyDnvJbovpHlmahcbiAgICBpZiAoYUVsZW1lbnQuaGFzQXR0cmlidXRlKFwiZGF0YS1tY2UtaHJlZlwiKSkge1xuICAgICAgaWYgKCFhRWxlbWVudC5vbmNsaWNrKSB7XG4gICAgICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgYUVsZW1lbnQuaHJlZiwgeyBmb3JjZTogdHJ1ZSB9KTtcbiAgICAgICAgYUVsZW1lbnQub25jbGljayA9IChlKSA9PiB7XG4gICAgICAgICAgLy8g6Zi75q2i5LqL5Lu25YaS5rOhLCDlm6DkuLrkuIrlsYLlhYPntKDnu5HlrprnmoRjbGlja+S6i+S7tuS8mumHjeWumuWQkVxuICAgICAgICAgIGlmIChlLnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYUVsZW1lbnQuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAgICAgICAgIHdpbmRvdy50b3AgPyB3aW5kb3cudG9wLm9wZW4oYUVsZW1lbnQuaHJlZikgOiB3aW5kb3cub3BlbihhRWxlbWVudC5ocmVmKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gICAgLy8g5YiG5Lqr6aG16Z2iXG4gICAgZWxzZSBpZiAoL15odHRwczpcXC9cXC9hcHBcXC55aW54aWFuZ1xcLmNvbVxcL091dGJvdW5kUmVkaXJlY3RcXC5hY3Rpb25cXD9kZXN0PS8udGVzdChhRWxlbWVudC5ocmVmKSkge1xuICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJkZXN0XCIpKTtcbiAgICB9XG4gIH1cbiAgcHVibGljIGFzeW5jIG9uSW5pdCgpOiBQcm9taXNlPHRoaXM+IHtcbiAgICBjb25zdCBoYW5kbGVyID0gKGUpID0+IHtcbiAgICAgIGNvbnN0IGRvbSA9IGUudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xuXG4gICAgICBjb25zdCB0YWdOYW1lID0gZG9tLnRhZ05hbWUudG9VcHBlckNhc2UoKTtcblxuICAgICAgc3dpdGNoICh0YWdOYW1lKSB7XG4gICAgICAgIGNhc2UgXCJBXCI6IHtcbiAgICAgICAgICB0aGlzLnJlc29sdmUoZG9tIGFzIEhUTUxBbmNob3JFbGVtZW50KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjYXNlIFwiSUZSQU1FXCI6IHtcbiAgICAgICAgICBpZiAoZG9tLmhhc0F0dHJpYnV0ZShcImFudGktcmVkaXJlY3QtaGFuZGxlZFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgICBkb20uc2V0QXR0cmlidXRlKFwiYW50aS1yZWRpcmVjdC1oYW5kbGVkXCIsIFwiMVwiKTtcbiAgICAgICAgICAoZG9tIGFzIEhUTUxJRnJhbWVFbGVtZW50KS5jb250ZW50V2luZG93LmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW92ZXJcIiwgaGFuZGxlcik7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlb3ZlclwiLCBoYW5kbGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBDU0ROUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9eaHR0cHM/OlxcL1xcLy87XG4gIHByaXZhdGUgY29udGFpbmVyOiBIVE1MRWxlbWVudDtcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgdGhpcy5jb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2NvbnRlbnRfdmlld3NcIik7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyPy5jb250YWlucyhhRWxlbWVudCkpIHtcbiAgICAgIGlmICghYUVsZW1lbnQub25jbGljayAmJiBhRWxlbWVudC5vcmlnaW4gIT09IHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pIHtcbiAgICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBhRWxlbWVudC5ocmVmLCB7IGZvcmNlOiB0cnVlIH0pO1xuICAgICAgICBhRWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAvLyDpmLvmraLkuovku7blhpLms6EsIOWboOS4uuS4iuWxguWFg+e0oOe7keWumueahGNsaWNr5LqL5Lu25Lya6YeN5a6a5ZCRXG4gICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGFFbGVtZW50LnNldEF0dHJpYnV0ZShcInRhcmdldFwiLCBcIl9ibGFua1wiKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgT1NDaGluYVByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvb3NjaGluYVxcLm5ldFxcL2FjdGlvblxcL0dvVG9MaW5rXFw/dXJsPSguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG5ldyBVUkwoYUVsZW1lbnQuaHJlZikuc2VhcmNoUGFyYW1zLmdldChcInVybFwiKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgWmhpaHVEYWlseVByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvemhpaHVcXC5jb21cXC9cXD90YXJnZXQ9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidGFyZ2V0XCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVEb2NzUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC93d3dcXC5nb29nbGVcXC5jb21cXC91cmxcXD9xPSguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG5ldyBVUkwoYUVsZW1lbnQuaHJlZikuc2VhcmNoUGFyYW1zLmdldChcInFcIikpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFBvY2tldFByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvZ2V0cG9ja2V0XFwuY29tXFwvcmVkaXJlY3RcXD91cmw9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidXJsXCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5leHBvcnQgY2xhc3MgR21haWxQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBSRURJUkVDVF9QUk9QRVJUWSA9IFwiZGF0YS1zYWZlcmVkaXJlY3R1cmxcIjtcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgLy8g56e76Zmk6L+Z5Liq5bGe5oCn77yM6YKj5LmIIGEg6ZO+5o6l5bCx5LiN5Lya6Lez6L2sXG4gICAgLy8gRklYTUU6IGdtYWlsIOaYr+WkmuWxgiBpZnJhbWUg5bWM5aWXXG4gICAgaWYgKGFFbGVtZW50LmdldEF0dHJpYnV0ZSh0aGlzLlJFRElSRUNUX1BST1BFUlRZKSkge1xuICAgICAgYUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHRoaXMuUkVESVJFQ1RfUFJPUEVSVFkpO1xuICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBhRWxlbWVudC5ocmVmKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgSnVlamluUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9saW5rXFwuanVlamluXFwuKGltfGNuKVxcL1xcP3RhcmdldD0oLiopLztcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3QgZmluYWxVUkwgPSBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJ0YXJnZXRcIik7XG4gICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBmaW5hbFVSTCk7XG5cbiAgICBpZiAodGhpcy50ZXN0LnRlc3QoYUVsZW1lbnQudGl0bGUpKSB7XG4gICAgICBhRWxlbWVudC50aXRsZSA9IGZpbmFsVVJMO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIFFRTWFpbFByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSB0cnVlO1xuICBwcml2YXRlIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQ7XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIHRoaXMuY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjb250ZW50RGl2XCIpO1xuICAgIGlmICh0aGlzLmNvbnRhaW5lcj8uY29udGFpbnMoYUVsZW1lbnQpKSB7XG4gICAgICBpZiAoYUVsZW1lbnQub25jbGljaykge1xuICAgICAgICBhRWxlbWVudC5vbmNsaWNrID0gKGUpID0+IHtcbiAgICAgICAgICAvLyDpmLvmraLkuovku7blhpLms6EsIOWboOS4uuS4iuWxguWFg+e0oOe7keWumueahGNsaWNr5LqL5Lu25Lya6YeN5a6a5ZCRXG4gICAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgTWlKaVByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvbWlqaXNvdVxcLmNvbVxcL3VybF9wcm94eVxcP3Byb3h5dXJsPSguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG5ldyBVUkwoYUVsZW1lbnQuaHJlZikuc2VhcmNoUGFyYW1zLmdldChcInByb3h5dXJsXCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IE1hcmtlciwgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcbmV4cG9ydCBjbGFzcyBHb29nbGVQbGF5UHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdChhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBpZiAoL2dvb2dsZVxcLmNvbVxcL3VybFxcP3E9KC4qKS8udGVzdChhRWxlbWVudC5ocmVmKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmICgvXlxcL3N0b3JlXFwvYXBwc1xcL2RldGFpbHMvLnRlc3QobG9jYXRpb24ucGF0aG5hbWUpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJxXCIpKTtcblxuICAgIC8vIOenu+mZpOW8gOWPkeiAheagj+ebruS4i+eahOmHjeWumuWQkVxuICAgIGNvbnN0IGVsZXMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJhLmhyVGJwXCIpKTtcblxuICAgIGZvciAoY29uc3QgZWxlIG9mIGVsZXMpIHtcbiAgICAgIGlmICghZWxlLmhyZWYpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoZWxlLmdldEF0dHJpYnV0ZShNYXJrZXIuUmVkaXJlY3RTdGF0dXNEb25lKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgZWxlLnNldEF0dHJpYnV0ZShNYXJrZXIuUmVkaXJlY3RTdGF0dXNEb25lLCBlbGUuaHJlZik7XG4gICAgICBlbGUuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gICAgICBlbGUuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgXCJjbGlja1wiLFxuICAgICAgICAoZXZlbnQpID0+IHtcbiAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFN0ZWFtUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9zdGVhbWNvbW11bml0eVxcLmNvbVxcL2xpbmtmaWx0ZXJcXC9cXD91cmw9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidXJsXCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5leHBvcnQgY2xhc3MgVGllYmFQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL2p1bXBcXGQqXFwuYmRpbWdcXC5jb20vO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBpZiAoIXRoaXMudGVzdC50ZXN0KGFFbGVtZW50LmhyZWYpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCB1cmwgPSBcIlwiO1xuICAgIGNvbnN0IHRleHQ6IHN0cmluZyA9IGFFbGVtZW50LmlubmVyVGV4dCB8fCBhRWxlbWVudC50ZXh0Q29udGVudCB8fCBcIlwiO1xuICAgIHRyeSB7XG4gICAgICBpZiAoL2h0dHBzPzpcXC9cXC8vLnRlc3QodGV4dCkpIHtcbiAgICAgICAgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KHRleHQpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHVybCA9IC9odHRwcz86XFwvXFwvLy50ZXN0KHRleHQpID8gdGV4dCA6IFwiXCI7XG4gICAgfVxuICAgIGlmICh1cmwpIHtcbiAgICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgdXJsKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgVHdpdHRlclByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvdFxcLmNvXFwvXFx3Ky87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGlmICghdGhpcy50ZXN0LnRlc3QoYUVsZW1lbnQuaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoL2h0dHBzPzpcXC9cXC8vLnRlc3QoYUVsZW1lbnQudGl0bGUpKSB7XG4gICAgICBjb25zdCB1cmw6IHN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChhRWxlbWVudC50aXRsZSk7XG5cbiAgICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgdXJsKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBpbm5lclRleHQgPSBhRWxlbWVudC5pbm5lclRleHQucmVwbGFjZSgv4oCmJC8sIFwiXCIpO1xuXG4gICAgaWYgKC9odHRwcz86XFwvXFwvLy50ZXN0KGlubmVyVGV4dCkpIHtcbiAgICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgaW5uZXJUZXh0KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuaW1wb3J0IGh0dHAgZnJvbSBcImdtLWh0dHBcIjtcblxuZXhwb3J0IGNsYXNzIEJhaWR1VmlkZW9Qcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3ZcXC5iYWlkdVxcLmNvbVxcL2xpbmtcXD91cmw9LztcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgaHR0cFxuICAgICAgLnJlcXVlc3Qoe1xuICAgICAgICB1cmw6IGFFbGVtZW50LmhyZWYsXG4gICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgYW5vbnltb3VzOiB0cnVlLFxuICAgICAgfSlcbiAgICAgIC50aGVuKChyZXM6IFJlc3BvbnNlJCkgPT4ge1xuICAgICAgICBpZiAocmVzLmZpbmFsVXJsKSB7XG4gICAgICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCByZXMuZmluYWxVcmwpO1xuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgICAgfSk7XG4gIH1cbn1cbiIsIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImdtSHR0cFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJnbUh0dHBcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4vKioqKioqLyBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4vKioqKioqLyBcdFx0XHRcdGdldDogZ2V0dGVyXG4vKioqKioqLyBcdFx0XHR9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8qKioqKiovIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vKipcbiAqIENyZWF0ZWQgYnkgYXhldHJveSBvbiAxNy02LTIzLlxuICovXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi9pbmRleC5kLnRzXCIgLz5cbnZhciBfX2Fzc2lnbiA9ICh0aGlzICYmIHRoaXMuX19hc3NpZ24pIHx8IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24odCkge1xuICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpXG4gICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICB9XG4gICAgcmV0dXJuIHQ7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZnVuY3Rpb24gaXNGdW5jdGlvbihmdW5jKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBmdW5jID09PSBcImZ1bmN0aW9uXCI7XG59XG52YXIgSHR0cCA9IChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gSHR0cChjb25maWcpIHtcbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgIH1cbiAgICBIdHRwLnByb3RvdHlwZS5zZXRDb25maWcgPSBmdW5jdGlvbiAoY29uZmlnKSB7XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICB0aGlzLmNvbmZpZyA9IF9fYXNzaWduKHt9LCB0aGlzLmNvbmZpZywgY29uZmlnKTtcbiAgICB9O1xuICAgIEh0dHAucHJvdG90eXBlLmNyZWF0ZSA9IGZ1bmN0aW9uIChjb25maWcpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBIdHRwKGNvbmZpZyk7XG4gICAgfTtcbiAgICBIdHRwLnByb3RvdHlwZS5yZXF1ZXN0ID0gZnVuY3Rpb24gKGNvbmZpZykge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGNvbW1vblJlcXVlc3RDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBjb25maWcubWV0aG9kLFxuICAgICAgICAgICAgICAgIHVybDogY29uZmlnLnVybCxcbiAgICAgICAgICAgICAgICBkYXRhOiBjb25maWcuYm9keSxcbiAgICAgICAgICAgICAgICBoZWFkZXI6IGNvbmZpZy5oZWFkZXJzXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdmFyIEdNX3htbGh0dHBSZXF1ZXN0Q29uZmlnID0gX19hc3NpZ24oe30sIGNvbW1vblJlcXVlc3RDb25maWcsIGNvbmZpZywgX3RoaXMuY29uZmlnKTtcbiAgICAgICAgICAgIHZhciBvbnJlYWR5c3RhdGVjaGFuZ2UgPSBHTV94bWxodHRwUmVxdWVzdENvbmZpZy5vbnJlYWR5c3RhdGVjaGFuZ2UsIG9uZXJyb3IgPSBHTV94bWxodHRwUmVxdWVzdENvbmZpZy5vbmVycm9yLCBvbmFib3J0ID0gR01feG1saHR0cFJlcXVlc3RDb25maWcub25hYm9ydCwgb250aW1lb3V0ID0gR01feG1saHR0cFJlcXVlc3RDb25maWcub250aW1lb3V0O1xuICAgICAgICAgICAgR01feG1saHR0cFJlcXVlc3RDb25maWcuc3luY2hyb25vdXMgPSB0cnVlOyAvLyBhc3luY1xuICAgICAgICAgICAgR01feG1saHR0cFJlcXVlc3RDb25maWcub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbihvbnJlYWR5c3RhdGVjaGFuZ2UpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBvbnJlYWR5c3RhdGVjaGFuZ2UuY2FsbCh0aGlzLCByZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZWFkeVN0YXRlICE9PSA0KVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgcmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA0MDBcbiAgICAgICAgICAgICAgICAgICAgPyByZXNvbHZlKHJlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICA6IHJlamVjdChyZXNwb25zZSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgR01feG1saHR0cFJlcXVlc3RDb25maWcub25lcnJvciA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24ob25lcnJvcikgJiYgb25lcnJvci5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgR01feG1saHR0cFJlcXVlc3RDb25maWcub25hYm9ydCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRnVuY3Rpb24ob25hYm9ydCkgJiYgb25hYm9ydC5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgR01feG1saHR0cFJlcXVlc3RDb25maWcub250aW1lb3V0ID0gZnVuY3Rpb24gKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgaXNGdW5jdGlvbihvbnRpbWVvdXQpICYmIG9udGltZW91dC5jYWxsKHRoaXMsIHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKF90aGlzLmNvbmZpZy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiJWNbXCIgKyBjb21tb25SZXF1ZXN0Q29uZmlnLm1ldGhvZC50b1VwcGVyQ2FzZSgpICsgXCJdJWM6IFwiICsgY29tbW9uUmVxdWVzdENvbmZpZy51cmwsIFwiY29sb3I6IGdyZWVuXCIsIFwiY29sb3I6ICMwMDA7dGV4dC1zdHlsZTogdW5kZXItbGluZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEdNX3htbGh0dHBSZXF1ZXN0KF9fYXNzaWduKHt9LCBHTV94bWxodHRwUmVxdWVzdENvbmZpZykpO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIEh0dHAucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uICh1cmwsIGRhdGEsIGhlYWRlcnMsIGNvbmZpZykge1xuICAgICAgICBpZiAoaGVhZGVycyA9PT0gdm9pZCAwKSB7IGhlYWRlcnMgPSB7fTsgfVxuICAgICAgICBpZiAoY29uZmlnID09PSB2b2lkIDApIHsgY29uZmlnID0ge307IH1cbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdChfX2Fzc2lnbih7IHVybDogdXJsLCBtZXRob2Q6IFwiR0VUXCIsIGJvZHk6IGRhdGEsIGhlYWRlcnM6IGhlYWRlcnMgfSwgY29uZmlnKSk7XG4gICAgfTtcbiAgICBIdHRwLnByb3RvdHlwZS5wb3N0ID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGlmIChoZWFkZXJzID09PSB2b2lkIDApIHsgaGVhZGVycyA9IHt9OyB9XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHsgdXJsOiB1cmwsIG1ldGhvZDogXCJQT1NUXCIsIGJvZHk6IGRhdGEsIGhlYWRlcnM6IGhlYWRlcnMgfSwgY29uZmlnKSk7XG4gICAgfTtcbiAgICBIdHRwLnByb3RvdHlwZS5wdXQgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGhlYWRlcnMgPT09IHZvaWQgMCkgeyBoZWFkZXJzID0ge307IH1cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oeyB1cmw6IHVybCwgbWV0aG9kOiBcIlBPU1RcIiwgYm9keTogZGF0YSwgaGVhZGVyczogaGVhZGVycyB9LCBjb25maWcpKTtcbiAgICB9O1xuICAgIEh0dHAucHJvdG90eXBlW1wiZGVsZXRlXCJdID0gZnVuY3Rpb24gKHVybCwgZGF0YSwgaGVhZGVycywgY29uZmlnKSB7XG4gICAgICAgIGlmIChoZWFkZXJzID09PSB2b2lkIDApIHsgaGVhZGVycyA9IHt9OyB9XG4gICAgICAgIGlmIChjb25maWcgPT09IHZvaWQgMCkgeyBjb25maWcgPSB7fTsgfVxuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KF9fYXNzaWduKHsgdXJsOiB1cmwsIG1ldGhvZDogXCJERUxFVEVcIiwgYm9keTogZGF0YSwgaGVhZGVyczogaGVhZGVycyB9LCBjb25maWcpKTtcbiAgICB9O1xuICAgIEh0dHAucHJvdG90eXBlLmhlYWQgPSBmdW5jdGlvbiAodXJsLCBkYXRhLCBoZWFkZXJzLCBjb25maWcpIHtcbiAgICAgICAgaWYgKGhlYWRlcnMgPT09IHZvaWQgMCkgeyBoZWFkZXJzID0ge307IH1cbiAgICAgICAgaWYgKGNvbmZpZyA9PT0gdm9pZCAwKSB7IGNvbmZpZyA9IHt9OyB9XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QoX19hc3NpZ24oeyB1cmw6IHVybCwgbWV0aG9kOiBcIkhFQURcIiwgYm9keTogZGF0YSwgaGVhZGVyczogaGVhZGVycyB9LCBjb25maWcpKTtcbiAgICB9O1xuICAgIHJldHVybiBIdHRwO1xufSgpKTtcbmV4cG9ydHMuSHR0cCA9IEh0dHA7XG52YXIgdGltZW91dCA9IDUwMDA7XG5leHBvcnRzLnRpbWVvdXQgPSB0aW1lb3V0O1xudmFyIGh0dHAgPSBuZXcgSHR0cCh7IHRpbWVvdXQ6IHRpbWVvdXQgfSk7XG5leHBvcnRzLmh0dHAgPSBodHRwO1xuZXhwb3J0cy5kZWZhdWx0ID0gaHR0cDtcblxuXG4vKioqLyB9KVxuLyoqKioqKi8gXSk7XG59KTsiLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFdlYm9Qcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3RcXC5jblxcL1xcdysvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBpZiAoISh0aGlzLnRlc3QudGVzdChhRWxlbWVudC5ocmVmKSAmJiAvXmh0dHBzPzpcXC9cXC8vLnRlc3QoYUVsZW1lbnQudGl0bGUpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHVybDogc3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KGFFbGVtZW50LnRpdGxlKTtcblxuICAgIGlmICh1cmwpIHtcbiAgICAgIGFFbGVtZW50LmhyZWYgPSB1cmw7XG4gICAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIHVybCk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0LCBkZWNyZWFzZVJlZGlyZWN0LCBnZXRSZWRpcmVjdCwgaW5jcmVhc2VSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiZ20taHR0cFwiO1xuaW1wb3J0IHBSZXRyeSBmcm9tIFwicC1yZXRyeVwiO1xuXG5leHBvcnQgY2xhc3MgQmFpZHVQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3d3d1xcLmJhaWR1XFwuY29tXFwvbGlua1xcP3VybD0vO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBpZiAoZ2V0UmVkaXJlY3QoYUVsZW1lbnQpIDw9IDIgJiYgdGhpcy50ZXN0LnRlc3QoYUVsZW1lbnQuaHJlZikpIHtcbiAgICAgIGluY3JlYXNlUmVkaXJlY3QoYUVsZW1lbnQpO1xuXG4gICAgICBwUmV0cnkoKCkgPT4gdGhpcy5oYW5kbGVyT25lRWxlbWVudChhRWxlbWVudCksIHsgcmV0cmllczogMyB9KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgZGVjcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgZGVjcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlck9uZUVsZW1lbnQoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucmVxdWVzdCh7XG4gICAgICAgIHVybDogYUVsZW1lbnQuaHJlZixcbiAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICBhbm9ueW1vdXM6IHRydWUsXG4gICAgICB9KTtcblxuICAgICAgaWYgKHJlcy5maW5hbFVybCkge1xuICAgICAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIHJlcy5maW5hbFVybCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXM7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKGBbaHR0cF06ICR7YUVsZW1lbnQuaHJlZn0gZmFpbGApKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCByZXRyeSBmcm9tICdyZXRyeSc7XG5cbmNvbnN0IG5ldHdvcmtFcnJvck1zZ3MgPSBuZXcgU2V0KFtcblx0J0ZhaWxlZCB0byBmZXRjaCcsIC8vIENocm9tZVxuXHQnTmV0d29ya0Vycm9yIHdoZW4gYXR0ZW1wdGluZyB0byBmZXRjaCByZXNvdXJjZS4nLCAvLyBGaXJlZm94XG5cdCdUaGUgSW50ZXJuZXQgY29ubmVjdGlvbiBhcHBlYXJzIHRvIGJlIG9mZmxpbmUuJywgLy8gU2FmYXJpXG5cdCdOZXR3b3JrIHJlcXVlc3QgZmFpbGVkJywgLy8gYGNyb3NzLWZldGNoYFxuXHQnZmV0Y2ggZmFpbGVkJywgLy8gVW5kaWNpIChOb2RlLmpzKVxuXSk7XG5cbmV4cG9ydCBjbGFzcyBBYm9ydEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuXHRjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG5cdFx0c3VwZXIoKTtcblxuXHRcdGlmIChtZXNzYWdlIGluc3RhbmNlb2YgRXJyb3IpIHtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvciA9IG1lc3NhZ2U7XG5cdFx0XHQoe21lc3NhZ2V9ID0gbWVzc2FnZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvciA9IG5ldyBFcnJvcihtZXNzYWdlKTtcblx0XHRcdHRoaXMub3JpZ2luYWxFcnJvci5zdGFjayA9IHRoaXMuc3RhY2s7XG5cdFx0fVxuXG5cdFx0dGhpcy5uYW1lID0gJ0Fib3J0RXJyb3InO1xuXHRcdHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG5cdH1cbn1cblxuY29uc3QgZGVjb3JhdGVFcnJvcldpdGhDb3VudHMgPSAoZXJyb3IsIGF0dGVtcHROdW1iZXIsIG9wdGlvbnMpID0+IHtcblx0Ly8gTWludXMgMSBmcm9tIGF0dGVtcHROdW1iZXIgYmVjYXVzZSB0aGUgZmlyc3QgYXR0ZW1wdCBkb2VzIG5vdCBjb3VudCBhcyBhIHJldHJ5XG5cdGNvbnN0IHJldHJpZXNMZWZ0ID0gb3B0aW9ucy5yZXRyaWVzIC0gKGF0dGVtcHROdW1iZXIgLSAxKTtcblxuXHRlcnJvci5hdHRlbXB0TnVtYmVyID0gYXR0ZW1wdE51bWJlcjtcblx0ZXJyb3IucmV0cmllc0xlZnQgPSByZXRyaWVzTGVmdDtcblx0cmV0dXJuIGVycm9yO1xufTtcblxuY29uc3QgaXNOZXR3b3JrRXJyb3IgPSBlcnJvck1lc3NhZ2UgPT4gbmV0d29ya0Vycm9yTXNncy5oYXMoZXJyb3JNZXNzYWdlKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcFJldHJ5KGlucHV0LCBvcHRpb25zKSB7XG5cdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0b3B0aW9ucyA9IHtcblx0XHRcdG9uRmFpbGVkQXR0ZW1wdCgpIHt9LFxuXHRcdFx0cmV0cmllczogMTAsXG5cdFx0XHQuLi5vcHRpb25zLFxuXHRcdH07XG5cblx0XHRjb25zdCBvcGVyYXRpb24gPSByZXRyeS5vcGVyYXRpb24ob3B0aW9ucyk7XG5cblx0XHRjb25zdCBhYm9ydEhhbmRsZXIgPSAoKSA9PiB7XG5cdFx0XHRvcGVyYXRpb24uc3RvcCgpO1xuXHRcdFx0cmVqZWN0KG9wdGlvbnMuc2lnbmFsPy5yZWFzb24pO1xuXHRcdH07XG5cblx0XHRpZiAob3B0aW9ucy5zaWduYWwgJiYgIW9wdGlvbnMuc2lnbmFsLmFib3J0ZWQpIHtcblx0XHRcdG9wdGlvbnMuc2lnbmFsLmFkZEV2ZW50TGlzdGVuZXIoJ2Fib3J0JywgYWJvcnRIYW5kbGVyLCB7b25jZTogdHJ1ZX0pO1xuXHRcdH1cblxuXHRcdGNvbnN0IGNsZWFuVXAgPSAoKSA9PiB7XG5cdFx0XHRvcHRpb25zLnNpZ25hbD8ucmVtb3ZlRXZlbnRMaXN0ZW5lcignYWJvcnQnLCBhYm9ydEhhbmRsZXIpO1xuXHRcdFx0b3BlcmF0aW9uLnN0b3AoKTtcblx0XHR9O1xuXG5cdFx0b3BlcmF0aW9uLmF0dGVtcHQoYXN5bmMgYXR0ZW1wdE51bWJlciA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCByZXN1bHQgPSBhd2FpdCBpbnB1dChhdHRlbXB0TnVtYmVyKTtcblx0XHRcdFx0Y2xlYW5VcCgpO1xuXHRcdFx0XHRyZXNvbHZlKHJlc3VsdCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGlmICghKGVycm9yIGluc3RhbmNlb2YgRXJyb3IpKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBOb24tZXJyb3Igd2FzIHRocm93bjogXCIke2Vycm9yfVwiLiBZb3Ugc2hvdWxkIG9ubHkgdGhyb3cgZXJyb3JzLmApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFib3J0RXJyb3IpIHtcblx0XHRcdFx0XHRcdHRocm93IGVycm9yLm9yaWdpbmFsRXJyb3I7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yICYmICFpc05ldHdvcmtFcnJvcihlcnJvci5tZXNzYWdlKSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgZXJyb3I7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YXdhaXQgb3B0aW9ucy5vbkZhaWxlZEF0dGVtcHQoZGVjb3JhdGVFcnJvcldpdGhDb3VudHMoZXJyb3IsIGF0dGVtcHROdW1iZXIsIG9wdGlvbnMpKTtcblxuXHRcdFx0XHRcdGlmICghb3BlcmF0aW9uLnJldHJ5KGVycm9yKSkge1xuXHRcdFx0XHRcdFx0dGhyb3cgb3BlcmF0aW9uLm1haW5FcnJvcigpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBjYXRjaCAoZmluYWxFcnJvcikge1xuXHRcdFx0XHRcdGRlY29yYXRlRXJyb3JXaXRoQ291bnRzKGZpbmFsRXJyb3IsIGF0dGVtcHROdW1iZXIsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdGNsZWFuVXAoKTtcblx0XHRcdFx0XHRyZWplY3QoZmluYWxFcnJvcik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fSk7XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbGliL3JldHJ5Jyk7IiwidmFyIFJldHJ5T3BlcmF0aW9uID0gcmVxdWlyZSgnLi9yZXRyeV9vcGVyYXRpb24nKTtcblxuZXhwb3J0cy5vcGVyYXRpb24gPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gIHZhciB0aW1lb3V0cyA9IGV4cG9ydHMudGltZW91dHMob3B0aW9ucyk7XG4gIHJldHVybiBuZXcgUmV0cnlPcGVyYXRpb24odGltZW91dHMsIHtcbiAgICAgIGZvcmV2ZXI6IG9wdGlvbnMgJiYgKG9wdGlvbnMuZm9yZXZlciB8fCBvcHRpb25zLnJldHJpZXMgPT09IEluZmluaXR5KSxcbiAgICAgIHVucmVmOiBvcHRpb25zICYmIG9wdGlvbnMudW5yZWYsXG4gICAgICBtYXhSZXRyeVRpbWU6IG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhSZXRyeVRpbWVcbiAgfSk7XG59O1xuXG5leHBvcnRzLnRpbWVvdXRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICBpZiAob3B0aW9ucyBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgcmV0dXJuIFtdLmNvbmNhdChvcHRpb25zKTtcbiAgfVxuXG4gIHZhciBvcHRzID0ge1xuICAgIHJldHJpZXM6IDEwLFxuICAgIGZhY3RvcjogMixcbiAgICBtaW5UaW1lb3V0OiAxICogMTAwMCxcbiAgICBtYXhUaW1lb3V0OiBJbmZpbml0eSxcbiAgICByYW5kb21pemU6IGZhbHNlXG4gIH07XG4gIGZvciAodmFyIGtleSBpbiBvcHRpb25zKSB7XG4gICAgb3B0c1trZXldID0gb3B0aW9uc1trZXldO1xuICB9XG5cbiAgaWYgKG9wdHMubWluVGltZW91dCA+IG9wdHMubWF4VGltZW91dCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWluVGltZW91dCBpcyBncmVhdGVyIHRoYW4gbWF4VGltZW91dCcpO1xuICB9XG5cbiAgdmFyIHRpbWVvdXRzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgb3B0cy5yZXRyaWVzOyBpKyspIHtcbiAgICB0aW1lb3V0cy5wdXNoKHRoaXMuY3JlYXRlVGltZW91dChpLCBvcHRzKSk7XG4gIH1cblxuICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmZvcmV2ZXIgJiYgIXRpbWVvdXRzLmxlbmd0aCkge1xuICAgIHRpbWVvdXRzLnB1c2godGhpcy5jcmVhdGVUaW1lb3V0KGksIG9wdHMpKTtcbiAgfVxuXG4gIC8vIHNvcnQgdGhlIGFycmF5IG51bWVyaWNhbGx5IGFzY2VuZGluZ1xuICB0aW1lb3V0cy5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgIHJldHVybiBhIC0gYjtcbiAgfSk7XG5cbiAgcmV0dXJuIHRpbWVvdXRzO1xufTtcblxuZXhwb3J0cy5jcmVhdGVUaW1lb3V0ID0gZnVuY3Rpb24oYXR0ZW1wdCwgb3B0cykge1xuICB2YXIgcmFuZG9tID0gKG9wdHMucmFuZG9taXplKVxuICAgID8gKE1hdGgucmFuZG9tKCkgKyAxKVxuICAgIDogMTtcblxuICB2YXIgdGltZW91dCA9IE1hdGgucm91bmQocmFuZG9tICogTWF0aC5tYXgob3B0cy5taW5UaW1lb3V0LCAxKSAqIE1hdGgucG93KG9wdHMuZmFjdG9yLCBhdHRlbXB0KSk7XG4gIHRpbWVvdXQgPSBNYXRoLm1pbih0aW1lb3V0LCBvcHRzLm1heFRpbWVvdXQpO1xuXG4gIHJldHVybiB0aW1lb3V0O1xufTtcblxuZXhwb3J0cy53cmFwID0gZnVuY3Rpb24ob2JqLCBvcHRpb25zLCBtZXRob2RzKSB7XG4gIGlmIChvcHRpb25zIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICBtZXRob2RzID0gb3B0aW9ucztcbiAgICBvcHRpb25zID0gbnVsbDtcbiAgfVxuXG4gIGlmICghbWV0aG9kcykge1xuICAgIG1ldGhvZHMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgICBpZiAodHlwZW9mIG9ialtrZXldID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIG1ldGhvZHMucHVzaChrZXkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0aG9kcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBtZXRob2QgICA9IG1ldGhvZHNbaV07XG4gICAgdmFyIG9yaWdpbmFsID0gb2JqW21ldGhvZF07XG5cbiAgICBvYmpbbWV0aG9kXSA9IGZ1bmN0aW9uIHJldHJ5V3JhcHBlcihvcmlnaW5hbCkge1xuICAgICAgdmFyIG9wICAgICAgID0gZXhwb3J0cy5vcGVyYXRpb24ob3B0aW9ucyk7XG4gICAgICB2YXIgYXJncyAgICAgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgICAgdmFyIGNhbGxiYWNrID0gYXJncy5wb3AoKTtcblxuICAgICAgYXJncy5wdXNoKGZ1bmN0aW9uKGVycikge1xuICAgICAgICBpZiAob3AucmV0cnkoZXJyKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgYXJndW1lbnRzWzBdID0gb3AubWFpbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0pO1xuXG4gICAgICBvcC5hdHRlbXB0KGZ1bmN0aW9uKCkge1xuICAgICAgICBvcmlnaW5hbC5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgfSk7XG4gICAgfS5iaW5kKG9iaiwgb3JpZ2luYWwpO1xuICAgIG9ialttZXRob2RdLm9wdGlvbnMgPSBvcHRpb25zO1xuICB9XG59O1xuIiwiZnVuY3Rpb24gUmV0cnlPcGVyYXRpb24odGltZW91dHMsIG9wdGlvbnMpIHtcbiAgLy8gQ29tcGF0aWJpbGl0eSBmb3IgdGhlIG9sZCAodGltZW91dHMsIHJldHJ5Rm9yZXZlcikgc2lnbmF0dXJlXG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucyA9IHsgZm9yZXZlcjogb3B0aW9ucyB9O1xuICB9XG5cbiAgdGhpcy5fb3JpZ2luYWxUaW1lb3V0cyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGltZW91dHMpKTtcbiAgdGhpcy5fdGltZW91dHMgPSB0aW1lb3V0cztcbiAgdGhpcy5fb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIHRoaXMuX21heFJldHJ5VGltZSA9IG9wdGlvbnMgJiYgb3B0aW9ucy5tYXhSZXRyeVRpbWUgfHwgSW5maW5pdHk7XG4gIHRoaXMuX2ZuID0gbnVsbDtcbiAgdGhpcy5fZXJyb3JzID0gW107XG4gIHRoaXMuX2F0dGVtcHRzID0gMTtcbiAgdGhpcy5fb3BlcmF0aW9uVGltZW91dCA9IG51bGw7XG4gIHRoaXMuX29wZXJhdGlvblRpbWVvdXRDYiA9IG51bGw7XG4gIHRoaXMuX3RpbWVvdXQgPSBudWxsO1xuICB0aGlzLl9vcGVyYXRpb25TdGFydCA9IG51bGw7XG4gIHRoaXMuX3RpbWVyID0gbnVsbDtcblxuICBpZiAodGhpcy5fb3B0aW9ucy5mb3JldmVyKSB7XG4gICAgdGhpcy5fY2FjaGVkVGltZW91dHMgPSB0aGlzLl90aW1lb3V0cy5zbGljZSgwKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBSZXRyeU9wZXJhdGlvbjtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnJlc2V0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuX2F0dGVtcHRzID0gMTtcbiAgdGhpcy5fdGltZW91dHMgPSB0aGlzLl9vcmlnaW5hbFRpbWVvdXRzLnNsaWNlKDApO1xufVxuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuc3RvcCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5fdGltZW91dCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl90aW1lb3V0KTtcbiAgfVxuICBpZiAodGhpcy5fdGltZXIpIHtcbiAgICBjbGVhclRpbWVvdXQodGhpcy5fdGltZXIpO1xuICB9XG5cbiAgdGhpcy5fdGltZW91dHMgICAgICAgPSBbXTtcbiAgdGhpcy5fY2FjaGVkVGltZW91dHMgPSBudWxsO1xufTtcblxuUmV0cnlPcGVyYXRpb24ucHJvdG90eXBlLnJldHJ5ID0gZnVuY3Rpb24oZXJyKSB7XG4gIGlmICh0aGlzLl90aW1lb3V0KSB7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuX3RpbWVvdXQpO1xuICB9XG5cbiAgaWYgKCFlcnIpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGN1cnJlbnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gIGlmIChlcnIgJiYgY3VycmVudFRpbWUgLSB0aGlzLl9vcGVyYXRpb25TdGFydCA+PSB0aGlzLl9tYXhSZXRyeVRpbWUpIHtcbiAgICB0aGlzLl9lcnJvcnMucHVzaChlcnIpO1xuICAgIHRoaXMuX2Vycm9ycy51bnNoaWZ0KG5ldyBFcnJvcignUmV0cnlPcGVyYXRpb24gdGltZW91dCBvY2N1cnJlZCcpKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB0aGlzLl9lcnJvcnMucHVzaChlcnIpO1xuXG4gIHZhciB0aW1lb3V0ID0gdGhpcy5fdGltZW91dHMuc2hpZnQoKTtcbiAgaWYgKHRpbWVvdXQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRUaW1lb3V0cykge1xuICAgICAgLy8gcmV0cnkgZm9yZXZlciwgb25seSBrZWVwIGxhc3QgZXJyb3JcbiAgICAgIHRoaXMuX2Vycm9ycy5zcGxpY2UoMCwgdGhpcy5fZXJyb3JzLmxlbmd0aCAtIDEpO1xuICAgICAgdGltZW91dCA9IHRoaXMuX2NhY2hlZFRpbWVvdXRzLnNsaWNlKC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHZhciBzZWxmID0gdGhpcztcbiAgdGhpcy5fdGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIHNlbGYuX2F0dGVtcHRzKys7XG5cbiAgICBpZiAoc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKSB7XG4gICAgICBzZWxmLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgc2VsZi5fb3BlcmF0aW9uVGltZW91dENiKHNlbGYuX2F0dGVtcHRzKTtcbiAgICAgIH0sIHNlbGYuX29wZXJhdGlvblRpbWVvdXQpO1xuXG4gICAgICBpZiAoc2VsZi5fb3B0aW9ucy51bnJlZikge1xuICAgICAgICAgIHNlbGYuX3RpbWVvdXQudW5yZWYoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzZWxmLl9mbihzZWxmLl9hdHRlbXB0cyk7XG4gIH0sIHRpbWVvdXQpO1xuXG4gIGlmICh0aGlzLl9vcHRpb25zLnVucmVmKSB7XG4gICAgICB0aGlzLl90aW1lci51bnJlZigpO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUuYXR0ZW1wdCA9IGZ1bmN0aW9uKGZuLCB0aW1lb3V0T3BzKSB7XG4gIHRoaXMuX2ZuID0gZm47XG5cbiAgaWYgKHRpbWVvdXRPcHMpIHtcbiAgICBpZiAodGltZW91dE9wcy50aW1lb3V0KSB7XG4gICAgICB0aGlzLl9vcGVyYXRpb25UaW1lb3V0ID0gdGltZW91dE9wcy50aW1lb3V0O1xuICAgIH1cbiAgICBpZiAodGltZW91dE9wcy5jYikge1xuICAgICAgdGhpcy5fb3BlcmF0aW9uVGltZW91dENiID0gdGltZW91dE9wcy5jYjtcbiAgICB9XG4gIH1cblxuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGlmICh0aGlzLl9vcGVyYXRpb25UaW1lb3V0Q2IpIHtcbiAgICB0aGlzLl90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgIHNlbGYuX29wZXJhdGlvblRpbWVvdXRDYigpO1xuICAgIH0sIHNlbGYuX29wZXJhdGlvblRpbWVvdXQpO1xuICB9XG5cbiAgdGhpcy5fb3BlcmF0aW9uU3RhcnQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICB0aGlzLl9mbih0aGlzLl9hdHRlbXB0cyk7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUudHJ5ID0gZnVuY3Rpb24oZm4pIHtcbiAgY29uc29sZS5sb2coJ1VzaW5nIFJldHJ5T3BlcmF0aW9uLnRyeSgpIGlzIGRlcHJlY2F0ZWQnKTtcbiAgdGhpcy5hdHRlbXB0KGZuKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdGFydCA9IGZ1bmN0aW9uKGZuKSB7XG4gIGNvbnNvbGUubG9nKCdVc2luZyBSZXRyeU9wZXJhdGlvbi5zdGFydCgpIGlzIGRlcHJlY2F0ZWQnKTtcbiAgdGhpcy5hdHRlbXB0KGZuKTtcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5zdGFydCA9IFJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS50cnk7XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5lcnJvcnMgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuX2Vycm9ycztcbn07XG5cblJldHJ5T3BlcmF0aW9uLnByb3RvdHlwZS5hdHRlbXB0cyA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5fYXR0ZW1wdHM7XG59O1xuXG5SZXRyeU9wZXJhdGlvbi5wcm90b3R5cGUubWFpbkVycm9yID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLl9lcnJvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgY291bnRzID0ge307XG4gIHZhciBtYWluRXJyb3IgPSBudWxsO1xuICB2YXIgbWFpbkVycm9yQ291bnQgPSAwO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fZXJyb3JzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGVycm9yID0gdGhpcy5fZXJyb3JzW2ldO1xuICAgIHZhciBtZXNzYWdlID0gZXJyb3IubWVzc2FnZTtcbiAgICB2YXIgY291bnQgPSAoY291bnRzW21lc3NhZ2VdIHx8IDApICsgMTtcblxuICAgIGNvdW50c1ttZXNzYWdlXSA9IGNvdW50O1xuXG4gICAgaWYgKGNvdW50ID49IG1haW5FcnJvckNvdW50KSB7XG4gICAgICBtYWluRXJyb3IgPSBlcnJvcjtcbiAgICAgIG1haW5FcnJvckNvdW50ID0gY291bnQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG1haW5FcnJvcjtcbn07XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0LCBkZWNyZWFzZVJlZGlyZWN0LCBnZXRSZWRpcmVjdCwgaW5jcmVhc2VSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5pbXBvcnQgaHR0cCBmcm9tIFwiZ20taHR0cFwiO1xuXG5leHBvcnQgY2xhc3MgRG9nZURvZ2VQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3d3d1xcLmRvZ2Vkb2dlXFwuY29tXFwvcmRcXC8uezEsfS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGlmIChnZXRSZWRpcmVjdChhRWxlbWVudCkgPD0gMiAmJiB0aGlzLnRlc3QudGVzdChhRWxlbWVudC5ocmVmKSkge1xuICAgICAgaW5jcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICB0aGlzLmhhbmRsZXJPbmVFbGVtZW50KGFFbGVtZW50KVxuICAgICAgICAudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgZGVjcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgZGVjcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlck9uZUVsZW1lbnQoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KTogUHJvbWlzZTx1bmtub3duPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlczogUmVzcG9uc2UkID0gYXdhaXQgaHR0cC5yZXF1ZXN0KHtcbiAgICAgICAgdXJsOiBhRWxlbWVudC5ocmVmLFxuICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgIGFub255bW91czogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgaWYgKHJlcy5maW5hbFVybCkge1xuICAgICAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIHJlcy5maW5hbFVybCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBEb3VCYW5Qcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL2RvdWJhblxcLmNvbVxcL2xpbmsyXFwvP1xcP3VybD0oLiopLztcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJ1cmxcIikpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiLi4vdXRpbHNcIjtcbmltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5cbmV4cG9ydCBjbGFzcyBHb29nbGVQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gdHJ1ZTtcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgY29uc3QgdHJhY2VQcm9wZXJ0aWVzID0gW1wicGluZ1wiLCBcImRhdGEtanNhcnd0XCIsIFwiZGF0YS11c2dcIiwgXCJkYXRhLXZlZFwiXTtcblxuICAgIC8vIOenu+mZpOi/vei4qlxuICAgIGZvciAoY29uc3QgcHJvcGVydHkgb2YgdHJhY2VQcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAoYUVsZW1lbnQuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSkge1xuICAgICAgICBhRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUocHJvcGVydHkpO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIOenu+mZpOWkmuS9meeahOS6i+S7tlxuICAgIGlmIChhRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJvbm1vdXNlZG93blwiKSkge1xuICAgICAgYUVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKFwib25tb3VzZWRvd25cIik7XG4gICAgfVxuXG4gICAgLy8g5bCd6K+V5Y676Zmk6YeN5a6a5ZCRXG4gICAgaWYgKGFFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSkge1xuICAgICAgY29uc3QgcmVhbFVybDogc3RyaW5nID0gYUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS1ocmVmXCIpO1xuICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCByZWFsVXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKGFFbGVtZW50LmhyZWYpO1xuXG4gICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXJsXCIpKSB7XG4gICAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIHVybC5zZWFyY2hQYXJhbXMuZ2V0KFwidXJsXCIpKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgSmlhblNodVByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSA9PiB7XG4gICAgY29uc3QgaXNMaW5rMSA9IC9saW5rc1xcLmppYW5zaHVcXC5jb21cXC9nby8udGVzdChhRWxlbWVudC5ocmVmKTtcbiAgICBjb25zdCBpc0xpbmsyID0gL2xpbmtcXC5qaWFuc2h1XFwuY29tKFxcLyk/XFw/dD0vLnRlc3QoYUVsZW1lbnQuaHJlZik7XG4gICAgY29uc3QgaXNMaW5rMyA9IC9qaWFuc2h1XFwuY29tXFwvZ28td2lsZFxcLz9cXD8oLiopdXJsPS8udGVzdChhRWxlbWVudC5ocmVmKTtcblxuICAgIGlmIChpc0xpbmsxIHx8IGlzTGluazIgfHwgaXNMaW5rMykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBjb25zdCBzZWFyY2ggPSBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcztcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIHNlYXJjaC5nZXQoXCJ0b1wiKSB8fCBzZWFyY2guZ2V0KFwidFwiKSB8fCBzZWFyY2guZ2V0KFwidXJsXCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBTb1Byb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvc29cXC5jb21cXC9saW5rXFw/KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0IHVybCA9IGFFbGVtZW50LmdldEF0dHJpYnV0ZShcImRhdGEtbWR1cmxcIikgfHwgYUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZS1sYW5kdXJsXCIpO1xuXG4gICAgaWYgKHVybCkge1xuICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCB1cmwpO1xuICAgIH1cblxuICAgIC8vIHJlbW92ZSB0cmFja1xuICAgIGFFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZShcImVfaHJlZlwiKTtcbiAgICBhRWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoXCJkYXRhLXJlc1wiKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCwgZGVjcmVhc2VSZWRpcmVjdCwgZ2V0UmVkaXJlY3QsIGdldFRleHQsIGluY3JlYXNlUmVkaXJlY3QsIHF1ZXJ5UGFyc2VyIH0gZnJvbSBcIkAvdXRpbHNcIjtcbmltcG9ydCBodHRwIGZyb20gXCJnbS1odHRwXCI7XG5cbmV4cG9ydCBjbGFzcyBTb0dvdVByb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvd3d3XFwuc29nb3VcXC5jb21cXC9saW5rXFw/dXJsPS87XG4gIHB1YmxpYyBhc3luYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAoZ2V0UmVkaXJlY3QoYUVsZW1lbnQpIDw9IDIgJiYgdGhpcy50ZXN0LnRlc3QoYUVsZW1lbnQuaHJlZikpIHtcbiAgICAgICAgaW5jcmVhc2VSZWRpcmVjdChhRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGh0dHAucmVxdWVzdCh7XG4gICAgICAgICAgdXJsOiBhRWxlbWVudC5ocmVmLFxuICAgICAgICAgIG1ldGhvZDogXCJHRVRcIixcbiAgICAgICAgICBhbm9ueW1vdXM6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgICBkZWNyZWFzZVJlZGlyZWN0KGFFbGVtZW50KTtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSByZXMuZmluYWxVcmw7XG4gICAgICAgIGlmIChmaW5hbFVybCAmJiAhdGhpcy50ZXN0LnRlc3QoZmluYWxVcmwpKSB7XG4gICAgICAgICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCByZXMuZmluYWxVcmwpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnN0IG1hdGNoZXIgPSByZXMucmVzcG9uc2VUZXh0Lm1hdGNoKC9VUkw9WydcIl0oW14nXCJdKylbJ1wiXS8pO1xuICAgICAgICAgIGlmIChtYXRjaGVyPy5bMV0pIHtcbiAgICAgICAgICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgcmVzLmZpbmFsVXJsKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlY3JlYXNlUmVkaXJlY3QoYUVsZW1lbnQpO1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xuICAgIH1cbiAgfVxuICBwcml2YXRlIHBhcnNlUGFnZShyZXM6IFJlc3BvbnNlJCk6IHZvaWQge1xuICAgIGNvbnN0IHJlc3BvbnNlVGV4dDogc3RyaW5nID0gcmVzLnJlc3BvbnNlVGV4dC5yZXBsYWNlKC8oc3JjPVtePl0qfGxpbms9W14+XSkvZywgXCJcIik7XG4gICAgY29uc3QgaHRtbDogSFRNTEh0bWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImh0bWxcIik7XG4gICAgaHRtbC5pbm5lckhUTUwgPSByZXNwb25zZVRleHQ7XG5cbiAgICAvLyBsZXQgc2VsZWN0b3IgPSAnI21haW4gLnJlc3VsdHMgZGl2LnZyd3JhcD5oMyc7XG4gICAgLy8gbGV0IHNlbGVjdG9yID0gJyNtYWluIC5yZXN1bHRzIGgzPmEnO1xuICAgIGNvbnN0IHNlbGVjdG9yID0gJyNtYWluIC5yZXN1bHRzIGFbaHJlZio9XCJ3d3cuc29nb3UuY29tL2xpbms/dXJsPVwiXSc7XG4gICAgY29uc3QgcmVtb3RlcyA9IFtdLnNsaWNlLmNhbGwoaHRtbC5xdWVyeVNlbGVjdG9yQWxsKFwiI21haW4gLnJlc3VsdHMgYVtocmVmXVwiKSk7XG4gICAgY29uc3QgbG9jYWxzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSk7XG5cbiAgICBmb3IgKGNvbnN0IGxvY2FsRWxlIG9mIGxvY2Fscykge1xuICAgICAgZm9yIChjb25zdCByZW1vdGVFbGUgb2YgcmVtb3Rlcykge1xuICAgICAgICBsZXQgbG9jYWxUZXh0ID0gZ2V0VGV4dChsb2NhbEVsZSk7XG4gICAgICAgIGxldCByZW1vdGVUZXh0ID0gZ2V0VGV4dChyZW1vdGVFbGUpO1xuXG4gICAgICAgIC8vIOmAmueUqOaMiemSru+8jOS+i+WmguOAkOeCueWHu+S4i+i9veOAkVxuICAgICAgICBpZiAobG9jYWxFbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwic3RyLXB1YmxpYy1idG5cIikpIHtcbiAgICAgICAgICBsb2NhbFRleHQgPSBnZXRUZXh0KGxvY2FsRWxlLnBhcmVudE5vZGUpO1xuICAgICAgICAgIHJlbW90ZVRleHQgPSBnZXRUZXh0KHJlbW90ZUVsZS5wYXJlbnROb2RlKTtcbiAgICAgICAgfSBlbHNlIGlmIChsb2NhbEVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJzdHJfaW1nXCIpKSB7XG4gICAgICAgICAgLy8g5Zu+54mHXG4gICAgICAgICAgbG9jYWxUZXh0ID0gZ2V0VGV4dChsb2NhbEVsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICAgIHJlbW90ZVRleHQgPSBnZXRUZXh0KHJlbW90ZUVsZS5wYXJlbnROb2RlLnBhcmVudE5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFsb2NhbFRleHQgfHwgbG9jYWxUZXh0ICE9PSByZW1vdGVUZXh0KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGFudGlSZWRpcmVjdChsb2NhbEVsZSwgcmVtb3RlRWxlLmhyZWYpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgYXN5bmMgb25Jbml0KCkge1xuICAgIGlmICghL3d3d1xcLnNvZ291XFwuY29tXFwvd2ViLy50ZXN0KHdpbmRvdy50b3AubG9jYXRpb24uaHJlZikpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgcXVlcnkgPSBxdWVyeVBhcnNlcih3aW5kb3cudG9wLmxvY2F0aW9uLnNlYXJjaCk7XG5cbiAgICAvLyDmkJzntKLkvb/nlKhodHRw5pCc57Si77yM5b6X5Yiw55qE5piv55u05o6l6ZO+5o6lXG4gICAgY29uc3QgdXJsOiBzdHJpbmcgPSBgJHtsb2NhdGlvbi5wcm90b2NvbC5yZXBsYWNlKC86JC8sIFwiXCIpLnJlcGxhY2UoXCJzXCIsIFwiXCIpfTovLyR7XG4gICAgICBsb2NhdGlvbi5ob3N0ICsgbG9jYXRpb24ucGF0aG5hbWUgKyBxdWVyeVxuICAgIH1gO1xuXG4gICAgaHR0cFxuICAgICAgLmdldCh1cmwpXG4gICAgICAudGhlbigocmVzOiBSZXNwb25zZSQpID0+IHtcbiAgICAgICAgdGhpcy5wYXJzZVBhZ2UocmVzKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBZb3V0dWJlUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC93d3dcXC55b3V0dWJlXFwuY29tXFwvcmVkaXJlY3RcXD8uezEsfS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwicVwiKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgWmhpaHVQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3poaWh1XFwuY29tXFwvXFw/dGFyZ2V0PSguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG5ldyBVUkwoYUVsZW1lbnQuaHJlZikuc2VhcmNoUGFyYW1zLmdldChcInRhcmdldFwiKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgQmFpZHVYdWVzaHVQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL3h1ZXNodVxcLmJhaWR1XFwuY29tXFwvcz9cXD8oLiopLzsgLy8g5q2k5aSE5peg55SoXG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGNvbnN0IHJlYWxIcmVmOiBzdHJpbmcgPSBhRWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWxpbmtcIikgfHwgYUVsZW1lbnQuZ2V0QXR0cmlidXRlKFwiZGF0YS11cmxcIik7XG4gICAgaWYgKHJlYWxIcmVmKSB7XG4gICAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIGRlY29kZVVSSUNvbXBvbmVudChyZWFsSHJlZikpO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBaaGlodVpodWFubGFuUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9saW5rXFwuemhpaHVcXC5jb21cXC9cXD90YXJnZXQ9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidGFyZ2V0XCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBMb2dvbmV3c1Byb3ZpZGVyIGltcGxlbWVudHMgSVByb3ZpZGVyIHtcbiAgcHVibGljIHRlc3QgPSAvbGlua1xcLmxvZ29uZXdzXFwuY25cXC9cXD91cmw9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidXJsXCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcbmltcG9ydCB7IGFudGlSZWRpcmVjdCB9IGZyb20gXCJAL3V0aWxzXCI7XG5cbmV4cG9ydCBjbGFzcyBBZkRpYW5OZXRQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL2FmZGlhblxcLm5ldFxcL2xpbmtcXD90YXJnZXQ9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidGFyZ2V0XCIpKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSVByb3ZpZGVyIH0gZnJvbSBcIkAvcHJvdmlkZXJcIjtcblxuZXhwb3J0IGNsYXNzIEJsb2c1MUNUTyBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gdHJ1ZTtcbiAgcHJpdmF0ZSBjb250YWluZXI6IEhUTUxFbGVtZW50O1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICB0aGlzLmNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYXJ0aWNsZS1kZXRhaWxcIik7XG4gICAgaWYgKHRoaXMuY29udGFpbmVyPy5jb250YWlucyhhRWxlbWVudCkpIHtcbiAgICAgIGlmICghYUVsZW1lbnQub25jbGljayAmJiBhRWxlbWVudC5ocmVmKSB7XG4gICAgICAgIGFFbGVtZW50Lm9uY2xpY2sgPSBmdW5jdGlvbiBhbnRpUmVkaXJlY3RPbkNsaWNrRm4oZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG5cbiAgICAgICAgICBjb25zdCAkYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJhXCIpO1xuXG4gICAgICAgICAgJGEuaHJlZiA9IGFFbGVtZW50LmhyZWY7XG4gICAgICAgICAgJGEudGFyZ2V0ID0gYUVsZW1lbnQudGFyZ2V0O1xuXG4gICAgICAgICAgJGEuY2xpY2soKTtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgSW5mb1FQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL2luZm9xXFwuY25cXC9saW5rXFw/dGFyZ2V0PSguKikvO1xuICBwdWJsaWMgcmVzb2x2ZShhRWxlbWVudDogSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICBhbnRpUmVkaXJlY3QoYUVsZW1lbnQsIG5ldyBVUkwoYUVsZW1lbnQuaHJlZikuc2VhcmNoUGFyYW1zLmdldChcInRhcmdldFwiKSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IElQcm92aWRlciB9IGZyb20gXCJAL3Byb3ZpZGVyXCI7XG5pbXBvcnQgeyBhbnRpUmVkaXJlY3QgfSBmcm9tIFwiQC91dGlsc1wiO1xuXG5leHBvcnQgY2xhc3MgR2l0ZWVQcm92aWRlciBpbXBsZW1lbnRzIElQcm92aWRlciB7XG4gIHB1YmxpYyB0ZXN0ID0gL2dpdGVlXFwuY29tXFwvbGlua1xcP3RhcmdldD0oLiopLztcbiAgcHVibGljIHJlc29sdmUoYUVsZW1lbnQ6IEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgYW50aVJlZGlyZWN0KGFFbGVtZW50LCBuZXcgVVJMKGFFbGVtZW50LmhyZWYpLnNlYXJjaFBhcmFtcy5nZXQoXCJ0YXJnZXRcIikpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJUHJvdmlkZXIgfSBmcm9tIFwiQC9wcm92aWRlclwiO1xuaW1wb3J0IHsgYW50aVJlZGlyZWN0IH0gZnJvbSBcIkAvdXRpbHNcIjtcblxuZXhwb3J0IGNsYXNzIFNTUGFpUHJvdmlkZXIgaW1wbGVtZW50cyBJUHJvdmlkZXIge1xuICBwdWJsaWMgdGVzdCA9IC9zc3BhaVxcLmNvbVxcL2xpbmtcXD90YXJnZXQ9KC4qKS87XG4gIHB1YmxpYyByZXNvbHZlKGFFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgIGFudGlSZWRpcmVjdChhRWxlbWVudCwgbmV3IFVSTChhRWxlbWVudC5ocmVmKS5zZWFyY2hQYXJhbXMuZ2V0KFwidGFyZ2V0XCIpKTtcbiAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IEFwcCB9IGZyb20gXCJAL2FwcFwiO1xuaW1wb3J0IHsgUnV5b1Byb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvNTEucnV5by5uZXRcIjtcbmltcG9ydCB7IE1vemlsbGFQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL2FkZG9ucy5tb3ppbGxhLm9yZ1wiO1xuaW1wb3J0IHsgWWluWGlhbmdQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL2FwcC55aW54aWFuZy5jb21cIjtcbmltcG9ydCB7IENTRE5Qcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL2Jsb2cuY3Nkbi5uZXRcIjtcbmltcG9ydCB7IE9TQ2hpbmFQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL29zY2hpbmEuY29tXCI7XG5pbXBvcnQgeyBaaGlodURhaWx5UHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9kYWlseS56aGlodS5jb21cIjtcbmltcG9ydCB7IEdvb2dsZURvY3NQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL2RvY3MuZ29vZ2xlLmNvbVwiO1xuaW1wb3J0IHsgUG9ja2V0UHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9nZXRwb2NrZXQuY29tXCI7XG5pbXBvcnQgeyBHbWFpbFByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvZ21haWwuZ29vZ2xlLmNvbVwiO1xuaW1wb3J0IHsgSnVlamluUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9qdWVqaW4uY29tXCI7XG5pbXBvcnQgeyBRUU1haWxQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL21haWwucXEuY29tXCI7XG5pbXBvcnQgeyBNaUppUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9taWppc291LmNvbVwiO1xuaW1wb3J0IHsgR29vZ2xlUGxheVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvcGxheS5nb29nbGUuY29tXCI7XG5pbXBvcnQgeyBTdGVhbVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvc3RlYW1jb21tdW5pdHkuY29tXCI7XG5pbXBvcnQgeyBUaWViYVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvdGllYmEuYmFpZHUuY29tXCI7XG5pbXBvcnQgeyBUd2l0dGVyUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy90d2l0dGVyLmNvbVwiO1xuaW1wb3J0IHsgQmFpZHVWaWRlb1Byb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvdmlkZW8uYmFpZHUuY29tXCI7XG5pbXBvcnQgeyBXZWJvUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy93ZWliby5jb21cIjtcbmltcG9ydCB7IEJhaWR1UHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy93d3cuYmFpZHUuY29tXCI7XG5pbXBvcnQgeyBEb2dlRG9nZVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvd3d3LmRvZ2Vkb2dlLmNvbVwiO1xuaW1wb3J0IHsgRG91QmFuUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy93d3cuZG91YmFuLmNvbVwiO1xuaW1wb3J0IHsgR29vZ2xlUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy93d3cuZ29vZ2xlLmNvbVwiO1xuaW1wb3J0IHsgSmlhblNodVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvd3d3LmppYW5zaHUuY29tXCI7XG5pbXBvcnQgeyBTb1Byb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvd3d3LnNvLmNvbVwiO1xuaW1wb3J0IHsgU29Hb3VQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL3d3dy5zb2dvdS5jb21cIjtcbmltcG9ydCB7IFlvdXR1YmVQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL3d3dy55b3V0dWJlLmNvbVwiO1xuaW1wb3J0IHsgWmhpaHVQcm92aWRlciB9IGZyb20gXCJAL3NpdGVzL3d3dy56aGlodS5jb21cIjtcbmltcG9ydCB7IEJhaWR1WHVlc2h1UHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy94dWVzaHUuYmFpZHUuY29tXCI7XG5pbXBvcnQgeyBaaGlodVpodWFubGFuUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy96aHVhbmxhbi56aGlodS5jb21cIjtcbmltcG9ydCB7IExvZ29uZXdzUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy93d3cubG9nb25ld3MuY25cIjtcbmltcG9ydCB7IEFmRGlhbk5ldFByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvYWZhZGlhbi5uZXRcIjtcbmltcG9ydCB7IEJsb2c1MUNUTyB9IGZyb20gXCJAL3NpdGVzL2Jsb2cuNTFjdG8uY29tXCI7XG5pbXBvcnQgeyBJbmZvUVByb3ZpZGVyIH0gZnJvbSBcIkAvc2l0ZXMvaW5mb3EuY25cIjtcbmltcG9ydCB7IEdpdGVlUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9naXRlZS5jb21cIjtcbmltcG9ydCB7IFNTUGFpUHJvdmlkZXIgfSBmcm9tIFwiQC9zaXRlcy9zc3BhaS5jb21cIjtcbmltcG9ydCBodHRwIGZyb20gXCJnbS1odHRwXCI7XG5cbmNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbmNvbnN0IGlzRGVidWc6IGJvb2xlYW4gPSBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCI7XG5cbmh0dHAuc2V0Q29uZmlnKHsgZGVidWc6IGlzRGVidWcgfSk7XG5cbmFwcFxuICAuc2V0Q29uZmlnKHsgaXNEZWJ1ZyB9KVxuICAucmVnaXN0ZXJQcm92aWRlcihbXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL3d3dy56aGlodS5jb20vcXVlc3Rpb24vMjUyNTg3NzVcbiAgICAgIG5hbWU6IFwi55+l5LmOXCIsXG4gICAgICB0ZXN0OiAvd3d3XFwuemhpaHVcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IFpoaWh1UHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHBzOi8vemh1YW5sYW4uemhpaHUuY29tL3AvMjA1NDk5NzhcbiAgICAgIG5hbWU6IFwi55+l5LmO5LiT5qCPXCIsXG4gICAgICB0ZXN0OiAvemh1YW5sYW5cXC56aGlodVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogWmhpaHVaaHVhbmxhblByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOlxuICAgICAgbmFtZTogXCLnn6XkuY7ml6XmiqVcIixcbiAgICAgIHRlc3Q6IC9kYWlseVxcLnpoaWh1XFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBaaGlodURhaWx5UHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIkdvb2dsZeaQnOe0olwiLFxuICAgICAgdGVzdDogL1xcdytcXC5nb29nbGVcXC4vLFxuICAgICAgcHJvdmlkZXI6IEdvb2dsZVByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL2RvY3MuZ29vZ2xlLmNvbS9zcHJlYWRzaGVldHMvZC8xVEZjRVhNY0tyd29JQUVDSVZ5QlUwR1BvU21ScVo3QTBWQnZxZUtZVlN3dy9odG1sdmlld1xuICAgICAgbmFtZTogXCJHb29nbGUgRG9jc1wiLFxuICAgICAgdGVzdDogL2RvY3NcXC5nb29nbGVcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IEdvb2dsZURvY3NQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwiR21haWxcIixcbiAgICAgIHRlc3Q6IC9tYWlsXFwuZ29vZ2xlXFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBHbWFpbFByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL3BsYXkuZ29vZ2xlLmNvbS9zdG9yZS9tb3ZpZXMvZGV0YWlscy8lRTclQTclQkIlRTUlOEIlOTUlRTglQkYlQjclRTUlQUUlQUVfJUU2JUFEJUJCJUU0JUJBJUExJUU4JUE3JUEzJUU4JTk3JUE1P2lkPVlOeTdnUnF3dE1rXG4gICAgICBuYW1lOiBcIkdvb2dsZSBQbGF5XCIsXG4gICAgICB0ZXN0OiAvcGxheVxcLmdvb2dsZVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogR29vZ2xlUGxheVByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL3d3dy55b3V0dWJlLmNvbS93YXRjaD92PVhUWFNSUlN2MWJZXG4gICAgICBuYW1lOiBcIkdvb2dsZSBZb3V0dWJlXCIsXG4gICAgICB0ZXN0OiAvd3d3XFwueW91dHViZVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogWW91dHViZVByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL3d3dy5zby5jb20vcz9pZT11dGYtOCZmcj1ub25lJnNyYz0zNjBzb3VfbmV3aG9tZSZxPWNocm9tZVxuICAgICAgbmFtZTogXCIzNjDmkJzntKJcIixcbiAgICAgIHRlc3Q6IC93d3dcXC5zb1xcLmNvbS8sXG4gICAgICBwcm92aWRlcjogU29Qcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIG5hbWU6IFwi5paw5rWq5b6u5Y2aXCIsXG4gICAgICB0ZXN0OiAvXFwud2VpYm9cXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IFdlYm9Qcm92aWRlcixcbiAgICB9LFxuICAgIC8vIOa1i+ivlTogaHR0cHM6Ly90d2l0dGVyLmNvbS9mdGl1bTQvc3RhdHVzLzE1MTI4MTUxMTY4MTA1MjI2MzFcbiAgICB7XG4gICAgICBuYW1lOiBcIlR3aXR0ZXJcIixcbiAgICAgIHRlc3Q6IC90d2l0dGVyXFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBUd2l0dGVyUHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5U6IGh0dHA6Ly93d3cuc29nb3UuY29tL3dlYj9xdWVyeT1jaHJvbWUmX2FzZj13d3cuc29nb3UuY29tJl9hc3Q9Jnc9MDEwMTk5MDAmcD00MDA0MDEwMCZpZT11dGY4JmZyb209aW5kZXgtbm9sb2dpbiZzX2Zyb209aW5kZXgmc3V0PTE1Mjcmc3N0MD0xNTA0MzQ3MzY3NjExJmxrdD0wJTJDMCUyQzAmc3Vnc3V2PTAwMDkxNjUxQjQ4Q0E0NUY1OTNCNjFBMjlCMTMxNDA1JnN1Z3RpbWU9MTUwNDM0NzM2NzYxMVxuICAgICAgbmFtZTogXCLmkJzni5fmkJzntKJcIixcbiAgICAgIHRlc3Q6IC93d3dcXC5zb2dvdVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogU29Hb3VQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivlTogaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9Y2hyb21lJnJzdl9zcHQ9MSZyc3ZfaXFpZD0weGNiMTM2MjM3MDAwZWQ0MGUmaXNzcD0xJmY9OCZyc3ZfYnA9MCZyc3ZfaWR4PTImaWU9dXRmLTgmdG49YmFpZHVsb2NhbCZyc3ZfZW50ZXI9MSZyc3Zfc3VnMz03JnJzdl9zdWcxPTcmcnN2X3N1Zzc9MTAxJnJzdl9zdWcyPTAmaW5wdXRUPTgxMyZyc3Zfc3VnND05ODkmdGltZXN0YW1wPTE1MDQzNDkyMjkyNjYmcm49NTAmdmZfYmw9MVxuICAgICAgbmFtZTogXCLnmb7luqbmkJzntKJcIixcbiAgICAgIHRlc3Q6IC93d3dcXC5iYWlkdVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogQmFpZHVQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivlTogaHR0cHM6Ly93d3cuYmFpZHUuY29tL3M/d2Q9Y2hyb21lJnBuPTIwJm9xPWNocm9tZSZ0bj1iYWlkdWhvbWVfcGcmaWU9dXRmLTgmdXNtPTMmcnN2X2lkeD0yJnJzdl9wcT1lMDQzOTAwZDAwMDA3NTJkJnJzdl90PTZiYjBVcUV3cDJUbGU2VEFNQkRsVTNXZyUyQlN4b3F2dk9oWkt5UWdNJTJCVlFQOEdjNTRRWkxoY0RjajYyZUdmTkc3NWFxNSZyc3ZfcGFnZT0xXG4gICAgICBuYW1lOiBcIueZvuW6puinhumikVwiLFxuICAgICAgdGVzdDogL3ZcXC5iYWlkdVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogQmFpZHVWaWRlb1Byb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+VOiBodHRwOi8veHVlc2h1LmJhaWR1LmNvbS9zP3dkPXBhcGVydXJpJTNBJTI4YWU0ZDZiNWRhMDVlY2E1NTJkYWIwNWFlZWZiOTY2ZTYlMjkmaWU9dXRmLTgmZmlsdGVyPXNjX2xvbmdfc2lnbiZzY19rc19wYXJhPXElM0QlRTIlODAlOUMlRTQlQkElOTIlRTglODElOTQlRTclQkQlOTElMkIlRTUlODElQTUlRTUlQkElQjclRTclQUUlQTElRTclOTAlODYlRTIlODAlOUQlRTYlQTglQTElRTUlQkMlOEYlRTYlOEUlQTIlRTglQUUlQTglRTUlOEYlOEElRTUlODUlQjYlRTUlQkElOTQlRTclOTQlQTgmdG49U0VfYmFpZHV4dWVzaHVfYzFnamV1cGFcbiAgICAgIG5hbWU6IFwi55m+5bqm5a2m5pyvXCIsXG4gICAgICB0ZXN0OiAveHVlc2h1XFwuYmFpZHVcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IEJhaWR1WHVlc2h1UHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHA6Ly90aWViYS5iYWlkdS5jb20vcC81MzAwODQ0MTgwXG4gICAgICBuYW1lOiBcIueZvuW6pui0tOWQp1wiLFxuICAgICAgdGVzdDogL3RpZWJhXFwuYmFpZHVcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IFRpZWJhUHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHBzOi8vanVlamluLmltL2VudHJ5LzU5YWM4ZmE1NTE4ODI1MjQyNDFhODgwMj91dG1fc291cmNlPWdvbGRfYnJvd3Nlcl9leHRlbnNpb25cbiAgICAgIG5hbWU6IFwi5o6Y6YeRXCIsXG4gICAgICB0ZXN0OiAvanVlamluXFwuKGltfGNuKS8sXG4gICAgICBwcm92aWRlcjogSnVlamluUHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBuYW1lOiBcIlFR6YKu566xXCIsXG4gICAgICB0ZXN0OiAvbWFpbFxcLnFxXFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBRUU1haWxQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly9hZGRvbnMubW96aWxsYS5vcmcvemgtQ04vZmlyZWZveC9hZGRvbi9ldmVybm90ZS13ZWItY2xpcHBlci9cbiAgICAgIG5hbWU6IFwiTW96aWxsYVwiLFxuICAgICAgdGVzdDogL2FkZG9uc1xcLm1vemlsbGFcXC5vcmcvLFxuICAgICAgcHJvdmlkZXI6IE1vemlsbGFQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly93d3cuamlhbnNodS5jb20vcC85Nzk3NzZjYTQ0YjhcbiAgICAgIC8vIGh0dHBzOi8vd3d3LmppYW5zaHUuY29tL3AvZmM4YWJjNjViYmIyXG4gICAgICBuYW1lOiBcIueugOS5plwiLFxuICAgICAgdGVzdDogL3d3d1xcLmppYW5zaHVcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IEppYW5TaHVQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9kb3VsaXN0LzI0MDk2Mi9cbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly93d3cuZG91YmFuLmNvbS9zZWFyY2g/Y2F0PTEwMDImcT0lRTklQkIlOTElRTklOTUlOUNcbiAgICAgIG5hbWU6IFwi6LGG55OjXCIsXG4gICAgICB0ZXN0OiAvZG91YmFuXFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBEb3VCYW5Qcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly9nZXRwb2NrZXQuY29tL2EvcmVjb21tZW5kZWQvXG4gICAgICAvLyDpnIDopoHnmbvpmYZcbiAgICAgIG5hbWU6IFwiUG9ja2V0XCIsXG4gICAgICB0ZXN0OiAvZ2V0cG9ja2V0XFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBQb2NrZXRQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly93d3cuZG9nZWRvZ2UuY29tL3Jlc3VsdHM/cT1jaHJvbWVcbiAgICAgIG5hbWU6IFwiRG9nZURvZ2VcIixcbiAgICAgIHRlc3Q6IC93d3dcXC5kb2dlZG9nZVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogRG9nZURvZ2VQcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly81MS5ydXlvLm5ldC8xNTA1My5odG1sXG4gICAgICBuYW1lOiBcIlJ1eW9cIixcbiAgICAgIHRlc3Q6IC81MVxcLnJ1eW9cXC5uZXQvLFxuICAgICAgcHJvdmlkZXI6IFJ1eW9Qcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly9zdGVhbWNvbW11bml0eS5jb20vc2hhcmVkZmlsZXMvZmlsZWRldGFpbHMvP2lkPTEzMTE1MzU1MzFcbiAgICAgIG5hbWU6IFwiU3RlYW1cIixcbiAgICAgIHRlc3Q6IC9zdGVhbWNvbW11bml0eVxcLmNvbS8sXG4gICAgICBwcm92aWRlcjogU3RlYW1Qcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly9taWppc291LmNvbS8/cT1jaHJvbWUmY2F0ZWdvcnlfZ2VuZXJhbD1vbiZ0aW1lX3JhbmdlPSZsYW5ndWFnZT16aC1DTiZwYWdlbm89MVxuICAgICAgbmFtZTogXCLnp5jov7lcIixcbiAgICAgIHRlc3Q6IC9taWppc291XFwuY29tLyxcbiAgICAgIHByb3ZpZGVyOiBNaUppUHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHBzOi8vZ2l0aHViLmNvbS9heGV0cm95L2FudGktcmVkaXJlY3QvaXNzdWVzLzM1MFxuICAgICAgbmFtZTogXCJDU0ROXCIsXG4gICAgICB0ZXN0OiAvYmxvZ1xcLmNzZG5cXC5uZXQvLFxuICAgICAgcHJvdmlkZXI6IENTRE5Qcm92aWRlcixcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgO+8mmh0dHBzOi8vbXkub3NjaGluYS5uZXQvY2hpcG8vYmxvZy8zMDY3NjcyXG4gICAgICBuYW1lOiBcIk9TIENoaW5hXCIsXG4gICAgICB0ZXN0OiAvb3NjaGluYVxcLm5ldC8sXG4gICAgICBwcm92aWRlcjogT1NDaGluYVByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL2dpdGh1Yi5jb20vYXhldHJveS9hbnRpLXJlZGlyZWN0L2lzc3Vlcy8zNTBcbiAgICAgIG5hbWU6IFwi5Y2w6LGh56yU6K6wXCIsXG4gICAgICB0ZXN0OiAvYXBwXFwueWlueGlhbmdcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IFlpblhpYW5nUHJvdmlkZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHBzOi8vd3d3LmxvZ29uZXdzLmNuLzIwMjEwNzMwMDI0MjAxNDEuaHRtbFxuICAgICAgbmFtZTogXCLmoIflv5fmg4XmiqXlsYBcIixcbiAgICAgIHRlc3Q6IC93d3dcXC5sb2dvbmV3c1xcLmNuLyxcbiAgICAgIHByb3ZpZGVyOiBMb2dvbmV3c1Byb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL2FmZGlhbi5uZXQvYS94aWFvZmFuRXJpY1xuICAgICAgbmFtZTogXCLniLHlj5HnlLVcIixcbiAgICAgIHRlc3Q6IC9hZmRpYW5cXC5uZXQvLFxuICAgICAgcHJvdmlkZXI6IEFmRGlhbk5ldFByb3ZpZGVyLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL2Jsb2cuNTFjdG8uY29tL3VfMTE1MTI4MjYvMjA2ODQyMVxuICAgICAgbmFtZTogXCI1MUNUT+WNmuWuolwiLFxuICAgICAgdGVzdDogL2Jsb2dcXC41MWN0b1xcLmNvbS8sXG4gICAgICBwcm92aWRlcjogQmxvZzUxQ1RPLFxuICAgIH0sXG4gICAge1xuICAgICAgLy8g5rWL6K+V5Zyw5Z2AOiBodHRwczovL3hpZS5pbmZvcS5jbi9saW5rP3RhcmdldD1odHRwcyUzQSUyRiUyRnd3dy5maW5jbGlwLmNvbSUyRiUzRmNoYW5uZWwlM0RpbmZvcXNlb1xuICAgICAgbmFtZTogJ0luZm9RJyxcbiAgICAgIHRlc3Q6IC9pbmZvcVxcLmNuLyxcbiAgICAgIHByb3ZpZGVyOiBJbmZvUVByb3ZpZGVyXG4gICAgfSxcbiAgICB7XG4gICAgICAvLyDmtYvor5XlnLDlnYA6IGh0dHBzOi8vZ2l0ZWUuY29tL1RlbmNlbnQvbmNublxuICAgICAgbmFtZTogJ0dpdGVlJyxcbiAgICAgIHRlc3Q6IC9naXRlZS5jb20vLFxuICAgICAgcHJvdmlkZXI6IEdpdGVlUHJvdmlkZXJcbiAgICB9LFxuICAgIHtcbiAgICAgIC8vIOa1i+ivleWcsOWdgDogaHR0cHM6Ly9zc3BhaS5jb20vcG9zdC83NzQ5OVxuICAgICAgbmFtZTogJ+WwkeaVsOa0vicsXG4gICAgICB0ZXN0OiAvc3NwYWlcXC5jb20vLFxuICAgICAgcHJvdmlkZXI6IFNTUGFpUHJvdmlkZXJcbiAgICB9XG4gIF0pXG4gIC5ib290c3RyYXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==