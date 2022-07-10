import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../features/login/loginContext';
export interface ProtectedRouteProps {
	outlet: JSX.Element;
}

export default function PrivateRoute({ outlet }: ProtectedRouteProps) {
	const authContext = useContext(AuthContext);
	if (authContext?.isLoggedIn) {
		return outlet;
	} else {
		return <Navigate to={{ pathname: '/login' }} />;
	}
}
