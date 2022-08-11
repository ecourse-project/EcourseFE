import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'Content-Type': 'application/json',
		// 'Access-Control-Allow-Origin': '*',
		// 'Access-Control-Allow-Credentials': true,
	},
});

axiosClient.interceptors.request.use(function (config: AxiosRequestConfig) {
	return config;
});

axiosClient.interceptors.response.use(
	(response: AxiosResponse) => {
		if (response && response.data) {
			return response.data;
		}

		return response;
	},
	(error) => {
		return Promise.reject(error);
	}
);

export default axiosClient;
