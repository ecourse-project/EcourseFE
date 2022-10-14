import { PlayCircleFilled } from '@ant-design/icons';
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Collapse, List } from 'antd';
import { debounce } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { CourseDocument, Lesson, OFileUpload } from 'src/models/backend_modal';
import { DurationTime, formatDurationTime } from 'src/utils/utils';
import { CourseProgressAction } from './context/reducer';
import { CourseProgressContext } from './course-progress';
const { Panel } = Collapse;
import moment, { Moment } from 'moment';

interface LessonItemProps {
	lesson: Lesson;
	isCourseDetail?: boolean;
}

const DisplayDurationTime = (duration) => {
	const time: DurationTime = formatDurationTime(duration);
	const hourString = `${
		time.hours > 1
			? time.hours + ' hours : '
			: time.hours === 1
			? time.hours + ' hour : '
			: ''
	}`;
	const minuteString = `${
		time.minutes > 1
			? time.minutes + ' minutes : '
			: time.minutes === 1
			? time.minutes + ' minute : '
			: ''
	}`;
	const secondString = `${
		time.seconds > 1
			? time.seconds + ' seconds'
			: time.seconds === 1
			? time.seconds + ' second'
			: ''
	}`;
	return hourString + minuteString + secondString;
};

const LessonItem: React.FC<LessonItemProps> = (props) => {
	const { lesson, isCourseDetail = false } = props;
	const { state, dispatch } = useContext(CourseProgressContext);

	const [checkedVideo, setCheckedVideo] = useState<string[]>([]);
	const [checkedDoc, setCheckedDoc] = useState<string[]>([]);
	useEffect(() => {
		debounce(() => {
			console.log('change: ', checkedVideo, checkedDoc);
		}, 500);
	}, [checkedVideo, checkedDoc]);

	useEffect(() => {
		if (state.isDoneVideo) {
			const idx = checkedVideo.indexOf(state.selectedVideo.id);
			console.log('idx', idx);
			if (idx < 0) {
				setCheckedVideo([...checkedVideo, state.selectedVideo.id]);
			}
		}
	}, [state]);

	useEffect(() => {
		const a = moment('2022-10-01T16:43:12.610782+07:00');
		const b = moment('2022-10-13T16:43:12.610782+07:00');

		// console.log(
		// 	'moment from now',
		// 	moment('2022-10-13T16:43:12.610782+07:00').toNow()
		// );
		console.log('moment from now', a.toNow(true));
	}, []);

	return (
		<div
			css={css`
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
				.video_${state.selectedVideo?.id} {
					background-color: #d1d7dc;
				}
				.video_${state.selectedDoc?.id} {
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
					padding-left: ${isCourseDetail ? '65px' : ''};
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

				.ant-collapse {
					width: 100%;
					.ant-collapse-content > .ant-collapse-content-box {
						padding: 0;
					}
				}
			`}
		>
			<List.Item>
				<Collapse
					defaultActiveKey={['1']}
					destroyInactivePanel
					className="course_lesson"
				>
					<Panel
						header={`Bài ${lesson.lesson_number}: ${lesson?.name}`}
						key="1"
					>
						<Collapse defaultActiveKey={['1']}>
							{/* <Collapse> */}
							<Panel
								header={
									<>
										<div>Video</div>
										{!isCourseDetail ? (
											<div>
												{`${checkedVideo.length} / ${lesson?.videos.length}`}
											</div>
										) : (
											<div>{`${lesson?.videos.length} Video`}</div>
										)}
									</>
								}
								key={'1'}
								className="course_list_video"
							>
								{lesson.videos.map((v, i) => (
									<div
										key={i}
										className={`course_video_item video_${v.id}`}
										onClick={() => {
											dispatch({
												type: CourseProgressAction.SET_SELECTED_VIDEO,
												payload: v,
											});
											dispatch({
												type: CourseProgressAction.SET_CURRENT_LESSON,
												payload: lesson.id,
											});
										}}
									>
										{!isCourseDetail && (
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
														setCheckedVideo([...checkedVideo, e.target.value]);
													}
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										)}
										<div>
											<div className="">{`${i + 1}. ${v.file_name}`}</div>
											<div className="video_duration">
												<PlayCircleFilled />
												{`${DisplayDurationTime(500)}`}
											</div>
										</div>
									</div>
								))}
							</Panel>
						</Collapse>
						{/* <Collapse defaultActiveKey="1"> */}
						<Collapse>
							<Panel
								header={
									<>
										<div>Tệp</div>
										{!isCourseDetail ? (
											<div>
												{`${checkedDoc.length} / ${lesson?.documents.length}`}
											</div>
										) : (
											<div>{`${lesson?.documents.length} Tệp`}</div>
										)}
									</>
								}
								key={'1'}
								className="course_list_video"
							>
								{lesson.documents.map((v, i) => (
									<div
										key={i}
										className={`course_video_item video_${v.id}`}
										onClick={() => {
											dispatch({
												type: CourseProgressAction.SET_SELECTED_DOC,
												payload: v,
											});
											dispatch({
												type: CourseProgressAction.SET_CURRENT_LESSON,
												payload: lesson.id,
											});
										}}
									>
										{!isCourseDetail && (
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
														setCheckedDoc([...checkedDoc, e.target.value]);
													}
												}}
												onClick={(e) => e.stopPropagation()}
											/>
										)}
										<span className="">{`${i + 1}. ${v.name}`}</span>
									</div>
								))}
							</Panel>
						</Collapse>
					</Panel>
				</Collapse>
			</List.Item>
		</div>
	);
};

export default LessonItem;
