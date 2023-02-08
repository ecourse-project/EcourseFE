import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';
const SettingsLoadable = Loadable({
  loader: () => import('src/sections/Pages/Setting'),
  loading: () => <LoadingPage isLoading={true} />,
});
const SettingPage: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <SettingsLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default SettingPage;
