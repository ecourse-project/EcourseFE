import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const GPTLoadable = Loadable({
  loader: () => import('src/sections/Pages/GPT'),
  loading: () => <LoadingPage isLoading={true} />,
});
const GPTSearchPage: React.FC = () => {
  return (
    <React.Fragment>
      <PublicProvider>
        <GPTLoadable />
      </PublicProvider>
    </React.Fragment>
  );
};

export default GPTSearchPage;
