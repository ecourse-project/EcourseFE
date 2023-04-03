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
import { Class, Course, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import HomeSide from 'src/components/home/homeSide';
import ClassItem from 'src/components/class/class-item';

interface DocumentParams {
  page?: number;
  class?: string;
}

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;

const ClassUI: React.FC = () => {
  const [listClass, setListClass] = useState<Pagination<Course>>();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const dispatch = useDispatch();

  const fetchClass = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    setLoading(true);
    try {
      if (!token) {
        const homeClass = await CourseService.getHomeClasses(
          pagination.limit,
          pagination.page,
          params?.class === 'ALL' ? '' : params?.class || '',
        );
        setListClass(homeClass);
      } else {
        const homeClass = await CourseService.listClasses(
          pagination.limit,
          pagination.page,
          params?.class === 'ALL' ? '' : params?.class || '',
        );
        setListClass(homeClass);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Class Faile :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPagination({ ...pagination, page: 1 });
  }, [params.class]);

  useEffect(() => {
    fetchClass(pagination);
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.CLASS}?class=${params.class}&page=${page})`);
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
          <Breadcrumb.Item href={`${RoutePaths.CLASS}?class=ALL`}>Lớp</Breadcrumb.Item>
          <Breadcrumb.Item>{UpperCaseFirstLetter(params.class === 'ALL' ? '' : params.class || '')}</Breadcrumb.Item>
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
                  {listClass?.results?.length ? (
                    listClass?.results?.map((e, i) => {
                      return (
                        <Col key={i} className="item">
                          <ClassItem classItem={e} />
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
                  total={listClass?.count || 10}
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
export default ClassUI;
