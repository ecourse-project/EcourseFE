import {
	Avatar,
	Col,
	Comment,
	CommentProps,
	List,
	Popover,
	Progress,
	Row,
} from 'antd';
import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
/** @jsxImportSource @emotion/react */
import { DownOutlined, PlayCircleOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Collapse } from 'antd';
import _ from 'lodash';
import ReactPlayer from 'react-player';
import {
	Link,
	UNSAFE_NavigationContext,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { useQueryParam } from 'src/hooks/useQueryParam';
import {
	Course,
	CourseComment,
	CourseDocument,
	Lesson,
	OFileUpload,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import RoutePaths from 'src/utils/routes';
// pdfjs.GlobalWorkerOptions.workerSrc = `/path/to/your/worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
// Import the main component

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import { useAppSelector } from 'src/apps/hooks';
import CommentForm from 'src/components/comment';
import CommentItem from 'src/components/comment/comment-item';
import { RootState } from 'src/reducers/model';
import PdfViewer from '../../pdf';
import reducer, {
	CourseProgressAction,
	CourseProgressContextType,
	initialState,
} from './context/reducer';
import LessonItem from './lesson-item';

import { History } from 'history';
import { Beforeunload } from 'react-beforeunload';
import history from 'history/browser';
import CustomPagination from 'src/components/pagination';

const { Panel } = Collapse;
interface CourseParams {
	id: string;
	lesson?: string;
	video?: string;
	doc?: string;
}

export const CourseProgressContext = createContext<{
	state: CourseProgressContextType;
	dispatch: React.Dispatch<any>;
}>({ state: initialState, dispatch: () => null });

const CourseProgress = () => {
	const [state, dispatch] = useReducer(reducer, initialState);

	const [course, setCourse] = useState<Course>();
	const [selectItemVideo, setSelectItemVideo] = useState<OFileUpload>();
	const [selectItemDoc, setSelectItemDoc] = useState<CourseDocument>();
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [comment, setComment] = useState<CourseComment[]>([]);
	const [totalCmt, setTotalCmt] = useState<number>(0);
	const params: CourseParams = useQueryParam();
	const userProfile = useAppSelector((state: RootState) => state.app.user);

	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 5,
	});
	const navigator = React.useContext(UNSAFE_NavigationContext)
		.navigator as History;

	const [states, setStates] = React.useState<string>(window.location.pathname);

	const location = useLocation();
	const navigate = useNavigate();
	const navigation = useContext(UNSAFE_NavigationContext).navigator as History;
	// React.useLayoutEffect(() => {
	// 	// if (navigation) {
	// 	// 	navigation.listen((locationListener: Update) =>
	// 	// 		setStates(locationListener?.location?.pathname)
	// 	// 	);
	// 	// }
	// 	unlisten();
	// }, [location]);
	// const unlisten = () => {
	// 	console.log('enter listen');
	// 	history.listen(({ action, location }) => {
	// 		console.log(
	// 			`The current URL is ${location.pathname}${location.search}${location.hash}`
	// 		);
	// 		console.log(`The last navigation action was ${action}`);
	// 	});
	// };
	const onChangePage = (page: number) => {
		setPagination({ ...pagination, page });
		// navigate(`${RoutePaths.DOCUMENT}/?page=${page}`);
	};
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

	const onAddComment = async (value) => {
		console.log(value);
		if (!value) return;
		const cmt = await CourseService.createComment(
			'',
			course?.id || '',
			userProfile.id,
			value
		);
		setPagination({ ...pagination, page: 1 });
		cmt && fetchComment(params.id, pagination.limit, pagination.page);
	};
	const handleReply = async (content: string, item: CourseComment) => {
		const reply = await CourseService.createComment(
			item.id,
			course?.id || '',
			userProfile.id,
			content
		);
		// setPagination({ ...pagination, page: 1 });
		reply && fetchComment(params.id, pagination.limit, pagination.page);
	};
	const getCourseDetail = async (id: string) => {
		const courseDetail = await CourseService.getCourseDetail(id);
		setCourse(courseDetail);

		courseDetail.lessons &&
			dispatch({
				type: CourseProgressAction.SET_SELECTED_VIDEO,
				payload: courseDetail.lessons[0].videos[0],
			});
	};
	useEffect(() => {
		getCourseDetail(params.id);
		fetchComment(params.id, pagination.limit, pagination.page);
	}, []);

	useEffect(() => {
		const url =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname;
		const videoId = state.selectedVideo?.id;
		const docId = state.selectedDoc?.file?.id;
		const newUrl = videoId
			? `${url}?id=${params.id}&lesson=${state.currentLesson}&video=${videoId}`
			: docId
			? `${url}?id=${params.id}&lesson=${state.currentLesson}&doc=${docId}`
			: `${url}?id=${params.id}`;
		if (docId || videoId)
			window.history.pushState({ path: newUrl }, '', newUrl);
	}, [state]);

	useEffect(() => {
		//reload current watch
		const lesson: Lesson | undefined = course
			? course?.lessons?.filter((v) => v.id === params?.lesson)[0]
			: undefined;
		if (params.video) {
			const selected = lesson?.videos?.filter((v) => v.id === params.video)[0];
			dispatch({
				type: CourseProgressAction.SET_COMPLETE_VIDEO,
				payload: selected,
			});
		} else if (params.doc) {
			const selected = lesson?.documents?.filter(
				(v) => v.file.id === params.doc
			)[0];
			console.log('select', selected);
			dispatch({
				type: CourseProgressAction.SET_SELECTED_DOC,
				payload: selected,
			});
		}
		//update checked
		// const vidChecked = lesson?.videos.filter(
		// 	(v) =>
		// 		course &&
		// 		course?.videos_completed &&
		// 		course?.videos_completed?.indexOf(v?.id) > -1
		// );
		// setCheckedVideo(vidChecked?.map((v) => v.id) || []);

		// const docChecked = lesson?.documents.filter(
		// 	(v) =>
		// 		course &&
		// 		course?.docs_completed &&
		// 		course?.docs_completed?.indexOf(v?.id) > -1
		// );
		// setCheckedDoc(docChecked?.map((v) => v.file.id) || []);
	}, [course]);
	// useEffect(() => {
	// 	window.onbeforeunload = function (e) {
	// 		const dialogText = 'Nguyn hoang utan cuong';
	// 		e.returnValue = dialogText;
	// 		return dialogText;
	// 	};
	// }, []);

	return (
		<div
			css={css`
				.course_header_wrapper {
					height: 60px;
					background-color: #000;
					color: #fff;
					width: 100%;
					display: flex;
					justify-content: space-around;

					.course_header {
						color: #fff;
						font-weight: 600;
						margin-left: 20px;
						line-height: 50px;
						font-size: 18px;
					}
					.progress {
						display: flex;
						height: 100%;
						align-items: center;
						background: #000;
						.progress_circle {
							.ant-progress-inner {
								width: 50px !important;
								height: 50px !important;
								font-size: 13px !important;

								.ant-progress-text {
									font-weight: 600;
									color: #fff;
								}
							}
						}
						.progress_label {
							margin-left: 10px;
							font-size: 15px;
							font-weight: 500;
							.anticon-down {
								vertical-align: baseline;
							}
						}
					}
				}
				.course_content {
					.anticon {
						padding: 0 10px;
						font-size: 19px;
						cursor: pointer;
					}
					.video_wrapper {
						height: 30%;
					}
					.document_content {
						display: flex;
						flex-direction: column;
						align-items: center;
						max-height: 650px;
						// height: 650px;

						.react-pdf__Document {
							max-height: 100%;
							.react-pdf__Page {
								max-height: 100%;
								// height: 650px;
							}
						}
						.react-pdf__Page__annotations annotationLayer {
							height: 0 !important;
						}
					}
					.page_group {
						display: flex;
						height: 25px;
						align-items: baseline;
						margin: 40px;
						.anticon-left-circle {
							cursor: ${pageNumber === 1 ? 'not-allowed' : 'pointer'};
						}
						.anticon-right-circle {
							cursor: ${pageNumber === numPages ? 'not-allowed' : 'pointer'};
						}
						p {
							font-size: 16px;
							font-weight: 500;
						}
						input {
							width: 60px;
							border: 3px solid;
							border-radius: 2px;
						}
						input::-webkit-outer-spin-button,
						input::-webkit-inner-spin-button {
							-webkit-appearance: none;
							margin: 0;
						}
					}
				}
				.course_list {
					max-height: 90vh;
					overflow: auto;
					.course_lesson {
						.ant-collapse-header {
							font-weight: 700;
						}
						.course_list_video {
							.ant-collapse-header {
								font-weight: 600;
							}
						}
					}
					.video_${selectItemVideo?.id} {
						background-color: #d1d7dc;
					}
					.video_${selectItemDoc?.id} {
						background-color: #d1d7dc;
					}
					.ant-list-item {
						padding: 0;
					}
					.course_list_video {
						.ant-collapse-header {
							padding-left: 45px;
						}
					}
					.course_video_item {
						display: flex;
						align-items: center;
						gap: 1.6rem;
						color: #1c1d1f;
						padding: 0.8rem 0.6rem;
						// border: 1px solid #e4e1e1;
						// border-left: none;
						// border-right: none;
						cursor: pointer;
						&:hover {
							background-color: #d1d7dc;
						}
						input {
							height: 18px;
							width: 18px;
						}
						input[type='checkbox'] {
							accent-color: #1c1d1f;
						}
						.video_duration {
							display: flex;
							align-items: center;
							justify-content: space-evenly;
							min-width: 115px;
						}
					}
				}
				.page-container {
					width: 100%;
					max-width: 100%;
					--bs-gutter-x: 0;

					.comment_group {
						padding-left: 60px;
					}
					@media (min-width: 1500px) {
						max-width: 90%;
						.video_wrapper {
							height: 16.7%;
						}
					}
					.ant-collapse {
						width: 100%;

						.ant-collapse-content > .ant-collapse-content-box {
							padding: 0;
						}
					}
				}
			`}
		>
			<Row className="course_header_wrapper">
				<Col span={12}>
					<Link
						to={`${RoutePaths.COURSE_DETAIL}?id=${course?.id}`}
						className="course_header"
					>
						{course?.name}
					</Link>
				</Col>
				<Col className="progress">
					<Progress
						className="progress_circle"
						type="circle"
						strokeColor={{
							'0%': '#108ee9',
							'100%': '#87d068',
						}}
						percent={course?.progress}
					/>
					<span className="progress_label">
						<Popover content={'abc'} title="Title">
							Tiến độ <DownOutlined />
						</Popover>
					</span>
				</Col>
			</Row>
			<div className="page-container">
				<Row>
					<Col span={16} className="course_content">
						{state.selectedVideo && (
							<div className="video_wrapper">
								<ReactPlayer
									url={state.selectedVideo?.file_path}
									width="100%"
									height="100%"
									controls={true}
									config={{
										file: {
											attributes: {
												onContextMenu: (e: { preventDefault: () => any }) =>
													e.preventDefault(),
												controlsList: 'nodownload',
											},
										},
									}}
									onEnded={() => {
										dispatch({
											type: CourseProgressAction.SET_COMPLETE_VIDEO,
										});
									}}
									onError={(e) => console.log(e)}
									onClickPreview={(e) => console.log(e)}
									playing={false}
									playsinline
									playIcon={<PlayCircleOutlined />}
									light={false}
									stopOnUnmount={false}
								/>
							</div>
						)}
						{!_.isEmpty(state.selectedDoc) && (
							<PdfViewer url={state.selectedDoc?.file?.file_path} />
						)}

						<div className="comment_group">
							<Comment
								avatar={
									<Avatar
										src="https://joeschmoe.io/api/v1/random"
										alt="Han Solo"
									/>
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
					</Col>
					<Col span={8} className="course_list">
						<List
							itemLayout="horizontal"
							dataSource={course?.lessons}
							renderItem={(item) => (
								<CourseProgressContext.Provider value={{ state, dispatch }}>
									<LessonItem lesson={item} />
								</CourseProgressContext.Provider>
							)}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default CourseProgress;
