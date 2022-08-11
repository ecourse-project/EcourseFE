import React, { useState, ReactNode } from 'react';

import { LoadingPage } from 'src/components/loading/loadingBase';
// import SettingsService from 'src/services/settings';
// import UserAction from 'src/reducers/user/action';
import { StorageKeys } from 'src/utils/enum';
// import { RootState } from 'src/reducers/model';
import UserService from 'src/services/user';
// import AuthAction from 'src/reducers/auth/action';
import { checkingProfileAvailable, forceLogout } from 'src/utils/auth';
import RoutePaths from 'src/utils/routes';
import { useNavigate } from 'react-router-dom';
const PublicProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
	// const myProfile = useSelector((state: RootState) => state.auth.myProfile);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const getUserProfile = async () => {
		try {
			// const profile = await UserService.getMyProfile();
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
	//   if (
	//     (typeof window !== 'undefined' && window.location.pathname.includes(RoutePaths.REGISTER)) ||
	//     window.location.pathname.includes(RoutePaths.SETTINGS) ||
	//     window.location.pathname.includes(RoutePaths.AGENT_LOOKUP)
	//   ) {
	//     try {
	//       const assets = await SettingsService.getConstantValue();
	//       dispatch({
	//         type: UserAction.USER_ASSETS,
	//         payload: assets,
	//       });
	//     } catch (error) {
	//       console.log(error);
	//     }
	//   }
	// };
	//
	// const checkAccountPermission = () => {
	// 	const token = localStorage.getItem(StorageKeys.SESSION_KEY);
	// 	if (!token) {
	// 		setIsLoading(false);
	// 	} else if (!myProfile) {
	// 		getUserProfile();
	// 	} else {
	// 		setIsLoading(false);
	// 		checkingProfileAvailable(myProfile);
	// 	}
	// };
	const checkDenyAccess = () => {
		const token = localStorage.getItem(StorageKeys.SESSION_KEY);
		const pathname = window.location.pathname;
		if (
			(pathname.includes(RoutePaths.REGISTER) ||
				pathname.includes(RoutePaths.LOGIN)) &&
			token
		) {
			navigate(RoutePaths.DASHBOARD);
		}
	};

	React.useEffect(() => {
		// checkUserAssets();
		// checkAccountPermission();
		// checkDenyAccess();
		setTimeout(() => setIsLoading(false), 1000);
	}, []);

	return (
		<React.Fragment>
			{!isLoading ? children : <LoadingPage isLoading={true} />}
		</React.Fragment>
	);
};

export default PublicProvider;
