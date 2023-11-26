/* eslint-disable react/display-name */

import { Tabs } from 'antd';
import React, { PropsWithChildren } from 'react';
import isEqual from 'react-fast-compare';
import { TypeTabPanel } from 'src/lib/types/appType';

import { css } from '@emotion/react';

import { SettingContext } from './tabs';

const { TabPane } = Tabs;

interface TabPaneProps {
  className?: string;
  title?: string;
  activeKey?: string;
  btnAddDripCampaign?: () => void;
  tabData: Array<TypeTabPanel>;
  onChangeSwitchTabs?: (v) => void;
}

export const TabPaneSettingsSection: React.FC<TabPaneProps> = React.memo((props: PropsWithChildren<TabPaneProps>) => {
  const { children, className, tabData, title, activeKey, btnAddDripCampaign, onChangeSwitchTabs } = props;

  const { setSwitchTabs } = React.useContext(SettingContext);

  if (!tabData) return null;
  return (
    <div
      className={className ?? ''}
      css={css`
        margin-top: 15px;
        .flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 30px;
          .btn-add {
            width: 175px !important;
            background-color: #ffa535 !important;
          }
        }
        .title {
          .title-content {
            font-weight: 700;
            font-family: FiraSans;
            font-size: 32px;
          }
          .title-icon {
            font-size: 32px;
            font-family: 'Fa 300', sans-serif;
          }
        }
        .block {
          padding: 0 !important;
        }
        .ant-tabs {
          font-size: 16px;
          &.ant-tabs-card.ant-tabs-top > .ant-tabs-nav .ant-tabs-tab + .ant-tabs-tab {
            margin-left: 2px !important;
          }
          .ant-tabs-nav {
            /* border-bottom: 1px solid #00aaff; */
            .ant-tabs-nav-list {
              min-width: 200px;
              .ant-tabs-tab {
                background-color: transparent !important;
                border: none;
                padding: 10px 30px;
                border-radius: 0px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                display: flex;
                justify-content: flex-end;
                :hover {
                  background-color: #666666 !important;
                  .ant-tabs-tab-btn {
                    color: #fff;
                  }
                }
                &.ant-tabs-tab-active {
                  background-color: #666666 !important;
                  .ant-tabs-tab-btn {
                    color: #fff;
                  }
                }
                .ant-tabs-tab-btn {
                  cursor: pointer;
                  color: #222222;
                  font-size: 16px;
                  font-weight: 700;
                }
              }
            }
          }
        }
      `}
    >
      {title && (
        <div className="flex">
          <div className="title">
            <span className="title-content">{title}</span>
          </div>
        </div>
      )}
      <Tabs
        type="card"
        onChange={async (tabs) => {
          if (onChangeSwitchTabs) {
            onChangeSwitchTabs(tabs);
            return;
          }
          setSwitchTabs && setSwitchTabs(tabs);
        }}
        activeKey={activeKey}
        tabPosition={'left'}
      >
        {tabData?.map((v) => {
          return (
            <TabPane
              // tab={
              //   <span className="user-icon">
              //     {v.label}
              //     <span>{v.icon}</span>
              //   </span>
              // }
              tab={v.label}
              key={v.key}
            >
              {v.content}
            </TabPane>
          );
        })}
      </Tabs>
      {children}
    </div>
  );
}, isEqual);
