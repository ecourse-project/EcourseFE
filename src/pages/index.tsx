import React, { useEffect } from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/components/common/Layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const HomeLoadable = Loadable({
  loader: () => import('src/sections/Pages/HomeUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const Home: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          <HomeLoadable />
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default Home;
