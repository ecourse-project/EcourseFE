import axios from 'axios';
import { Router } from 'next/router';
import { StorageKeys } from 'src/lib/utils/enum';
import AuthService from '../api/auth';
import { OToken } from '../types/backend_modal';
import globalVariable from './env';

// let apiClient: ApiClient;
// let apiIns: Api;

class SessionStorage {
  public async set(key: string, value: string): Promise<void> {
    localStorage.setItem(key, value);
  }

  public async get(key: string): Promise<string> {
    const value = localStorage.getItem(key);
    return value || '';
  }

  public async remove(key: string): Promise<void> {
    localStorage.removeItem(key);
  }
}

const sessionStorage = new SessionStorage();
const config = {
  // baseUrl: globalVariable.API_URL,
  authSessionKey: StorageKeys.SESSION_KEY,
  session: sessionStorage,
  useRememberMe: true,
  rememberKey: StorageKeys.REMEMBER_ME_KEY,
};

const baseUrl = globalVariable.API_URL;

const refreshToken = async (refresh: string) => {
  try {
    const newToken = await AuthService.refreshToken(refresh);
    return newToken.access;
  } catch (error) {
    console.log('error :>> ', error);
    throw error;
  }
};

export const apiClient = axios.create({
  baseURL: baseUrl,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer ${localStorage.getItem(StorageKeys.SESSION_KEY)}`,
  },
  withCredentials: true,
});

apiClient.interceptors.request.use(
  function (config) {
    const token: OToken =
      typeof window !== 'undefined'
        ? (JSON.parse(localStorage.getItem(StorageKeys.SESSION_KEY) || '{}') as OToken)
        : ({} as OToken);
    if (token.access) {
      if (config.headers === undefined) {
        config.headers = {};
      } else config.headers.Authorization = `Bearer ${token?.access}`;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error.response.data);
  },
);

apiClient.interceptors.response.use(
  function (response) {
    return response.data;
  },
  async (error) => {
    const token: OToken =
      typeof window !== 'undefined'
        ? (JSON.parse(localStorage.getItem(StorageKeys.SESSION_KEY) || '{}') as OToken)
        : ({} as OToken);
    const originalRequest = error.config;
    if (
      error.response.status === 401 &&
      originalRequest &&
      !originalRequest._retry &&
      !error.response.data.detail?.includes('given credentials')
    ) {
      originalRequest._retry = true;

      refreshToken(token.refresh)
        .then((response) => {
          const newToken = { ...token, access: response };
          apiClient.defaults.headers.common.Authorization = `Bearer ${response}`;
          originalRequest.headers.Authorization = `Bearer ${response}`;
          localStorage.setItem(StorageKeys.SESSION_KEY, JSON.stringify(newToken));
          window.location.reload();
          return apiClient(originalRequest);
        })
        .catch((error) => {
          localStorage.clear();
          window.location.href = '/';
          return Promise.reject(error);
        });
    }
    return Promise.reject(error.response.data);
  },
);
// export { apiClient, apiIns };
