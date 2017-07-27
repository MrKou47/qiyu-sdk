(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("crypto"), require("request"), require("url"), require("md5"));
	else if(typeof define === 'function' && define.amd)
		define(["crypto", "request", "url", "md5"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("crypto"), require("request"), require("url"), require("md5")) : factory(root["crypto"], root["request"], root["url"], root["md5"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto = __webpack_require__(1);
var request = __webpack_require__(2);
var url = __webpack_require__(3);
var md5 = __webpack_require__(4);
var QiyuMessage = (function () {
    function QiyuMessage(options) {
        this.MESSAGE_URL = '/openapi/message/send';
        this.APPLY_STAFF_URL = '/openapi/event/applyStaff';
        this.basicReq = {
            protocol: 'https',
            hostname: 'qiyukf.com',
        };
        this.key = options.key;
        this.secret = options.secret;
    }
    QiyuMessage.prototype.generateChecksum = function (message) {
        return __awaiter(this, void 0, void 0, function () {
            var sha1, timeStamp, staffCheckNum;
            return __generator(this, function (_a) {
                sha1 = crypto.createHash('sha1');
                try {
                    timeStamp = new Date().valueOf().toString().substring(0, new Date().valueOf().toString().length - 3);
                    staffCheckNum = sha1.update(this.secret + md5(JSON.stringify(message)) + timeStamp);
                    staffCheckNum = sha1.digest('hex');
                }
                catch (error) {
                    throw new Error(error);
                }
                return [2 /*return*/, { staffCheckNum: staffCheckNum, timeStamp: timeStamp }];
            });
        });
    };
    /**
     * 自定义的请求
     * @param requestOptions request module options
     */
    QiyuMessage.prototype.customizeReq = function (requestOptions) {
        return new Promise(function (resolve, reject) {
            request(requestOptions, function (err, res, data) {
                if (err || res.statusCode !== 200) {
                    return reject(new Error('request api failed'));
                }
                return resolve(data);
            });
        });
    };
    /**
     * 生成所需要的url
     * @param options 用于 format url 的 opions
     */
    QiyuMessage.prototype._generateCurrentUrl = function (options) {
        return url.format(Object.assign({}, options, this.basicReq));
    };
    /**
     * 生成所需的request 的 options
     * @param requestUrl 请求的request url
     * @param body 发送的数据
     */
    QiyuMessage.prototype._generateCurrentRequestOpt = function (requestUrl, body) {
        return __awaiter(this, void 0, void 0, function () {
            var checkSumRes, requestUrlOpt, requestOptions, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.generateChecksum(body)];
                    case 1:
                        checkSumRes = _a.sent();
                        requestUrlOpt = {
                            pathname: requestUrl,
                            query: {
                                appKey: this.key,
                                checksum: checkSumRes.staffCheckNum,
                                time: checkSumRes.timeStamp,
                            },
                        };
                        requestOptions = {
                            url: this._generateCurrentUrl(requestUrlOpt),
                            body: body,
                            json: true,
                            method: 'post',
                        };
                        return [2 /*return*/, requestOptions];
                    case 2:
                        error_1 = _a.sent();
                        throw new Error(error_1);
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 请求分配客服
     * @param options post请求体 参与 生成checksum
     * @param callback callback
     */
    QiyuMessage.prototype.applyStaff = function (options, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOpt, result, error_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._generateCurrentRequestOpt(this.APPLY_STAFF_URL, options)];
                    case 1:
                        requestOpt = _a.sent();
                        return [4 /*yield*/, this.customizeReq(requestOpt)];
                    case 2:
                        result = _a.sent();
                        if (callback)
                            callback(result);
                        return [2 /*return*/, result];
                    case 3:
                        error_2 = _a.sent();
                        throw new Error(error_2);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * 发送消息到七鱼
     * @param message  发送的消息
     * @param callback callback
     */
    QiyuMessage.prototype.sendMessage = function (message, callback) {
        return __awaiter(this, void 0, void 0, function () {
            var requestOpt, result, error_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4 /*yield*/, this._generateCurrentRequestOpt(this.MESSAGE_URL, message)];
                    case 1:
                        requestOpt = _a.sent();
                        return [4 /*yield*/, this.customizeReq(requestOpt)];
                    case 2:
                        result = _a.sent();
                        if (callback)
                            callback(result);
                        return [2 /*return*/, result];
                    case 3:
                        error_3 = _a.sent();
                        throw new Error(error_3);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    return QiyuMessage;
}());
exports.default = QiyuMessage;
// export = QiyuMessage;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ })
/******/ ]);
});