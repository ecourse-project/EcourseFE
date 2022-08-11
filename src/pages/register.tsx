import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';
import PublicProvider from 'src/components/providers/PublicProvider';

const RegisterLoadable = Loadable({
	loader: () => import('src/sections/Register'),
	loading: () => <LoadingPage isLoading={true} />,
});
const RegisterPage: React.FC = () => {
	return (
		<React.Fragment>
			<PublicProvider>
				<RegisterLoadable />
			</PublicProvider>
		</React.Fragment>
	);
};

export default RegisterPage;
