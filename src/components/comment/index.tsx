import { Avatar, List, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { RootState } from 'src/lib/reducers/model';
import { CourseComment, Pagination, PaginationParams } from 'src/lib/types/backend_modal';

import { Comment } from '@ant-design/compatible';
import { UserOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import { CourseParams } from '../course/course-progress/course-progress';
import CustomPagination from '../order/pagination';
import CommentForm from './comment-form';
import CommentItem from './comment-item';

// interface CommentProps {
// 	onAddComment: (value) => void;
// 	handleReply: (value, item) => void;
// 	totalCmnt: number;
// }

const CommentSection: React.FC<{ course_class_id?: string }> = ({ course_class_id }) => {
  // const {  onAddComment, handleReply, totalCmnt } = props;
  const [comment, setComment] = useState<CourseComment[]>([]);
  const [totalCmt, setTotalCmt] = useState<number>(0);
  const params: CourseParams = useQueryParam();
  const userProfile = useSelector((state: RootState) => state.app.user);

  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 5,
  });
  const fetchComment = async (id: string, limit, page) => {
    try {
      const cmt: Pagination<CourseComment> = await CourseService.listComments(course_class_id || id, limit, page);
      cmt && setComment(cmt.results);
      setTotalCmt(cmt.count);
    } catch (error) {
      console.log('error get cmt', error);
    }
  };

  useEffect(() => {
    fetchComment(params.id, pagination.limit, pagination.page);
  }, [pagination]);
  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
  };

  const onAddComment = async (value) => {
    if (!value) return;
    try {
      const cmt = await CourseService.createComment('', params.id || '', userProfile.id, value);
      setPagination({ ...pagination, page: 1 });
      cmt && fetchComment(params.id, pagination.limit, pagination.page);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  const handleReply = async (content: string, item: CourseComment) => {
    try {
      const reply = await CourseService.createComment(item.id, params.id || '', userProfile.id, content);
      // setPagination({ ...pagination, page: 1 });
      reply && fetchComment(params.id, pagination.limit, pagination.page);
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
