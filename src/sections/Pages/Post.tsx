import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Card, Divider, Empty, Pagination as AntPagination } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HomeTopicCard from 'src/components/home/homeTopicCard';
import CustomPagination from 'src/components/order/pagination';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Pagination, PaginationParams, Post } from 'src/lib/types/backend_modal';
import { DEFAULT_PAGE_SIZE } from 'src/lib/utils/constant';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

export interface DocumentParams {
  page?: number;
  topic?: string;
  header?: string;
}

const Post: React.FC = () => {
  const [listPost, setlistPost] = useState<Pagination<Post>>();
  const params: DocumentParams = useQueryParam();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [pagination, setPagination] = useState<PaginationParams>({
    page: params?.page || 1,
    limit: DEFAULT_PAGE_SIZE * 2,
  });
  const getListPost = async (pagination: PaginationParams) => {
    try {
      setLoading(true);
      const res = await CourseService.listPosts(
        pagination.limit,
        pagination.page,
        params.topic === 'ALL' ? '' : params.topic || '',
        params.header,
      );
      setlistPost(res);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setPagination({ ...pagination, page: 1 });
  }, [params.topic]);

  useEffect(() => {
    getListPost(pagination);
  }, [pagination, params.header]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.POST}?topic=${params.topic}&header=${params.header}&page=${page}`);
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
          <Breadcrumb.Item href={''}>
            {UpperCaseFirstLetter(params.topic === 'ALL' ? '' : params.topic || '')}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <div
        className=""
        css={css`
          .ant-card-body {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            padding: 12px;
            &::before {
              display: none !important;
            }
            .ant-card {
              /* flex: 0 0 calc(25% - 20px); */
              box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              &:hover {
                box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
              }
              transition: all 1s ease;
            }
          }
          .ant-empty {
            grid-column: 1 / -1;
          }
        `}
      >
        <Card>
          {!!listPost?.results?.length &&
            listPost?.results?.map((v) => (
              <Card key={v.id}>
                <HomeTopicCard post={v} />
              </Card>
            ))}
          {!listPost?.results?.length && <Empty />}
        </Card>
      </div>
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
        <AntPagination
          current={params.page || pagination.page}
          pageSize={pagination.limit}
          total={listPost?.count || 0}
          showSizeChanger={false}
          hideOnSinglePage
          onChange={onChangePage}
        />
      </div>
    </div>
  );
};

export default Post;
