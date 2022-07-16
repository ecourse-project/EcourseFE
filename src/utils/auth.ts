// import { User } from '@goldfishcode/homemeta-cmp-sdk/libs/api/user/models';
// import { navigate } from 'gatsby';
import { useNavigate } from 'react-router-dom';
import RoutePaths from './routes';
const navigate = useNavigate();
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
		navigate(
			`${RoutePaths.LOGIN}/?redirect_url=${window.location.pathname}${window.location.search}`
		);
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
