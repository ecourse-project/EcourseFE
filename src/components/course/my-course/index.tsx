import { Divider, Empty, Spin, Typography } from 'antd';
import React, { useEffect } from 'react';
import { Course, Document } from 'src/lib/types/backend_modal';
import { antIcon } from 'src/lib/utils/animations';

import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import { LearningItem } from './learning-item';
import Skeleton from 'react-loading-skeleton';

const { Title } = Typography;
interface MyCourseUIProps {
  courses: Course[];
  docs: Document[];
  loading: boolean;
}

const MyCourseUI: React.FC<MyCourseUIProps> = (props) => {
  const { courses, docs, loading } = props;
  useEffect(() => {
    console.log('courses', courses);
  }, []);

  return (
    <div
      css={css`
        .list_item {
          margin: auto;
          display: flex;
          margin: auto;
          display: flex;
          flex-wrap: wrap;
          gap: 1.6rem 0;
          margin-left: -0.8rem;
          margin-right: -0.8rem;
          gap: 1.6rem 2rem;
          padding: 10px;
          justify-content: center;
        }
        .doc-title {
          font-size: 30px;
          font-weight: 500;
          text-decoration: overline;
          .anticon {
            vertical-align: baseline;
          }
        }
      `}
    >
      <div className="doc-title">
        <AppstoreAddOutlined />
        {'Tài liệu'}
      </div>
      <div className="course_list list_item">
        {loading ? (
          <>
            <MyCourseSkeleton />
            <MyCourseSkeleton />
            <MyCourseSkeleton />
          </>
        ) : docs.length ? (
          docs?.map((v, i) => {
            return <LearningItem doc={v} key={i} />;
          })
        ) : (
          <Empty />
        )}
      </div>
      <Divider />
      <div className="doc-title">
        <AppstoreAddOutlined />
        {'Khoá học'}
      </div>
      <div className="doc_list list_item">
        {loading ? (
          <>
            <MyCourseSkeleton />
            <MyCourseSkeleton />
            <MyCourseSkeleton />
          </>
        ) : courses.length ? (
          courses?.map((v, i) => {
            return <LearningItem course={v} key={i} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

const MyCourseSkeleton = () => {
  return (
    <div
      css={css`
        width: 25%;
        .btn-skeleton {
          display: flex;
          gap: 10px;
          .skeleton-item {
            width: 100%;
          }
          .react-loading-skeleton {
            width: 100%;
          }
        }
      `}
    >
      <div className="img-skeleton">
        <Skeleton containerClassName="skeleton-item" height={150} />
      </div>
      <div className="content-skeleton">
        <Skeleton containerClassName="skeleton-item" height={15} count={3} />
      </div>
      <div className="btn-skeleton">
        <Skeleton containerClassName="skeleton-item" height={25} />
        <Skeleton containerClassName="skeleton-item" height={25} />
      </div>
    </div>
  );
};

export default MyCourseUI;
