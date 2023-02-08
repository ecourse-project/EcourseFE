import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';

import PrivateProvider from 'src/components/providers/PrivateProvider';
import Layout from 'src/components/common/Layout';

const DocumentLoadable = Loadable({
  loader: () => import('src/sections/Pages/DocumentUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const Document: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          <DocumentLoadable />
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default Document;
