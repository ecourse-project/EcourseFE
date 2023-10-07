/* eslint-disable prettier/prettier */

import { Breadcrumb, Card, Col, Divider, Empty, Pagination as AntPagination, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CourseItem from 'src/components/course/course-item';
import { DocCourseWrapper } from 'src/components/document/style';
import HomeSide from 'src/components/home/homeSide';
import CustomPagination from 'src/components/order/pagination';
import DocCourseItemSkeleton from 'src/components/skeleton/document-skeleton';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Course, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { DEFAULT_PAGE_SIZE } from 'src/lib/utils/constant';

export interface CourseClassParams {
  page?: number;
  topic?: string;
  header?: string;
  isClass?: boolean;
}

const CourseUI: React.FC = () => {
  const [listCourse, setListCourse] = useState<Pagination<Course>>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params: CourseClassParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: DEFAULT_PAGE_SIZE,
  });
  const fetCourseClass = async (pagination: PaginationParams) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    setLoading(true);
    try {
      if (!token) {
        if (!params.isClass) {
          const homeCourse = await CourseService.getHomeCourses(
            pagination,
            params.topic === 'ALL' ? '' : params.topic || '',
          );
          setListCourse(homeCourse);
        } else if (params.isClass) {
          const homeClass = await CourseService.getHomeClasses(
            pagination.limit,
            pagination.page,
            params.topic === 'ALL' ? '' : params.topic || '',
          );
          setListCourse(homeClass);
        }
      } else {
        if (!params.isClass) {
          const homeCourse = await CourseService.getAllCourses(
            pagination,
            params.topic === 'ALL' ? '' : params.topic || '',
          );
          setListCourse(homeCourse);
        } else if (params.isClass) {
          const homeCourse = await CourseService.listClasses(
            pagination.limit,
            pagination.page,
            params.topic === 'ALL' ? '' : params.topic || '',
          );
          setListCourse(homeCourse);
        }
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Course Failed :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetCourseClass(pagination);
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    // router.push(`${RoutePaths.COURSE}?course=${params.topic}&page=${page}`);
    if (!params.isClass) router.push(`${RoutePaths.COURSE}?topic=${params.topic}&header=${params.header}`);
    else if (params.isClass)
      router.push(`${RoutePaths.CLASS}?topic=${params.topic}&header=${params.header}&isClass=true`);
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

          {/* <Breadcrumb.Item
            href={`${
              params.isClass
                ? RoutePaths.CLASS + '?class=ALL&header=' + params.header
                : RoutePaths.COURSE + '?course=ALL&header=' + params.header
            }`}
          > */}
          <Breadcrumb.Item>{params.header}</Breadcrumb.Item>

          <Breadcrumb.Item>{UpperCaseFirstLetter(params.topic === 'ALL' ? '' : params.topic || '')}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          <Card>
            {loading ? (
              <DocCourseItemSkeleton />
            ) : (
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
            )}
          </Card>
          <div
            css={css`
              text-align: center;
            `}
          >
            <AntPagination
              current={pagination.page}
              pageSize={pagination.limit}
              total={listCourse?.count || 0}
              showSizeChanger={false}
              hideOnSinglePage
              onChange={onChangePage}
            />
          </div>
        </Col>
        <Col span={6}>
          <HomeSide />
        </Col>
      </Row>
    </div>
  );
};
export default CourseUI;
