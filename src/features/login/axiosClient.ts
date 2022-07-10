import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import apiConfig from './apiConfig';

const axiosClient = axios.create({
	baseURL: apiConfig.baseUrl,
	headers: {
		'Content-Type': 'application/json',
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
		throw error;
	}
);

export default axiosClient;
