import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const GPTLoadable = Loadable({
  loader: () => import('src/sections/Pages/GPT'),
  loading: () => <LoadingPage isLoading={true} />,
});
const GPTSearchPage: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <GPTLoadable />
      </PrivateProvider>
    </React.Fragment>
  );
};

export default GPTSearchPage;
