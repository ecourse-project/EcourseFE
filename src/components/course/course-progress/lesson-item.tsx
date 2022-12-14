import { FileTextOutlined, PlayCircleFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Collapse, List } from 'antd';
import { debounce } from 'lodash';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { Lesson, UpdateLessonArgs } from 'src/lib/types/backend_modal';
import { DurationTime, formatDurationTime } from 'src/lib/utils/utils';
import { CourseProgressAction } from './context/reducer';
import { CourseProgressContext } from './course-progress';
const { Panel } = Collapse;

interface LessonItemProps {
  lesson: Lesson;
  isCourseDetail?: boolean;
  index?: number;
}

const DisplayDurationTime = (duration) => {
  const time: DurationTime = formatDurationTime(duration);
  // const hourString = `${
  // 	time.hours > 1
  // 		? time.hours + ' hours : '
  // 		: time.hours === 1
  // 		? time.hours + ' hour : '
  // 		: ''
  // }`;
  // const minuteString = `${
  // 	time.minutes > 1
  // 		? time.minutes + ' minutes : '
  // 		: time.minutes === 1
  // 		? time.minutes + ' minute : '
  // 		: ''
  // }`;
  // const secondString = `${
  // 	time.seconds > 1
  // 		? time.seconds + ' seconds'
  // 		: time.seconds === 1
  // 		? time.seconds + ' second'
  // 		: ''
  // }`;

  const hourString = `${time.hours > 0 ? time.hours + ':' : ''}`;
  const minuteString = `${time.minutes > 0 ? time.minutes + ':' : ''}`;
  const secondString = `${time.seconds > 0 ? time.seconds : ''}`;
  return hourString + minuteString + secondString;
};

const LessonItem: React.FC<LessonItemProps> = (props) => {
  const { lesson, isCourseDetail = false, index } = props;
  const { state, dispatch } = useContext(CourseProgressContext);

  const [checkedVideo, setCheckedVideo] = useState<string[]>(lesson.videos_completed || []);
  const [checkedDoc, setCheckedDoc] = useState<string[]>(lesson.docs_completed || []);

  useEffect(() => {
    debounceCheckedItem(checkedVideo, checkedDoc);
  }, [checkedVideo, checkedDoc]);
  // useEffect(() => {
  // 	console.log('inital chjeck ', lesson.name, checkedDoc, checkedVideo);
  // 	console.log('inital lesson ', lesson.videos);

  // 	console.log('inital state ', state);
  // }, [checkedVideo, checkedDoc, state]);

  // const debounceCheckedItem = useDebouncedCallback((videos, docs) => {
  // 	dispatch({
  // 		type: CourseProgressAction.UPDATE_CHECKED_ITEM,
  // 		payload: {
  // 			lesson_id: lesson.id,
  // 			completed_videos: [...(videos || [])],
  // 			completed_docs: [...(docs || [])],
  // 		} as UpdateLessonArgs,
  // 	});
  // 	console.log('call back debounce');
  // }, 1000);
  const debounceCheckedItem = useCallback(
    debounce((videos, docs) => {
      dispatch({
        type: CourseProgressAction.UPDATE_CHECKED_ITEM,
        payload: {
          lesson_id: lesson.id,
          completed_videos: [...(videos || [])],
          completed_docs: [...(docs || [])],
        } as UpdateLessonArgs,
      });
    }, 1000),
    [],
  );

  useEffect(() => {
    if (state.isDoneVideo) {
      const idx = checkedVideo.indexOf(state.selectedVideo.id);
      if (idx >= 0) {
        setCheckedVideo([...checkedVideo, state.selectedVideo.id]);
      }
    }
  }, [state.isDoneVideo]);

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
            justify-content: space-between;
            width: 50px;
          }
          .doc {
            width: 75px;
          }
        }
        .item_info {
          height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
        }
        .ant-collapse {
          width: 100%;
          .ant-collapse-content > .ant-collapse-content-box {
            padding: 0 !important;
          }
        }
      `}
    >
      <List.Item>
        <Collapse defaultActiveKey={['1']} destroyInactivePanel className="course_lesson">
          <Panel header={`Bài ${index}: ${lesson?.name}`} key="1">
            <Collapse defaultActiveKey={['1']}>
              {/* <Collapse> */}
              <Panel
                header={
                  <>
                    <div>Video</div>
                    {!isCourseDetail ? (
                      <div>{`${checkedVideo.length} / ${lesson?.videos.length}`}</div>
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
                            const newChecked = checkedVideo.filter((v) => v !== e.target.value);
                            setCheckedVideo(newChecked);
                          } else {
                            setCheckedVideo([...checkedVideo, e.target.value]);
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    )}
                    <div className="item_info">
                      <div className="">{`${i + 1}. ${v.file_name}`}</div>
                      <div className="video_duration">
                        <PlayCircleFilled />
                        {`${DisplayDurationTime(v.duration)}`}
                      </div>
                    </div>
                  </div>
                ))}
              </Panel>
            </Collapse>
            <Collapse defaultActiveKey="1">
              {/* <Collapse> */}
              <Panel
                header={
                  <>
                    <div>Tệp</div>
                    {!isCourseDetail ? (
                      <div>{`${checkedDoc.length} / ${lesson?.documents.length}`}</div>
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
                        value={v.id}
                        type="checkbox"
                        checked={checkedDoc.includes(v.id)}
                        onChange={(e) => {
                          if (checkedDoc.includes(e.target.value)) {
                            console.log('vao if include', e.target.value);
                            const newChecked = checkedDoc.filter((v) => v !== e.target.value);
                            setCheckedDoc(newChecked);
                          } else {
                            console.log('vao else include', e.target.value);

                            setCheckedDoc([...checkedDoc, e.target.value]);
                          }
                        }}
                        onClick={(e) => {
                          e.stopPropagation();
                        }}
                      />
                    )}
                    <div className="item_info">
                      <div className="">{`${i + 1}. ${v.name}`}</div>
                      <div className="video_duration doc">
                        <FileTextOutlined />
                        {`${(v?.file?.file_size / 1000000).toFixed(2)} MB`}
                      </div>
                    </div>
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
