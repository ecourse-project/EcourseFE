import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const ClassDetailLoadable = Loadable({
  loader: () => import('src/sections/Pages/CourseDetailUI'),
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
