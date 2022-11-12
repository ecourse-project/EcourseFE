/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Tabs } from 'antd';
import TabPane from 'antd/lib/tabs/TabPane';
import React, { useEffect, useState } from 'react';
import WishListUI from 'src/components/course/my-course/wish-list';
import { Course } from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import { TypeTabPanel } from './MyAcount';

const MyCourseUI = () => {
	const [myCourses, setMyCourses] = useState<Course[]>();
	useEffect(() => {
		getMyCourse();
	}, []);
	const getMyCourse = async () => {
		const mc = await CourseService.getUserCourses({
			page: 1,
			limit: 20,
		});
		console.log('mc zz', mc);
		setMyCourses(mc.results);
	};
	const onChange = (key: string) => {
		console.log(key);
	};
	enum TabsKey {
		MY_COURSE = 'MY_COURSE',
		WISH_LIST = 'WISH_LIST',
	}
	const tabDataCampaigns: TypeTabPanel[] = [
		{
			id: uuidv4(),
			label: 'Khoá học của tôi',
			content: <MyCourseUI />,
			key: TabsKey.MY_COURSE,
		},
		{
			id: uuidv4(),
			label: 'Cài đặt',
			content: <WishListUI />,
			key: TabsKey.WISH_LIST,
		},
	];
	return (
		<div
			className="account-tab page-container"
			css={css`
				padding: 20px;
			`}
		>
			<Tabs type="card">
				{tabDataCampaigns.map((v) => {
					return (
						<TabPane
							tab={v.label}
							key={v.key}
							className={v.label === 'Pass Orders' ? 'past-orders-tab' : ''}
						>
							{v.content}
						</TabPane>
					);
				})}
			</Tabs>
		</div>
	);
};

export default MyCourseUI;
function uuidv4(): number {
	throw new Error('Function not implemented.');
}
