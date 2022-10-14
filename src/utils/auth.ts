import { Navigate } from 'react-router-dom';
import RoutePaths from './routes';
export interface User {
	name: string;
	psw: string;
	id: string;
}
export const forceLogout = (): void => {
	localStorage.clear();
	if (
		typeof window !== 'undefined' &&
		!window.location.pathname.includes('/login')
	) {
		Navigate({ to: RoutePaths.LOGIN });
	}
};

export const checkingProfileAvailable = (myProfile?: User): void => {
	if (!window) return;
	const pathName = window.location.pathname;
	if (
		typeof window !== 'undefined' &&
		(pathName === '/' || pathName.includes('/login')) &&
		myProfile?.id
	) {
		// navigate(RoutePaths.ON_BOARDING);
	}
};
