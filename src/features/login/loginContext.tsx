import React, { createContext, useState } from 'react';
import { AuthContextType, UserLogin } from '../../types/commons';
import loginApi from './loginApi';

type AuthContextProviderProps = {
	children: React.ReactNode;
};

const AuthContext = createContext<AuthContextType>({
	isLoggedIn: false,
	logIn: (usernamePassword: UserLogin) => null,
	logOut: () => null,
});

const AuthProvider = ({ children }: AuthContextProviderProps) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(
		Boolean(localStorage.getItem('access_token'))
	);

	const logIn = async (username_password: UserLogin): Promise<void> => {
		const res = await loginApi.login(username_password);
		if (res.status === 200) {
			localStorage.setItem('access_token', res.data['access_token']);
			setIsLoggedIn(true);
		}
	};

	const logOut = () => {
		if (Boolean(localStorage.getItem('access_token'))) {
			localStorage.removeItem('access_token');
			setIsLoggedIn(false);
		}
	};

	//checkAuth
	//check expire
	const authContextValue = {
		logIn,
		logOut,
		isLoggedIn,
	};

	return (
		<AuthContext.Provider value={authContextValue}>
			{children}
		</AuthContext.Provider>
	);
};

export { AuthProvider, AuthContext };
