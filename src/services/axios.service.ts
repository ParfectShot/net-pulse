import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

class AxiosService {
  private axiosInstance: AxiosInstance;

  constructor(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
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

  // You can also add methods for setting and updating headers, authentication, etc.

}

export default AxiosService;
