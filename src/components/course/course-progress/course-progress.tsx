import {
	Avatar,
	Card,
	Checkbox,
	Col,
	Divider,
	List,
	Popover,
	Progress,
	Row,
	Tooltip,
} from 'antd';
import React, {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useReducer,
	useState,
} from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useQueryParam } from 'src/hooks/useQueryParam';
import CourseService from 'src/services/course';
import {
	Course,
	CourseDocument,
	Lesson,
	OFileUpload,
} from 'src/models/backend_modal';
import RoutePaths from 'src/utils/routes';
import { Link } from 'react-router-dom';
import {
	DownOutlined,
	IeCircleFilled,
	LeftCircleFilled,
	LeftCircleOutlined,
	PlayCircleFilled,
	PlayCircleOutlined,
	RightCircleFilled,
	RightCircleOutlined,
} from '@ant-design/icons';
import { Collapse } from 'antd';
import { DivBlank } from '../../loading/loadingBase';
import ReactPlayer from 'react-player';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { pdfjs } from 'react-pdf';
import _, { debounce } from 'lodash';
// pdfjs.GlobalWorkerOptions.workerSrc = `/path/to/your/worker.js`;
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import { duration } from '@mui/material';
// import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { Worker } from '@react-pdf-viewer/core';
// Import the main component
import { Viewer, LoadError } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfViewer from '../../pdf';
import { select } from 'redux-saga/effects';
import LessonItem from './lesson-item';
import reducer, {
	CourseProgressAction,
	CourseProgressContextType,
	initialState,
} from './context/reducer';
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
	const params: CourseParams = useQueryParam();

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

	// const debounceSetCheckList = useCallback(
	// 	debounce(() => {
	// 		CourseService.UpdateCourseVideoProgress();
	// 	}, 500),
	// 	[checkedVideo]
	// );

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
					height: 92vh;
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
							<ReactPlayer
								url={state.selectedVideo?.file_path}
								width="100%"
								height="unset"
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
								canPlay={false}
								playing={false}
								playsinline
								playIcon={<PlayCircleOutlined />}
								light={false}
								stopOnUnmount={false}
							/>
						)}
						{!_.isEmpty(state.selectedDoc) && (
							<PdfViewer url={state.selectedDoc?.file?.file_path} />
						)}
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
