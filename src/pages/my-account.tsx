import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const MyAccountLoadable = Loadable({
	loader: () => import('src/sections/Pages/MyAcount'),
	loading: () => <LoadingPage isLoading={true} />,
});
const MyAccount: React.FC = () => {
	return (
		<React.Fragment>
			<PrivateProvider>
				<Layout>
					<MyAccountLoadable />
				</Layout>
			</PrivateProvider>
		</React.Fragment>
	);
};

export default MyAccount;
