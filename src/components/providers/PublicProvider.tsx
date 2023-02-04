import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { ReactNode, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoadingPage } from 'src/components/loading/loadingBase';
import CourseService from 'src/lib/api/course';
import { appActions } from 'src/lib/reducers/app/appSlice';
import { RootState } from 'src/lib/reducers/model';
import { StorageKeys } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';
const PublicProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const header = useSelector((state: RootState) => state.app.header);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const router = useRouter();
  const dispatch = useDispatch();

  const getUserProfile = async () => {
    if (isEmpty(header)) {
      try {
        const header = await CourseService.listHeaders();
        dispatch(appActions.setAppHeader(header));
      } catch (error) {
        setIsLoading(false);
      } finally {
        setIsLoading(false);
      }
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
  useEffect(() => {
    console.log('isLoading :>> ', isLoading);
  }, [isLoading]);
  useEffect(() => {
    console.log('header :>> ', header);
  }, [header]);

  return <React.Fragment>{!isLoading ? children : <LoadingPage isLoading={true} />}</React.Fragment>;
};

export default PublicProvider;
