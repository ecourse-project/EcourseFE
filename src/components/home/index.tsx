import { Card, Col, Spin } from 'antd';
import * as React from 'react';
import CourseService from 'src/lib/api/course';
import { Course, Document, Homepage, Pagination, Post } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';

import { Loading3QuartersOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import CourseItem from '../course/course-item';
import DocItem from '../document/doc-item';
import { DocCourseWrapper } from '../document/style';
import HomeTopicCard from './homeTopicCard';

export interface IHomeData {
  homeData: Homepage;
}
const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

export default function HomeData(props: IHomeData) {
  const { homeData } = props;
  const [loading, setLoading] = React.useState<boolean>(false);
  const [listDoc, setListDoc] = React.useState<Pagination<Document>>();
  const [listCourse, setListCourse] = React.useState<Pagination<Course>>();
  const [listClass, setListClass] = React.useState<Pagination<Course>>();
  const [listPost, setListPost] = React.useState<Pagination<Post>>();

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

  const getHomeData = async (listId, type: 'doc' | 'course' | 'class' | 'post') => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);

      switch (type) {
        case 'doc':
          if (!token) {
            const fetchedData = await CourseService.getHomeDocs({ page: 1, limit: 100 }, '', listId);
            setListDoc(fetchedData);
          } else {
            const fetchedData = await CourseService.getAllDocs({ page: 1, limit: 100 }, '', listId);
            setListDoc(fetchedData);
          }
          break;
        case 'course':
          if (!token) {
            const fetchedData = await CourseService.getHomeCourses({ page: 1, limit: 100 }, '', listId);
            setListCourse(fetchedData);
          } else {
            const fetchedData = await CourseService.getAllCourses({ page: 1, limit: 100 }, '', listId);
            setListCourse(fetchedData);
          }
          break;
        case 'class':
          if (!token) {
            const fetchedData = await CourseService.getHomeClasses(100, 1, '', listId);
            setListClass(fetchedData);
          } else {
            const fetchedData = await CourseService.listClasses(100, 1, '', listId);
            setListClass(fetchedData);
          }
          break;
        case 'post':
          const fetchedData = await CourseService.listPosts(100, 1, '', '', listId);
          setListPost(fetchedData);
          break;
        default:
          console.log(`new type`);
      }
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    homeData?.detail?.document_id && getHomeData(homeData?.detail?.document_id, 'doc');
    homeData?.detail?.course_id && getHomeData(homeData?.detail?.course_id, 'course');
    homeData?.detail?.class_id && getHomeData(homeData?.detail?.class_id, 'class');
    homeData?.detail?.post_id && getHomeData(homeData?.detail?.post_id, 'post');
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
        .ant-card-head-title {
          font-weight: 700;
        }
      `}
    >
      <Card
        title={homeData.topic}
        extra={
          <a href="#">
            <UnorderedListOutlined />
            Xem tất cả
            {process.env.ECOURSE_API_URL}
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

              {listClass?.results?.length ? (
                listClass?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <CourseItem course={e} />
                    </Col>
                  );
                })
              ) : (
                <></>
              )}

              {listPost?.results?.length ? (
                listPost?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <HomeTopicCard post={e} />
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
