import { css } from '@emotion/react';
import { Col } from 'antd';
import React from 'react';
import DocItem from 'src/components/document/doc-item';
import { FavoriteList } from 'src/lib/types/backend_modal';
import CourseItem from '../course-item';

interface WishListUIProps {
  favourite: FavoriteList;
}

const WishListUI: React.FC<WishListUIProps> = (props) => {
  const { favourite } = props;
  return (
    <div
      css={css`
        width: fit-content;
        margin: auto;
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
          justify-content: space-evenly;
        }
      `}
    >
      <div className="course_list list_item">
        {favourite.courses &&
          favourite.courses.map((v, i) => {
            return (
              <Col key={i}>
                <CourseItem course={v} isMyLearn />
              </Col>
            );
          })}
      </div>
      <div className="doc_list list_item">
        {favourite.documents &&
          favourite.documents.map((v, i) => {
            return (
              <Col key={i}>
                <DocItem document={v} isMyLearn />
              </Col>
            );
          })}
      </div>
    </div>
  );
};

export default WishListUI;
