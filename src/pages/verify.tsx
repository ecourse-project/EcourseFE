import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const VerifyLoadable = Loadable({
  loader: () => import('src/sections/Verify'),
  loading: () => <LoadingPage isLoading={true} />,
});
const VerifyPage: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <VerifyLoadable />
      </PublicProvider>
    </React.Fragment>
  );
};

export default VerifyPage;
