/* eslint-disable react/display-name */

import { css } from '@emotion/react';
import { Tabs } from 'antd';
import React, { PropsWithChildren, ReactNode } from 'react';
import isEqual from 'react-fast-compare';
import { useDispatch } from 'react-redux';
import { TypeTabPanel } from 'src/lib/types/commentType';
import { AppContext } from 'src/sections/Pages/MyLearning';

const { TabPane } = Tabs;

interface TabPaneProps {
  className?: string;
  title?: string;
  activeKey?: string;
  btnAddDripCampaign?: () => void;
  tabData: Array<TypeTabPanel>;
  onChangeSwitchTabs?: (v) => void;
}

export const TabPaneSettingsSection = React.memo((props: PropsWithChildren<TabPaneProps>) => {
  const { children, className, tabData, title, activeKey, btnAddDripCampaign, onChangeSwitchTabs } = props;

  const { setSwitchTabs } = React.useContext(AppContext);

  if (!tabData) return null;
  return (
    <div
      className={className ?? ''}
      css={css`
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
            margin-left: 4px !important;
          }
          .ant-tabs-nav {
            border-bottom: 1px solid #051d29;
            .ant-tabs-nav-list {
              .ant-tabs-tab {
                background-color: transparent !important;
                border: none;
                padding: 10px 30px;
                border-radius: 0px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                :hover {
                  background-color: #051d29 !important;
                  .ant-tabs-tab-btn {
                    color: #fff;
                  }
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
                  font-weight: 700;
                }
              }
            }
          }
          .past-orders-tab {
            overflow: inherit;
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
      >
        {tabData.map((v) => {
          return (
            <TabPane tab={v.label} key={v.key} className={v.label === 'Pass Orders' ? 'past-orders-tab' : ''}>
              {v.content}
            </TabPane>
          );
        })}
      </Tabs>
      {children}
    </div>
  );
}, isEqual);
