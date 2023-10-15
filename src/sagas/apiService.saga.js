"use strict";
// apiServiceSaga.ts
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
exports.watchApiServiceRequest = void 0;
var effects_1 = require("redux-saga/effects");
var apiService_slice_1 = require("../slices/apiService.slice"); // Import your actions
var __1 = require("../");
function fetchApiDataSaga(action) {
    var _a, url, method, queryParams, body, headers, apiService, data, _b, error_1;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _c.trys.push([0, 17, , 19]);
                _a = action.payload, url = _a.url, method = _a.method, queryParams = _a.queryParams, body = _a.body, headers = _a.headers;
                apiService = (0, __1.getApiService)();
                data = void 0;
                console.log("Api Service:", { get: apiService.axiosInstance.get });
                _b = method;
                switch (_b) {
                    case 'GET': return [3 /*break*/, 1];
                    case 'POST': return [3 /*break*/, 4];
                    case 'PUT': return [3 /*break*/, 7];
                    case 'DELETE': return [3 /*break*/, 10];
                }
                return [3 /*break*/, 13];
            case 1: return [4 /*yield*/, (0, effects_1.call)(apiService.axiosInstance.get, url, { params: queryParams, headers: headers })];
            case 2:
                data = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceSuccess)(data))];
            case 3:
                _c.sent();
                return [3 /*break*/, 16];
            case 4: return [4 /*yield*/, (0, effects_1.call)(apiService.axiosInstance.post, url, body, { params: queryParams, headers: headers })];
            case 5:
                data = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceSuccess)(data))];
            case 6:
                _c.sent();
                return [3 /*break*/, 16];
            case 7: return [4 /*yield*/, (0, effects_1.call)(apiService.axiosInstance.put, url, body, { params: queryParams, headers: headers })];
            case 8:
                data = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceSuccess)(data))];
            case 9:
                _c.sent();
                return [3 /*break*/, 16];
            case 10: return [4 /*yield*/, (0, effects_1.call)(apiService.axiosInstance.delete, url, { params: queryParams, headers: headers })];
            case 11:
                data = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceSuccess)(data))];
            case 12:
                _c.sent();
                return [3 /*break*/, 16];
            case 13: return [4 /*yield*/, (0, effects_1.call)(apiService.axiosInstance.get, url, { params: queryParams, headers: headers })];
            case 14:
                data = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceSuccess)(data))];
            case 15:
                _c.sent();
                return [3 /*break*/, 16];
            case 16: return [3 /*break*/, 19];
            case 17:
                error_1 = _c.sent();
                return [4 /*yield*/, (0, effects_1.put)((0, apiService_slice_1.apiServiceFailure)(error_1))];
            case 18:
                _c.sent();
                return [3 /*break*/, 19];
            case 19: return [2 /*return*/];
        }
    });
}
function watchApiServiceRequest() {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, effects_1.takeLatest)(apiService_slice_1.apiServiceRequest.type, fetchApiDataSaga)];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}
exports.watchApiServiceRequest = watchApiServiceRequest;
