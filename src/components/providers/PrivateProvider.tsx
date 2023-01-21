// import { navigate } from '@reach/router';
import React, { ReactNode, useState } from 'react';
import { LoadingPage } from 'src/components/loading/loadingBase';
// import AuthAction from 'src/lib/reducers/auth/action';
// import UserAction from 'src/lib/reducers/user/action';
// import SettingsService from 'src/lib/api/settings';
import { forceLogout } from 'src/lib/utils/auth';
import { StorageKeys } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';
import { User } from 'src/lib/types/backend_modal';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { useDispatch } from 'react-redux';
import UserService from 'src/lib/api/user';

const PrivateProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const getUserProfile = async () => {
    try {
      const profile: User = await UserService.myInfo();
      dispatch(appActions.setMyProfile(profile));
    } catch (error) {
      console.log('abc');
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
    // const router = useRouter()

    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    if (!token) {
      setIsLoading(false);
      // router.push(RoutePaths.LOGIN);
      forceLogout();
    } else {
      getUserProfile();
    }
  };

  React.useEffect(() => {
    // checkUserAssets();
    checkAccountPermission();
  }, []);

  return <React.Fragment>{!isLoading ? children : <LoadingPage isLoading={true} />}</React.Fragment>;
};

export default PrivateProvider;
