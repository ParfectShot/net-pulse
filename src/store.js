"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAppDispatch = exports.store = void 0;
var toolkit_1 = require("@reduxjs/toolkit");
var react_redux_1 = require("react-redux");
var redux_saga_1 = require("redux-saga");
var apiService_slice_1 = require("./slices/apiService.slice"); // Import your API service slice
var apiService_saga_1 = require("./sagas/apiService.saga");
var sagaMiddleware = (0, redux_saga_1.default)();
var rootReducer = {
    apiService: apiService_slice_1.default,
    // Add other reducers as needed
};
exports.store = (0, toolkit_1.configureStore)({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [sagaMiddleware],
});
sagaMiddleware.run(apiService_saga_1.watchApiServiceRequest);
var useAppDispatch = function () { return (0, react_redux_1.useDispatch)(); };
exports.useAppDispatch = useAppDispatch;
exports.default = exports.store;
