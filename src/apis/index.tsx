// - POST: localhost:8000/api/users-auth/registration/                                     =====> Register
// - POST: localhost:8000/api/users-auth/token/                                            =====> Get token
// - POST: localhost:8000/api/users-auth/token/refresh/                                    =====> Get refresh token
// - GET: localhost:8000/api/users/me/                                                     =====> Get user profile
// - GET: localhost:8000/api/users/exists/?username=binhdiep012&email=binh@mail.com        =====> Check exists username & email
// - POST: localhost:8000/api/users/password-reset/                                        =====> Reset password
// - POST: localhost:8000/api/users/password-change/                                       =====> Change password
const apiURL = {
	login: 'users-auth/token/',
	register: 'users-auth/registration/',
	existEmail: 'users/exists/',
	resetPwd: 'users/password-reset/',
	changePwd: 'users/password-change/',
};
export default apiURL;
