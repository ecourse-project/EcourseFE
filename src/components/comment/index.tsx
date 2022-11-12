/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Avatar, Comment, List, Row } from 'antd';
import { useEffect, useState } from 'react';
import { useAppSelector } from 'src/apps/hooks';
import { useQueryParam } from 'src/hooks/useQueryParam';
import {
	CourseComment,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import { RootState } from 'src/reducers/model';
import CourseService from 'src/services/course';
import { CourseParams } from '../course/course-progress/course-progress';
import CustomPagination from '../pagination';
import CommentForm from './comment-form';
import CommentItem from './comment-item';

// interface CommentProps {
// 	onAddComment: (value) => void;
// 	handleReply: (value, item) => void;
// 	totalCmnt: number;
// }

const CommentSection = () => {
	// const {  onAddComment, handleReply, totalCmnt } = props;
	const [comment, setComment] = useState<CourseComment[]>([]);
	const [totalCmt, setTotalCmt] = useState<number>(0);
	const params: CourseParams = useQueryParam();
	const userProfile = useAppSelector((state: RootState) => state.app.user);

	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 5,
	});
	const fetchComment = async (id: string, limit, page) => {
		try {
			const cmt: Pagination<CourseComment> = await CourseService.listComments(
				id,
				limit,
				page
			);
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
		console.log(value);
		if (!value) return;
		const cmt = await CourseService.createComment(
			'',
			params.id || '',
			userProfile.id,
			value
		);
		setPagination({ ...pagination, page: 1 });
		cmt && fetchComment(params.id, pagination.limit, pagination.page);
	};

	const handleReply = async (content: string, item: CourseComment) => {
		const reply = await CourseService.createComment(
			item.id,
			params.id || '',
			userProfile.id,
			content
		);
		// setPagination({ ...pagination, page: 1 });
		reply && fetchComment(params.id, pagination.limit, pagination.page);
	};
	return (
		<div
			css={css`
				.ant-tooltip-content {
					min-width: 280px;
				}
			`}
		>
			<Row className="comment_group">
				<div className="comment_list">
					<Comment
						avatar={
							<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
						}
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
									<CommentItem
										item={item}
										onAddReply={(value) => handleReply(value, item)}
									/>
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
