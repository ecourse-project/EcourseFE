import { Button, Col, List, Popover, Progress, Row, Tabs } from 'antd';
import React, {
	createContext,
	useEffect,
	useReducer,
	useRef,
	useState,
} from 'react';
/** @jsxImportSource @emotion/react */
import {
	DownOutlined,
	PlayCircleOutlined,
	StarFilled,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Collapse } from 'antd';
import _, { isEmpty } from 'lodash';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { useQueryParam } from 'src/hooks/useQueryParam';
import {
	AnswerChoiceEnum,
	Course,
	CourseDocument,
	Lesson,
	OFileUpload,
	Quiz,
	QuizResult,
	QuizResultArgs,
	RateCourseArgs,
	Rating,
	RatingEnum,
	UpdateLessonArgs,
	UpdateProgressArgs,
	UserAnswersArgs,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import RoutePaths from 'src/utils/routes';

import '@react-pdf-viewer/core/lib/styles/index.css';
import { useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import PdfViewer from '../../pdf';
import reducer, {
	CourseProgressAction,
	CourseProgressContextType,
} from './context/reducer';
import LessonItem from './lesson-item';

import ExamImg from 'src/assets/images/exam.png';
import CommentSection from 'src/components/comment';
import FeedbackSection from 'src/components/comment/feedbacks';
import RatingModal from 'src/components/modal/rating-modal';
import useDebouncedCallback from 'src/hooks/useDebouncedCallback';
import QuizSection from './quiz';
const { Panel } = Collapse;
export interface CourseParams {
	id: string;
	lesson?: string;
	video?: string;
	doc?: string;
	tab?: string;
	exam?: boolean;
}

interface IProgress {
	done: number;
	sum: number;
	progress_num: number;
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
	const [sumVid, setSumVid] = useState<number>(0);
	const [sumDoc, setSumDoc] = useState<number>(0);
	const [feedback, setFeedback] = useState<string>('');
	const [star, setStar] = useState<number>(0);
	const userProfile = useAppSelector((state: RootState) => state.app.user);
	const [myRate, setMyRate] = useState<Rating>({} as Rating);
	const [isShowQuiz, setIsShowQuiz] = useState<boolean>(params?.exam || false);
	const [listQuiz, setListQuiz] = useState<Quiz[]>([]);
	const [loading, setLoading] = useState<boolean>(false);
	const [resultQuiz, setResultQuiz] = useState<QuizResult>();
	const initialState: CourseProgressContextType = {
		selectedDoc: {} as CourseDocument,
		selectedVideo: {} as OFileUpload,
		currentLesson: '',
		isDoneVideo: false,
		updateParams: [] as UpdateLessonArgs[],
		answerSheet: [],
	};
	const [state, dispatch] = useReducer(reducer, initialState);
	const isInitialMount = useRef(true);

	// useEffect(() => {
	// 	console.log('State: ', state);
	// }, [state]);
	useEffect(() => {
		const updateParams: UpdateProgressArgs = {
			course_id: params.id || '',
			lessons: state.updateParams,
		};
		debounceUpdateProgress(updateParams);
	}, [state.updateParams]);

	const debounceUpdateProgress = useDebouncedCallback(
		async (params: UpdateProgressArgs) => {
			try {
				await CourseService.updateLessonProgress(params);
			} catch (error) {
				console.log('error update', error);
			}
		},
		1000
	);

	const getCourseDetail = async (id: string) => {
		try {
			setLoading(true);
			const courseDetail = await CourseService.getCourseDetail(id);
			setCourse(courseDetail);

			if (params.doc && courseDetail.lessons) {
				const idxLesson = courseDetail?.lessons.findIndex(
					(v) => v.id === params.lesson
				);
				if (idxLesson >= 0) {
					const idxDoc = courseDetail.lessons[idxLesson].documents.findIndex(
						(doc) => doc.id === params.doc
					);
					if (idxDoc >= 0) {
						dispatch({
							type: CourseProgressAction.SET_SELECTED_DOC,
							payload: courseDetail.lessons[idxLesson].documents[idxDoc],
						});
					}
				}
			} else if (params.video && courseDetail.lessons) {
				const idxLesson = courseDetail?.lessons.findIndex(
					(v) => v.id === params.lesson
				);
				if (idxLesson >= 0) {
					const idxVid = courseDetail.lessons[idxLesson].videos.findIndex(
						(video) => video.id === params.video
					);
					if (idxVid >= 0) {
						dispatch({
							type: CourseProgressAction.SET_SELECTED_DOC,
							payload: courseDetail.lessons[idxLesson].documents[idxVid],
						});
					}
				}
			} else if (courseDetail.lessons && !params.exam) {
				dispatch({
					type: CourseProgressAction.SET_CURRENT_LESSON,
					payload: courseDetail.lessons[0].id,
				});
				dispatch({
					type: CourseProgressAction.SET_SELECTED_VIDEO,
					payload: courseDetail.lessons[0].videos[0],
				});
			} else if (params.exam) {
				setIsShowQuiz(true);
			}
			const res = courseDetail?.lessons?.map((v) => {
				setSumDoc(sumDoc + v?.documents?.length);
				setSumVid(sumVid + v?.videos?.length);
				return {
					lesson_id: v.id,
					completed_docs: [...(v?.docs_completed || [])],
					completed_videos: [...(v?.videos_completed || [])],
				} as UpdateLessonArgs;
			});
			setSumDoc(
				courseDetail.lessons?.reduce((p, c) => p + c.documents.length, 0) || 0
			);
			setSumVid(
				courseDetail.lessons?.reduce((p, c) => p + c.videos.length, 0) || 0
			);

			dispatch({
				type: CourseProgressAction.UPDATE_CHECKED_ITEM,
				payload: res,
			});
			const quizList = await CourseService.listQuiz(courseDetail.id);
			setListQuiz(quizList);
			const initialAnswer = quizList.map(
				(v) =>
					({
						quiz_id: v.id,
						answer_choice: AnswerChoiceEnum.NO_CHOICE,
					} as UserAnswersArgs)
			);
			dispatch({
				type: CourseProgressAction.UPDATE_CHECKED_ANSWER,
				payload: initialAnswer,
			});
		} catch (error) {
			console.log(error);
		} finally {
			setLoading(false);
		}
	};

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
		} catch (error) {
			console.log('error', error);
		}
	};

	const handleSaveRating = () => {
		rateCourse(params.id, star, feedback);
		setOpenRatingModal(false);
	};

	useEffect(() => {
		getCourseDetail(params.id);
	}, []);

	useEffect(() => {
		if (isInitialMount.current) {
			isInitialMount.current = false;
		} else if (!loading) {
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
				: `${url}?id=${params.id}&exam=true`;
			window.history.pushState({ path: newUrl }, '', newUrl);
			if (!isEmpty(state.selectedDoc) || !isEmpty(state.selectedVideo)) {
				setIsShowQuiz(false);
			}
		}
	}, [state.selectedDoc, state.selectedVideo, isShowQuiz]);

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
			dispatch({
				type: CourseProgressAction.SET_SELECTED_DOC,
				payload: selected,
			});
		}
	}, [course]);

	const items = [
		{
			label: 'Bình luận',
			key: 'comment',
			children: <CommentSection />,
		}, // remember to pass the key prop
		{
			label: 'Nhận xét',
			key: 'feedback',
			children: <FeedbackSection rateList={course?.rating_detail || []} />,
		},
	];
	const calculateProgress = () => {
		const doneDoc = state.updateParams.reduce(
			(p, c) => p + c.completed_docs.length,
			0
		);
		const doneVid = state.updateParams.reduce(
			(p, c) => p + c.completed_videos.length,
			0
		);
		return {
			done: doneDoc + doneVid,
			sum: sumDoc + sumVid,
			progress_num: ((doneDoc + doneVid) * 100) / (sumDoc + sumVid),
		} as IProgress;
	};
	const showQuiz = () => {
		dispatch({
			type: CourseProgressAction.SET_SELECTED_DOC,
			payload: {} as CourseDocument,
		});
		setIsShowQuiz(true);
	};

	const onSubmitQuiz = async () => {
		const result = await CourseService.getQuizResult({
			course_id: course?.id,
			answers: state.answerSheet,
		} as QuizResultArgs);
		setResultQuiz(result);
	};

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
					.ant-col {
						height: 100%;
					}
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
							cursor: pointer;
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
					max-height: 100vh;
					overflow: auto;
					.quiz_header {
						.ant-collapse-header {
							cursor: none;
						}
						.ant-collapse-header-text {
							font-weight: 700;
							color: #000;
						}
					}
					.quiz_name {
						cursor: pointer;
					}
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
					.pdf_wrapper {
						width: 100%;
					}
					@media (min-width: 1500px) {
						max-width: 90%;
						.video_wrapper {
							visibility: ${videoLoading ? 'hidden' : ''};
							height: 16.7%;
							margin: auto;
						}
					}
					.ant-collapse {
						width: 100%;

						.ant-collapse-content > .ant-collapse-content-box {
							padding: 16px;
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
							percent={calculateProgress().progress_num}
						/>
						<span className="progress_label">
							<Popover
								content={`${
									calculateProgress().done + '/' + calculateProgress().sum
								} đã hoàn thành`}
								placement="bottom"
							>
								Tiến độ
								<DownOutlined />
							</Popover>
						</span>
					</div>
				</Col>
			</Row>
			<div className="page-container">
				<Row>
					<Col span={16} className="course_content">
						<Row>
							{!_.isEmpty(state.selectedVideo) ? (
								<div className="video_wrapper">
									<ReactPlayer
										url={state.selectedVideo?.file_path}
										width="100%"
										height="100%"
										controls={true}
										onReady={() => {
											setVideoLoading(false);
										}}
										// onBuffer={() => console.log('buffer')}
										// onBufferEnd={() => console.log('buffer end')}
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
										// onProgress={(v) => console.log('progress', v)}
										onError={(e) => console.log('video errror', e)}
										playing={false}
										playsinline
										playIcon={<PlayCircleOutlined />}
										light={false}
										stopOnUnmount={false}
									/>
								</div>
							) : !_.isEmpty(state.selectedDoc) ? (
								<div className="pdf_wrapper">
									<PdfViewer url={state.selectedDoc?.file?.file_path} />
								</div>
							) : isShowQuiz ? (
								<CourseProgressContext.Provider value={{ state, dispatch }}>
									<QuizSection
										listQuiz={listQuiz}
										onSubmit={onSubmitQuiz}
										result={resultQuiz || course?.quiz_detail}
									/>
								</CourseProgressContext.Provider>
							) : (
								<>{isShowQuiz}</>
							)}
						</Row>
						<Tabs
							items={items}
							defaultActiveKey={params.tab}
							className="tab-section"
						/>
					</Col>
					<Col span={8} className="course_list">
						{calculateProgress().progress_num === 100 ? (
							<Collapse defaultActiveKey={['1']} collapsible="disabled">
								<Panel
									header="Bài kiểm tra"
									key="1"
									showArrow={false}
									className="quiz_header"
								>
									<div className="quiz_name" onClick={showQuiz}>
										<img src={ExamImg} width={30} height={30} />
										<span>{`   Bài kiểm tra cuối khoá `}</span>
										<p>
											<strong>{course?.name}</strong>
										</p>
									</div>
								</Panel>
							</Collapse>
						) : (
							<div></div>
						)}
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
						rated={isEmpty(myRate) ? course?.my_rating : myRate}
					/>
				</div>
			</div>
		</div>
	);
};

export default CourseProgress;
