import { Avatar, Comment, Tooltip } from 'antd';
import React, { useState } from 'react';
import { CourseComment } from 'src/models/backend_modal';
import CommentForm from '.';

interface CommentItemProps {
	item: CourseComment;
	onAddReply: (value) => void;
}
const CommentItem: React.FC<CommentItemProps> = (props) => {
	const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
	const { item, onAddReply } = props;
	return (
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
			avatar={
				item?.user?.avatar || (
					<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
				)
			}
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
				<Tooltip title="2016-11-22 11:22:33">
					<span>8 hours ago</span>
				</Tooltip>
			}
		>
			{item.reply_comments.length !== 0
				? item.reply_comments.map((v, i) => {
						return (
							<Comment
								key={i}
								author={v?.user?.full_name}
								avatar={
									v?.user?.avatar || (
										<Avatar
											src="https://joeschmoe.io/api/v1/random"
											alt="Han Solo"
										/>
									)
								}
								content={<div>{v.content}</div>}
								datetime={
									<Tooltip title="2016-11-22 11:22:33">
										<span>8 hours ago</span>
									</Tooltip>
								}
							/>
						);
				  })
				: ''}
		</Comment>
	);
};

export default CommentItem;
