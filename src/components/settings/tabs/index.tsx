/* eslint-disable react/display-name */
import { SettingOutlined } from '@ant-design/icons';
import { Card } from 'antd';
import React from 'react';
import isEqual from 'react-fast-compare';
import { v4 as uuidv4 } from 'uuid';
import { TabPaneSettingsSection } from '..';
import ContactInfo from './ContactInfo';

const SettingTabs: React.FC<{ className?: string }> = React.memo(
	// eslint-disable-next-line react/prop-types
	({ className }) => {
		const tabDataSetting = [
			{
				id: uuidv4(),
				label: 'Cài đặt',
				icon: <SettingOutlined />,
				content: <ContactInfo />,
			},
		];

		return (
			<div className="page-container">
				{/* <Card className={className ?? ''}> */}
				<TabPaneSettingsSection tabData={tabDataSetting} />
				{/* </Card> */}
			</div>
		);
	},
	isEqual
);

export default SettingTabs;
