import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPage } from 'src/components/loading/loadingBase';
import CourseService from 'src/lib/api/course';
import UserService from 'src/lib/api/user';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { RootState } from 'src/lib/reducers/model';
import { User } from 'src/lib/types/backend_modal';
import { forceLogout } from 'src/lib/utils/auth';
import { StorageKeys } from 'src/lib/utils/enum';

const PrivateProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const dispatch = useDispatch();
  const myProfile = useSelector((state: RootState) => state.app.user);
  const header = useSelector((state: RootState) => state.app.header);
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const getUserProfile = async () => {
    try {
      if (isEmpty(myProfile)) {
        const profile: User = await UserService.myInfo();
        dispatch(appActions.setMyProfile(profile));
      }
      if (isEmpty(header)) {
        const header = await CourseService.listHeaders();
        dispatch(appActions.setAppHeader(header));
      }
    } catch (error) {
      forceLogout();
    } finally {
      setIsLoading(false);
    }
  };

  const checkAccountPermission = async () => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    if (!token) {
      setIsLoading(false);
      forceLogout();
    } else {
      getUserProfile();
    }
  };

  React.useEffect(() => {
    checkAccountPermission();
  }, []);
  // React.useEffect(() => {
  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => setIsLoading(false);

  // React.useEffect(() => {
  //   const handleStart = () => setIsLoading(true);
  //   const handleComplete = () => setIsLoading(false);

  //   router.events.on('routeChangeStart', handleStart);
  //   router.events.on('routeChangeComplete', handleComplete);
  //   router.events.on('routeChangeError', handleComplete);

  //   return () => {
  //     router.events.off('routeChangeStart', handleStart);
  //     router.events.off('routeChangeComplete', handleComplete);
  //     router.events.off('routeChangeError', handleComplete);
  //   };
  // }, []);

  return <React.Fragment>{!isLoading ? children : <LoadingPage isLoading={true} />}</React.Fragment>;
};

export default PrivateProvider;
