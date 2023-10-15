import AxiosService from "./services/axios.service";
import store from "./store";
import { apiServiceRequest } from "./slices/apiService.slice";
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

export type Sequence = "serial" | "parallel";
export interface FetchPayload {
  url: string;
  method?: "GET" | "POST" | "PUT" | "DELETE";
  queryParams?: any;
  body?: any;
  headers?: any;
  sequence?: Sequence;
}
export interface ApiServiceConfig {
  baseUrl?: string;
  headers?: Record<string, string>;
  sequence?: Sequence;
}

class ApiService {
  private baseUrl: string;
  private headers: Record<string, string>;
  private sequence: Sequence;
  public axiosInstance: AxiosInstance;

  constructor({
    baseUrl = "https://jsonplaceholder.typicode.com",
    headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    sequence = "serial",
  }: ApiServiceConfig) {
    this.baseUrl = baseUrl;
    this.headers = headers;
    this.sequence = sequence;
    this.axiosInstance =  axios.create({
      baseURL: this.baseUrl,
      headers: this.headers,
    });

    // Add request interceptor to set common headers or perform actions before sending the request
    this.axiosInstance.interceptors.request.use(
      (config) => {
        // You can set common headers, perform authentication checks, or any other actions here.
        // For example, you can add an authentication token:
        // const authToken = 'your-auth-token';
        // config.headers.Authorization = `Bearer ${authToken}`;

        return config;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    // Add response interceptor to handle responses globally or perform actions before resolving or rejecting the promise
    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // You can handle responses or perform actions before they are passed to the caller.
        // For example, you can extract and format the data:
        // const formattedData = response.data;

        return response;
      },
      (error) => {
        // Handle and customize error responses here
        return Promise.reject(error);
      }
    );
  }

  // Example GET request
  async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.get<T>(url, config);
    return response.data;
  }

  // Example POST request
  async post<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.post<T>(url, data, config);
    return response.data;
  }

  // Example PUT request
  async put<T>(url: string, data: any, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.put<T>(url, data, config);
    return response.data;
  }

  // Example DELETE request
  async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.axiosInstance.delete<T>(url, config);
    return response.data;
  }

  async request({
    url,
    method = "GET",
    queryParams,
    body,
    headers,
  }: FetchPayload) {
    store.dispatch(
      apiServiceRequest({
        url,
        method,
        queryParams,
        body,
        headers,
        sequence: this.sequence,
      })
    );
  }
}

let apiService: ApiService | null = null;

export const initializeApiService = (config: ApiServiceConfig) => {
  if (!apiService) {
    apiService = new ApiService(config);
  }
};

export const getApiService = () => {
  if (!apiService) {
    throw new Error('ApiService has not been initialized. Call initializeApiService first.');
  }
  return apiService;
};

initializeApiService({
  baseUrl: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  sequence: "serial",
});

getApiService().request({
  url: "/todos/1",
  method: "GET",
});
