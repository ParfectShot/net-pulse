"use strict";
// apiServiceSlice.ts
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiServiceFailure = exports.apiServiceSuccess = exports.apiServiceRequest = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var initialState = {
    loading: false,
    error: null,
    data: null,
};
var apiServiceSlice = (0, toolkit_1.createSlice)({
    name: 'apiService',
    initialState: initialState,
    reducers: {
        apiServiceRequest: function (state, action) {
            console.log('apiServiceRequest', action.payload);
            state.loading = true;
            state.error = null;
        },
        apiServiceSuccess: function (state, action) {
            console.log('apiServiceSuccess', action.payload);
            state.loading = false;
            state.data = action.payload;
        },
        apiServiceFailure: function (state, action) {
            console.log('apiServiceFailure', action.payload);
            state.loading = false;
            state.error = action.payload;
        },
    },
});
exports.apiServiceRequest = (_a = apiServiceSlice.actions, _a.apiServiceRequest), exports.apiServiceSuccess = _a.apiServiceSuccess, exports.apiServiceFailure = _a.apiServiceFailure;
exports.default = apiServiceSlice.reducer;
