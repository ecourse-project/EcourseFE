import {
	Avatar,
	Button,
	Col,
	Comment,
	List,
	Popover,
	Progress,
	Rate,
	Row,
	Tabs,
} from 'antd';
import React, {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
/** @jsxImportSource @emotion/react */
import {
	AndroidOutlined,
	AppleOutlined,
	DownOutlined,
	PlayCircleOutlined,
	StarFilled,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Collapse } from 'antd';
import _ from 'lodash';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
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
	RateCourseArgs,
	RatingEnum,
	UpdateLessonArgs,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import RoutePaths from 'src/utils/routes';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { useAppSelector } from 'src/apps/hooks';
import CommentForm from 'src/components/comment/comment-form';
import CommentItem from 'src/components/comment/comment-item';
import { RootState } from 'src/reducers/model';
import PdfViewer from '../../pdf';
import reducer, {
	CourseProgressAction,
	CourseProgressContextType,
} from './context/reducer';
import LessonItem from './lesson-item';

import { History } from 'history';
import CustomPagination from 'src/components/pagination';
import CommentSection from 'src/components/comment';
import RatingModal from 'src/components/modal/rating-modal';

const { Panel } = Collapse;
export interface CourseParams {
	id: string;
	lesson?: string;
	video?: string;
	doc?: string;
	tab?: string;
}

export const CourseProgressContext = createContext<{
	state: CourseProgressContextType;
	dispatch: React.Dispatch<any>;
}>({ state: {} as CourseProgressContextType, dispatch: () => null });

const CourseProgress = () => {
	const [course, setCourse] = useState<Course>();
	const [selectItemVideo, setSelectItemVideo] = useState<OFileUpload>();
	const [selectItemDoc, setSelectItemDoc] = useState<CourseDocument>();
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);
	const params: CourseParams = useQueryParam();
	const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
	const [videoLoading, setVideoLoading] = useState<boolean>(true);
	const [feedback, setFeedback] = useState<string>('');
	const [star, setStar] = useState<number>(0);
	const userProfile = useAppSelector((state: RootState) => state.app.user);

	const initialState: CourseProgressContextType = {
		selectedDoc: {} as CourseDocument,
		selectedVideo: {} as OFileUpload,
		currentLesson: '',
		isDoneVideo: false,
		updateParams: [] as Lesson[],
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	useEffect(() => {
		console.log('state update paramse change ', state.updateParams);
	}, [state.updateParams]);

	const getCourseDetail = async (id: string) => {
		const courseDetail = await CourseService.getCourseDetail(id);
		setCourse(courseDetail);

		courseDetail.lessons &&
			dispatch({
				type: CourseProgressAction.SET_SELECTED_VIDEO,
				payload: courseDetail.lessons[0].videos[0],
			});
		console.log('re dispatch');
		dispatch({
			type: CourseProgressAction.UPDATE_CHECKED_ITEM,
			payload: courseDetail.lessons,
		});
	};

	const rateCourse = async (
		course_id: string,
		rating: RatingEnum,
		comment: string
	) => {
		try {
			await CourseService.rateCourse({
				course_id,
				rating,
				comment,
			} as RateCourseArgs);
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleSaveRating = () => {
		rateCourse(params.id, RatingEnum.FIVE, feedback);
		setOpenRatingModal(false);
	};

	useEffect(() => {
		getCourseDetail(params.id);
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
	}, [state.selectedDoc, state.selectedVideo]);

	useEffect(() => {
		//reload current watch
		const lesson: Lesson | undefined = course
			? course?.lessons?.filter((v) => v.id === params?.lesson)[0]
			: undefined;
		if (params.video) {
			const selected = lesson?.videos?.filter((v) => v.id === params.video)[0];
			dispatch({
				type: CourseProgressAction.SET_SELECTED_VIDEO,
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

	useEffect(() => {
		console.log('selected: ', state.selectedVideo, selectItemDoc);
	}, [state.selectedVideo, state.selectedDoc]);
	const items = [
		{
			label: 'Bình luận',
			key: 'comment',
			children: <CommentSection />,
		}, // remember to pass the key prop
		{
			label: 'Nhận xét',
			key: 'feedback',
			children: (
				<Rate
					onChange={(value) => console.log('value', value)}
					defaultValue={1}
				/>
			),
		},
	];
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
					padding: 0 7%;
					.right_box {
						display: flex;
						justify-content: flex-end;
						gap: 10px;
					}
					.rating {
						height: 100%;
						display: flex;
						align-items: center;
						.anticon-star {
							font-size: 18px;
							color: #faad14;
						}
						.rating_btn {
							background: #000;
							border-color: #000;
							color: #fff;
							font-weight: 500;
							font-size: 16px;
							padding: 4px 4px;

							&:hover {
								opacity: 0.7;
							}
						}
					}
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
					}
				}
				.page-container {
					width: 100%;
					max-width: 100%;
					--bs-gutter-x: 0;

					.comment_group {
						padding: 10px;
						flex-direction: column;
					}

					@media (min-width: 1500px) {
						max-width: 90%;
						.video_wrapper {
							visibility: ${videoLoading ? 'hidden' : ''};
							height: 16.7%;
							margin: auto;
						}
						.pdf_wrapper {
							width: 100%;
						}
					}
					.ant-collapse {
						width: 100%;

						.ant-collapse-content > .ant-collapse-content-box {
							padding: 0;
						}
					}
				}
				.tab-section {
					padding: 50px;
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
				<Col span={12} className="right_box">
					<div className="rating">
						<StarFilled />
						<Button
							className="rating_btn"
							onClick={() => setOpenRatingModal(true)}
						>
							Đánh giá
						</Button>
					</div>

					<div className="progress">
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
							<Popover title="abc">
								Tiến độ <DownOutlined />
							</Popover>
						</span>
					</div>
				</Col>
			</Row>
			<div className="page-container">
				<Row>
					<Col span={16} className="course_content">
						<Row>
							{state.selectedVideo && (
								<div className="video_wrapper">
									<ReactPlayer
										url={state.selectedVideo?.file_path}
										width="100%"
										height="100%"
										controls={true}
										onReady={() => {
											console.log('readuy');
											setVideoLoading(false);
										}}
										onBuffer={() => console.log('buffer')}
										onBufferEnd={() => console.log('buffer end')}
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
										onProgress={(v) => console.log('progress', v)}
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
								<div className="pdf_wrapper">
									<PdfViewer url={state.selectedDoc?.file?.file_path} />
								</div>
							)}
						</Row>
						<Tabs
							items={items}
							defaultActiveKey={params.tab}
							className="tab-section"
						/>
						;
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
				<div className="rating-modal-1">
					<RatingModal
						visible={openRatingModal}
						countStar={(value) => setStar(value)}
						onChangeFeedback={(value) => setFeedback(value)}
						onClose={() => setOpenRatingModal(false)}
						onSave={handleSaveRating}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseProgress;
