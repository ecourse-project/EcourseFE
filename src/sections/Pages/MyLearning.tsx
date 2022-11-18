/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import React, { useEffect, useState } from 'react';
import WishListUI from 'src/components/course/my-course/wish-list';
import { Course, Document, FavoriteList } from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import { TypeTabPanel } from './MyAcount';
import { v4 as uuidv4 } from 'uuid';
import MyCourseUI from 'src/components/course/my-course';
import RoutePaths from 'src/utils/routes';
import { useNavigate } from 'react-router-dom';
import { TabPaneSection } from 'src/components/tab-pane-learning';
import { useQueryParam } from 'src/hooks/useQueryParam';
interface AppContextOptions {
	switchTabs: string;
	setSwitchTabs: (tabskey: string) => void;
}
export const AppContext = React.createContext<AppContextOptions>(
	{} as AppContextOptions
);
interface MyLearnParams {
	tab?: string;
}
export enum TabsKey {
	MY_COURSES = 'MY_COURSES',
	WISH_LIST = 'WISH_LIST',
}
const MyLearning: React.FC = () => {
	const navigate = useNavigate();
	const params: MyLearnParams = useQueryParam();
	const [switchTabs, setSwitchTabs] = React.useState<string>(
		TabsKey.MY_COURSES
	);
	useEffect(() => {
		params.tab && setSwitchTabs(params?.tab);
	}, []);
	const appContextValue = {
		switchTabs,
		setSwitchTabs: (tabsKey: string) => {
			navigate(`${RoutePaths.MY_COURSES}/?tab=${tabsKey}`);
			setSwitchTabs(tabsKey);
		},
	};
	const [myCourses, setMyCourses] = useState<Course[]>();
	const [myDocs, setMyDocs] = useState<Document[]>();
	const [myFavor, setMyFavor] = useState<FavoriteList>();
	useEffect(() => {
		getMyCourse();
	}, []);
	const getMyCourse = async () => {
		try {
			const mc = await CourseService.getUserCourses({
				page: 1,
				limit: 20,
			});
			const mw = await CourseService.getFavoriteList();
			const md = await CourseService.getUserDocs({ page: 1, limit: 20 });
			setMyCourses(mc.results);
			setMyDocs(md.results);
			setMyFavor(mw);
		} catch (error: any) {
			console.log('error.message :>> ', error.message);
		}
	};
	const onChange = (key: string) => {
		console.log(key);
	};

	const tabDataLearning: TypeTabPanel[] = [
		{
			id: uuidv4(),
			label: 'Khoá học của tôi',
			content: <MyCourseUI courses={myCourses || []} docs={myDocs || []} />,
			key: TabsKey.MY_COURSES,
		},
		{
			id: uuidv4(),
			label: 'Danh sách thích',
			content: <WishListUI favourite={myFavor || ({} as FavoriteList)} />,
			key: TabsKey.WISH_LIST,
		},
	];
	return (
		<div
			className="account-tab "
			css={css`
				padding: 20px;
			`}
		>
			<AppContext.Provider value={appContextValue}>
				<TabPaneSection
					tabData={tabDataLearning}
					title="Khoá học của tôi"
					activeKey={switchTabs}
				/>
			</AppContext.Provider>
		</div>
	);
};

export default MyLearning;
