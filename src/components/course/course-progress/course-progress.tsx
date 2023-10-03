import { Col, Collapse, Divider, List, Popover, Progress, Row, Tabs } from 'antd';
import _, { isEmpty } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import NotFile from 'src/assets/images/notfoundfile.png';
import CommentSection from 'src/components/comment';
import CourseService from 'src/lib/api/course';
import globalVariable from 'src/lib/config/env';
import useDebouncedCallback from 'src/lib/hooks/useDebouncedCallback';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { RootState } from 'src/lib/reducers/model';
// import reducer, { CourseProgressAction, CourseProgressContextType } from './context/reducer';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import {
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
import LessonItem from './lesson-item';
import PdfViewer from 'src/components/pdf';
import { useExportCertificate } from 'src/lib/hooks/useExportCerti';
import { CourseProgressWrapper } from './style';
import { AlertTextError } from 'src/components/alert/SweetAlert';
import { isIframeOrUrl } from 'src/lib/utils/utils';
import QuizSection from './Quiz';

const { Panel } = Collapse;
export interface CourseParams {
  id: string;
  lesson?: string;
  video?: string;
  doc?: string;
  tab?: string;
  exam?: boolean;
  isClass?: boolean;
  quiz?: string;
}

interface IProgress {
  done: number;
  sum: number;
  progress_num: number;
}

export const convertDataToUpdateParams = (lessons: Lesson[]) => {
  const res = lessons?.map((v) => {
    // setSumDoc(sumDoc + v?.documents?.length);
    // setSumVid(sumVid + v?.videos?.length);
    return {
      lesson_id: v.id,
      completed_docs: [...(v?.docs_completed || [])],
      completed_videos: [...(v?.videos_completed || [])],
    } as UpdateLessonArgs;
  });
  return res;
};
const ifr = `<iframe width="1280" height="720" src="https://www.youtube.com/embed/UQda4-sVMzk?list=RDUQda4-sVMzk" title="Trọn Vẹn Nghĩa Tình (Orinn Remix) - Ưng Hoàng Phúc x Wowy | Nhạc Trẻ Remix Xu Hướng Hot Tiktok 2022" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
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
  const [isShowQuiz, setIsShowQuiz] = useState<boolean>(true || params?.exam || false);
  // const [isShowQuiz, setIsShowQuiz] = useState<boolean>(true);

  const [listQuiz, setListQuiz] = useState<Quiz[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [resultQuiz, setResultQuiz] = useState<QuizResult>();
  const [quizLoading, setQuizLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.progress);
  const [checkedItems, setCheckedItems] = useState<UpdateLessonArgs[]>([]);
  const isInitialMount = useRef(true);
  const router = useRouter();
  const [progressNumber, setProgressNumber] = useState<number>(course?.progress || 0);

  const { downloadPDF, DownloadAnchor } = useExportCertificate({
    certificateExport: CourseService.downloadCerti,
    onFailed: (err) => {
      AlertTextError('Download Error', err.message, () => {});
    },
  });

  const items = [
    {
      label: 'Bình luận',
      key: 'comment',
      children: <CommentSection />,
    },
  ];

  const setCurrentDocReloadPage = (courseDetail: Course) => {
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
    } else if (courseDetail.lessons && !params.quiz) {
      dispatch(progressAction.setCurrentLesson(courseDetail.lessons[0].id));
      dispatch(progressAction.setSelectedVideo(courseDetail.lessons[0].videos[0]));
    } else if (params.quiz) {
      //doing quiz
      setIsShowQuiz(true);
    }
  };

  const setInitialCheck = async (courseDetail: Course) => {
    // set initial checked item and checked answer
    const res = convertDataToUpdateParams(courseDetail.lessons || []);
    // const res = courseDetail?.lessons?.map((v) => {
    //   // setSumDoc(sumDoc + v?.documents?.length);
    //   // setSumVid(sumVid + v?.videos?.length);
    //   return {
    //     lesson_id: v.id,
    //     completed_docs: [...(v?.docs_completed || [])],
    //     completed_videos: [...(v?.videos_completed || [])],
    //   } as UpdateLessonArgs;
    // });
    setSumDoc(courseDetail.lessons?.reduce((p, c) => p + c.documents.length, 0) || 0);
    setSumVid(courseDetail.lessons?.reduce((p, c) => p + c.videos.length, 0) || 0);

    setCheckedItems(res || []);
    dispatch(progressAction.setUpdateParams({ course_id: courseDetail.id, lessons: res }));

    // const initialAnswer = quizList?.map(
    //   (v) =>
    //     ({
    //       quiz_id: v.id,
    //       answer_choice: AnswerChoiceEnum.NO_CHOICE,
    //     }) as UserAnswersArgs,
    // );
    // dispatch(progressAction.updateCheckedAnswer(initialAnswer));
  };

  const getCourseDetail = async (id: string) => {
    try {
      setLoading(true);
      let courseDetail: Course = {} as Course;
      if (String(params.isClass) === 'true') {
        courseDetail = await CourseService.getClassDetail(id);
        setCourse(courseDetail);
        setProgressNumber(courseDetail.progress || 0);
      } else {
        courseDetail = await CourseService.getCourseDetail(id);
        setCourse(courseDetail);
        setProgressNumber(courseDetail.progress || 0);
      }
      // set current doc when reload page
      setCurrentDocReloadPage(courseDetail);
      dispatch(progressAction.setCourse(courseDetail));
      // set initial checked item and checked answer
      await setInitialCheck(courseDetail);
    } catch (error: any) {
      // AlertTextError('Error', error?.response?.data?.detail, () => router.back());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCourseDetail(params.id);
  }, []);

  const debounceUpdateProgress = useDebouncedCallback(async (params: UpdateProgressArgs) => {
    try {
      if (course?.course_of_class) {
        const prN = await CourseService.updateClassProgress(params);
        setProgressNumber(prN.progress || 0);
      } else {
        const prN = await CourseService.updateLessonProgress(params);
        setProgressNumber(prN.progress || 0);
      }
    } catch (error) {
      console.log('error update', error);
    }
  }, 1000);

  useEffect(() => {
    const videoId = state.selectedVideo?.id;
    const docId = state.selectedDoc?.file?.id;
    if (videoId || docId)
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
    const doneDoc = state.updateParams?.lessons?.reduce((p, c) => p + c.completed_docs?.length, 0);
    const doneVid = state.updateParams?.lessons?.reduce((p, c) => p + c.completed_videos?.length, 0);
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
        downloadPDF(params.id, course.name);
        // window.open(`${globalVariable.API_URL}api/quiz/certi/?course_id=${params.id}`, '_blank');
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

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  return (
    <CourseProgressWrapper
      css={css`
        .course_content {
          .page_group {
            .anticon-left-circle {
              cursor: ${pageNumber === 1 ? 'not-allowed' : 'pointer'};
            }
            .anticon-right-circle {
              cursor: ${pageNumber === numPages ? 'not-allowed' : 'pointer'};
            }
          }
        }

        @media (min-width: 1500px) {
          .video_wrapper {
            /* visibility: ${videoLoading ? 'hidden' : ''}; */
          }
        }
        .video_wrapper {
          iframe {
            max-width: 100%;
            max-height: 450px;
          }
        }
        .pdf_wrapper {
          iframe {
            width: 100%;
            height: 750px;
            max-width: 100%;
            max-height: 1000px;
          }
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
            percent={Math.round(state.courseDetail.progress || 0)}
          />
          <span className="progress_label">
            <Popover content={`${state.courseDetail.progress} đã hoàn thành`} placement="bottom">
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
              {(!_.isEmpty(state.selectedVideo) &&
                !state.selectedVideo?.use_embedded_url &&
                state.selectedVideo?.file_path) ||
              (!_.isEmpty(state.selectedVideo) &&
                state.selectedVideo?.use_embedded_url &&
                !state.selectedVideo?.file_embedded_url) ? (
                <>
                  <div>
                    <ReactPlayer
                      url={state.selectedVideo?.file_path}
                      width="100%"
                      height="100%"
                      controls={true}
                      onReady={() => {
                        setVideoLoading(false);
                      }}
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
                      onError={(e) => console.log('video loader error', e)}
                      playing={false}
                      playsinline
                      playIcon={<PlayCircleOutlined />}
                      light={false}
                      stopOnUnmount={false}
                    />

                    {/* <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> */}
                  </div>
                </>
              ) : state.selectedVideo?.use_embedded_url ? (
                isIframeOrUrl(state.selectedVideo?.file_embedded_url) ? (
                  <div
                    className="video_wrapper"
                    dangerouslySetInnerHTML={{ __html: state.selectedVideo?.file_embedded_url || '' }}
                  ></div>
                ) : (
                  <iframe
                    src={state.selectedVideo?.file_embedded_url || ''}
                    title={state.selectedVideo.file_name}
                    width="100%"
                    height="500px"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )
              ) : (!_.isEmpty(state.selectedDoc) &&
                  !state.selectedDoc.file?.use_embedded_url &&
                  state.selectedDoc?.file?.file_path) ||
                (!_.isEmpty(state.selectedDoc) &&
                  state.selectedDoc.file?.use_embedded_url &&
                  !state.selectedDoc.file?.file_embedded_url) ? (
                <div className="pdf_wrapper">
                  <div>Vao pdf</div>
                  <PdfViewer url={state.selectedDoc?.file?.file_path || ''} />
                  {/* <Document file={state.selectedDoc?.file?.file_path} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p> */}
                </div>
              ) : state.selectedDoc?.file?.use_embedded_url ? (
                isIframeOrUrl(state.selectedDoc?.file?.file_embedded_url) ? (
                  <div
                    className="pdf_wrapper"
                    dangerouslySetInnerHTML={{ __html: state.selectedDoc?.file?.file_embedded_url || '' }}
                  />
                ) : (
                  <iframe
                    src={state.selectedDoc?.file?.file_embedded_url || ''}
                    title={state.selectedDoc.name}
                    width="100%"
                    height="500px"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )
              ) : state.selectedQuiz.length ? (
                /* if user unchecked a video while doing quiz, show modal to warn that the quiz will hide if they continue unchecking that video */

                <>
                  <QuizSection
                    listQuiz={state.selectedQuiz}
                    onSubmit={onSubmitQuiz}
                    result={course?.quiz_detail}
                    isDone={course?.is_done_quiz || false}
                    loading={loading}
                    courseId={course?.id || params.id}
                    mark={course?.mark || 0} //remove later
                  />
                </>
              ) : (
                <>
                  <Image src={NotFile} alt="no file found" width={200} height={200} style={{ margin: '100px auto' }} />
                </>
              )}
            </Row>
            <Tabs items={items} defaultActiveKey={params.tab} className="tab-section" />
          </Col>
          <Col span={8} className="course_list">
            <List
              itemLayout="horizontal"
              dataSource={course?.lessons}
              renderItem={(item, i) => (
                <LessonItem
                  lesson={item}
                  index={i}
                  isShowLessonDetail={true}
                  // courseDetail={course || ({} as Course)}
                  // onUpdate={(data) => onUpdate(data, JSON.parse(JSON.stringify(checkedItems)))}
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
    </CourseProgressWrapper>
  );
};

export default CourseProgress;
