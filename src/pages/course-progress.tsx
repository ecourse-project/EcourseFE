import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CourseProgressLoadable = Loadable({
	loader: () => import('src/sections/Pages/CourseProgressUI'),
	loading: () => <LoadingPage isLoading={true} />,
});
const CourseProgress: React.FC = () => {
	return (
		<React.Fragment>
			<PrivateProvider>
				<Layout isNonHeader>
					<CourseProgressLoadable />
				</Layout>
			</PrivateProvider>
		</React.Fragment>
	);
};

export default CourseProgress;