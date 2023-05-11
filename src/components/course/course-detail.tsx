import { Avatar, Breadcrumb, Button, Col, Divider, List, Row, Statistic, Tabs, Tag, Typography } from 'antd';
import { isEmpty } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { RootState } from 'src/lib/reducers/model';
import {
  Course,
  CourseComment,
  MoveEnum,
  Pagination,
  RateCourseArgs,
  Rating,
  RatingEnum,
  RequestStatus,
  SaleStatusEnum,
  UpdateLessonArgs,
} from 'src/lib/types/backend_modal';
import { formatCurrencySymbol } from 'src/lib/utils/currency';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

/* eslint-disable react/prop-types */
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  StarFilled,
  SwapOutlined,
  SyncOutlined,
  UserOutlined,
  VerticalLeftOutlined,
} from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout';
import { css } from '@emotion/react';

import CommentSection from '../comment';
import FeedbackSection from '../comment/feedbacks';
import RatingModal from '../modal/rating-modal';
import LessonItem from './course-progress/lesson-item';
import { BtnString } from 'src/lib/utils/enum';
import AppButton from '../button';

const { Paragraph, Title } = Typography;

const separator = <SwapOutlined />;
const IconLink = ({ src, text }) => (
  <a className="example-link">
    <img className="example-link-icon" src={src} alt={text} />
    {text}
  </a>
);

const Content = ({ children, extraContent }) => (
  <Row>
    <div
      style={{
        flex: 1,
      }}
    >
      {children}
    </div>
    <div className="image">{extraContent}</div>
  </Row>
);

enum TagState {
  SUCCESS = 'SUCCESS',
  PROCESSING = 'PROCESSING',
  ERROR = 'ERROR',
  WARNING = 'WARNING',
  WAITING = 'WAITING',
  STOP = 'STOP',
}

const tags = (tagState: TagState, text: string) => {
  switch (tagState) {
    case TagState.SUCCESS:
      return (
        <Tag icon={<CheckCircleOutlined />} color="success">
          {text}
        </Tag>
      );
      break;
    case TagState.PROCESSING:
      return (
        <Tag icon={<SyncOutlined spin />} color="processing">
          {text}
        </Tag>
      );
      break;
    case TagState.ERROR:
      return (
        <Tag icon={<CloseCircleOutlined />} color="error">
          {text}
        </Tag>
      );
      break;
    case TagState.WARNING:
      return (
        <Tag icon={<ExclamationCircleOutlined />} color="warning">
          {text}
        </Tag>
      );
      break;
    case TagState.WAITING:
      return (
        <Tag icon={<ClockCircleOutlined />} color="default">
          {text}
        </Tag>
      );
      break;
    case TagState.STOP:
      return (
        <Tag icon={<MinusCircleOutlined />} color="default">
          {text}
        </Tag>
      );
      break;

    default:
      break;
  }
};

interface DocDetailParams {
  id: string;
}

const CourseDetail: React.FC = () => {
  const params: DocDetailParams = useQueryParam();
  const [course, setCourse] = useState<Course>({} as Course);
  const [loading, setLoading] = useState(false);
  const [comment, setComment] = useState<CourseComment[]>([]);
  const dispatch = useDispatch();
  const [openRatingModal, setOpenRatingModal] = useState<boolean>(false);
  const [myRate, setMyRate] = useState<Rating>({} as Rating);
  const [star, setStar] = useState<number>(0);
  const [feedback, setFeedback] = useState<string>('');
  const listCourse = useSelector((state: RootState) => state.course.listCourse.results);
  const router = useRouter();
  const isClass = router.pathname.includes(RoutePaths.CLASS_DETAIL);
  const userProfile = useSelector((state: RootState) => state.app.user);
  const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);

  const fetchCourseDetail = async (id: string) => {
    try {
      if (isClass) {
        const course: Course = await CourseService.getClassDetail(id);
        setCourse(course);
      } else {
        const course: Course = await CourseService.getCourseDetail(id);
        setCourse(course);
      }
    } catch (error) {
      console.log('error get detail', error);
    }
  };

  const fetchComment = async (id: string) => {
    try {
      const cmt: Pagination<CourseComment> = await CourseService.listComments(id, 1000, 1);
      cmt && setComment(cmt.results);
    } catch (error) {
      console.log('error get cmt', error);
    }
  };

  useEffect(() => {
    fetchCourseDetail(params.id);
    fetchComment(params.id);
  }, []);

  const content = (
    <div className="content-wrapper">
      <div className="content-detail">
        <Paragraph>
          <FileSearchOutlined />
          {course?.description}
        </Paragraph>
        <div>
          <CalendarOutlined />
          {`  Ngày cập nhật: ${formatDate(course?.modified)}`}
        </div>
      </div>
    </div>
  );

  const handleUpdateBtn = async () => {
    if (course.sale_status !== SaleStatusEnum.BOUGHT && course.request_status !== RequestStatus.ACCEPTED) {
      setLoading(true);
      try {
        if (isClass) {
          const request = await CourseService.requestJoinClass(params?.id);
          setCourse((prev) => ({ ...prev, request_status: request.request_status }));
        } else {
          let newCourse = {} as Course;
          if (course.sale_status === SaleStatusEnum.AVAILABLE) {
            newCourse = await CourseService.moveCourse(course.id, MoveEnum.LIST, MoveEnum.CART);
          } else if (course.sale_status === SaleStatusEnum.IN_CART) {
            newCourse = await CourseService.moveCourse(course.id, MoveEnum.CART, MoveEnum.LIST);
          }
          setCourse(newCourse);
        }
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    } else {
      router.push(`${RoutePaths.COURSE_PROGRESS}?id=${course.id}&isClass=${isClass}`);
    }
  };

  const onAddComment = async (value) => {
    if (!value) return;
    try {
      const cmt = await CourseService.createComment('', course.id, userProfile.id, value);
      cmt && fetchComment(params.id);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };
  const handleReply = async (content: string, item: CourseComment) => {
    try {
      const reply = await CourseService.createComment(item.id, course.id, userProfile.id, content);
      reply && fetchComment(params.id);
    } catch (error) {
      console.log('error :>> ', error);
    }
  };

  // const rateCourse = async (course_id: string, rating: number, comment: string) => {
  //   try {
  //     if (rating === 1) rating = RatingEnum.ONE;
  //     if (rating === 2) rating = RatingEnum.TWO;
  //     if (rating === 3) rating = RatingEnum.THREE;
  //     if (rating === 4) rating = RatingEnum.FOUR;
  //     if (rating === 5) rating = RatingEnum.FIVE;

  //     const rate = await CourseService.rateCourse({
  //       course_id,
  //       rating,
  //       comment,
  //     } as RateCourseArgs);
  //     setMyRate(rate);
  //     course.rating_detail?.push(rate);
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // };
  // const handleSaveRating = () => {
  //   rateCourse(params.id, star, feedback);
  //   setOpenRatingModal(false);
  // };
  useEffect(() => {
    if (isClass) {
      if (course.request_status === RequestStatus.REQUESTED) {
        setBtnString(BtnString.REQUESTED);
      } else if (course.request_status === RequestStatus.AVAILABLE) {
        setBtnString(BtnString.AVAILABLE_REQUEST);
      } else if (course.request_status === RequestStatus.ACCEPTED) {
        setBtnString(BtnString.ACCEPTED);
      }
    } else {
      if (course.sale_status === SaleStatusEnum.AVAILABLE) {
        setBtnString(BtnString.AVAILABLE);
      } else if (course.sale_status === SaleStatusEnum.IN_CART) {
        setBtnString(BtnString.IN_CART);
      } else if (course.sale_status === SaleStatusEnum.PENDING) {
        setBtnString(BtnString.PENDING);
      } else if (course.sale_status === SaleStatusEnum.BOUGHT) {
        setBtnString(BtnString.BOUGHT);
      }
    }
  }, [course]);
  const items = [
    {
      label: 'Bình luận',
      key: 'comment',
      children: <CommentSection />,
    }, // remember to pass the key prop
    // {
    //   label: 'Nhận xét',
    //   key: 'feedback',
    //   children: <FeedbackSection rateList={course?.rating_detail || []} />,
    // },
  ];
  return (
    <div
      className="page-container"
      css={css`
        // max-width: 70%;
        text-align: left;
        .ant-breadcrumb {
          font-size: 20px;
          font-weight: 600;
        }

        .ant-btn-primary,
        .class-btn {
          width: 180px;
          height: 45px !important;
          border-radius: 2px;
          background-color: ${course.sale_status === SaleStatusEnum.AVAILABLE ||
          course.request_status === RequestStatus.AVAILABLE
            ? '#17a2b8'
            : ''} !important;
          background-color: ${course.sale_status === SaleStatusEnum.IN_CART ||
          course.request_status === RequestStatus.REQUESTED
            ? '#ed5e68'
            : ''}!important;
          background-color: ${course.sale_status === SaleStatusEnum.PENDING ? '#6c757d' : ''} !important;
          background-color: ${course.sale_status === SaleStatusEnum.BOUGHT ||
          course.request_status === RequestStatus.ACCEPTED
            ? '#28a745'
            : ''} !important;
          color: #000 !important;
          font-weight: 700;
          letter-spacing: 3px;
          letter-spacing: ${isClass ? '0px' : '3px'};

          border-radius: 4px;
          &:hover {
            letter-spacing: ${isClass ? '1px' : '6px'};
            /* background-color: ${course.sale_status === SaleStatusEnum.AVAILABLE ||
            course.request_status === RequestStatus.AVAILABLE
              ? '#17a2b8'
              : ''};
            background-color: ${course.sale_status === SaleStatusEnum.IN_CART ||
            course.request_status === RequestStatus.REQUESTED
              ? '#ed5e68'
              : ''};
            background-color: ${course.sale_status === SaleStatusEnum.PENDING && '#6c757d'};
            background-color: ${course.sale_status === SaleStatusEnum.BOUGHT ||
            (course.request_status === RequestStatus.ACCEPTED && '#28a745')}; */
          }

          .anticon-loading {
            font-size: 18px;
          }
        }
        .content-wrapper {
          font-size: 15px;
          .anticon {
            font-size: 25px;
          }
          .content-detail {
            border: 1px solid #000;
            border-left: none;
            border-right: none;
            padding: 20px 5px;
          }
        }
        a.ant-btn {
          padding-top: 8px !important;
        }
        .ant-page-header {
        }
        .course_info {
          height: 450px;
          margin: 10px 0;
          .ant-image {
            height: 450px;
            width: 100%;
            .thumbnail {
              height: 100%;
              border-radius: 10px;
            }
          }
          .lessons {
            max-height: 100%;
            overflow: auto;
          }
        }
        .list_lesson_header {
          text-align: center;
          font-size: 14px;
          font-weight: 550;
        }
        .list_lesson {
          padding: 0 15px;
        }
        @media (max-width: 992px) {
          .thumbnail_wrapper {
            display: none;
          }
        }
        // .comment-list {
        // 	max-height: 40vh;
        // 	overflow: auto;
        // }
        .ant-tooltip-content {
          min-width: 280px;
        }
        .add-btn {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
      `}
    >
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          {isClass ? (
            <Breadcrumb.Item href={`${RoutePaths.CLASS}?class=ALL`}>Lớp học</Breadcrumb.Item>
          ) : (
            <Breadcrumb.Item href={`${RoutePaths.COURSE}?course=ALL`}>Khoá học</Breadcrumb.Item>
          )}
          <Breadcrumb.Item>{course?.topic?.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <PageHeader
        title={course?.name}
        className="site-page-header"
        avatar={{
          src: `${course.thumbnail?.image_path}`,
          shape: 'square',
        }}
        extra={[
          <AppButton
            key={2}
            className="class-btn card-btn"
            btnTextColor="white"
            btnStyle="outline"
            btnSize={'small'}
            btnWidth={'full-w'}
            loading={loading}
            onClick={handleUpdateBtn}
          >
            {btnString}
            {course.sale_status === SaleStatusEnum.AVAILABLE ? (
              <PlusCircleOutlined />
            ) : course.sale_status === SaleStatusEnum.IN_CART ? (
              <MinusCircleOutlined />
            ) : course.sale_status === SaleStatusEnum.BOUGHT ? (
              <VerticalLeftOutlined />
            ) : (
              ''
            )}
          </AppButton>,
          // <Button
          //   key="1"
          //   type="primary"
          //   className="add-btn"
          //   loading={loading}
          //   onClick={handleUpdateBtn}
          //   target="_self"
          //   disabled={loading}
          // >
          //   {btnString}
          //   {course.sale_status === SaleStatusEnum.AVAILABLE ? (
          //     <PlusCircleOutlined />
          //   ) : course.sale_status === SaleStatusEnum.IN_CART ? (
          //     <MinusCircleOutlined />
          //   ) : course.sale_status === SaleStatusEnum.BOUGHT ? (
          //     <VerticalLeftOutlined />
          //   ) : (
          //     ''
          //   )}
          // </Button>,
          // course.sale_status === SaleStatusEnum.BOUGHT && (
          //   <Button
          //     key={2}
          //     type="primary"
          //     // className="rating-btn"
          //     className="add-btn"
          //     onClick={() => setOpenRatingModal(true)}
          //     style={{ backgroundColor: '#fff', color: '#000' }}
          //   >
          //     Đánh giá <StarFilled />
          //   </Button>
          // ),
        ]}
      >
        <Content extraContent={undefined}>{content}</Content>
        <Row className="course_info">
          {/* <Col lg={12} md={0} className="thumbnail_wrapper">
            <Image className="thumbnail" src={course?.thumbnail?.image_pat  h} preview={false} />
          </Col> */}
          <Col lg={24} md={24} className="lessons">
            <p className="list_lesson_header">Các bài học trong khoá</p>
            <List
              className="list_lesson"
              itemLayout="horizontal"
              dataSource={course?.lessons}
              renderItem={(item, index) => (
                <LessonItem
                  lesson={item}
                  isCourseDetail={true}
                  index={index}
                  isShowLessonDetail={course.sale_status === SaleStatusEnum.BOUGHT || !!course.request_status}
                  // onUpdate={(data) => console.log('')}
                />
              )}
            />
          </Col>
        </Row>
        <Statistic
          // title="GIÁ"
          value={formatCurrencySymbol(course?.price || 0, 'VND', true)}
          style={{
            marginLeft: '10px',
            fontWeight: 'bold',
          }}
        />
      </PageHeader>
      <Tabs items={items} className="tab-section" />

      {/* {course.sale_status === SaleStatusEnum.BOUGHT && (
				<div>
					{comment?.length ? (
						<List
							className="comment-list"
							header={`${comment.length} replies`}
							itemLayout="horizontal"
							dataSource={comment}
							renderItem={(item) => (
								<li>
									<CommentItem
										item={item}
										onAddReply={(value) => handleReply(value, item)}
									/>
								</li>
							)}
						/>
					) : (
						<div></div>
					)}
					<Comment
						avatar={
							<Avatar src="https://joeschmoe.io/api/v1/random" alt="Han Solo" />
						}
						content={<CommentForm onAddComment={onAddComment} />}
					/>
				</div>
			)} */}
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
  );
};

export default CourseDetail;
// {
// 	actions: [<span key="comment-list-reply-to-0">Reply to</span>],
// 	author: 'Han Solo',
// 	avatar: 'https://joeschmoe.io/api/v1/random',
// 	content: (
// 		<p>
// 			We supply a series of design principles, practical patterns and high
// 			quality design resources (Sketch and Axure), to help people create their
// 			product prototypes beautifully and efficiently.
// 		</p>
// 	),
// 	datetime: (
// 		<Tooltip title="2016-11-22 11:22:33">
// 			<span>8 hours ago</span>
// 		</Tooltip>
// 	),
// },
