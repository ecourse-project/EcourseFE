import React from 'react';
import Loadable from 'react-loadable';
// import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';

const ForgotPasswordLoadable = Loadable({
	loader: () => import('src/sections/ForgotPassword'),
	loading: () => <LoadingPage isLoading={true} />,
});
const ForgotPasswordPage: React.FC = () => {
	return (
		<React.Fragment>
			{/* <PublicProvider> */}
			<ForgotPasswordLoadable />
			{/* </PublicProvider> */}
		</React.Fragment>
	);
};

export default ForgotPasswordPage;
