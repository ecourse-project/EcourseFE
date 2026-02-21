import { Card, Divider, Progress } from 'antd';
import { useRouter } from 'next/router';
import React from 'react';
import { Course, Document } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import styled from '@emotion/styled';

interface LearningItem {
  course?: Course;
  doc?: Document;
}
enum ItemType {
  DOC = 'DOC',
  COURESE = 'COURSE',
}
const { Meta } = Card;

const ItemWrapper = styled.div`
  .ant-card {
    height: fit-content;
    width: 260px;
    cursor: pointer;
  }
  .ant-card-body {
    padding: 10px;
  }
  .ant-card-meta {
    height: 55px;
  }
  .ant-card-meta-title {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: unset;
    font-size: 15px;
  }
  .ant-card-cover img {
    border-radius: 3px;
  }
  .ant-progress-bg {
    height: 5px !important;
  }
  img {
    width: 99%;
    height: 250px;
    margin: auto;
  }
  .extra {
    display: flex;
    justify-content: space-between;
    .ant-rate {
      font-size: 14px;
      color: #ffa900;
    }
  }
  .status_text {
    font-weight: 500;
    &:hover {
      font-weight: 700;
      color: #ffa900;
      cursor: pointer;
    }
  }
  .rate {
    cursor: pointer;
    .anticon-star {
      cursor: pointer;
    }
  }
`;

export const LearningItem: React.FC<LearningItem> = (props) => {
  const { course, doc } = props;
  const router = useRouter();
  const handleLearn = (type) => {
    if (type === ItemType.COURESE) router.push(`${RoutePaths.COURSE}/${course?.id}`);
    if (type === ItemType.DOC) router.push(`${RoutePaths.DOCUMENT}/${doc?.id}`);
  };

  return (
    <>
      {course ? (
        <ItemWrapper>
          <Card
            hoverable
            cover={<img alt="example" src={course?.thumbnail?.image_path} />}
            onClick={() => {
              handleLearn(ItemType.COURESE);
            }}
          >
            <Meta title={course.name} />
            <div>Tên tác giả</div>
            <Progress percent={course.progress} showInfo={false} />
            <div className="extra">
              <span className="status_text">
                {course.progress === 100
                  ? 'Đã hoàn thành'
                  : course.progress !== 0
                  ? `${course.progress}% đã hoàn thành`
                  : 'Bắt đầu học'}
              </span>
            </div>
          </Card>
        </ItemWrapper>
      ) : (
        ''
      )}
      {doc ? (
        <ItemWrapper>
          <Card
            hoverable
            cover={<img alt="example" src={doc?.thumbnail?.image_path} />}
            onClick={() => {
              handleLearn(ItemType.DOC);
            }}
          >
            <Meta title={doc.name} />
            <div>Tên tác giả</div>
            <Divider />
            <div className="extra">
              <span className="status_text">Đọc tài liệu</span>
              <span></span>
            </div>
          </Card>
        </ItemWrapper>
      ) : (
        ''
      )}
    </>
  );
};
