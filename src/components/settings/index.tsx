import { css } from '@emotion/react';
import { Tabs } from 'antd';
import React, { PropsWithChildren, ReactElement, ReactNode } from 'react';
import isEqual from 'react-fast-compare';

const { TabPane } = Tabs;
export type TypeTabPanel = {
	id: number;
	label: string;
	icon: string;
	content: ReactNode;
};
interface TabPaneProps<T> {
	className?: string;
	tabData: Array<T>;
}

// eslint-disable-next-line react/display-name
export const TabPaneSettingsSection = React.memo(
	<
		T extends { label: string; icon: string | ReactElement; content: ReactNode }
	>(
		props: PropsWithChildren<TabPaneProps<T>>
	) => {
		const { children, className, tabData } = props;

		if (!tabData) return null;
		return (
			<div
				className={className ?? ''}
				css={css`
					h1 {
						margin-bottom: 20px;
					}
					.ant-tabs {
						font-size: 16px;
						&.ant-tabs-card.ant-tabs-top
							> .ant-tabs-nav
							.ant-tabs-tab
							+ .ant-tabs-tab {
							margin-left: 4px !important;
						}
						.ant-tabs-nav {
							border-bottom: 1px solid #051d29;
							margin-bottom: 40px;
							.ant-tabs-nav-list {
								.ant-tabs-tab {
									background-color: transparent !important;
									border: none;
									padding: 10px 30px;
									border-radius: 0px;
									border-top-left-radius: 3px;
									border-top-right-radius: 3px;
									:hover {
									}
									&.ant-tabs-tab-active {
										background-color: #051d29 !important;
										.ant-tabs-tab-btn {
											color: #fff;
										}
									}
									.ant-tabs-tab-btn {
										cursor: pointer;
										color: #222222;
										font-size: 16px;
										font-weight: 300;
									}
								}
							}
						}
					}
					.user-icon {
						display: flex;
						align-items: center;
						flex: 1;
						font-weight: 500;
						> span {
							display: inline;
							margin-right: 10px;
							font-family: 'Fa 300', sans-serif;
							font-size: 24px;
							line-height: 1.2;
						}
					}
				`}
			>
				<Tabs type="card">
					{tabData.map((v, index) => {
						return (
							<TabPane
								tab={
									<span className="user-icon">
										{v.icon}
										{v.label}
									</span>
								}
								key={index}
							>
								{v.content}
							</TabPane>
						);
					})}
				</Tabs>
				{children}
			</div>
		);
	},
	isEqual
);
