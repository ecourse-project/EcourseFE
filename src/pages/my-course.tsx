import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const MyCourseLoadable = Loadable({
	loader: () => import('src/sections/Pages/MyCourseUI'),
	loading: () => <LoadingPage isLoading={true} />,
});
const MyCourse: React.FC = () => {
	return (
		<React.Fragment>
			<PrivateProvider>
				<Layout>
					<MyCourseLoadable />
				</Layout>
			</PrivateProvider>
		</React.Fragment>
	);
};

export default MyCourse;
