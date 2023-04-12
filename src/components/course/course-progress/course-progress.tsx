import '@react-pdf-viewer/core/lib/styles/index.css';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import { Col, Collapse, Divider, List, Popover, Progress, Row, Tabs } from 'antd';
import _, { isEmpty } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import ExamImg from 'src/assets/images/exam.png';
import CommentSection from 'src/components/comment';
import CourseService from 'src/lib/api/course';
import globalVariable from 'src/lib/config/env';
import useDebouncedCallback from 'src/lib/hooks/useDebouncedCallback';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { RootState } from 'src/lib/reducers/model';
// import reducer, { CourseProgressAction, CourseProgressContextType } from './context/reducer';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import {
  AnswerChoiceEnum,
  Course,
  CourseDocument,
  Lesson,
  OFileUpload,
  Quiz,
  QuizResult,
  QuizResultArgs,
  Rating,
  UpdateLessonArgs,
  UpdateProgressArgs,
  UserAnswersArgs,
} from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import { DownOutlined, HomeOutlined, PlayCircleOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

import PdfViewer from '../../pdf';
import LessonItem from './lesson-item';
import QuizSection from './quiz';

const { Panel } = Collapse;
export interface CourseParams {
  id: string;
  lesson?: string;
  video?: string;
  doc?: string;
  tab?: string;
  exam?: boolean;
  isClass?: boolean;
}

interface IProgress {
  done: number;
  sum: number;
  progress_num: number;
}

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
  const userProfile = useSelector((state: RootState) => state.app.user);
  const [myRate, setMyRate] = useState<Rating>({} as Rating);
  const [isShowQuiz, setIsShowQuiz] = useState<boolean>(params?.exam || false);
  const [listQuiz, setListQuiz] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultQuiz, setResultQuiz] = useState<QuizResult>();
  const [quizLoading, setQuizLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.progress);
  const [checkedItems, setCheckedItems] = useState<UpdateLessonArgs[]>([]);
  const isInitialMount = useRef(true);
  const router = useRouter();
  const items = [
    {
      label: 'Bình luận',
      key: 'comment',
      children: <CommentSection />,
    },
  ];

  const getCourseDetail = async (id: string) => {
    try {
      setLoading(true);
      let courseDetail: Course = {} as Course;
      if (params.isClass) {
        courseDetail = await CourseService.getClassDetail(id);
        setCourse(courseDetail);
      } else {
        courseDetail = await CourseService.getCourseDetail(id);
        setCourse(courseDetail);
      }
      // set current doc when reload page
      if (params.doc && courseDetail.lessons) {
        const idxLesson = courseDetail?.lessons.findIndex((v) => v.id === params.lesson);
        if (idxLesson >= 0) {
          const idxDoc = courseDetail.lessons[idxLesson].documents.findIndex((doc) => doc.id === params.doc);
          if (idxDoc >= 0) {
            dispatch(progressAction.setSelectedDoc(courseDetail.lessons[idxLesson].documents[idxDoc]));
          }
        } //set current video on reloading page
      } else if (params.video && courseDetail.lessons) {
        const idxLesson = courseDetail?.lessons.findIndex((v) => v.id === params.lesson);
        if (idxLesson >= 0) {
          const idxVid = courseDetail.lessons[idxLesson].videos.findIndex((video) => video.id === params.video);
          if (idxVid >= 0) {
            dispatch(progressAction.setSelectedDoc(courseDetail.lessons[idxLesson].documents[idxVid]));
          }
        } //if there is not any current => assign first video by default
      } else if (courseDetail.lessons && !params.exam) {
        dispatch(progressAction.setCurrentLesson(courseDetail.lessons[0].id));
        dispatch(progressAction.setSelectedVideo(courseDetail.lessons[0].videos[0]));
      } else if (params.exam) {
        //doing quiz
        setIsShowQuiz(true);
      }

      // set initial checked item and checked answer
      const res = courseDetail?.lessons?.map((v) => {
        // setSumDoc(sumDoc + v?.documents?.length);
        // setSumVid(sumVid + v?.videos?.length);
        return {
          lesson_id: v.id,
          completed_docs: [...(v?.docs_completed || [])],
          completed_videos: [...(v?.videos_completed || [])],
        } as UpdateLessonArgs;
      });
      setSumDoc(courseDetail.lessons?.reduce((p, c) => p + c.documents.length, 0) || 0);
      setSumVid(courseDetail.lessons?.reduce((p, c) => p + c.videos.length, 0) || 0);

      setCheckedItems(res || []);
      const quizList = await CourseService.listQuiz(courseDetail.id);
      setListQuiz(quizList);
      const initialAnswer = quizList?.map(
        (v) =>
          ({
            quiz_id: v.id,
            answer_choice: AnswerChoiceEnum.NO_CHOICE,
          } as UserAnswersArgs),
      );
      dispatch(progressAction.updateCheckedAnswer(initialAnswer));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseDetail(params.id);
  }, []);

  const onUpdate = async (data: UpdateLessonArgs) => {
    const arrWithoutDataUpdate = checkedItems.filter((v) => v.lesson_id !== data.lesson_id);
    arrWithoutDataUpdate.push(data);

    const updateParams: UpdateProgressArgs = {
      course_id: params.id || '',
      lessons: arrWithoutDataUpdate,
    };
    debounceUpdateProgress(updateParams);
    setCheckedItems([...arrWithoutDataUpdate]);
  };

  const debounceUpdateProgress = useDebouncedCallback(async (params: UpdateProgressArgs) => {
    try {
      if (course?.course_of_class) await CourseService.updateClassProgress(params);
      else await CourseService.updateLessonProgress(params);
    } catch (error) {
      console.log('error update', error);
    }
  }, 1000);

  useEffect(() => {
    const videoId = state.selectedVideo?.id;
    const docId = state.selectedDoc?.file?.id;
    router.push(
      {
        pathname: '/course-progress',
        query: {
          ...router.query,
          lesson: state.currentLesson,
          video: videoId,
          doc: docId,
          // exam: !videoId && !docId ? 'true' : '',
        },
      },
      undefined,
      { shallow: true },
    );
    if (!isEmpty(state.selectedDoc) || !isEmpty(state.selectedVideo)) {
      setIsShowQuiz(false);
    }
  }, [state.selectedDoc, state.selectedVideo, isShowQuiz]);

  // useEffect(() => {
  //   console.log('router.query :>> ', router.query);
  // }, [router.query]);
  useEffect(() => {
    setVideoLoading(true);
  }, [state.selectedVideo]);

  useEffect(() => {
    //reload current watch
    const lesson: Lesson | undefined = course ? course?.lessons?.filter((v) => v.id === params?.lesson)[0] : undefined;
    if (params.video) {
      const selected = lesson?.videos?.filter((v) => v.id === params.video)[0];
      dispatch(progressAction.setSelectedVideo(selected));
    } else if (params.doc) {
      const selected = lesson?.documents?.filter((v) => v.file.id === params.doc)[0];
      dispatch(progressAction.setSelectedDoc(selected));
    }
  }, [course]);

  const calculateProgress = () => {
    const doneDoc = state.updateParams.reduce((p, c) => p + c.completed_docs?.length, 0);
    const doneVid = state.updateParams.reduce((p, c) => p + c.completed_videos?.length, 0);
    return {
      done: doneDoc + doneVid,
      sum: sumDoc + sumVid,
      progress_num: ((doneDoc + doneVid) * 100) / (sumDoc + sumVid),
    } as IProgress;
  };
  const showQuiz = () => {
    dispatch(progressAction.setSelectedDoc({}));
    setIsShowQuiz(true);
  };

  const onSubmitQuiz = async () => {
    try {
      if (course?.is_done_quiz) {
        console.log('chung chi');
        await CourseService.downloadCerti(params.id);
        window.open(`${globalVariable.API_URL}api/quiz/certi/?course_id=${params.id}`, '_blank');
      } else {
        const result = await CourseService.getQuizResult({
          course_id: course?.id,
          answers: state.answerSheet,
        } as QuizResultArgs);
        setResultQuiz(result);
        await getCourseDetail(params.id);
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    console.log('videoLoading :>> ', videoLoading);
  }, [videoLoading]);
  const playerRef = React.useRef(null);
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    preload: 'auto',
    fluid: true,
    liveui: true,
    playbackRates: [0.5, 1, 1.5, 2],
    controlBar: {
      skipButtons: {
        forward: 5,
      },
    },
    displayCurrentQuality: true,
    defaultQuality: 'auto',
    qualities: [
      { name: 'Auto', value: 'auto' },
      { name: '360p', value: '360' },
      { name: '720p', value: '720' },
      { name: '1080p', value: '1080' },
    ],
    sources: [
      {
        src: state.selectedVideo?.file_path,
        type: 'video/mp4',
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on('waiting', () => {
      console.log('player is waiting');
    });

    player.on('dispose', () => {
      console.log('player will dispose');
    });
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
          justify-content: space-between;
          padding: 0 40px;

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
            color: #fff !important;
            font-weight: 600;
            line-height: 50px;
            font-size: 18px;
            cursor: pointer;
          }
          .progress {
            display: flex;
            height: 100%;
            align-items: center;
            background: #000;
            width: unset;
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
          .header-group {
            width: fit-content;
            display: flex;
            justify-content: space-evenly;
            align-items: baseline;
            gap: 10px;
            .home_header {
              color: #fff !important;
              font-size: 26px;
              font-weight: 600;
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
            width: 100%;
            video {
              border-radius: 5px;
            }
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
            /* visibility: ${videoLoading ? 'hidden' : ''}; */
            width: 100%;
            height: 16.7%;
            margin: auto;
            video {
              border-radius: 5px;
            }
          }
        }
        .ant-collapse {
          width: 100%;

          .ant-collapse-content > .ant-collapse-content-box {
            padding: 16px;
          }
        }
        /* } */
        .tab-section {
          padding: 50px;
        }
      `}
    >
      <Row className="course_header_wrapper">
        {/* <Col span={20}> */}
        <div className="header-group">
          <Link href={`${RoutePaths.HOME}`} className="home_header">
            <HomeOutlined
              css={css`
                font-size: 20px !important;
              `}
            />
          </Link>
          <SwapOutlined />
          <div
            className="course_header"
            onClick={() => {
              router.back();
            }}
          >
            {course?.name}
          </div>
        </div>
        {/* </Col> */}
        {/* <Col span={4} className="right_box"> */}
        <div className="progress">
          <Progress
            className="progress_circle"
            type="circle"
            strokeColor={{
              '0%': '#108ee9',
              '100%': '#87d068',
            }}
            percent={Math.round(calculateProgress().progress_num)}
          />
          <span className="progress_label">
            <Popover
              content={`${calculateProgress().done + '/' + calculateProgress().sum} đã hoàn thành`}
              placement="bottom"
            >
              Tiến độ
              <DownOutlined />
            </Popover>
          </span>
        </div>
        {/* </Col> */}
      </Row>
      <Divider />
      <div className="">
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
                          onContextMenu: (e: { preventDefault: () => any }) => e.preventDefault(),
                          controlsList: 'nodownload',
                        },
                      },
                    }}
                    onEnded={() => {
                      dispatch(progressAction.setCompleteVideo());
                    }}
                    // onProgress={(v) => console.log('progress', v)}
                    onError={(e) => console.log('video errror', e)}
                    playing={false}
                    playsinline
                    playIcon={<PlayCircleOutlined />}
                    light={false}
                    stopOnUnmount={false}
                  />
                  {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
                </div>
              ) : !_.isEmpty(state.selectedDoc) ? (
                <div className="pdf_wrapper">
                  <PdfViewer url={state.selectedDoc?.file?.file_path} />
                </div>
              ) : isShowQuiz ? (
                /* if user unchecked a video while doing quiz, show modal to warn that the quiz will hide if they continue unchecking that video */
                <QuizSection
                  listQuiz={listQuiz}
                  onSubmit={onSubmitQuiz}
                  result={course?.quiz_detail}
                  isDone={course?.is_done_quiz || false}
                  loading={loading}
                  courseId={course?.id || params.id}
                  mark={course?.mark || 0} //remove later
                />
              ) : (
                <>{isShowQuiz}</>
              )}
            </Row>
            <Tabs items={items} defaultActiveKey={params.tab} className="tab-section" />
          </Col>
          <Col span={8} className="course_list">
            {calculateProgress().progress_num === 100 ? (
              <Collapse defaultActiveKey={['1']} collapsible="disabled">
                <Panel header="Bài kiểm tra" key="1" showArrow={false} className="quiz_header">
                  <div className="quiz_name" onClick={showQuiz}>
                    <Image src={ExamImg} alt="quiz-img" width={30} height={30} />
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
              renderItem={(item, i) => (
                <LessonItem
                  lesson={item}
                  index={i}
                  isShowLessonDetail={true}
                  // courseDetail={course || ({} as Course)}
                  onUpdate={onUpdate}
                />
              )}
            />
          </Col>
        </Row>
        {/* <div className="rating-modal-1">
          <RatingModal
            visible={openRatingModal}
            countStar={(value) => setStar(value)}
            onChangeFeedback={(value) => setFeedback(value)}
            onClose={() => setOpenRatingModal(false)}
            onSave={handleSaveRating}
            rated={isEmpty(myRate) ? course?.my_rating : myRate}
          />
        </div> */}
      </div>
    </div>
  );
};

export default CourseProgress;
