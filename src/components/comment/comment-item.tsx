import { Avatar, Tag, Tooltip } from 'antd';
import moment from 'moment';
import React, { useState } from 'react';
import { CourseComment, RoleEnum, User } from 'src/lib/types/backend_modal';

import { Comment } from '@ant-design/compatible';
import { UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import InfoModal from '../modal/info-modal';
import CommentForm from './comment-form';

interface CommentItemProps {
  item: CourseComment;
  onAddReply: (value) => void;
}

const ManagerTag = (
  <Tag
    css={css`
      color: #b50000 !important;
    `}
  >
    Manager
  </Tag>
);

const CommentItem: React.FC<CommentItemProps> = (props) => {
  const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
  const [infoDataState, setInfoDataState] = useState<{
    visible: boolean;
    data: User;
  }>({
    visible: false,
    data: {} as User,
  });
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
              color: #000 !important;
              letter-spacing: 0.7px;
            `}
          >
            {item?.user?.full_name}
            {'  '}
            {item?.user?.role === RoleEnum.MANAGER ? <span>{ManagerTag}</span> : <></>}
          </div>
        }
        avatar={
          <div
            onClick={() => {
              if (user.email === item.user.email) return;
              setInfoDataState({
                visible: true,
                data: item.user,
              });
            }}
          >
            <Avatar src={item?.user?.avatar || <UserOutlined />} alt="avatar" shape="square" />
          </div>
        }
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
                        color: #000 !important;
                        letter-spacing: 0.7px;
                      `}
                    >
                      {v?.user?.full_name}
                      {'  '}
                      {v?.user?.role === RoleEnum.MANAGER ? <span>{ManagerTag}</span> : <></>}
                    </div>
                  }
                  avatar={
                    <div
                      onClick={() => {
                        if (user.email === v.user.email) return;
                        setInfoDataState({
                          visible: true,
                          data: v.user,
                        });
                      }}
                    >
                      <Avatar src={v?.user?.avatar || <UserOutlined />} alt="avata" shape="square" />
                    </div>
                  }
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
      <InfoModal
        visible={infoDataState.visible}
        userInfo={infoDataState.data}
        onClose={function (): void {
          setInfoDataState({
            visible: false,
            data: {} as User,
          });
        }}
      />
    </div>
  );
};

export default CommentItem;
