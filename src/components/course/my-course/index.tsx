import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Divider, Empty, Spin } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;
import React, { useEffect } from 'react';
import { Course, Document } from 'src/lib/types/backend_modal';
import { antIcon } from 'src/lib/utils/animations';
import { LearningItem } from './learning-item';
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
          <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin indicator={antIcon} />
          </div>
        ) : courses.length ? (
          courses.map((v, i) => {
            return <LearningItem course={v} key={i} />;
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
          <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Spin indicator={antIcon} />
          </div>
        ) : docs.length ? (
          docs.map((v, i) => {
            return <LearningItem doc={v} key={i} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default MyCourseUI;
