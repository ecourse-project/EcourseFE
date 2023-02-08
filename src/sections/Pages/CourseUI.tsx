/* eslint-disable prettier/prettier */

import { Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Col, Divider, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import CourseItem from 'src/components/course/course-item';
import CustomPagination from 'src/components/pagination';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Course, Document, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import AppAction from 'src/lib/reducers/actions';
import { RootState } from 'src/lib/reducers/model';
import RoutePaths from 'src/lib/utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CourseService from 'src/lib/api/course';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import { StorageKeys } from 'src/lib/utils/enum';
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
    page: params.page || 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const fetCourse = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    setLoading(true);
    try {
      if (!token) {
        const homeCourse = await CourseService.getHomeCourses(pagination, params.course);
        setListCourse(homeCourse);
      } else {
        const homeCourse = await CourseService.getAllCourses(pagination, params.course);
        setListCourse(homeCourse);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Course Faile :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetCourse(pagination);
  }, [pagination, params.course]);
  const onChangePage = (page: number) => {
    console.log('pagenum', page);
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.COURSE}/?page=${page}`);
  };
  return (
    <div>
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>Khoá học</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>{UpperCaseFirstLetter(params?.course || '')}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      {loading ? (
        <div style={{ height: '72px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Spin indicator={antIcon} />
        </div>
      ) : (
        <>
          <div
            className="document-wrapper"
            css={css`
              margin: 20px 0;
              display: flex;
              flex-wrap: wrap;
              text-align: left;
              justify-content: space-evenly;
              .ant-col {
                padding: 0 5px 30px 5px;
              }
            `}
          >
            {/* <Row gutter={[16, 32]}> */}
            {listCourse?.results?.length
              ? listCourse?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <CourseItem course={e} />
                    </Col>
                  );
                })
              : `There is no doc`}
            {/* </Row> */}
          </div>
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
    </div>
  );
};
export default CourseUI;
