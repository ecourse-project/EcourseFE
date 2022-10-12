// import { navigate } from '@reach/router';
import { useNavigate } from 'react-router-dom';
import React, { ReactNode, useState } from 'react';
import { LoadingPage } from 'src/components/loading/loadingBase';
// import AuthAction from 'src/reducers/auth/action';
// import UserAction from 'src/reducers/user/action';
// import SettingsService from 'src/services/settings';
import UserService from 'src/services/user';
import { forceLogout } from 'src/utils/auth';
import { StorageKeys } from 'src/utils/enum';
import RoutePaths from 'src/utils/routes';
import { User } from 'src/models/backend_modal';
import { useAppDispatch } from 'src/apps/hooks';
import { appActions } from 'src/reducers/app/appSlice';
const PrivateProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
	const dispatch = useAppDispatch();
	const [isLoading, setIsLoading] = useState(true);
	const getUserProfile = async () => {
		try {
			const profile: User = await UserService.myInfo();
			dispatch(appActions.setMyProfile(profile));
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
		// const navigate = useNavigate();

		const token = localStorage.getItem(StorageKeys.SESSION_KEY);
		if (!token) {
			setIsLoading(false);
			// navigate(RoutePaths.LOGIN);
			// forceLogout();
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
