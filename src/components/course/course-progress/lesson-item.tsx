import { ExclamationCircleFilled, FileTextOutlined, PlayCircleFilled } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Card, Checkbox, Collapse, List, Modal } from 'antd';
import { debounce } from 'lodash';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ExamImg from 'src/assets/images/exam.png';
import AppSelect from 'src/components/select';
import { RootState } from 'src/lib/reducers/model';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import { Lesson, Quiz, QuizLocationEnum, UpdateLessonArgs } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';
import { DurationTime, formatDurationTime, uniqueArr, updateURLParams } from 'src/lib/utils/utils';
import { cloneDeep } from 'lodash';
import { QuizItemSetting } from 'src/lib/types/appType';
import { QuizAssignEnum } from 'src/lib/utils/enum';
const { Panel } = Collapse;
const { confirm } = Modal;

interface LessonItemProps {
  lesson: Lesson;
  isCourseDetail?: boolean;
  index?: number;
  isShowLessonDetail: boolean;
  listQuiz?: Quiz[];
  onSaveQuizSetting?: (quizSetting: QuizItemSetting[]) => void;
  isEditing?: boolean;
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
  const { lesson, isCourseDetail = false, isShowLessonDetail, listQuiz, isEditing } = props;
  const quizLocation = useSelector((state: RootState) => state.progress.quizLocation);
  const selectedDoc = useSelector((state: RootState) => state.progress.selectedDoc);
  const selectedVideo = useSelector((state: RootState) => state.progress.selectedVideo);
  const isDoneVideo = useSelector((state: RootState) => state.progress.isDoneVideo);
  const [checkedVideo, setCheckedVideo] = useState<string[]>(lesson.videos_completed || []);
  const [checkedDoc, setCheckedDoc] = useState<string[]>(lesson.docs_completed || []);

  const dispatch = useDispatch();
  const router = useRouter();
  const handleCheckedDoc = (e) => {
    if (checkedDoc.includes(e.target.value)) {
      const newChecked = checkedDoc.filter((v) => v !== e.target.value);
      setCheckedDoc(newChecked);
      debounceCheckedItem(checkedVideo, newChecked);
    } else {
      setCheckedDoc([...checkedDoc, e.target.value]);
      debounceCheckedItem(checkedVideo, [...checkedDoc, e.target.value]);
    }
  };

  const handleCheckedVid = (e) => {
    if (checkedVideo.includes(e.target.value)) {
      const newChecked = checkedVideo.filter((v) => v !== e.target.value);
      setCheckedVideo(newChecked);
      debounceCheckedItem(newChecked, checkedDoc);
    } else {
      setCheckedVideo([...checkedVideo, e.target.value]);
      debounceCheckedItem([...checkedVideo, e.target.value], checkedDoc);
    }
  };

  const debounceCheckedItem = useCallback((videos, docs) => {
    dispatch(
      progressAction.updateProgress({
        lesson_id: lesson.id,
        completed_videos: [...(uniqueArr(videos) || [])],
        completed_docs: [...(uniqueArr(docs) || [])],
      } as UpdateLessonArgs),
    );
  }, []);

  useEffect(() => {
    if (isDoneVideo && selectedVideo) {
      const idx = checkedVideo.indexOf(selectedVideo?.id);
      if (idx >= 0) {
        setCheckedVideo([...checkedVideo, selectedVideo?.id]);
      }
    }
  }, [isDoneVideo]);

  const showConfirm = () => {
    confirm({
      title: 'Chuyển đến trang tạo quiz mới?',
      icon: <ExclamationCircleFilled />,
      content: ' Các thay đổi sẽ không được lưu lại',
      onOk() {
        router.push(RoutePaths.CREATE_QUIZ);
      },
      centered: true,
    });
  };

  return (
    <div
      css={css`
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
        .quiz-name {
          padding-left: 30px;
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          &.disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
        }
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
                        <div>Bài học</div>
                        {!isCourseDetail ? (
                          <div>{`${checkedVideo.length} / ${lesson?.videos.length}`}</div>
                        ) : (
                          <div>{`${lesson?.videos.length} Bài học`}</div>
                        )}
                      </>
                    }
                    key={'1'}
                    className="course_list_video"
                  >
                    {lesson.videos?.map((v, i) => {
                      const haveQuiz = quizLocation
                        ?.find((item) => item.lesson_id === lesson.id)
                        ?.quiz?.find((u) => u.order === v.id)?.id;
                      let quizName = '';
                      if (haveQuiz) {
                        quizName = listQuiz?.find((quiz) => quiz.id === haveQuiz)?.name || '';
                      }
                      return (
                        <>
                          <div
                            key={i}
                            className={`course_video_item video_${v.id}`}
                            onClick={() => {
                              updateURLParams(router, { lesson: lesson.id, doc: '', video: v.id, quiz: '' });
                            }}
                          >
                            {!isCourseDetail && (
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
                          <div>
                            {isEditing ? (
                              <AppSelect
                                placeholder="Chọn quiz"
                                quizSelect
                                value={haveQuiz}
                                itemSelect={listQuiz?.map((quiz) => {
                                  return {
                                    value: quiz.id,
                                    label: quiz.name,
                                  };
                                })}
                                handleChange={(id) => {
                                  if (id === QuizAssignEnum.CREATE_NEW_QUIZ) showConfirm();
                                  else {
                                    dispatch(
                                      progressAction.updateQuizLocation({
                                        lessonId: lesson.id,
                                        questionId: id,
                                        documentId: v.id,
                                      }),
                                    );
                                  }
                                }}
                              />
                            ) : (
                              !!haveQuiz && (
                                <Card
                                  className="quiz_header"
                                  css={css`
                                    .ant-card-body {
                                      padding: 11px;
                                    }
                                  `}
                                >
                                  <div
                                    className={`quiz-name ${lesson.list_quiz?.length ? '' : 'disabled'}`}
                                    onClick={() => {
                                      if (!lesson.list_quiz.length) return;
                                      updateURLParams(router, {
                                        doc: '',
                                        video: '',
                                        lesson: lesson.id,
                                        quiz: haveQuiz,
                                      });
                                    }}
                                  >
                                    <Image src={ExamImg} alt="quiz-img" width={30} height={30} />
                                    <span>
                                      {`Bài tập - `}
                                      <strong>{quizName}</strong>
                                    </span>
                                  </div>
                                </Card>
                              )
                            )}
                          </div>
                        </>
                      );
                    })}
                  </Panel>
                </Collapse>
                <Collapse defaultActiveKey="1">
                  <Panel
                    header={
                      <>
                        <div>Tài liệu bài giảng</div>
                        {!isCourseDetail ? (
                          <div>{`${checkedDoc.length} / ${lesson?.documents.length}`}</div>
                        ) : (
                          <div>{`${lesson?.documents.length} Tài liệu bài giảng`}</div>
                        )}
                      </>
                    }
                    key={'1'}
                    className="course_list_video"
                  >
                    {lesson.documents?.map((v, i) => {
                      const haveQuiz = quizLocation
                        ?.find((item) => item.lesson_id === lesson.id)
                        ?.quiz?.find((u) => u.order === v.id)?.id;
                      let quizName = '';
                      if (haveQuiz) {
                        quizName = listQuiz?.find((quiz) => quiz.id === haveQuiz)?.name || '';
                      }
                      return (
                        <>
                          <div
                            key={i}
                            className={`course_video_item video_${v.id}`}
                            onClick={() => {
                              updateURLParams(router, { doc: v.id, video: '', quiz: '', lesson: lesson.id });
                            }}
                          >
                            {!isCourseDetail && (
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
                          <div>
                            {isEditing ? (
                              <AppSelect
                                placeholder="Chọn quiz"
                                quizSelect
                                value={haveQuiz}
                                itemSelect={listQuiz?.map((quiz) => {
                                  return {
                                    value: quiz.id,
                                    label: quiz.name,
                                  };
                                })}
                                handleChange={(id) => {
                                  if (id === QuizAssignEnum.CREATE_NEW_QUIZ) showConfirm();
                                  else {
                                    dispatch(
                                      progressAction.updateQuizLocation({
                                        lessonId: lesson.id,
                                        questionId: id,
                                        documentId: v.id,
                                      }),
                                    );
                                  }
                                }}
                              />
                            ) : (
                              !!haveQuiz && (
                                <Card
                                  className="quiz_header"
                                  css={css`
                                    .ant-card-body {
                                      padding: 11px;
                                    }
                                  `}
                                >
                                  <div
                                    className={`quiz-name ${lesson.list_quiz?.length ? '' : 'disabled'}`}
                                    onClick={() => {
                                      if (!lesson.list_quiz.length) return;
                                      updateURLParams(router, {
                                        doc: '',
                                        video: '',
                                        lesson: lesson.id,
                                        quiz: haveQuiz,
                                      });
                                    }}
                                  >
                                    <Image src={ExamImg} alt="quiz-img" width={30} height={30} />
                                    <span>
                                      {`Bài tập - `}
                                      <strong>{quizName}</strong>
                                    </span>
                                  </div>
                                </Card>
                              )
                            )}
                          </div>
                        </>
                      );
                    })}
                  </Panel>
                </Collapse>

                {/* <Card
                  className="quiz_header"
                  css={css`
                    .ant-card-body {
                      padding: 11px;
                    }
                  `}
                >
                  <div
                    className={`quiz-name ${lesson.list_quiz?.length ? '' : 'disabled'}`}
                    onClick={() => {
                      if (!lesson.list_quiz.length) return;
                      updateURLParams(router, { doc: '', video: '', lesson: lesson.id, quiz: lesson.id });
                    }}
                  >
                    <Image src={ExamImg} alt="quiz-img" width={30} height={30} />
                    <span>
                      {`Bài tập - `}
                      <strong>{lesson?.name}</strong>
                    </span>
                  </div>
                </Card> */}
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
