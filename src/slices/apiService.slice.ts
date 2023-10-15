// apiServiceSlice.ts

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ApiServiceState {
  loading: boolean;
  error: any;
  data: any;
}

const initialState: ApiServiceState = {
  loading: false,
  error: null,
  data: null,
};

const apiServiceSlice = createSlice({
  name: 'apiService',
  initialState,
  reducers: {
    apiServiceRequest(state, action: PayloadAction<any>) {
      console.log('apiServiceRequest', action.payload);
      state.loading = true;
      state.error = null;
    },
    apiServiceSuccess(state, action: PayloadAction<any>) {
      console.log('apiServiceSuccess', action.payload);
      state.loading = false;
      state.data = action.payload;
    },
    apiServiceFailure(state, action: PayloadAction<string>) {
      console.log('apiServiceFailure', action.payload);
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { apiServiceRequest, apiServiceSuccess, apiServiceFailure } = apiServiceSlice.actions;

export default apiServiceSlice.reducer;
