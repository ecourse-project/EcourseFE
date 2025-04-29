/* eslint-disable prettier/prettier */

import { Breadcrumb, Card, Col, Divider, Empty, Pagination as AntPagination, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import CourseItem from 'src/components/course/course-item';
import { DocCourseWrapper } from 'src/components/document/style';
import HomeSide from 'src/components/home/homeSide';
import DocCourseItemSkeleton from 'src/components/skeleton/document-skeleton';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Course, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { DEFAULT_PAGE_SIZE } from 'src/lib/utils/constant';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { Nav as NavType } from 'src/lib/types/backend_modal';
import useMinimumLoading from 'src/lib/hooks/useMinimumLoading';

export interface CourseClassParams {
  page?: number;
  topic?: string;
  header?: string;
  isClass?: boolean;
}

const CourseUI: React.FC = () => {
  const header: NavType[] = useSelector((state: RootState) => state.app.header);
  const [listCourse, setListCourse] = useState<Pagination<Course>>();
  const { isLoading, completeLoading, startLoading } = useMinimumLoading();
  const router = useRouter();
  const params: CourseClassParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: DEFAULT_PAGE_SIZE,
  });
  const myProfile = useSelector((state: RootState) => state.app.user);
  const topicLabel = useMemo(() => {
    const topic = header?.find((e) => e.header === params.header)?.topic?.find((e) => e.value === params.topic);
    return params.topic === 'ALL' ? '' : topic?.label ?? '';
  }, [params.topic, header]);
  const fetCourseClass = async (pagination: PaginationParams) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    startLoading();
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
      console.log('Fetch Course Failed :>> ', error);
    } finally {
      completeLoading();
    }
  };

  useEffect(() => {
    fetCourseClass(pagination);
  }, [pagination, params.topic]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
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

          <Breadcrumb.Item>{params.header}</Breadcrumb.Item>
          <Breadcrumb.Item>{topicLabel}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          <Card>
            {isLoading ? (
              <DocCourseItemSkeleton />
            ) : (
              <DocCourseWrapper>
                {listCourse?.results?.length ? (
                  listCourse?.results?.map((e, i) => {
                    if (e?.test && !myProfile?.is_testing_user) return;
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
