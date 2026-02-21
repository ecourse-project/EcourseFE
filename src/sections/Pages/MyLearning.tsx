import React, { useEffect, useState } from 'react';
import MyCourseUI from 'src/components/course/my-course';
import WishListUI from 'src/components/course/my-course/wish-list';
import { SettingContext } from 'src/components/settings/tabs';
import TabPaneSection from 'src/components/tab-pane-learning';
import CourseService from 'src/lib/api/course';
import { TypeTabPanel } from 'src/lib/types/appType';
import { Course, Document, FavoriteList } from 'src/lib/types/backend_modal';
import { v4 as uuidv4 } from 'uuid';

import { css } from '@emotion/react';

export enum LearningTabsKey {
  MY_COURSES = 'MY_COURSES',
  WISH_LIST = 'WISH_LIST',
}
const MyLearning: React.FC = () => {
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
