import { Avatar, List, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { RootState } from 'src/lib/reducers/model';
import { CourseComment, Pagination, PaginationParams } from 'src/lib/types/backend_modal';

import { Comment } from '@ant-design/compatible';
import { UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import { useRouter } from 'next/router';
import CustomPagination from '../order/pagination';
import CommentForm from './comment-form';
import CommentItem from './comment-item';

const CommentSection: React.FC = () => {
  const [comment, setComment] = useState<CourseComment[]>([]);
  const [totalCmt, setTotalCmt] = useState<number>(0);
  const userProfile = useSelector((state: RootState) => state.app.user);
  const router = useRouter();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 1000,
  });
  const fetchComment = async (id: string, limit, page) => {
    try {
      const cmt: Pagination<CourseComment> = await CourseService.listComments(id, limit, page);
      cmt && setComment(cmt.results);
      setTotalCmt(cmt.count);
    } catch (error) {
      console.log('error get cmt', error);
    }
  };

  useEffect(() => {
    console.log('router.query?.id?.toString() :==>>', router.query?.id?.toString());
    fetchComment(router.query?.id?.toString() || '', pagination.limit, pagination.page);
  }, [pagination]);
  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
  };

  const onAddComment = async (value) => {
    if (!value) return;
    try {
      const cmt = await CourseService.createComment('', router.query?.id?.toString() || '', userProfile.id, value);
      setPagination({ ...pagination, page: 1 });
      cmt && fetchComment(router.query?.id?.toString() || '', pagination.limit, pagination.page);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const handleReply = async (content: string, item: CourseComment) => {
    try {
      const reply = await CourseService.createComment(
        item.id,
        router.query?.id?.toString() || '',
        userProfile.id,
        content,
      );
      // setPagination({ ...pagination, page: 1 });
      reply && fetchComment(router.query?.id?.toString() || '', pagination.limit, pagination.page);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  return (
    <div
      css={css`
        .comment_list {
          width: 100%;
        }
        .ant-tooltip-content {
          min-width: 280px;
        }
        img {
          border-radius: 0px !important;
        }
      `}
    >
      <Row className="comment_group">
        <div className="comment_list">
          <Comment
            avatar={<Avatar src={userProfile?.avatar || <UserOutlined />} alt="avatar" shape="square" />}
            content={<CommentForm onAddComment={onAddComment} />}
          />
          {comment?.length ? (
            <List
              className="comment-list"
              header={`${comment.length} replies`}
              itemLayout="horizontal"
              dataSource={comment}
              renderItem={(item) => (
                <li>
                  <CommentItem item={item} onAddReply={(value) => handleReply(value, item)} />
                </li>
              )}
            />
          ) : (
            <div></div>
          )}
        </div>
        <div
          css={css`
            text-align: center;
          `}
        >
          <CustomPagination
            current={pagination.page}
            pageSize={pagination.limit}
            total={totalCmt}
            showSizeChanger={false}
            onChange={onChangePage}
          />
        </div>
      </Row>
    </div>
  );
};

export default CommentSection;
