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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
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
exports.getApiService = exports.initializeApiService = void 0;
var store_1 = require("./store");
var apiService_slice_1 = require("./slices/apiService.slice");
var axios_1 = require("axios");
var ApiService = /** @class */ (function () {
    function ApiService(_a) {
        var _b = _a.baseUrl, baseUrl = _b === void 0 ? "https://jsonplaceholder.typicode.com" : _b, _c = _a.headers, headers = _c === void 0 ? {
            "Content-Type": "application/json",
            Accept: "application/json",
        } : _c, _d = _a.sequence, sequence = _d === void 0 ? "serial" : _d;
        this.baseUrl = baseUrl;
        this.headers = headers;
        this.sequence = sequence;
        this.axiosInstance = axios_1.default.create({
            baseURL: this.baseUrl,
            headers: this.headers,
        });
        // Add request interceptor to set common headers or perform actions before sending the request
        this.axiosInstance.interceptors.request.use(function (config) {
            // You can set common headers, perform authentication checks, or any other actions here.
            // For example, you can add an authentication token:
            // const authToken = 'your-auth-token';
            // config.headers.Authorization = `Bearer ${authToken}`;
            return config;
        }, function (error) {
            return Promise.reject(error);
        });
        // Add response interceptor to handle responses globally or perform actions before resolving or rejecting the promise
        this.axiosInstance.interceptors.response.use(function (response) {
            // You can handle responses or perform actions before they are passed to the caller.
            // For example, you can extract and format the data:
            // const formattedData = response.data;
            return response;
        }, function (error) {
            // Handle and customize error responses here
            return Promise.reject(error);
        });
    }
    // Example GET request
    ApiService.prototype.get = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.get(url, config)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // Example POST request
    ApiService.prototype.post = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.post(url, data, config)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // Example PUT request
    ApiService.prototype.put = function (url, data, config) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.put(url, data, config)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    // Example DELETE request
    ApiService.prototype.delete = function (url, config) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.axiosInstance.delete(url, config)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, response.data];
                }
            });
        });
    };
    ApiService.prototype.request = function (_a) {
        var url = _a.url, _b = _a.method, method = _b === void 0 ? "GET" : _b, queryParams = _a.queryParams, body = _a.body, headers = _a.headers;
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_c) {
                store_1.default.dispatch((0, apiService_slice_1.apiServiceRequest)({
                    url: url,
                    method: method,
                    queryParams: queryParams,
                    body: body,
                    headers: headers,
                    sequence: this.sequence,
                }));
                return [2 /*return*/];
            });
        });
    };
    return ApiService;
}());
var apiService = null;
var initializeApiService = function (config) {
    if (!apiService) {
        apiService = new ApiService(config);
    }
};
exports.initializeApiService = initializeApiService;
var getApiService = function () {
    if (!apiService) {
        throw new Error('ApiService has not been initialized. Call initializeApiService first.');
    }
    return apiService;
};
exports.getApiService = getApiService;
(0, exports.initializeApiService)({
    baseUrl: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    sequence: "serial",
});
(0, exports.getApiService)().request({
    url: "/todos/1",
    method: "GET",
});
