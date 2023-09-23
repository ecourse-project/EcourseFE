import { Avatar, Tag, Tooltip } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { CourseComment, RoleEnum } from 'src/lib/types/backend_modal';

import { Comment } from '@ant-design/compatible';
import { UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import CommentForm from './comment-form';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';

interface CommentItemProps {
  item: CourseComment;
  onAddReply: (value) => void;
}
const CommentItem: React.FC<CommentItemProps> = (props) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.app.user);
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
        author={
          <div
            css={css`
              font-size: 13px;
              font-weight: 700;
              color: ${user?.role === RoleEnum.MANAGER ? '#b50000 !important' : ''};
              letter-spacing: 0.7px;
            `}
          >
            {item?.user?.full_name}
            {'  '}
            {user?.role === RoleEnum.MANAGER ? (
              <span>
                <Tag>Manager</Tag>
              </span>
            ) : (
              <></>
            )}
          </div>
        }
        // avatar={item?.user?.avatar || <Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />}
        // avatar={<Avatar src="https://i.pravatar.cc/300" alt="Han Solo" />}
        avatar={<Avatar src={<UserOutlined />} alt="avata" shape="square" />}
        content={
          <pre>
            {item.content}
            {showReplyBox && (
              <CommentForm
                onAddComment={(value) => {
                  if (value) onAddReply(value);
                  setShowReplyBox(false);
                }}
              />
            )}
          </pre>
        }
        datetime={
          <Tooltip title={moment(item.created).format('dddd, MMMM Do YYYY, h:mm:ss a')}>
            <span>{`${moment(item.created).toNow(true)} ago`}</span>
          </Tooltip>
        }
      >
        {item.reply_comments.length !== 0
          ? item.reply_comments?.map((v, i) => {
              return (
                <Comment
                  key={i}
                  // author={v?.user?.full_name}
                  author={
                    <div
                      css={css`
                        font-size: 13px;
                        font-weight: 700;
                        color: ${user?.role === RoleEnum.MANAGER ? '#b50000 !important' : ''};
                        letter-spacing: 0.7px;
                      `}
                    >
                      {v?.user?.full_name}
                      {'  '}
                      {v?.user?.role === RoleEnum.MANAGER ? (
                        <span>
                          <Tag>Manager</Tag>
                        </span>
                      ) : (
                        <></>
                      )}
                    </div>
                  }
                  // avatar={v?.user?.avatar || <Avatar src="https://i.pravatar.cc/300" alt="Han Solo" />}
                  avatar={<Avatar src={<UserOutlined />} alt="avata" shape="square" />}
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
