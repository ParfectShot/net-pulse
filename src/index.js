"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var apiService_slice_1 = require("./slices/apiService.slice");
var store_1 = require("./store");
try {
    store_1.default.dispatch((0, apiService_slice_1.apiServiceRequest)({ url: '/posts' }));
}
catch (error) {
    console.log(error);
}
