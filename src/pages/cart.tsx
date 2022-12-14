import React from 'react';
import Loadable from 'react-loadable';
import Layout from 'src/components/common/Layout';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CartLoadable = Loadable({
  loader: () => import('src/sections/cart'),
  loading: () => <LoadingPage isLoading={true} />,
});
const Cart: React.FC = () => {
  return (
    <React.Fragment>
      <PrivateProvider>
        <Layout>
          <CartLoadable />
        </Layout>
      </PrivateProvider>
    </React.Fragment>
  );
};

export default Cart;
