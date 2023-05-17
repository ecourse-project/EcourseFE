import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Card, Divider } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import HomeTopicCard from 'src/components/home/homeTopicCard';
import CustomPagination from 'src/components/order/pagination';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Pagination, PaginationParams, Post } from 'src/lib/types/backend_modal';
import { UpperCaseFirstLetter } from 'src/lib/utils/format';
import RoutePaths from 'src/lib/utils/routes';

export interface DocumentParams {
  page?: number;
  post?: string;
  header?: string;
}

const Post: React.FC = () => {
  const [listPost, setlistPost] = useState<Pagination<Post>>();
  const params: DocumentParams = useQueryParam();
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [pagination, setPagination] = useState<PaginationParams>({
    page: params?.page || 1,
    limit: 10,
  });
  const getListPost = async (pagination: PaginationParams) => {
    try {
      setLoading(true);
      const res = await CourseService.listPosts(
        pagination.limit,
        pagination.page,
        params.post === 'ALL' ? '' : params.post || '',
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
  }, [params.post]);

  useEffect(() => {
    setPagination({ ...pagination, page: params.page || 1 });
  }, [params.page]);

  useEffect(() => {
    getListPost(pagination);
    console.log('params.header :==>>', params.header);
  }, [pagination, params.header]);

  const onChangePage = (page: number) => {
    setPagination({ ...pagination, page });
    router.push(`${RoutePaths.POST}?post=${params.post}&page=${page}`);
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
          <Breadcrumb.Item >{params.header}</Breadcrumb.Item>
          <Breadcrumb.Item href={''}>
            {UpperCaseFirstLetter(params.post === 'ALL' ? '' : params.post || '')}
          </Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <div
        className=""
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        `}
      >
        <Card>
          {listPost?.results.map((v) => (
            <Card key={v.id} style={{ width: 380 }}>
              <HomeTopicCard post={v} />
            </Card>
          ))}
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
        <CustomPagination
          current={params.page || pagination.page}
          pageSize={pagination.limit}
          total={listPost?.count || 10}
          showSizeChanger={false}
          onChange={onChangePage}
        />
      </div>
    </div>
  );
};

export default Post;
