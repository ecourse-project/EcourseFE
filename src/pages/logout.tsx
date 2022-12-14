import React from 'react';
// import AppAction from 'src/lib/reducers/app/action';
import RoutePaths from 'src/lib/utils/routes';
import { LoadingPage } from 'src/components/loading/loadingBase';
import { StorageKeys } from 'src/lib/utils/enum';
import { useRouter } from 'next/router';
// import { navigate } from '@reach/router';

const Logout: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    localStorage.clear();
    localStorage.removeItem(StorageKeys.SESSION_KEY);
    window.location.href = RoutePaths.LOGIN;
  }, []);
  return <LoadingPage isLoading={true} />;
};

export default Logout;
