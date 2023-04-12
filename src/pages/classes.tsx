import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const ClasLoadable = Loadable({
  loader: () => import('src/sections/Pages/CourseUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const Class: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          <ClasLoadable />
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default Class;
