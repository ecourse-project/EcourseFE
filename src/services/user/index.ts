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

class UserService {
	static getMyProfile(): Promise<any> {
		return apiClient.get(apiURL.me);
	}
	// static register(args: RegisterUserRegisterArgs): Promise<User> {
	// 	return apiIns.user.register(args);
	// }
	static async existsEmail(email: string, username: string): Promise<boolean> {
		const res = await apiClient.get(apiURL.existEmail, {
			params: {
				email: email,
				username: username,
			},
		});
		console.log('27', res);
		return res.data.exists;
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
