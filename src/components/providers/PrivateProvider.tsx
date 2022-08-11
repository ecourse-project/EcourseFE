import React, { ReactNode, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LoadingPage } from 'src/components/loading/loadingBase';
// import AuthAction from 'src/reducers/auth/action';
// import UserAction from 'src/reducers/user/action';
// import SettingsService from 'src/services/settings';
import UserService from 'src/services/user';
import { forceLogout } from 'src/utils/auth';
import { StorageKeys } from 'src/utils/enum';
import RoutePaths from 'src/utils/routes';

const PrivateProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
	const dispatch = useDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const getUserProfile = async () => {
		try {
			const profile = await UserService.getMyProfile();
			// dispatch({
			// 	type: AuthAction.RUN_AUTHENTICATED_FLOW,
			// 	payload: profile,
			// });
		} catch (error) {
			forceLogout();
		} finally {
			setIsLoading(false);
		}
	};
	// const checkUserAssets = async () => {
	// 	if (
	// 		typeof window !== 'undefined' &&
	// 		window.location.pathname.includes(RoutePaths.MAILING_LISTS)
	// 	) {
	// 		try {
	// 			const assets = await SettingsService.getConstantValue();
	// 			dispatch({
	// 				type: UserAction.USER_ASSETS,
	// 				payload: assets,
	// 			});
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// };

	const checkAccountPermission = () => {
		const token = localStorage.getItem(StorageKeys.SESSION_KEY);
		if (!token) {
			setIsLoading(false);
			forceLogout();
		} else {
			getUserProfile();
		}
	};

	React.useEffect(() => {
		// checkUserAssets();
		checkAccountPermission();
	}, []);

	return (
		<React.Fragment>
			{!isLoading ? children : <LoadingPage isLoading={true} />}
		</React.Fragment>
	);
};

export default PrivateProvider;
