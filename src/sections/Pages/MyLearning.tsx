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
import { SettingContext } from 'src/components/settings/tabs';

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
  const { switchSubTabs, setSwitchSubTabs } = React.useContext(SettingContext);
  const [loading, setLoading] = useState<boolean>(false);
  const [myCourses, setMyCourses] = useState<Course[]>();
  const [myDocs, setMyDocs] = useState<Document[]>();
  const [myFavor, setMyFavor] = useState<FavoriteList>();
  useEffect(() => {
    getMyCourse();
  }, []);
  const getMyCourse = async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  };
  const onChange = (key: string) => {
    console.log(key);
  };

  const tabDataLearning: TypeTabPanel[] = [
    {
      id: uuidv4(),
      label: 'Khoá học của tôi',
      content: <MyCourseUI courses={myCourses || []} docs={myDocs || []} loading={loading} />,
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
      <TabPaneSection tabData={tabDataLearning} title="Khoá học của tôi" activeKey={switchSubTabs} />
    </div>
  );
};

export default MyLearning;
