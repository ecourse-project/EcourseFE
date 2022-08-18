import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CartLoadable = Loadable({
	loader: () => import('src/sections/shopping-cart/index'),
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
