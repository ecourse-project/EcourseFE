import axios from 'axios';
const API_URL = 'http://127.0.0.1:8000/';

export const api = axios.create({
	baseURL: API_URL,
	timeout: 5 * 60 * 1000, //300s
	withCredentials: true,
	headers: {
		'X-Requested-With': 'XMLHttpRequest',
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
});

export const setHeaderConfig = (obj) => {
	for (const key of Object.keys(obj)) {
		api.defaults.headers.common[key] = obj[key];
	}
};
