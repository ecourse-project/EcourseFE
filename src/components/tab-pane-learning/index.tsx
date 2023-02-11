/* eslint-disable react/display-name */

import { css } from '@emotion/react';
import { Tabs } from 'antd';
import React, { PropsWithChildren, ReactNode } from 'react';
import isEqual from 'react-fast-compare';
import { useDispatch } from 'react-redux';
import { TypeTabPanel } from 'src/lib/types/commentType';
import { SettingContext } from '../settings/tabs';

const { TabPane } = Tabs;

interface TabPaneProps {
  className?: string;
  title?: string;
  activeKey?: string;
  btnAddDripCampaign?: () => void;
  tabData: Array<TypeTabPanel>;
  onChangeSwitchTabs?: (v) => void;
}

const TabPaneSection = React.memo((props: PropsWithChildren<TabPaneProps>) => {
  const { children, className, tabData, title, activeKey, onChangeSwitchTabs } = props;

  const { switchSubTabs, setSwitchSubTabs } = React.useContext(SettingContext);

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
            /* margin-left: 4px !important; */
          }
          .ant-tabs-nav {
            border-bottom: 1px solid #051d29;
            width: 100%;
            .ant-tabs-nav-list {
              .ant-tabs-tab {
                background-color: transparent !important;
                border: none;
                padding: 10px 30px;
                border-radius: 0px;
                border-top-left-radius: 3px;
                border-top-right-radius: 3px;
                border-radius: 10px 10px 0 0;

                :hover {
                  background-color: transparent !important;
                  .ant-tabs-tab-btn {
                    color: #000;
                  }
                }
              }
              &.ant-tabs-tab-active {
                background-color: #fff !important;
                border-radius: 0.75em;
                cursor: pointer;
                /* height: 240px; */
                position: relative;
                /* background-color: #051d29 !important; */
                &::before {
                  background: linear-gradient(
                    45deg,
                    transparent 5%,
                    rgb(255, 215, 137) 50%,
                    transparent 99%
                  ) !important;
                  border-radius: inherit;
                  content: '';
                  inset: 0px;
                  opacity: 1;
                  position: absolute;
                  transition: opacity 400ms;
                  z-index: 0;
                }

                .ant-tabs-tab-btn {
                  color: red;
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
          setSwitchSubTabs && setSwitchSubTabs(tabs);
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
export default TabPaneSection;
