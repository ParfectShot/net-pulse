// apiServiceSaga.ts

import { takeLatest, put, call } from 'redux-saga/effects';
import { apiServiceRequest, apiServiceSuccess, apiServiceFailure } from '../slices/apiService.slice'; // Import your actions
import { PayloadAction } from '@reduxjs/toolkit';
import { FetchPayload, getApiService } from '../';

function* fetchApiDataSaga(action: PayloadAction<FetchPayload>): Generator<any, void, any> {
  try {
    const { url, method, queryParams, body, headers } = action.payload;
    const apiService = getApiService();
    let data: any;

    switch (method) {
      case 'GET':
        data = yield call(apiService.axiosInstance.get, url, { params: queryParams, headers });
        yield put(apiServiceSuccess(data))
        break;
      case 'POST':
        data = yield call(apiService.axiosInstance.post, url, body, { params: queryParams, headers });
        yield put(apiServiceSuccess(data))
        break;
      case 'PUT':
        data = yield call(apiService.axiosInstance.put, url, body, { params: queryParams, headers });
        yield put(apiServiceSuccess(data))
        break;
      case 'DELETE':
        data = yield call(apiService.axiosInstance.delete, url, { params: queryParams, headers });
        yield put(apiServiceSuccess(data))
        break;
      default:
        data = yield call(apiService.axiosInstance.get, url, { params: queryParams, headers });
        yield put(apiServiceSuccess(data))
        break;
    }
  } catch (error: any) {
    yield put(apiServiceFailure(error));
  }
}

export function* watchApiServiceRequest() {
  yield takeLatest(apiServiceRequest.type, fetchApiDataSaga);
}
