import React from 'react';
import Loadable from 'react-loadable';
import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const HomeLoadable = Loadable({
  loader: () => import('src/sections/Pages/HomeUI'),
  loading: () => <LoadingPage isLoading={true} />,
});

const queryClient = new QueryClient();

const Home: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          {/* <ErrorBoundary> */}
          <QueryClientProvider client={queryClient}>
            <HomeLoadable />
          </QueryClientProvider>
          {/* </ErrorBoundary> */}
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default Home;
