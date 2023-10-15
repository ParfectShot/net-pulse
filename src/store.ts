import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import apiServiceReducer from './slices/apiService.slice'; // Import your API service slice
import { watchApiServiceRequest } from './sagas/apiService.saga';

const sagaMiddleware = createSagaMiddleware();
const rootReducer = {
  apiService: apiServiceReducer,
  // Add other reducers as needed
};

export const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [sagaMiddleware],
});

sagaMiddleware.run(watchApiServiceRequest);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;


