import { Breadcrumb, Col, Divider, List, Row, Tabs, Typography } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CourseService from 'src/lib/api/course';
import { Course, MoveEnum, RequestStatus, SaleStatusEnum } from 'src/lib/types/backend_modal';
import { formatDate } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

/* eslint-disable react/prop-types */
import {
  CalendarOutlined,
  FileSearchOutlined,
  MinusCircleOutlined,
  PlusCircleOutlined,
  SwapOutlined,
  VerticalLeftOutlined,
} from '@ant-design/icons';
import { PageHeader } from '@ant-design/pro-layout';
import { css } from '@emotion/react';

import { BtnString } from 'src/lib/utils/enum';
import { AlertTextError } from '../alert/SweetAlert';
import AppButton from '../button';
import CommentSection from '../comment';
import LessonItem from './course-progress/lesson-item';

const { Paragraph } = Typography;

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

const CourseDetail: React.FC = () => {
  const [course, setCourse] = useState<Course>({} as Course);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const courseId = router.query?.id?.toString?.() ?? '';
  const isClass = router.pathname.includes(RoutePaths.CLASS);
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
    } catch (error: any) {
      AlertTextError('Error', error?.response?.data?.detail, () => router.back());
    }
  };

  useEffect(() => {
    fetchCourseDetail(courseId);
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
          const request = await CourseService.requestJoinClass(courseId);
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

  useEffect(() => {
    if (isClass) {
      if (course.request_status === RequestStatus.REQUESTED) {
        setBtnString(BtnString.REQUESTED);
      } else if (course.request_status === RequestStatus.AVAILABLE) {
        setBtnString(BtnString.AVAILABLE_REQUEST);
      } else if (course.request_status === RequestStatus.ACCEPTED) {
        setBtnString(BtnString.BOUGHT);
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
        ]}
      >
        <Content extraContent={undefined}>{content}</Content>
        <Row className="course_info">
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
                />
              )}
            />
          </Col>
        </Row>
      </PageHeader>
      {(course.request_status === RequestStatus.ACCEPTED || course.sale_status === SaleStatusEnum.BOUGHT) && (
        <Tabs items={items} className="tab-section" />
      )}
    </div>
  );
};

export default CourseDetail;
