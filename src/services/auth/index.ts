// import { apiIns } from 'src/config/apiClient';
import { emit } from 'process';
import apiURL from 'src/apis';
import { apiClient } from 'src/config/apiClient';
import { LoginParams } from './model';

class AuthService {
	static async signIn(email: string, password: string): Promise<string> {
		const repsonse = await apiClient.post(apiURL.login, {
			email: email,
			password: password,
		});
		return repsonse.data.access;
	}
	// static verifyEmail(key: string): Promise<unknown> {
	// 	return apiIns.auth.verifyEmail(key);
	// }
	// static resendEmail(email: string): Promise<unknown> {
	// 	return apiIns.auth.resendEmail(email);
	// }
	static resetPassword(email: string): Promise<unknown> {
		return apiClient.post(apiURL.resetPwd, {
			email: email,
		});
	}
	// static resetPasswordConfirm(
	// 	newPassword: string,
	// 	uid: string,
	// 	token: string
	// ): Promise<unknown> {
	// 	return apiIns.auth.resetPasswordConfirm(newPassword, uid, token);
	// }
	// static changePassword(
	// 	oldPassword: string,
	// 	newPassword: string
	// ): Promise<unknown> {
	// 	return apiIns.auth.changePassword(oldPassword, newPassword);
	// }
}

export default AuthService;
