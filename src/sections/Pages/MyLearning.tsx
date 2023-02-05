import { css } from '@emotion/react';
import { Tabs } from 'antd';
import React, { useEffect, useState } from 'react';
import WishListUI from 'src/components/course/my-course/wish-list';
import { Course, Document, FavoriteList } from 'src/lib/types/backend_modal';
import CourseService from 'src/lib/api/course';
import { v4 as uuidv4 } from 'uuid';
import MyCourseUI from 'src/components/course/my-course';
import RoutePaths from 'src/lib/utils/routes';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { useRouter } from 'next/router';
import { TypeTabPanel } from 'src/lib/types/commentType';
import TabPaneSection from 'src/components/tab-pane-learning';
interface AppContextOptions {
  switchTabsLearning: string;
  setSwitchTabsLearning: (tabskey: string) => void;
}
export const LearningContext = React.createContext<AppContextOptions>({} as AppContextOptions);
interface MyLearnParams {
  tab?: string;
  subtab?: string;
}
export enum LearningTabsKey {
  MY_COURSES = 'MY_COURSES',
  WISH_LIST = 'WISH_LIST',
}
const MyLearning: React.FC = () => {
  const router = useRouter();
  const params: MyLearnParams = useQueryParam();
  const [switchTabsLearning, setSwitchTabsLearning] = React.useState<string>(LearningTabsKey.MY_COURSES);
  useEffect(() => {
    params.subtab && setSwitchTabsLearning(params?.subtab);
  }, []);
  const appContextValue = {
    switchTabsLearning,
    setSwitchTabsLearning: (tabsKey: string) => {
      router.push(`${RoutePaths.SETTINGS}/?tab=${params.tab}&subtab=${tabsKey}`);
      setSwitchTabsLearning(tabsKey);
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
      key: LearningTabsKey.MY_COURSES,
    },
    {
      id: uuidv4(),
      label: 'Danh sách thích',
      content: <WishListUI favourite={myFavor || ({} as FavoriteList)} />,
      key: LearningTabsKey.WISH_LIST,
    },
  ];
  return (
    <div
      className="account-tab "
      css={css`
        padding: 20px;
      `}
    >
      <LearningContext.Provider value={appContextValue}>
        <TabPaneSection tabData={tabDataLearning} title="Khoá học của tôi" activeKey={switchTabsLearning} />
      </LearningContext.Provider>
    </div>
  );
};

export default MyLearning;
