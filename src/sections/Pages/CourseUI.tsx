/* eslint-disable prettier/prettier */

import { SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import CourseItem from 'src/components/course/course-item';
import CustomPagination from 'src/components/pagination';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import AppAction from 'src/lib/reducers/actions';
import { RootState } from 'src/lib/reducers/model';
import RoutePaths from 'src/lib/utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
interface DocumentParams {
  page?: number;
}
const DocumentUI: React.FC = () => {
  const [list, setList] = useState<Pagination<Document>>();
  const listCourse = useSelector((state: RootState) => state.course.listCourse);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: params.page || 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const fetchDocument = async (pagination) => {
    dispatch({ type: AppAction.FETCH_COURSE, payload: pagination });
  };
  useEffect(() => {
    console.log('re render');
  }, []);
  useEffect(() => {
    fetchDocument(pagination);
  }, [pagination]);
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
        </Breadcrumb>
      </Divider>
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
    </div>
  );
};
export default DocumentUI;
