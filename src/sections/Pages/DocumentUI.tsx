/* eslint-disable prettier/prettier */

import { Breadcrumb, Card, Col, Divider, Empty, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import DocItem from 'src/components/document/doc-item';
import { DocCourseWrapper } from 'src/components/document/style';
import HomeSide from 'src/components/home/homeSide';
import CustomPagination from 'src/components/order/pagination';
import DocCourseItemSkeleton from 'src/components/skeleton/document-skeleton';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, Pagination as PaginationType, PaginationParams } from 'src/lib/types/backend_modal';
import { StorageKeys } from 'src/lib/utils/enum';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

import { HomeOutlined, Loading3QuartersOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';

export interface DocumentParams {
  page?: number;
  document?: string;
}

const antIcon = <Loading3QuartersOutlined style={{ fontSize: 40 }} spin />;
const DocumentUI: React.FC = () => {
  const [listDoc, setListDoc] = useState<PaginationType<Document>>();
  const [loading, setLoading] = useState<boolean>(false);
  // const listDoc = useSelector((state: RootState) => state.document.listDoc);
  const router = useRouter();
  const params: DocumentParams = useQueryParam();
  const [pagination, setPagination] = useState<PaginationParams>({
    page: params?.page || 1,
    limit: 10,
  });
  const dispatch = useDispatch();

  const fetchDocument = async (pagination) => {
    const token = localStorage.getItem(StorageKeys.SESSION_KEY);
    try {
      setLoading(true);
      const newPagination = { ...pagination };
      // if (!params.page) pagination.page = 1;
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
    setPagination({ ...pagination, page: params.page || 1 });
  }, [params.page]);
  useEffect(() => {
    fetchDocument(pagination);
  }, [pagination]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.DOCUMENT}?document=${params.document}&page=${page}`);
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
          <Breadcrumb.Item href={`${RoutePaths.DOCUMENT}?document=ALL&pgae=${1}`}>Tài liệu</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>
            {UpperCaseFirstLetter(params.document === 'ALL' ? '' : params.document || '')}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          <Card>
            {loading ? (
              <DocCourseItemSkeleton />
            ) : (
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
            )}
          </Card>
          <div
            css={css`
              text-align: center;
            `}
          >
            {/* <Pagination
              defaultCurrent={1}
              current={params.page || pagination.page}
              pageSize={pagination.limit}
              total={listDoc?.count || 10}
              showSizeChanger={false}
              onChange={onChangePage}
              hideOnSinglePage
            /> */}
            <CustomPagination
              current={params.page || pagination.page}
              pageSize={pagination.limit}
              total={listDoc?.count || 10}
              showSizeChanger={false}
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
export default DocumentUI;
