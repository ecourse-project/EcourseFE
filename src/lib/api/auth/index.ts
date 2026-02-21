import { apiClient } from 'src/lib/config/apiClient';

import { OToken } from 'src/lib/types/backend_modal';
import { apiURL } from '../course';

class AuthService {
  static signIn(email: string, password: string): Promise<OToken> {
    return apiClient.post(apiURL.login(), {
      email: email,
      password: password,
    });
  }
  static refreshToken(refreshToken: string): Promise<{ access: string }> {
    return apiClient.post(apiURL.refresh(), {
      refresh: refreshToken,
    });
  }

  static resetPassword(email: string): Promise<unknown> {
    return apiClient.post(apiURL.resetPwd(), {
      email: email,
    });
  }
}

export default AuthService;
