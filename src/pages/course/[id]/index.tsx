import { useRouter } from 'next/router';
import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CourseDetailLoadable = Loadable({
  loader: () => import('src/sections/Pages/CourseDetailUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const CourseDetail: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <CourseDetailLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default CourseDetail;
