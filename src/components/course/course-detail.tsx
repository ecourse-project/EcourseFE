/* eslint-disable react/prop-types */
import {
	CalendarOutlined,
	CheckCircleOutlined,
	ClockCircleOutlined,
	CloseCircleOutlined,
	ExclamationCircleOutlined,
	FileSearchOutlined,
	MinusCircleOutlined,
	MoreOutlined,
	PlusCircleOutlined,
	SwapOutlined,
	SyncOutlined,
	VerticalLeftOutlined,
} from '@ant-design/icons';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
	Avatar,
	Breadcrumb,
	Button,
	Col,
	Comment,
	Divider,
	Dropdown,
	Form,
	Image,
	List,
	Menu,
	PageHeader,
	Row,
	Statistic,
	Tag,
	Tooltip,
	Typography,
} from 'antd';
import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { useQueryParam } from 'src/hooks/useQueryParam';
import {
	CourseComment,
	Course,
	SaleStatusEnum,
	User,
} from 'src/models/backend_modal';
import { courseAction } from 'src/reducers/course/courseSlice';
import { RootState } from 'src/reducers/model';
import CourseService from 'src/services/course';
import { formatCurrencySymbol } from 'src/utils/currency';
import { formatDate } from 'src/utils/format';
import RoutePaths from 'src/utils/routes';
import CommentForm from '../comment';
import CommentItem from '../comment/comment-item';
import LessonItem from './course-progress/lesson-item';
const { Paragraph, Title } = Typography;

const menu = (
	<Menu
		items={[
			{
				key: '1',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.alipay.com/"
					>
						1st menu item
					</a>
				),
			},
			{
				key: '2',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.taobao.com/"
					>
						2nd menu item
					</a>
				),
			},
			{
				key: '3',
				label: (
					<a
						target="_blank"
						rel="noopener noreferrer"
						href="http://www.tmall.com/"
					>
						3rd menu item
					</a>
				),
			},
		]}
	/>
);

const DropdownMenu = () => (
	<Dropdown key="more" overlay={menu} placement="bottomRight">
		<Button
			type="text"
			icon={
				<MoreOutlined
					style={{
						fontSize: 20,
					}}
				/>
			}
		/>
	</Dropdown>
);

const separator = <SwapOutlined />;
const IconLink = ({ src, text }) => (
	<a className="example-link">
		<img className="example-link-icon" src={src} alt={text} />
		{text}
	</a>
);

const Content = ({ children, extraContent }) => (
	<Row>
		<div
			style={{
				flex: 1,
			}}
		>
			{children}
		</div>
		<div className="image">{extraContent}</div>
	</Row>
);

enum TagState {
	SUCCESS = 'SUCCESS',
	PROCESSING = 'PROCESSING',
	ERROR = 'ERROR',
	WARNING = 'WARNING',
	WAITING = 'WAITING',
	STOP = 'STOP',
}

const tags = (tagState: TagState, text: string) => {
	switch (tagState) {
		case TagState.SUCCESS:
			return (
				<Tag icon={<CheckCircleOutlined />} color="success">
					{text}
				</Tag>
			);
			break;
		case TagState.PROCESSING:
			return (
				<Tag icon={<SyncOutlined spin />} color="processing">
					{text}
				</Tag>
			);
			break;
		case TagState.ERROR:
			return (
				<Tag icon={<CloseCircleOutlined />} color="error">
					{text}
				</Tag>
			);
			break;
		case TagState.WARNING:
			return (
				<Tag icon={<ExclamationCircleOutlined />} color="warning">
					{text}
				</Tag>
			);
			break;
		case TagState.WAITING:
			return (
				<Tag icon={<ClockCircleOutlined />} color="default">
					{text}
				</Tag>
			);
			break;
		case TagState.STOP:
			return (
				<Tag icon={<MinusCircleOutlined />} color="default">
					{text}
				</Tag>
			);
			break;

		default:
			break;
	}
};

interface DocDetailParams {
	id: string;
}

const CourseDetail: React.FC = () => {
	const params: DocDetailParams = useQueryParam();
	const [course, setCourse] = useState<Course>({} as Course);
	const [loading, setLoading] = useState(false);
	const [comment, setComment] = useState<CourseComment[]>([]);
	const [replyTo, setReplyTo] = useState<User>({} as User);
	const [showReplyBox, setShowReplyBox] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	const listCourse = useAppSelector(
		(state: RootState) => state.course.listCourse.results
	);
	const userProfile = useAppSelector((state: RootState) => state.app.user);

	const fetchDocDetail = async (id: string) => {
		try {
			const course: Course = await CourseService.getCourseDetail(id);
			setCourse(course);
		} catch (error) {
			console.log('error get detail', error);
		}
	};

	const fetchComment = async (id: string) => {
		try {
			const cmt: CourseComment[] = await CourseService.listComments(id);
			cmt && setComment(cmt);
		} catch (error) {
			console.log('error get cmt', error);
		}
	};

	useEffect(() => {
		fetchDocDetail(params.id);
		fetchComment(params.id);
	}, []);

	useEffect(() => {
		const courseFinded = listCourse?.filter((v) => v.id === course.id)[0];
		courseFinded && setCourse(courseFinded);
	}, [listCourse]);

	const content = (
		<div className="content-wrapper">
			<div className="content-detail">
				<Title>{course?.name}</Title>
				<Paragraph>
					<FileSearchOutlined />
					{'  '}
					{course?.description}
				</Paragraph>
				<div>
					<CalendarOutlined />
					{`  Ngày cập nhật: ${formatDate(course?.modified)}`}
				</div>
			</div>
		</div>
	);
	const handleUpdateBtn = () => {
		if (course.sale_status !== SaleStatusEnum.BOUGHT) {
			setLoading(true);
			dispatch(courseAction.updateCart(course));
			setTimeout(() => {
				setLoading(false);
			}, 1000);
		}
	};

	const onAddComment = async (value) => {
		console.log(value);
		if (!value) return;
		const cmt = await CourseService.createComment(
			'',
			course.id,
			userProfile.id,
			value
		);
		cmt && fetchComment(params.id);
	};
	const handleReply = async (content: string, item: CourseComment) => {
		console.log('reply', item);
		console.log('reply content', content);
		const reply = await CourseService.createComment(
			item.id,
			course.id,
			userProfile.id,
			content
		);
		reply && fetchComment(params.id);
	};
	return (
		<div
			className="page-container"
			css={css`
				// max-width: 70%;
				text-align: left;
				.ant-breadcrumb {
					font-size: 20px;
					font-weight: 600;
				}

				.ant-btn-primary {
					width: 160px;
					height: 35px;
					border-radius: 2px;
					background-color: ${course.sale_status === SaleStatusEnum.AVAILABLE &&
					'#17a2b8'};
					background-color: ${course.sale_status === SaleStatusEnum.IN_CART &&
					'#ed5e68'};
					background-color: ${course.sale_status === SaleStatusEnum.PENDING &&
					'#6c757d'};
					background-color: ${course.sale_status === SaleStatusEnum.BOUGHT &&
					'#28a745'};
					border-color: unset;
					color: #fff;
					font-weight: 700;
					letter-spacing: 3px;
					height: 50px;
					border-radius: 4px;
					&:hover {
						letter-spacing: 6px;
						background-color: ${course.sale_status ===
							SaleStatusEnum.AVAILABLE && '#17a2b8'};
						background-color: ${course.sale_status === SaleStatusEnum.IN_CART &&
						'#ed5e68'};
						background-color: ${course.sale_status === SaleStatusEnum.PENDING &&
						'#6c757d'};
						background-color: ${course.sale_status === SaleStatusEnum.BOUGHT &&
						'#28a745'};
					}
					.anticon {
						vertical-align: inherit;
						font-size: 16px;
						font-weight: 700;
					}
				}
				.content-wrapper {
					font-size: 15px;
					.anticon {
						font-size: 25px;
					}
					.content-detail {
						border: 1px solid #000;
						border-left: none;
						border-right: none;
						padding: 20px 5px;
					}
				}
				a.ant-btn {
					padding-top: 8px !important;
				}
				.ant-page-header {
				}
				.course_info {
					height: 450px;
					margin: 10px 0;
					.ant-image {
						height: 450px;
						width: 100%;
						.thumbnail {
							height: 100%;
							border-radius: 10px;
						}
					}
					.lessons {
						max-height: 100%;
						overflow: auto;
					}
				}
				.list_lesson_header {
					text-align: center;
					font-size: 14px;
					font-weight: 550;
				}
				.list_lesson {
					padding: 0 15px;
				}
				@media (max-width: 992px) {
					.thumbnail_wrapper {
						display: none;
					}
				}
			`}
		>
			<Divider orientation="left">
				<Breadcrumb separator={<SwapOutlined />}>
					<Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
					<Breadcrumb.Item href={RoutePaths.COURSE}>Khoá học</Breadcrumb.Item>
					<Breadcrumb.Item href="">{course?.topic?.name}</Breadcrumb.Item>
				</Breadcrumb>
			</Divider>
			<PageHeader
				title={course?.topic?.name}
				className="site-page-header"
				// subTitle="This is a subtitle"
				tags={
					<>
						{tags(TagState.SUCCESS, `${course.sold} lượt mua`)}
						{tags(TagState.WAITING, 'Cập nhật gần đây')}

						{course.sale_status === SaleStatusEnum.PENDING &&
							tags(TagState.PROCESSING, 'Chờ thanh toán')}
						{course.sale_status === SaleStatusEnum.BOUGHT &&
							tags(TagState.SUCCESS, 'Đã mua')}
						{(course.sale_status === SaleStatusEnum.AVAILABLE ||
							course.sale_status === SaleStatusEnum.IN_CART) &&
							tags(TagState.ERROR, `Bán chạy của chủ đề ${course.topic}`)}
					</>
				}
				avatar={{
					src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
				}}
				extra={
					course.sale_status !== SaleStatusEnum.PENDING && [
						<Button
							key="1"
							type="primary"
							className="add-btn"
							loading={loading}
							onClick={handleUpdateBtn}
							href={
								course.sale_status === SaleStatusEnum.BOUGHT
									? `${RoutePaths.COURSE_PROGRESS}?id=${course.id}`
									: undefined
							}
							target="_self"
							disabled={loading}
						>
							{course.sale_status === SaleStatusEnum.AVAILABLE
								? 'THÊM'
								: course.sale_status === SaleStatusEnum.IN_CART
								? 'XOÁ'
								: course.sale_status === SaleStatusEnum.BOUGHT
								? 'VÀO HỌC'
								: ''}
							{course.sale_status === SaleStatusEnum.AVAILABLE ? (
								<PlusCircleOutlined />
							) : course.sale_status === SaleStatusEnum.IN_CART ? (
								<MinusCircleOutlined />
							) : course.sale_status === SaleStatusEnum.BOUGHT ? (
								<VerticalLeftOutlined />
							) : (
								''
							)}
						</Button>,
					]
				}
			>
				<Content extraContent={undefined}>{content}</Content>
				<Row className="course_info">
					<Col lg={12} md={0} className="thumbnail_wrapper">
						<Image
							className="thumbnail"
							src={course?.thumbnail?.image_path}
							preview={false}
						/>
					</Col>
					<Col lg={12} md={24} className="lessons">
						<p className="list_lesson_header">Các bài học trong khoá</p>
						<List
							className="list_lesson"
							itemLayout="horizontal"
							dataSource={course?.lessons}
							renderItem={(item) => (
								<LessonItem lesson={item} isCourseDetail={true} />
							)}
						/>
					</Col>
				</Row>
				<Statistic
					// title="GIÁ"
					value={formatCurrencySymbol(course?.price || 0, 'VND', true)}
					style={{
						marginLeft: '10px',
						fontWeight: 'bold',
					}}
				/>
			</PageHeader>

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
			<Comment
				avatar={
					<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
				}
				content={<CommentForm onAddComment={onAddComment} />}
			/>
		</div>
	);
};

export default CourseDetail;
// {
// 	actions: [<span key="comment-list-reply-to-0">Reply to</span>],
// 	author: 'Han Solo',
// 	avatar: 'https://joeschmoe.io/api/v1/random',
// 	content: (
// 		<p>
// 			We supply a series of design principles, practical patterns and high
// 			quality design resources (Sketch and Axure), to help people create their
// 			product prototypes beautifully and efficiently.
// 		</p>
// 	),
// 	datetime: (
// 		<Tooltip title="2016-11-22 11:22:33">
// 			<span>8 hours ago</span>
// 		</Tooltip>
// 	),
// },
