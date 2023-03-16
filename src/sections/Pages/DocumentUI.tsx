/* eslint-disable prettier/prettier */

import { Breadcrumb, Col, Divider, Empty, Pagination as BasicPagination, Row, Spin } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DocItem from 'src/components/document/doc-item';
import { DocCourseWrapper } from 'src/components/document/style';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import Skeleton from 'react-loading-skeleton';
import { times } from 'lodash';

export interface DocumentParams {
  page?: number;
  document?: string;
}

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;
const DocumentUI: React.FC = () => {
  const [listDoc, setListDoc] = useState<Pagination<Document>>();
  const [loading, setLoading] = useState<boolean>(false);
  // const listDoc = useSelector((state: RootState) => state.document.listDoc);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const fetchDocument = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);
      const newPagination = { ...pagination };
      if (!params.page) pagination.page = 1;
      if (!token) {
        const homeDoc = await CourseService.getHomeDocs(
          newPagination,
          params.document === 'ALL' ? '' : params.document || '',
        );
        setListDoc(homeDoc);
      } else {
        const homeDoc = await CourseService.getAllDocs(
          newPagination,
          params.document === 'ALL' ? '' : params.document || '',
        );
        setListDoc(homeDoc);
      }
    } catch (error) {
      setLoading(false);
      console.log('Fetch Doc Fail :>> ', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    setPagination({ ...pagination, page: 1 });
  }, [params.document]);
  useEffect(() => {
    fetchDocument(pagination);
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.DOCUMENT}?document=${params.document}`);
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
          <Breadcrumb.Item href={`${RoutePaths.DOCUMENT}?document=ALL`}>Tài liệu</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>
            {UpperCaseFirstLetter(params.document === 'ALL' ? '' : params.document || '')}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={[48, 56]} wrap>
        {times(10).map((_v, i) => (
          <Col key={i}>
            <DocumentItemSkeleton />
          </Col>
        ))}
      </Row>
      {loading ? (
        <DocCourseWrapper>
          {/* <Row gutter={24} wrap> */}
          {times(10).map((_v, i) => (
            <Col key={i}>
              <DocumentItemSkeleton />
            </Col>
          ))}
          {/* </Row> */}
        </DocCourseWrapper>
      ) : (
        <>
          <DocCourseWrapper>
            {listDoc?.results?.length ? (
              listDoc?.results?.map((e, i) => {
                return (
                  <Col key={i} className="item">
                    <DocItem document={e} />
                  </Col>
                );
              })
            ) : (
              <Empty />
            )}
          </DocCourseWrapper>
          <div
            css={css`
              text-align: center;
            `}
          >
            <BasicPagination
              current={pagination.page}
              pageSize={pagination.limit}
              total={listDoc?.count || 10}
              showSizeChanger={false}
              onChange={onChangePage}
              hideOnSinglePage
            />
          </div>
        </>
      )}
    </div>
  );
};

const DocumentItemSkeleton = () => {
  return (
    <div
      css={css`
        .detail {
          display: flex;
          gap: 10px;
        }
      `}
    >
      <div className="doc-item">
        <Skeleton height={150} width={200} />
        <Skeleton width={200} />
        <div className="detail">
          <Skeleton circle width={15} />
          <Skeleton width={150} />
        </div>
        <div className="detail">
          <Skeleton circle width={15} />
          <Skeleton width={150} />
        </div>
        <div className="detail">
          <Skeleton circle width={15} />
          <Skeleton width={150} />
        </div>
        <div className="detail">
          <Skeleton width={30} />
          <Skeleton width={135} />
        </div>
        <Skeleton width={200} height={30} />
      </div>
    </div>
  );
};

export default DocumentUI;
