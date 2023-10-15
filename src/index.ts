import { apiServiceRequest } from "./slices/apiService.slice";
import store from "./store";

try {
  store.dispatch(
    apiServiceRequest({ url: '/posts' })
  );
} catch (error) {
  console.log(error);
}