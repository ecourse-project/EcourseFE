import { User, UserLogin } from '../../types/commons';
import apiConfig from './apiConfig';

const loginApi = {
	login: async (name_pass: UserLogin) => {
		const result = await fetch(`${apiConfig.baseUrl}/login`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(name_pass),
		});

		return { status: result.status, data: await result.json() };
	},

	register: async (info: User) => {
		const result = await fetch(`${apiConfig.baseUrl}/register`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
			},
			body: JSON.stringify(info),
		});
	},
};

export default loginApi;
