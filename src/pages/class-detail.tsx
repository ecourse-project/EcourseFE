import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';

import PrivateProvider from 'src/components/providers/PrivateProvider';
import Layout from 'src/components/common/Layout';

const ClassDetailLoadable = Loadable({
  loader: () => import('src/sections/Pages/ClassDetailUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const ClassDetail: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <ClassDetailLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default ClassDetail;
