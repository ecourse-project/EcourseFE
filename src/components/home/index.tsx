import { Card, Col, Spin } from 'antd';
import * as React from 'react';
import CourseService from 'src/lib/api/course';
import { Course, Document, Homepage, Pagination } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';

import { AppstoreAddOutlined, Loading3QuartersOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import CourseItem from '../course/course-item';
import DocItem from '../document/doc-item';
import { DocCourseWrapper } from '../document/style';

export interface IHomeData {
  homeData: Homepage;
}
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

export default function HomeData(props: IHomeData) {
  const { homeData } = props;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listDoc, setListDoc] = React.useState<Pagination<Document>>();
  const [listCourse, setListCourse] = React.useState<Pagination<Course>>();

  const getDocumentList = async (idList: string[]) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);
      if (!token) {
        const docs = await CourseService.getHomeDocs({ page: 1, limit: 100 }, '', idList);
        setListDoc(docs);
      } else {
        const docs = await CourseService.getAllDocs({ page: 1, limit: 100 }, '', idList);
        setListDoc(docs);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  const getCourseList = async (idList: string[]) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);
      if (!token) {
        const docs = await CourseService.getHomeCourses({ page: 1, limit: 100 }, '', idList);
        setListCourse(docs);
      } else {
        const docs = await CourseService.getAllCourses({ page: 1, limit: 100 }, '', idList);
        setListCourse(docs);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  React.useEffect(() => {
    homeData?.detail?.document_id && getDocumentList(homeData?.detail?.document_id);
    homeData?.detail?.course_id && getCourseList(homeData?.detail?.course_id);
  }, [homeData]);
  return (
    <div
      css={css`
        margin-bottom: 10px;
        .title {
          font-size: 14px;
          font-weight: 700;
          text-decoration: underline;
        }
      `}
    >
      {/* <AppstoreAddOutlined /> */}
      <Card
        title={homeData.topic}
        extra={
          <a href="#">
            <UnorderedListOutlined />
            Xem tất cả
          </a>
        }
      >
        {loading ? (
          <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin indicator={antIcon} />
          </div>
        ) : (
          <>
            <DocCourseWrapper>
              {listDoc?.results?.length ? (
                listDoc?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <DocItem document={e} />
                    </Col>
                  );
                })
              ) : (
                <></>
              )}
            </DocCourseWrapper>
            <DocCourseWrapper>
              {listCourse?.results?.length ? (
                listCourse?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <CourseItem course={e} />
                    </Col>
                  );
                })
              ) : (
                <></>
              )}
            </DocCourseWrapper>
          </>
        )}
      </Card>
    </div>
  );
}
