import { Tabs } from 'antd';
import React, { ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
const { TabPane } = Tabs;
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import MyDoc from './mydoc';
export type TypeTabPanel = {
	id: number;
	label: string;
	content: ReactNode | string;
	key: string;
};
enum TabsKey {
	CAMPAIGNS_FORM = 'CAMPAIGNS_FORM',
	PAST_ORDERS = 'PAST_ORDERS',
}

const MyAcount: React.FC = () => {
	const onChange = (key: string) => {
		console.log(key);
	};
	const tabDataCampaigns: TypeTabPanel[] = [
		{
			id: uuidv4(),
			label: 'Khoá học của tôi',
			content: <MyDoc />,
			key: TabsKey.CAMPAIGNS_FORM,
		},
		{
			id: uuidv4(),
			label: 'Cài đặt',
			// content: <PastOrdersUI isLoading={isLoading} />,
			content: 'edf',
			key: TabsKey.PAST_ORDERS,
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

export default MyAcount;
