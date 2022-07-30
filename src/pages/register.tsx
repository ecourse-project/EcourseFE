import React from 'react';
import Loadable from 'react-loadable';
import { LoadingPage } from 'src/components/loading/loadingBase';

const RegisterLoadable = Loadable({
	loader: () => import('src/sections/Register'),
	loading: () => <LoadingPage isLoading={true} />,
});
const RegisterPage: React.FC = () => {
	return (
		<React.Fragment>
			<RegisterLoadable />
		</React.Fragment>
	);
};

export default RegisterPage;
