import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';

const DocumentLoadable = Loadable({
	loader: () => import('src/layouts/Home'),
	loading: () => <LoadingPage isLoading={true} />,
});
const Document: React.FC = () => {
	return (
		<React.Fragment>
			<PublicProvider>
				<DocumentLoadable />
			</PublicProvider>
		</React.Fragment>
	);
};

export default Document;
