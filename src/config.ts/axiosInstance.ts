import axios, { AxiosInstance } from "axios";
import Cookies from "js-cookie";


const getToken = () => {
  return Cookies.get("token");
};

const API_URL = import.meta.env.VITE_API_URL ;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 400) {
      console.error("Unauthorized access. Redirecting to login...");
     
    }
    return Promise.reject(error instanceof Error ? error : new Error(String(error)));
  }
);

export default axiosInstance;
