import { Checkbox, Collapse, List } from 'antd';
import { cloneDeep, debounce } from 'lodash';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import { Lesson, UpdateLessonArgs } from 'src/lib/types/backend_modal';
import { DurationTime, formatDurationTime, uniqueArr } from 'src/lib/utils/utils';

import { FileTextOutlined, PlayCircleFilled } from '@ant-design/icons';
import { css } from '@emotion/react';

const { Panel } = Collapse;

interface LessonItemProps {
  lesson: Lesson;
  isCourseDetail?: boolean;
  index?: number;
  isShowLessonDetail: boolean;
  // onUpdate: (data: UpdateLessonArgs) => void;
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
  const minuteString = `${time.minutes + ':'}`;
  const secondString = `${time.seconds > 0 ? (time.seconds > 10 ? time.seconds : '0' + time.seconds) : ''}`;
  return hourString + minuteString + secondString;
};

const LessonItem: React.FC<LessonItemProps> = (props) => {
  const { lesson, isCourseDetail = false, index, isShowLessonDetail } = props;
  const selectedDoc = useSelector((state: RootState) => state.progress.selectedDoc);
  const selectedVideo = useSelector((state: RootState) => state.progress.selectedVideo);
  const isDoneVideo = useSelector((state: RootState) => state.progress.isDoneVideo);
  const [checkedVideo, setCheckedVideo] = useState<string[]>(lesson.videos_completed || []);
  const [checkedDoc, setCheckedDoc] = useState<string[]>(lesson.docs_completed || []);
  const updateParams = useSelector((state: RootState) => state.progress.updateParams);
  const dispatch = useDispatch();

  const handleCheckedDoc = (e) => {
    if (checkedDoc.includes(e.target.value)) {
      const newChecked = checkedDoc.filter((v) => v !== e.target.value);
      setCheckedDoc(newChecked);
      debounceCheckedItem2(checkedVideo, newChecked);
    } else {
      setCheckedDoc([...checkedDoc, e.target.value]);
      debounceCheckedItem2(checkedVideo, [...checkedDoc, e.target.value]);
    }
  };

  const handleCheckedVid = (e) => {
    if (checkedVideo.includes(e.target.value)) {
      const newChecked = checkedVideo.filter((v) => v !== e.target.value);
      setCheckedVideo(newChecked);
      debounceCheckedItem2(newChecked, checkedDoc);
    } else {
      setCheckedVideo([...checkedVideo, e.target.value]);
      debounceCheckedItem2([...checkedVideo, e.target.value], checkedDoc);
    }
  };

  const debounceCheckedItem = useCallback(
    debounce((videos, docs) => {
      console.log('videos :==>>', videos);
      const cloneUpdateParams = cloneDeep(updateParams);
      // console.log('cloneUpdateParams :>> ', cloneUpdateParams);
      const idx = cloneUpdateParams.lessons.findIndex((v) => v.lesson_id === lesson.id);
      if (~idx) {
        const updateParamsObject = {
          lesson_id: lesson.id,
          completed_videos: [...(uniqueArr(videos) || [])],
          completed_docs: [...(uniqueArr(docs) || [])],
        } as UpdateLessonArgs;
        // console.log('updateParamsObject :>> ', updateParamsObject);
        cloneUpdateParams.lessons.splice(idx, 1, updateParamsObject);
      }
      // console.log('cloneUpdateParams after splice :>> ', cloneUpdateParams);
      dispatch(progressAction.updateProgress(cloneUpdateParams));
    }, 1000),
    [],
  );

  const debounceCheckedItem2 = useCallback((videos, docs) => {
    // const cloneUpdateParams = cloneDeep(updateParams);
    // // console.log('cloneUpdateParams :>> ', cloneUpdateParams);/
    // const idx = cloneUpdateParams.findIndex((v) => v.lesson_id === lesson.id);
    // console.log('idx :>> ', idx);
    // if (~idx) {
    //   const updateParamsObject = {
    //     lesson_id: lesson.id,
    //     completed_videos: [...(uniqueArr(videos) || [])],
    //     completed_docs: [...(uniqueArr(docs) || [])],
    //   } as UpdateLessonArgs;
    //   console.log('updateParamsObject :>> ', cloneUpdateParams);
    //   cloneUpdateParams.splice(idx, 1, updateParamsObject);
    //   console.log('updateParamsObject after splice :>> ', cloneUpdateParams);
    // }
    // console.log('cloneUpdateParams after splice out side:>> ', cloneUpdateParams);
    // dispatch(progressAction.updateProgress(cloneUpdateParams));
    dispatch(
      progressAction.updateProgress({
        lesson_id: lesson.id,
        completed_videos: [...(uniqueArr(videos) || [])],
        completed_docs: [...(uniqueArr(docs) || [])],
      } as UpdateLessonArgs),
    );
  }, []);

  useEffect(() => {
    if (isDoneVideo) {
      const idx = checkedVideo.indexOf(selectedVideo.id);
      if (idx >= 0) {
        setCheckedVideo([...checkedVideo, selectedVideo.id]);
      }
    }
  }, [isDoneVideo]);

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
        .video_${selectedVideo?.id} {
          background-color: #d1d7dc;
        }
        .video_${selectedDoc?.id} {
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
            width: 60px;
            letter-spacing: 1px;
          }
          .doc {
            width: 75px;
          }
        }
        .item_info {
          min-height: 50px;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          gap: 10px;
          .subject-name {
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            width: 100%;
            font-weight: 500;
            font-style: italic;
          }
        }
        .ant-collapse {
          width: 100%;
          .ant-collapse-content > .ant-collapse-content-box {
            padding: 0 !important;
          }
        }
        .ant-checkbox-inner {
          width: 18px;
          height: 18px;
        }
        /* .ant-checkbox-wrapper {
          &:hover {
            border-color: #000 !important;
          }
        }
        .ant-checkbox-checked {
          .ant-checkbox-inner {
            width: 18px;
            height: 18px;
            background: #000 !important;
            border-color: #000 !important;
            &::after {
              border-color: #000 !important;
            }
          }
        } */
      `}
    >
      <List.Item>
        <Collapse defaultActiveKey={['1']} destroyInactivePanel className="course_lesson">
          <Panel header={`${lesson?.name}`} key="1">
            {isShowLessonDetail ? (
              <>
                <Collapse defaultActiveKey={['1']}>
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
                    {lesson.videos?.map((v, i) => (
                      <div
                        key={i}
                        className={`course_video_item video_${v.id}`}
                        onClick={() => {
                          dispatch(progressAction.setSelectedVideo(v));
                          dispatch(progressAction.setCurrentLesson(lesson.id));
                        }}
                      >
                        {!isCourseDetail && (
                          // <input
                          //   value={v.id}
                          //   type="checkbox"
                          //   checked={checkedVideo.includes(v.id)}
                          //   onChange={(e) => {
                          //     if (checkedVideo.includes(e.target.value)) {
                          //       const newChecked = checkedVideo.filter((v) => v !== e.target.value);
                          //       setCheckedVideo(newChecked);
                          //       debounceCheckedItem(newChecked, checkedDoc);
                          //     } else {
                          //       setCheckedVideo((prev) => [...prev, e.target.value]);
                          //       debounceCheckedItem([...checkedVideo, e.target.value], checkedDoc);
                          //     }
                          //   }}
                          //   onClick={(e) => {
                          //     e.stopPropagation();
                          //   }}
                          //   width={18}
                          //   height={18}
                          // />
                          <Checkbox
                            onChange={handleCheckedVid}
                            checked={checkedVideo.includes(v.id)}
                            value={v.id}
                            onClick={(e) => e.stopPropagation()}
                          />
                        )}
                        <div className="item_info">
                          <p className="subject-name" title={v?.file_name}>{`${v?.file_name}`}</p>
                          {!v?.use_embedded_url && (
                            <div className="video_duration">
                              <PlayCircleFilled />
                              {`${DisplayDurationTime(v.duration)}s`}
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey="1">
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
                    {lesson.documents?.map((v, i) => (
                      <div
                        key={i}
                        className={`course_video_item video_${v.id}`}
                        onClick={() => {
                          dispatch(progressAction.setSelectedDoc(v));
                          dispatch(progressAction.setCurrentLesson(lesson.id));
                        }}
                      >
                        {!isCourseDetail && (
                          // <input
                          //   value={v.id}
                          //   type="checkbox"
                          //   checked={checkedDoc.includes(v.id)}
                          //   onChange={handleCheckedDoc}
                          //   onClick={(e) => {
                          //     e.stopPropagation();
                          //   }}
                          //   width={18}
                          //   height={18}
                          // />
                          <Checkbox
                            onChange={handleCheckedDoc}
                            checked={checkedDoc.includes(v.id)}
                            value={v.id}
                            onClick={(e) => e.stopPropagation()}
                          />
                        )}
                        <div className="item_info">
                          <div className="subject-name" title={v.name}>{`${v.name}`}</div>
                          <div className="video_duration doc">
                            <FileTextOutlined />
                            {`${(v?.file?.file_size / 1000000).toFixed(2)} MB`}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Panel>
                </Collapse>
              </>
            ) : (
              <div></div>
            )}
          </Panel>
        </Collapse>
      </List.Item>
    </div>
  );
};

export default LessonItem;
