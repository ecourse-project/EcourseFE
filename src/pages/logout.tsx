import { useRouter } from 'next/router';
import React from 'react';
import { LoadingPage } from 'src/components/loading/loadingBase';
import { StorageKeys } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';

const Logout: React.FC = () => {
  const router = useRouter();
  React.useEffect(() => {
    localStorage.clear();
    localStorage.removeItem(StorageKeys.SESSION_KEY);
    window.location.href = RoutePaths.HOME;
  }, []);
  return <LoadingPage isLoading={true} />;
};

export default Logout;
