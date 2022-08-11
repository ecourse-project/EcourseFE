import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';

const HomeLoadable = Loadable({
	loader: () => import('src/layouts/Home'),
	loading: () => <LoadingPage isLoading={true} />,
});
const Home: React.FC = () => {
	return (
		<React.Fragment>
			<PublicProvider>
				<HomeLoadable />
			</PublicProvider>
		</React.Fragment>
	);
};

export default Home;
