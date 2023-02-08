/* eslint-disable react/prop-types */
import {
  CalendarOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
  FileSearchOutlined,
  MinusCircleOutlined,
  MoreOutlined,
  PlusCircleOutlined,
  StarFilled,
  SwapOutlined,
  SyncOutlined,
  VerticalLeftOutlined,
} from '@ant-design/icons';

import { css } from '@emotion/react';
import {
  Avatar,
  Breadcrumb,
  Button,
  Col,
  Divider,
  Dropdown,
  Form,
  Image,
  List,
  Menu,
  Row,
  Statistic,
  Tabs,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { isEmpty } from 'lodash';
import moment from 'moment';
import React, { useEffect, useState } from 'react';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import {
  CourseComment,
  Course,
  SaleStatusEnum,
  User,
  Pagination,
  RatingEnum,
  RateDocArgs,
  Rating,
  RateCourseArgs,
  MoveEnum,
} from 'src/lib/types/backend_modal';
import { courseAction } from 'src/lib/reducers/course/courseSlice';
import { RootState } from 'src/lib/reducers/model';
import CourseService from 'src/lib/api/course';
import { formatCurrencySymbol } from 'src/lib/utils/currency';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import RatingModal from '../modal/rating-modal';
import LessonItem from './course-progress/lesson-item';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CommentSection from '../comment';
import FeedbackSection from '../comment/feedbacks';
import { PageHeader } from '@ant-design/pro-layout';
const { Paragraph, Title } = Typography;

const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        ),
      },
      {
        key: '2',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        ),
      },
      {
        key: '3',
        label: (
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        ),
      },
    ]}
  />
);

const DropdownMenu = () => (
  <Dropdown key="more" overlay={menu} placement="bottomRight">
    <Button
      type="text"
      icon={
        <MoreOutlined
          style={{
            fontSize: 20,
          }}
        />
      }
    />
  </Dropdown>
);

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

  const userProfile = useSelector((state: RootState) => state.app.user);

  const fetchDocDetail = async (id: string) => {
    try {
      const course: Course = await CourseService.getCourseDetail(id);
      setCourse(course);
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
    fetchDocDetail(params.id);
    fetchComment(params.id);
  }, []);

  const content = (
    <div className="content-wrapper">
      <div className="content-detail">
        <Title>{course?.name}</Title>
        <Paragraph>
          <FileSearchOutlined />
          {'  '}
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
    if (course.sale_status !== SaleStatusEnum.BOUGHT) {
      try {
        setLoading(true);
        if (course.sale_status === SaleStatusEnum.AVAILABLE) {
          const newCourse = await CourseService.moveCourse(course.id, MoveEnum.LIST, MoveEnum.CART);
          setTimeout(() => {
            setCourse(newCourse);
          }, 1000);
        } else if (course.sale_status === SaleStatusEnum.IN_CART) {
          const newCourse = await CourseService.moveCourse(course.id, MoveEnum.CART, MoveEnum.LIST);
          setTimeout(() => {
            setCourse(newCourse);
          }, 1000);
        }
      } catch (error) {
        console.log('error', error);
        setLoading(false);
      } finally {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    } else {
      router.push(`${RoutePaths.COURSE_PROGRESS}?id=${course.id}`);
    }
  };

  const onAddComment = async (value) => {
    if (!value) return;
    const cmt = await CourseService.createComment('', course.id, userProfile.id, value);
    cmt && fetchComment(params.id);
  };
  const handleReply = async (content: string, item: CourseComment) => {
    const reply = await CourseService.createComment(item.id, course.id, userProfile.id, content);
    reply && fetchComment(params.id);
  };

  const rateCourse = async (course_id: string, rating: number, comment: string) => {
    try {
      if (rating === 1) rating = RatingEnum.ONE;
      if (rating === 2) rating = RatingEnum.TWO;
      if (rating === 3) rating = RatingEnum.THREE;
      if (rating === 4) rating = RatingEnum.FOUR;
      if (rating === 5) rating = RatingEnum.FIVE;

      const rate = await CourseService.rateCourse({
        course_id,
        rating,
        comment,
      } as RateCourseArgs);
      setMyRate(rate);
      course.rating_detail?.push(rate);
    } catch (error) {
      console.log('error', error);
    }
  };
  const handleSaveRating = () => {
    rateCourse(params.id, star, feedback);
    setOpenRatingModal(false);
  };

  const items = [
    {
      label: 'Bình luận',
      key: 'comment',
      children: <CommentSection />,
    }, // remember to pass the key prop
    {
      label: 'Nhận xét',
      key: 'feedback',
      children: <FeedbackSection rateList={course?.rating_detail || []} />,
    },
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

        .ant-btn-primary {
          width: 160px;
          height: 35px;
          border-radius: 2px;
          background-color: ${course.sale_status === SaleStatusEnum.AVAILABLE && '#17a2b8'};
          background-color: ${course.sale_status === SaleStatusEnum.IN_CART && '#ed5e68'};
          background-color: ${course.sale_status === SaleStatusEnum.PENDING && '#6c757d'};
          background-color: ${course.sale_status === SaleStatusEnum.BOUGHT && '#28a745'};
          border-color: unset;
          color: #fff;
          font-weight: 700;
          letter-spacing: 3px;
          height: 50px;
          border-radius: 4px;
          &:hover {
            letter-spacing: 6px;
            background-color: ${course.sale_status === SaleStatusEnum.AVAILABLE && '#17a2b8'};
            background-color: ${course.sale_status === SaleStatusEnum.IN_CART && '#ed5e68'};
            background-color: ${course.sale_status === SaleStatusEnum.PENDING && '#6c757d'};
            background-color: ${course.sale_status === SaleStatusEnum.BOUGHT && '#28a745'};
          }
          .anticon {
            vertical-align: inherit;
            font-size: 16px;
            font-weight: 700;
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
          <Breadcrumb.Item href={''}>Khoá học</Breadcrumb.Item>
          <Breadcrumb.Item href="">{course?.topic?.name}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <PageHeader
        title={course?.topic?.name}
        className="site-page-header"
        // subTitle="This is a subtitle"
        // tags={
        //   <>
        //     {tags(TagState.SUCCESS, `${course.sold} lượt mua`)}
        //     {tags(TagState.WAITING, 'Cập nhật gần đây')}

        //     {course.sale_status === SaleStatusEnum.PENDING && tags(TagState.PROCESSING, 'Chờ thanh toán')}
        //     {course.sale_status === SaleStatusEnum.BOUGHT && tags(TagState.SUCCESS, 'Đã mua')}
        //     {(course.sale_status === SaleStatusEnum.AVAILABLE || course.sale_status === SaleStatusEnum.IN_CART) &&
        //       tags(TagState.ERROR, `Bán chạy của chủ đề ${course.topic}`)}
        //   </>
        // }
        avatar={{
          src: 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
        }}
        extra={
          course.sale_status !== SaleStatusEnum.PENDING && [
            <Button
              key="1"
              type="primary"
              className="add-btn"
              loading={loading}
              onClick={handleUpdateBtn}
              target="_self"
              disabled={loading}
            >
              {course.sale_status === SaleStatusEnum.AVAILABLE
                ? 'THÊM'
                : course.sale_status === SaleStatusEnum.IN_CART
                ? 'XOÁ'
                : course.sale_status === SaleStatusEnum.BOUGHT
                ? 'VÀO HỌC'
                : ''}
              {course.sale_status === SaleStatusEnum.AVAILABLE ? (
                <PlusCircleOutlined />
              ) : course.sale_status === SaleStatusEnum.IN_CART ? (
                <MinusCircleOutlined />
              ) : course.sale_status === SaleStatusEnum.BOUGHT ? (
                <VerticalLeftOutlined />
              ) : (
                ''
              )}
            </Button>,
            course.sale_status === SaleStatusEnum.BOUGHT && (
              <Button
                key={2}
                type="primary"
                // className="rating-btn"
                className="add-btn"
                onClick={() => setOpenRatingModal(true)}
                style={{ backgroundColor: '#fff', color: '#000' }}
              >
                Đánh giá <StarFilled />
              </Button>
            ),
          ]
        }
      >
        <Content extraContent={undefined}>{content}</Content>
        <Row className="course_info">
          <Col lg={12} md={0} className="thumbnail_wrapper">
            <Image className="thumbnail" src={course?.thumbnail?.image_path} preview={false} />
          </Col>
          <Col lg={12} md={24} className="lessons">
            <p className="list_lesson_header">Các bài học trong khoá</p>
            <List
              className="list_lesson"
              itemLayout="horizontal"
              dataSource={course?.lessons}
              renderItem={(item) => <LessonItem lesson={item} isCourseDetail={true} />}
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
      <div className="rating-modal-1">
        <RatingModal
          visible={openRatingModal}
          countStar={(value) => setStar(value)}
          onChangeFeedback={(value) => setFeedback(value)}
          onClose={() => setOpenRatingModal(false)}
          onSave={handleSaveRating}
          rated={isEmpty(myRate) ? course?.my_rating : myRate}
        />
      </div>
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
