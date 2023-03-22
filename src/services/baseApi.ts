import axios from "axios";
import { toast } from "react-toastify";

import { apiBaseURL } from "@/constants/api";
import { getAuthToken, STORAGE_KEY } from "@/hooks/useAuthentication";

const baseApi = axios.create({
  baseURL: `${apiBaseURL}/v1`,
});

baseApi.interceptors.request.use(
  config => {
    const token = getAuthToken();

    if (!config.headers) {
      config.headers = {};
    }

    config.headers.Authorization = `Bearer ${token}`;

    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

const UNAUTHORIZED_STATUS = 401;

baseApi.interceptors.response.use(
  response => response,
  error => {
    if (error?.response?.status === UNAUTHORIZED_STATUS) {
      localStorage.removeItem(STORAGE_KEY);
      toast.error("Sua sessão expirou, faça o login novamente");
    }
    return Promise.reject(error);
  }
);

export default baseApi;
