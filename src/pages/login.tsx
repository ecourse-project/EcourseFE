import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const LoginLoadable = Loadable({
  loader: () => import('src/sections/Login'),
  loading: () => <LoadingPage isLoading={true} />,
});
const LoginPage: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <LoginLoadable />
      </PublicProvider>
    </React.Fragment>
  );
};

export default LoginPage;
