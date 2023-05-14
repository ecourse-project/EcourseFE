import React from 'react';

import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const PostDetailLoadable = Loadable({
  loader: () => import('src/sections/Pages/PostDetail'),
  loading: () => <LoadingPage isLoading={true} />,
});
const PostDetailPage: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          <PostDetailLoadable />
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default PostDetailPage;
