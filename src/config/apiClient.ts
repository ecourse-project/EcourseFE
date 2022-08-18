import axios from 'axios';
import { StorageKeys } from 'src/utils/enum';
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

export const apiClient = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${localStorage.getItem(StorageKeys.SESSION_KEY)}`,
	},
	withCredentials: true,
});
// Add a request interceptor
apiClient.interceptors.request.use(
	function (config) {
		console.log('config: ', config);
		// Do something before request is sent
		const token = localStorage.getItem(StorageKeys.SESSION_KEY);
		if (token) {
			if (config.headers === undefined) {
				config.headers = {};
			} else config.headers.Authorization = `Bearer ${token}`;
		}
		return config;
	},
	function (error) {
		// Do something with request error
		return Promise.reject(error);
	}
);

// Add a response interceptor
apiClient.interceptors.response.use(
	function (response) {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response.data;
	},
	function (error) {
		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		// console.log
		return Promise.reject(error);
	}
);
// export { apiClient, apiIns };
