import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import {
	IRegistration,
	OIsExist,
	ORegistration,
} from 'src/models/backend_modal';

class UserService {
	static getMyProfile(): Promise<any> {
		return apiClient.get(apiURL.me());
	}
	static register(params: IRegistration): Promise<ORegistration> {
		return apiClient.post(apiURL.register(), {
			...params,
		});
	}
	static existsEmail(email: string): Promise<OIsExist> {
		return apiClient.get(apiURL.existEmail(email));
	}
}

export default UserService;
