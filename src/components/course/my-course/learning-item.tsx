/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Card, Divider, Progress, Rate } from 'antd';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import RatingModal from 'src/components/modal/rating-modal';
import {
	Course,
	Document,
	RateCourseArgs,
	Rating,
	RatingEnum,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import RoutePaths from 'src/utils/routes';
interface LearningItem {
	course?: Course;
	doc?: Document;
}
enum ItemType {
	DOC = 'DOC',
	COURESE = 'COURSE',
}
const { Meta } = Card;

export const LearningItem: React.FC<LearningItem> = (props) => {
	const { course, doc } = props;
	const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
	const [feedback, setFeedback] = useState<string>('');
	const [star, setStar] = useState<number>(0);
	const [myRate, setMyRate] = useState<Rating>({} as Rating);
	const navigate = useNavigate();
	const rateCourse = async (
		course_id: string,
		rating: number,
		comment: string
	) => {
		try {
			if (rating === 1) rating = RatingEnum.ONE;
			if (rating === 2) rating = RatingEnum.TWO;
			if (rating === 3) rating = RatingEnum.THREE;
			if (rating === 4) rating = RatingEnum.FOUR;
			if (rating === 5) rating = RatingEnum.FIVE;

			const rate = await CourseService.rateCourse({
				course_id,
				rating,
				comment,
			} as RateCourseArgs);
			setMyRate(rate);
			course?.rating_detail?.push(rate);
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleSaveRating = () => {
		rateCourse(course?.id || '', star, feedback);
		setOpenRatingModal(false);
	};
	const handleLearn = (type) => {
		if (type === ItemType.COURESE)
			navigate(`${RoutePaths.COURSE_DETAIL}/?id=${course?.id}`);
		if (type === ItemType.DOC)
			navigate(`${RoutePaths.DOCUMENT_DETAIL}/?id=${doc?.id}`);
	};

	return (
		<>
			<RatingModal
				visible={openRatingModal}
				countStar={(value) => setStar(value)}
				onChangeFeedback={(value) => setFeedback(value)}
				onClose={() => setOpenRatingModal(false)}
				onSave={handleSaveRating}
				rated={isEmpty(myRate) ? course?.my_rating : myRate}
				defaultStar={star}
			/>
			{course ? (
				<div
					className="course_item"
					css={css`
						.ant-card {
							height: fit-content;
							width: 300px;
							cursor: default;
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
							&: hover {
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
					`}
				>
					<Card
						hoverable
						cover={<img alt="example" src={course?.thumbnail?.image_path} />}
					>
						<Meta title={course.name} />
						<div>Tên tác giả</div>
						<Progress percent={course.progress} showInfo={false} />
						<div className="extra">
							<span
								onClick={() => {
									handleLearn(ItemType.COURESE);
								}}
								className="status_text"
							>
								{course.progress === 100
									? 'Đã hoàn thành'
									: course.progress !== 0
									? `${course.progress}% đã hoàn thành`
									: 'Bắt đầu học'}
							</span>
							<span>
								<div>
									{Number(course?.my_rating?.rating) ? (
										<div
											className="rate"
											onClick={() => {
												setOpenRatingModal(true);
											}}
										>
											<div style={{ fontSize: '11px' }}>Đánh giá của bạn</div>
											<Rate
												defaultValue={course.my_rating?.rating || star}
												disabled={!!Number(course.rating)}
												onChange={(value) => {
													setStar(value);
													setOpenRatingModal(true);
												}}
												value={course.my_rating?.rating || star}
											/>
										</div>
									) : (
										<>
											<div style={{ fontSize: '11px' }}>
												Đánh giá trung bình{' '}
											</div>
											<Rate
												defaultValue={course.rating}
												disabled={true}
												value={course.rating}
											/>
										</>
									)}
								</div>
							</span>
						</div>
					</Card>
				</div>
			) : (
				''
			)}
			{doc ? (
				<div>
					{' '}
					<div
						className="course_item"
						css={css`
							.ant-card {
								height: fit-content;
								width: 300px;
								cursor: default;
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
								&: hover {
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
						`}
					>
						<Card
							hoverable
							cover={<img alt="example" src={doc?.thumbnail?.image_path} />}
						>
							<Meta title={doc.name} />
							<div>Tên tác giả</div>
							<Divider />
							{/* <Progress percent={course.progress} showInfo={false} /> */}
							<div className="extra">
								<span
									onClick={() => {
										handleLearn(ItemType.DOC);
									}}
									className="status_text"
								>
									{/* {course.progress === 100
										? 'Đã hoàn thành'
										: course.progress !== 0
										? `${course.progress}% đã hoàn thành`
										: 'Bắt đầu học'} */}
									Đọc tài liệu
								</span>
								<span>
									<div>
										{Number(doc?.my_rating?.rating) ? (
											<div
												className="rate"
												onClick={() => {
													setOpenRatingModal(true);
												}}
											>
												<div style={{ fontSize: '11px' }}>Đánh giá của bạn</div>
												<Rate
													defaultValue={doc.my_rating?.rating || star}
													disabled={!!Number(doc.rating)}
													onChange={(value) => {
														setStar(value);
														setOpenRatingModal(true);
													}}
													value={doc.my_rating?.rating || star}
												/>
											</div>
										) : (
											<>
												<div style={{ fontSize: '11px' }}>
													Đánh giá trung bình{' '}
												</div>
												<Rate
													defaultValue={doc.rating}
													disabled={true}
													value={doc.rating}
												/>{' '}
											</>
										)}
									</div>
								</span>
							</div>
						</Card>
					</div>
				</div>
			) : (
				''
			)}
		</>
	);
};