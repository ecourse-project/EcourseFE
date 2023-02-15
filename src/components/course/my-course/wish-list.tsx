import { Col, Divider, Empty } from 'antd';
import React from 'react';
import DocItem from 'src/components/document/doc-item';
import { FavoriteList } from 'src/lib/types/backend_modal';

import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import CourseItem from '../course-item';

interface WishListUIProps {
  favourite: FavoriteList;
}

const WishListUI: React.FC<WishListUIProps> = (props) => {
  const { favourite } = props;
  return (
    <div
      css={css`
        .list_item {
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
        {favourite?.documents?.length ? (
          favourite?.documents.map((v, i) => {
            return (
              <Col key={i}>
                <DocItem document={v} isMyLearn />
              </Col>
            );
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
        {favourite?.courses?.length ? (
          favourite?.courses.map((v, i) => {
            return (
              <Col key={i}>
                <CourseItem course={v} isMyLearn />
              </Col>
            );
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default WishListUI;
