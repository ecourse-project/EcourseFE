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
import React, { useCallback, useEffect, useState } from 'react';
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
import { DivBlank } from '../loading/loadingBase';
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

import packageJson from '../../../package.json';
const pdfjsVersion = packageJson.dependencies['pdfjs-dist'];
// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import PdfViewer from '../pdf';
import { select } from 'redux-saga/effects';
const { Panel } = Collapse;
interface CourseParams {
	id: string;
	lesson?: string;
	video?: string;
	doc?: string;
}
const CourseProgress = () => {
	const [course, setCourse] = useState<Course>();
	const [selectItemVideo, setSelectItemVideo] = useState<OFileUpload>();
	const [selectItemDoc, setSelectItemDoc] = useState<CourseDocument>();
	const [currentLesson, setCurrentLesson] = useState<string>('');
	const [numPages, setNumPages] = useState<number>();
	const [pageNumber, setPageNumber] = useState<number>(1);
	const [inputPage, setInputPage] = useState<number>();
	const [checkedVideo, setCheckedVideo] = useState<string[]>([
		'c708b6ba-3377-4b72-b9c5-b53b2e9ca6f4',
		'39040c7f-7bc2-4001-ac8e-7ce7216b3e07',
		'51f5fc14-2d83-461e-aa56-cfae9bd08048',
		'6ca85dbc-e658-407c-a5de-591e4998cbee',
		'2ee7ffb0-439c-4790-b907-bb39b6f07dd8',
		'52e8d265-4da4-4fbb-af0f-f157393b811c',
	]);
	const [checkedDoc, setCheckedDoc] = useState<string[]>([]);

	function onDocumentLoadSuccess({ numPages }) {
		setNumPages(numPages);
		setPageNumber(1);
	}

	const params: CourseParams = useQueryParam();
	const getCourseDetail = async (id: string) => {
		const courseDetail = await CourseService.getCourseDetail(id);
		setCourse(courseDetail);
		// setSelectItemVideo(courseDetail?.lessons[0]?.videos[0]);
	};
	useEffect(() => {
		getCourseDetail(params.id);
	}, []);
	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	useEffect(() => {
		const url =
			window.location.protocol +
			'//' +
			window.location.host +
			window.location.pathname;
		const videoId = selectItemVideo?.id;
		const docId = selectItemDoc?.file?.id;
		const newUrl = videoId
			? `${url}?id=${params.id}&lesson=${currentLesson}&video=${videoId}`
			: docId
			? `${url}?id=${params.id}&lesson=${currentLesson}&doc=${docId}`
			: `${url}?id=${params.id}`;
		if (docId || videoId)
			window.history.pushState({ path: newUrl }, '', newUrl);
	}, [selectItemVideo, selectItemDoc]);

	useEffect(() => {
		//reload current watch
		const lesson: Lesson | undefined = course
			? course?.lessons?.filter((v) => v.id === params?.lesson)[0]
			: undefined;
		if (params.video) {
			const selected = lesson?.videos?.filter((v) => v.id === params.video)[0];
			setSelectItemVideo(selected);
			setCurrentLesson(lesson?.id || '');
		} else if (params.doc) {
			const selected = lesson?.documents?.filter(
				(v) => v.file.id === params.doc
			)[0];
			console.log('select', selected);
			setSelectItemDoc(selected);
			setCurrentLesson(lesson?.id || '');
		}
		//update checked
		const vidChecked = lesson?.videos.filter(
			(v) =>
				course &&
				course?.videos_completed &&
				course?.videos_completed?.indexOf(v?.id) > -1
		);
		setCheckedVideo(vidChecked?.map((v) => v.id) || []);

		const docChecked = lesson?.documents.filter(
			(v) =>
				course &&
				course?.docs_completed &&
				course?.docs_completed?.indexOf(v?.id) > -1
		);
		setCheckedDoc(docChecked?.map((v) => v.file.id) || []);
	}, [course]);
	// const debounceSetCheckList = useCallback(
	// 	debounce(() => {
	// 		CourseService.UpdateCourseVideoProgress();
	// 	}, 500),
	// 	[checkedVideo]
	// );
	useEffect(() => {
		console.log('lost checed', checkedVideo);
	}, [checkedVideo]);

	const getDuration = (url) => {
		const newDiv = document.createElement('video') as HTMLVideoElement;
		newDiv.setAttribute('src', url);

		const duration = newDiv.duration;
		return duration;
	};
	useEffect(() => {
		console.log('duration ', getDuration(selectItemVideo?.file_path));
	}, [selectItemVideo]);

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
						{selectItemVideo && (
							<ReactPlayer
								url={selectItemVideo?.file_path}
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
									console.log('endVideo');
									if (!checkedVideo.includes(selectItemVideo.id)) {
										console.log('inclued');
										setCheckedVideo([...checkedVideo, selectItemVideo.id]);
									}
								}}
								onError={(e) => console.log(e)}
								onClickPreview={(e) => console.log(e)}
								canPlay={false}
								playing={false}
								playsinline
								playIcon={<PlayCircleOutlined />}
								light={false}
								// onDuration={(e) => console.log(e)}
								stopOnUnmount={false}
								onBuffer={() => {
									console.log('start buffer');
								}}
								onBufferEnd={() => {
									console.log('start buffer end');
								}}
							/>
						)}
						{
							!_.isEmpty(selectItemDoc) && (
								<PdfViewer url={selectItemDoc?.file?.file_path} />
							)
							// <div className="document_content">
							// 	<div className="document_content_display">
							// 		<Document
							// 			file={selectItemDoc?.file?.file_path}
							// 			onLoadSuccess={onDocumentLoadSuccess}
							// 		>
							// 			<Page
							// 				renderAnnotationLayer={false}
							// 				renderTextLayer={false}
							// 				pageNumber={pageNumber}
							// 			/>
							// 		</Document>
							// 	</div>
							// 	<div className="page_group">
							// 		<LeftCircleFilled
							// 			onClick={(e) => {
							// 				if (pageNumber === 1) e.preventDefault();
							// 				else {
							// 					setInputPage(pageNumber - 1);
							// 					setPageNumber(pageNumber - 1);
							// 				}
							// 			}}
							// 			disabled={pageNumber === 1}
							// 		/>
							// 		<p>
							// 			Page{' '}
							// 			<input
							// 				defaultValue={pageNumber}
							// 				value={inputPage}
							// 				type="number"
							// 				min={1}
							// 				// max={numPages || 10000}
							// 				onChange={(e) => {
							// 					if (e.target.value) {
							// 						setInputPage(Number(e.target.value));
							// 						if (numPages && Number(e.target.value) >= numPages) {
							// 							setInputPage(numPages);
							// 							setPageNumber(numPages);
							// 						} else setPageNumber(Number(e.target.value));
							// 					} else {
							// 						setInputPage(undefined);
							// 					}
							// 				}}
							// 			/>{' '}
							// 			of {numPages}
							// 		</p>
							// 		<RightCircleFilled
							// 			onClick={(e) => {
							// 				if (pageNumber === numPages) e.preventDefault();
							// 				else {
							// 					setInputPage(pageNumber + 1);
							// 					setPageNumber(pageNumber + 1);
							// 				}
							// 			}}
							// 			disabled={pageNumber === numPages}
							// 		/>
							// 	</div>
							// </div>
						}
					</Col>
					<Col span={8} className="course_list">
						<List
							itemLayout="horizontal"
							dataSource={course?.lessons}
							renderItem={(item) => (
								<List.Item>
									<Collapse
										onChange={onChange}
										defaultActiveKey={['1']}
										destroyInactivePanel
										className="course_lesson"
									>
										<Panel
											header={`Bài ${item.lesson_number}: ${item?.name}`}
											key="1"
										>
											<Collapse defaultActiveKey={['1']}>
												<Panel
													header={
														<>
															<div>Video</div>
															<div>
																{`${checkedVideo.length} / ${item.videos.length}`}
															</div>
														</>
													}
													key={'1'}
													className="course_list_video"
												>
													{item.videos.map((v, i) => (
														<div
															key={i}
															className={`course_video_item video_${v.id}`}
															onClick={() => {
																setCurrentLesson(item.id);
																setSelectItemVideo(v);
																setSelectItemDoc({} as CourseDocument);
															}}
														>
															<input
																value={v.id}
																type="checkbox"
																checked={checkedVideo.includes(v.id)}
																onChange={(e) => {
																	if (checkedVideo.includes(e.target.value)) {
																		const newChecked = checkedVideo.filter(
																			(v) => v !== e.target.value
																		);
																		setCheckedVideo(newChecked);
																	} else {
																		setCheckedVideo([
																			...checkedVideo,
																			e.target.value,
																		]);
																	}
																}}
																onClick={(e) => e.stopPropagation()}
															/>
															<div>
																<div className="">{`${i + 1}. ${
																	v.file_name
																}`}</div>
																<div className="video_duration">
																	<PlayCircleFilled />
																	{`${v.duration} minutes`}
																</div>
															</div>
														</div>
													))}
												</Panel>
											</Collapse>
											<Collapse defaultActiveKey="1">
												<Panel
													header="Document"
													key={'1'}
													className="course_list_video"
												>
													{item.documents.map((v, i) => (
														<div
															key={i}
															className={`course_video_item video_${v.id}`}
															onClick={() => {
																setCurrentLesson(item.id);
																setSelectItemVideo({} as OFileUpload);
																setSelectItemDoc(v);
															}}
														>
															<input
																value={v?.file?.file_path}
																type="checkbox"
																onChange={(e) => {
																	if (checkedDoc.includes(e.target.value)) {
																		const newChecked = checkedDoc.filter(
																			(v) => v !== e.target.value
																		);
																		setCheckedDoc(newChecked);
																	} else {
																		setCheckedDoc([
																			...checkedDoc,
																			e.target.value,
																		]);
																	}
																}}
																onClick={(e) => e.stopPropagation()}
															/>
															<span className="">{`${i + 1}. ${v.name}`}</span>
														</div>
													))}
												</Panel>
											</Collapse>
										</Panel>
									</Collapse>
								</List.Item>
							)}
						/>
					</Col>
				</Row>
			</div>
		</div>
	);
};

export default CourseProgress;
