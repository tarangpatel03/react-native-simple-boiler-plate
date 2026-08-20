import { axiosInstance } from './instance';

export const setupInterceptors = () => {
  axiosInstance.interceptors.request.use(
    config => {
      // Add authorization headers or request logging here
      return config;
    },
    error => Promise.reject(error),
  );

  axiosInstance.interceptors.response.use(
    response => response,
    error => {
      // Handle global errors (e.g., 401 unauthorized, token refresh logic)
      return Promise.reject(error);
    },
  );
};
