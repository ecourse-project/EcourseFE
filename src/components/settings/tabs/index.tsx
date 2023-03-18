import Router from 'next/router';
import React, { useEffect } from 'react';
import isEqual from 'react-fast-compare';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { TypeTabPanel } from 'src/lib/types/commentType';
import RoutePaths from 'src/lib/utils/routes';
import LoginPage from 'src/pages/login';
import OrderUI from 'src/sections/order';
import MyLearning, { LearningTabsKey } from 'src/sections/Pages/MyLearning';
import { v4 as uuidv4 } from 'uuid';

/* eslint-disable react/display-name */
import { LogoutOutlined, SettingOutlined } from '@ant-design/icons';

import { TabPaneSettingsSection } from '../';
import ContactInfo from './ContactInfo';

export enum TabSettingKey {
  INFORMATION = 'INFORMATION',
  ORDER = 'ORDER',
  LOGOUT = 'LOGOUT',
  MY_LEARNING = 'MY_LEARNING',
}
interface AppContextOptions {
  switchTabs: string;
  setSwitchTabs: (tabskey: string) => void;
  switchSubTabs: string;
  setSwitchSubTabs: (tabskey: string) => void;
}

interface SettingParams {
  tab?: TabSettingKey;
  subtab?: LearningTabsKey;
}
export const SettingContext = React.createContext<AppContextOptions>({} as AppContextOptions);

const SettingTabs: React.FC<{ className?: string }> = React.memo(
  // eslint-disable-next-line react/prop-types
  ({ className }) => {
    const tabDataSetting: TypeTabPanel[] = [
      {
        id: uuidv4(),
        label: 'Hồ sơ cá nhân',
        icon: <SettingOutlined />,
        content: <ContactInfo />,
        key: TabSettingKey.INFORMATION,
      },
      {
        id: uuidv4(),
        label: 'Khoá học của tôi',
        icon: <SettingOutlined />,
        content: <MyLearning />,
        key: TabSettingKey.MY_LEARNING,
      },
      {
        id: uuidv4(),
        label: 'Đơn hàng',
        icon: <SettingOutlined />,
        content: <OrderUI />,
        key: TabSettingKey.ORDER,
      },
    ];

    const [switchTabs, setSwitchTabs] = React.useState<string>(TabSettingKey.INFORMATION);
    const [switchSubTabs, setSwitchSubTabs] = React.useState<string>(LearningTabsKey.MY_COURSES);
    const params = useQueryParam<SettingParams>();

    const appContextValue = {
      switchTabs,
      switchSubTabs,
      setSwitchSubTabs: (tabsKey: string) => {
        if (tabsKey === TabSettingKey.LOGOUT) return Router.push(`${RoutePaths.LOGOUT}`);
        Router.push(`${RoutePaths.SETTINGS}/?tab=${params.tab}&subtab=${tabsKey}`);
        setSwitchSubTabs(tabsKey);
      },
      setSwitchTabs: (tabsKey: string) => {
        if (tabsKey === TabSettingKey.LOGOUT) return Router.push(`${RoutePaths.LOGOUT}`);
        Router.push(`${RoutePaths.SETTINGS}/?tab=${tabsKey}`);
        setSwitchTabs(tabsKey);
      },
    };
    useEffect(() => {
      params?.tab && setSwitchTabs(params?.tab);
    }, []);
    return (
      <div className="">
        {/* <Card className={className ?? ''}> */}
        <SettingContext.Provider value={appContextValue}>
          <TabPaneSettingsSection tabData={tabDataSetting} activeKey={switchTabs || TabSettingKey.MY_LEARNING} />
        </SettingContext.Provider>
        {/* </Card> */}
      </div>
    );
  },
  isEqual,
);

export default SettingTabs;
