import axios from 'axios';
import { StorageKeys } from 'src/utils/enum';

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

const baseUrl = 'http://127.0.0.1:8000/api/';
export const apiClient = axios.create({
	baseURL: baseUrl,
	headers: {
		'Content-Type': 'application/json',
		// Authorization: `Bearer ${localStorage.getItem('Access-Token')}`,
	},
	withCredentials: true,
});

// export { apiClient, apiIns };
