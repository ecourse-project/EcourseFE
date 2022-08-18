import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const DocumentLoadable = Loadable({
	loader: () => import('src/sections/Pages/DocumentUI'),
	loading: () => <LoadingPage isLoading={true} />,
});
const Document: React.FC = () => {
	return (
		<React.Fragment>
			<PrivateProvider>
				<Layout>
					<DocumentLoadable />
				</Layout>
			</PrivateProvider>
		</React.Fragment>
	);
};

export default Document;
