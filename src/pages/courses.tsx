import React from 'react';
import Loadable from 'react-loadable';
import PublicProvider from 'src/components/providers/PublicProvider';
import { LoadingPage } from 'src/components/loading/loadingBase';
import Layout from 'src/layouts/layout';
import PrivateProvider from 'src/components/providers/PrivateProvider';

const CourseLoadable = Loadable({
	loader: () => import('src/sections/Pages/CourseUI'),
	loading: () => <LoadingPage isLoading={true} />,
});
const Course: React.FC = () => {
	return (
		<React.Fragment>
			<PrivateProvider>
				<Layout>
					<CourseLoadable />
				</Layout>
			</PrivateProvider>
		</React.Fragment>
	);
};

export default Course;
