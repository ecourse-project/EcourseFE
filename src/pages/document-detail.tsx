import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/components/common/Layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const DocumentDetailLoadable = Loadable({
  loader: () => import('src/sections/Pages/DocumentDetailUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const DocumentDetail: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <DocumentDetailLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default DocumentDetail;
