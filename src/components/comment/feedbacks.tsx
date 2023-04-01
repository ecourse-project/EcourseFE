import { Comment } from '@ant-design/compatible';
import { css } from '@emotion/react';
import { Avatar, Rate, Tooltip } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { CourseComment, Rating } from 'src/lib/types/backend_modal';
import CommentForm from './comment-form';

interface RatingItemProps {
  rateList: Rating[];
}
const FeedbackSection = (props: RatingItemProps) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const { rateList } = props;
  return (
    <>
      {rateList?.map((item, index) => {
        return (
          <div
            css={css`
              .ant-comment-content-author {
                flex-direction: column;
                gap: 10px;
              }
              .ant-comment-content-detail {
                padding: 15px 0;
              }
              .ant-comment-content-author-name {
                font-weight: 700;
              }
              .ant-rate {
                margin-right: 18px;
              }
              .ant-rate-star {
                margin: 0;
                width: 25px;
                color: #faad14;
              }
            `}
            key={index}
          >
            <Comment
              author={<>{item?.user?.full_name}</>}
              avatar={item?.user?.avatar || <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
              datetime={
                <>
                  {/* <Rate defaultValue={item.rating} disabled /> */}
                  <Tooltip title={moment(item.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}>
                    <span>{`${moment(item.created).toNow(true)} ago`}</span>
                  </Tooltip>
                </>
              }
              content={<div>{item.comment}</div>}
            />
          </div>
        );
      })}
    </>
  );
};

export default FeedbackSection;
