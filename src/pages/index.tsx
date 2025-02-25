import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

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
