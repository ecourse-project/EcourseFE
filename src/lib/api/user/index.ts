import { apiClient } from 'src/lib/config/apiClient';
import { OIsExist, OPasswordChange, OPasswordRest, ORegistration, User } from 'src/lib/types/backend_modal';

import { apiURL } from '../course';

class UserService {
  // static getMyProfile(): Promise<any> {
  // 	return apiClient.get(apiURL.me());
  // }
  // static register(params: IRegistration): Promise<ORegistration> {
  // 	return apiClient.post(apiURL.register(), {
  // 		...params,
  // 	});
  // }
  // static existsEmail(email: string): Promise<OIsExist> {
  // 	return apiClient.get(apiURL.existEmail(email));
  // }

  static myInfo(): Promise<User> {
    return apiClient.get(apiURL.me());
  }

  static register(email: string, password1: string, password2: string, full_name: string): Promise<ORegistration> {
    return apiClient.post(apiURL.register(), {
      email: email,
      password1: password1,
      password2: password2,
      full_name: full_name,
    });
  }

  static existEmail(email: string): Promise<OIsExist> {
    return apiClient.get(apiURL.existEmail(email));
  }

  static resetPwd(email: string): Promise<OPasswordRest> {
    return apiClient.post(apiURL.resetPwd(), { email: email });
  }

  static changePwd(old_password: string, password1: string, password2: string): Promise<OPasswordChange> {
    return apiClient.post(apiURL.changePwd(), {
      old_password: old_password,
      password1: password1,
      password2: password2,
    });
  }
}

export default UserService;
