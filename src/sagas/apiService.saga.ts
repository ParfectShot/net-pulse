// apiServiceSaga.ts

import { takeLatest, put, call } from 'redux-saga/effects';
import { apiServiceRequest, apiServiceSuccess, apiServiceFailure } from '../slices/apiService.slice'; // Import your actions
import { PayloadAction } from '@reduxjs/toolkit';
import AxiosService from '../services/axios.service';

export interface FetchPayload {
  url: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  queryParams?: any;
  body?: any;
  Headers?: any;
}

function fetchApiData({
  url,
  method = 'GET',
  queryParams,
  body,
  Headers,
}: FetchPayload) {
  const axiosService = new AxiosService('https://jsonplaceholder.typicode.com');
  const headers = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  };
  if (Headers) {
    Object.assign(headers, Headers);
  }

  switch (method) {
    case 'GET':
      return axiosService.get(url, { params: queryParams, headers });
    case 'POST':
      return axiosService.post(url, body, { headers });
    case 'PUT':
      return axiosService.put(url, body, { headers });
    case 'DELETE':
      return axiosService.delete(url, { headers });
    default:
      return axiosService.get(url, { params: queryParams, headers });
  }
}

function* fetchApiDataSaga(action: PayloadAction<FetchPayload>): Generator<any, void, any> {
  try {
    const data: any = yield call(fetchApiData, action.payload);
    yield put(apiServiceSuccess(data));
  } catch (error: any) {
    yield put(apiServiceFailure(error));
  }
}

export function* watchApiServiceRequest() {
  yield takeLatest(apiServiceRequest.type, fetchApiDataSaga);
}
