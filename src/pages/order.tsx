import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const OrderCartLoadable = Loadable({
  loader: () => import('src/sections/order'),
  loading: () => <LoadingPage isLoading={true} />,
});
const OrderCart: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <OrderCartLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default OrderCart;
