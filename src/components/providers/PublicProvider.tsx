import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPage } from 'src/components/loading/loadingBase';
import AuthService from 'src/lib/api/auth';
import CourseService from 'src/lib/api/course';
import UserService from 'src/lib/api/user';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { RootState } from 'src/lib/reducers/model';
import { User } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';
const PublicProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const header = useSelector((state: RootState) => state.app.header);
  const myProfile = useSelector((state: RootState) => state.app.user);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      if (isEmpty(header)) {
        const header = await CourseService.listHeaders();
        dispatch(appActions.setAppHeader(header));
      }
      if (isEmpty(myProfile) && token) {
        const profile: User = await UserService.myInfo();
        dispatch(appActions.setMyProfile(profile));
      }
    } catch (error) {
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  };

  const checkDenyAccess = () => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    const pathname = window.location.pathname;
    if ((pathname.includes(RoutePaths.REGISTER) || pathname.includes(RoutePaths.LOGIN)) && token) {
      router.push(RoutePaths.DASHBOARD);
    }
  };

  React.useEffect(() => {
    getUserProfile();
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return <React.Fragment>{!isLoading ? children : <LoadingPage isLoading={true} />}</React.Fragment>;
};

export default PublicProvider;
