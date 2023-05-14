import React from 'react';

import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const PostLoadable = Loadable({
  loader: () => import('src/sections/Pages/Post'),
  loading: () => <LoadingPage isLoading={true} />,
});
const PostPage: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <Layout>
          <PostLoadable />
        </Layout>
      </PublicProvider>
    </React.Fragment>
  );
};

export default PostPage;
