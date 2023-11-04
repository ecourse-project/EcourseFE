import { Col, Collapse, Divider, List, Popover, Progress, Row, Tabs } from 'antd';
import _, { cloneDeep } from 'lodash';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import ReactPlayer from 'react-player';
import { useDispatch, useSelector } from 'react-redux';
import NotFile from 'src/assets/images/notfoundfile.png';
import CommentSection from 'src/components/comment';
import CourseService from 'src/lib/api/course';
import useDebouncedCallback from 'src/lib/hooks/useDebouncedCallback';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { RootState } from 'src/lib/reducers/model';
import { progressAction } from 'src/lib/reducers/progress/progressSlice';
import {
  Course,
  Lesson,
  QuizResult,
  QuizResultArgs,
  UpdateLessonArgs,
  UpdateProgressArgs,
  UserAnswersArgs,
} from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

import { DownOutlined, HomeOutlined, PlayCircleOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { AlertTextError } from 'src/components/alert/SweetAlert';
import PdfViewer from 'src/components/pdf';
import { useExportCertificate } from 'src/lib/hooks/useExportCerti';
import QuizSection from './Quiz';
import LessonItem from './lesson-item';
import { CourseProgressWrapper } from './style';

import { isIframeOrUrl, isURL, updateURLParams } from 'src/lib/utils/utils';

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

const CourseProgress = () => {
  const [course, setCourse] = useState<Course>();
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const params: CourseParams = useQueryParam();
  const [videoLoading, setVideoLoading] = useState<boolean>(true);
  const [sumVid, setSumVid] = useState<number>(0);
  const [sumDoc, setSumDoc] = useState<number>(0);

  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state.progress);
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
      const currentLesson = courseDetail.lessons.find((v) => v.documents?.some((doc) => doc.id === params.doc));
      if (currentLesson) {
        const currentDoc = currentLesson.documents.find((doc) => doc.id === params.doc);
        if (currentDoc) {
          dispatch(progressAction.setSelectedDoc(currentDoc));
        }
      } //set current video on reloading page
    } else if (params.video && courseDetail.lessons) {
      const currentLesson = courseDetail.lessons.find((v) => v.videos?.some((vid) => vid.id === params.video));
      if (currentLesson) {
        const currentVideo = currentLesson.videos.find((video) => video.id === params.video);
        if (currentVideo) {
          dispatch(progressAction.setSelectedVideo(currentVideo));
        }
      } //if there is not any current => assign first video by default
    } else if (params.quiz && courseDetail.lessons) {
      const currentLesson = courseDetail.lessons.find((v) => v.id === params.quiz);
      if (currentLesson && currentLesson.list_quiz) {
        dispatch(
          progressAction.setSelectedQuiz({
            isDone: currentLesson.is_done_quiz,
            lessonId: currentLesson.id,
            quiz: currentLesson.list_quiz,
            result: cloneDeep(currentLesson.quiz_detail || ({} as QuizResult)),
          }),
        );
      }
    } else if (courseDetail.lessons && !params.quiz) {
      const currentLesson = courseDetail.lessons[0];
      if (
        (currentLesson.videos?.length && currentLesson.videos[0].file_embedded_url) ||
        currentLesson.videos[0].file_path
      ) {
        updateURLParams(router, { video: currentLesson.videos[0].id });
      } else if (
        (currentLesson.documents?.length && currentLesson.documents[0].file.file_embedded_url) ||
        currentLesson.documents[0].file.file_path
      ) {
        updateURLParams(router, { video: currentLesson.documents[0].id });
      }
    }
  };

  const setInitialCheck = async (courseDetail: Course) => {
    const res = convertDataToUpdateParams(courseDetail.lessons || []);
    setSumDoc(courseDetail.lessons?.reduce((p, c) => p + c.documents.length, 0) || 0);
    setSumVid(courseDetail.lessons?.reduce((p, c) => p + c.videos.length, 0) || 0);

    dispatch(progressAction.setUpdateParams({ course_id: courseDetail.id, lessons: res }));
  };

  const getCourseDetail = async (id: string) => {
    try {
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
    }
  };

  useEffect(() => {
    return () => {
      dispatch(progressAction.setSelectedDoc(null));
      dispatch(progressAction.setSelectedVideo(null));
      dispatch(progressAction.setSelectedQuiz(null));
      dispatch(progressAction.setSelectedDoc(null));
    };
  }, []);

  useEffect(() => {
    if (!course) {
      getCourseDetail(params.id);
    } else setCurrentDocReloadPage(course);
  }, [params.doc, params.video, params.quiz]);

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

  const calculateProgress = () => {
    const doneDoc = state.updateParams?.lessons?.reduce((p, c) => p + c.completed_docs?.length, 0);
    const doneVid = state.updateParams?.lessons?.reduce((p, c) => p + c.completed_videos?.length, 0);
    return {
      done: doneDoc + doneVid,
      sum: sumDoc + sumVid,
      progress_num: ((doneDoc + doneVid) * 100) / (sumDoc + sumVid),
    } as IProgress;
  };

  const onSubmitQuiz = async (answer: UserAnswersArgs[]) => {
    try {
      // if (course?.is_done_quiz) {
      //   downloadPDF(params.id, course.name);
      //   // window.open(`${globalVariable.API_URL}api/quiz/certi/?course_id=${params.id}`, '_blank');
      // } else {
      const result = await CourseService.getQuizResult({
        course_id: course?.id,
        lesson_id: state.selectedQuiz?.lessonId,
        user_answers: answer,
      } as QuizResultArgs);
      await getCourseDetail(params.id);
      // }
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
                isIframeOrUrl(state.selectedVideo?.file_embedded_url) ||
                !isURL(state.selectedVideo?.file_embedded_url) ? (
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
                  !state.selectedDoc?.file?.use_embedded_url &&
                  state.selectedDoc?.file?.file_path) ||
                (!_.isEmpty(state.selectedDoc) &&
                  state.selectedDoc?.file?.use_embedded_url &&
                  !state.selectedDoc?.file?.file_embedded_url) ? (
                <div className="pdf_wrapper">
                  <PdfViewer url={state.selectedDoc?.file?.file_path || ''} />
                  {/* <Document file={state.selectedDoc?.file?.file_path} onLoadSuccess={onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                  </Document>
                  <p>
                    Page {pageNumber} of {numPages}
                  </p> */}
                </div>
              ) : state.selectedDoc?.file?.use_embedded_url ? (
                isIframeOrUrl(state.selectedDoc?.file?.file_embedded_url) ||
                !isURL(state.selectedDoc?.file?.file_embedded_url) ? (
                  <div
                    className="pdf_wrapper"
                    dangerouslySetInnerHTML={{ __html: state.selectedDoc?.file?.file_embedded_url || '' }}
                  />
                ) : (
                  <iframe
                    src={state.selectedDoc?.file?.file_embedded_url || ''}
                    title={state.selectedDoc?.name}
                    width="100%"
                    height="500px"
                    sandbox="allow-scripts allow-same-origin"
                  />
                )
              ) : state.selectedQuiz?.quiz?.length ? (
                /* if user unchecked a video while doing quiz, show modal to warn that the quiz will hide if they continue unchecking that video */

                <>
                  <QuizSection
                    onSubmit={onSubmitQuiz}
                    lessonQuiz={state.selectedQuiz}
                    courseId={course?.id || params.id}
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
