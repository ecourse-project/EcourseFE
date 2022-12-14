import { css } from '@emotion/react';
import { Avatar, Comment, Tooltip } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { CourseComment } from 'src/lib/types/backend_modal';
import CommentForm from './comment-form';

interface CommentItemProps {
  item: CourseComment;
  onAddReply: (value) => void;
}
const CommentItem: React.FC<CommentItemProps> = (props) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const { item, onAddReply } = props;
  return (
    <div
      css={css`
        .ant-tooltip-content {
          min-width: max-content;
        }
      `}
    >
      <Comment
        actions={[
          <span
            key="comment-list-reply-to-0"
            onClick={() => {
              setShowReplyBox(!showReplyBox);
            }}
          >
            {`Reply to ${item?.user?.full_name}`}
          </span>,
        ]}
        author={item?.user?.full_name}
        avatar={item?.user?.avatar || <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        content={
          <div>
            {item.content}
            {showReplyBox && (
              <CommentForm
                onAddComment={(value) => {
                  if (value) onAddReply(value);
                  setShowReplyBox(false);
                }}
              />
            )}
          </div>
        }
        datetime={
          <Tooltip title={moment(item.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}>
            <span>{`${moment(item.created).toNow(true)} ago`}</span>
          </Tooltip>
        }
      >
        {item.reply_comments.length !== 0
          ? item.reply_comments.map((v, i) => {
              return (
                <Comment
                  key={i}
                  author={v?.user?.full_name}
                  avatar={v?.user?.avatar || <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
                  content={<div>{v.content}</div>}
                  datetime={
                    <Tooltip title={moment(v.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}>
                      <span>{`${moment(v.created).toNow(true)} ago`}</span>
                    </Tooltip>
                  }
                />
              );
            })
          : ''}
      </Comment>
    </div>
  );
};

export default CommentItem;
