import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CourseProgressLoadable = Loadable({
  loader: () => import('src/sections/Pages/CourseProgressUI'),
  loading: () => <LoadingPage isLoading={true} />,
});
const CourseProgress: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout isNoneHeader>
          <CourseProgressLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default CourseProgress;
