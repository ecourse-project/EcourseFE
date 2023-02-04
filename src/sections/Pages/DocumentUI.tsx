/* eslint-disable prettier/prettier */

import { Loading3QuartersOutlined, LoadingOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Col, Divider, Pagination as BasicPagination, Row, Spin } from 'antd';
import React, { useEffect, useState } from 'react';

import DocItem from 'src/components/document/doc-item';
import CustomPagination from 'src/components/pagination';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Document, Pagination, PaginationParams } from 'src/lib/types/backend_modal';
import AppAction from 'src/lib/reducers/actions';
import { RootState } from 'src/lib/reducers/model';
import RoutePaths from 'src/lib/utils/routes';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import CourseService from 'src/lib/api/course';
interface DocumentParams {
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
    page: params.page || 1,
    limit: 10,
  });
  const dispatch = useDispatch();
  const fetchDocument = async (pagination) => {
    // dispatch({ type: AppAction.FETCH_DOCUMENT, payload: pagination });
    try {
      setLoading(true);
      const homeDoc = await CourseService.getHomeDocs(pagination, params?.document || '');
      setListDoc(homeDoc);
    } catch (error) {
      setLoading(false);
      console.log('Fetch Doc Fail :>> ', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocument(pagination);
  }, [pagination, params.document]);
  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.DOCUMENT}/?page=${page}`);
  };
  return (
    <div>
      <Divider orientation="left">
        <Breadcrumb separator={<SwapOutlined />}>
          <Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
          <Breadcrumb.Item>Tài liệu</Breadcrumb.Item>
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
              .ant-col {
                padding: 0 5px 30px 5px;
              }
              // @media only screen and (min-width: 768px) {
              // 	.ant-col {
              // 		max-width: 33% !important;
              // 	}
              // }
              // @media only screen and (min-width: 992px) {
              // 	.ant-col {
              // 		max-width: 25% !important;
              // 		min-width: 25% !important;
              // 	}
              // }
              // @media only screen and (min-width: 1350px) {
              // 	.ant-col {
              // 		max-width: 20% !important;
              // 		min-width: 20% !important;
              // 	}
              // 	.ant-btn[disabled] {
              // 		letter-spacing: 2px;
              // 	}
              // }
            `}
          >
            {listDoc?.results?.length
              ? listDoc?.results?.map((e, i) => {
                  return (
                    <Col key={i}>
                      <DocItem document={e} />
                    </Col>
                  );
                })
              : `There is no doc`}
          </div>
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
            />
          </div>
        </>
      )}
    </div>
  );
};
export default DocumentUI;
