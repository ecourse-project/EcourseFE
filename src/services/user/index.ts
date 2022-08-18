// import { UploadFile } from '@goldfishcode/first-team-real-estate-sdk/libs/api/upload/models';
// import {
// 	RegisterUserRegisterArgs,
// 	UpdateUserProfileArgs,
// 	User,
// 	UserProfile,
// } from '@goldfishcode/first-team-real-estate-sdk/libs/api/user/models';
// import { apiIns } from 'src/config/apiClient';

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
			// 			email: params.email;
			// password: params.;
			// password2: string;
			// full_name: string;
			...params,
		});
	}
	static existsEmail(email: string): Promise<OIsExist> {
		return apiClient.get(apiURL.existEmail(email));
	}

	// static existsDRE(dre: string): Promise<boolean> {
	// 	return apiIns.user.existsDRE(dre);
	// }
	// static upload(params: FormData): Promise<UploadFile> {
	// 	return apiIns.uploadFile.upload(params);
	// }
	// static updateProfile(data: UpdateUserProfileArgs): Promise<UserProfile> {
	// 	return apiIns.user.updateProfile(data);
	// }
}

export default UserService;
