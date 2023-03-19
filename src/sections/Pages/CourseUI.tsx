/* eslint-disable prettier/prettier */

import { Breadcrumb, Card, Col, Divider, Empty, Row, Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import CourseItem from 'src/components/course/course-item';
import { DocCourseWrapper } from 'src/components/document/style';
import CustomPagination from 'src/components/pagination';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Course, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import HomeSide from 'src/components/home/homeSide';

interface DocumentParams {
  page?: number;
  course?: string;
}

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

const CourseUI: React.FC = () => {
  const [listCourse, setListCourse] = useState<Pagination<Course>>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const fetCourse = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    setLoading(true);
    try {
      if (!token) {
        const homeCourse = await CourseService.getHomeCourses(
          pagination,
          params.course === 'ALL' ? '' : params.course || '',
        );
        setListCourse(homeCourse);
      } else {
        const homeCourse = await CourseService.getAllCourses(
          pagination,
          params.course === 'ALL' ? '' : params.course || '',
        );
        setListCourse(homeCourse);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Course Faile :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  // useEffect(() => {
  //   if (params?.page) {
  //     if (Number(pagination.page) !== Number(params.page)) {
  //       console.log('pagination :>> ', pagination);
  //       setPagination({ ...pagination, page: params?.page });
  //     }
  //   }
  // }, [params.page]);
  useEffect(() => {
    setPagination({ ...pagination, page: 1 });
  }, [params.course]);
  useEffect(() => {
    fetCourse(pagination);
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    // router.push(`${RoutePaths.COURSE}?course=${params.course}&page=${page}`);
    router.push(`${RoutePaths.COURSE}?course=${params.course}`);
  };

  return (
    <div>
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>
            <HomeOutlined
              css={css`
                font-size: 30px !important;
              `}
            />
          </Breadcrumb.Item>
          <Breadcrumb.Item href={`${RoutePaths.COURSE}?course=ALL`}>Khoá học</Breadcrumb.Item>
          <Breadcrumb.Item>{UpperCaseFirstLetter(params.course === 'ALL' ? '' : params.course || '')}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          {loading ? (
            <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Spin indicator={antIcon} />
            </div>
          ) : (
            <>
              <Card>
                <DocCourseWrapper>
                  {listCourse?.results?.length ? (
                    listCourse?.results?.map((e, i) => {
                      return (
                        <Col key={i} className="item">
                          <CourseItem course={e} />
                        </Col>
                      );
                    })
                  ) : (
                    <Empty />
                  )}
                </DocCourseWrapper>
              </Card>
              <div
                css={css`
                  text-align: center;
                `}
              >
                <CustomPagination
                  current={pagination.page}
                  pageSize={pagination.limit}
                  total={listCourse?.count || 10}
                  showSizeChanger={false}
                  onChange={onChangePage}
                />
              </div>
            </>
          )}
        </Col>
        <Col span={6}>
          <HomeSide />
        </Col>
      </Row>
    </div>
  );
};
export default CourseUI;
