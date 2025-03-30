import { HomeOutlined, SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Card, Divider, Empty, Pagination as AntPagination, Col, Row } from 'antd';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';
import HomeSide from 'src/components/home/homeSide';
import HomeTopicCard from 'src/components/home/homeTopicCard';
import CourseService from 'src/lib/api/course';
import { useQueryParam } from 'src/lib/hooks/useQueryParam';
import { Pagination, PaginationParams, Post } from 'src/lib/types/backend_modal';
import { DEFAULT_POST_PAGE_SIZE } from 'src/lib/utils/constant';
import RoutePaths from 'src/lib/utils/routes';
import { useSelector } from 'react-redux';
import { RootState } from 'src/lib/reducers/model';
import { Nav as NavType } from 'src/lib/types/backend_modal';
export interface DocumentParams {
  page?: number;
  topic?: string;
  topicLabel?: string;
  header?: string;
}

const PostPage: React.FC = () => {
  const header: NavType[] = useSelector((state: RootState) => state.app.header);
  const [listPost, setlistPost] = useState<Pagination<Post>>();
  const params: DocumentParams = useQueryParam();
  const [_, setLoading] = useState<boolean>(false);
  const router = useRouter();

  const [pagination, setPagination] = useState<PaginationParams>({
    page: Number(params?.page || 1),
    limit: DEFAULT_POST_PAGE_SIZE,
  });

  const topicLabel = useMemo(() => {
    const topic = header?.find((e) => e.header === params.header)?.topic?.find((e) => e.value === params.topic);
    return params.topic === 'ALL' ? '' : topic?.label ?? '';
  }, [params.topic, header]);

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
  }, [pagination, params.header, params.topic]);

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
          <Breadcrumb.Item>{topicLabel}</Breadcrumb.Item>
        </Breadcrumb>
      </Divider>
      <Row gutter={16}>
        <Col span={18}>
          <div
            className="cuong"
            css={css`
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
              padding: 20px;
              box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
              border-radius: 10px;
              .ant-card-body {
                &::before {
                  display: none !important;
                }
                box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
                &:hover {
                  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
                }
                transition: all 1s ease;
              }
              .ant-empty {
                grid-column: 1 / -1;
              }
            `}
          >
            {!!listPost?.results?.length &&
              listPost?.results?.map((v) => (
                <Card key={v.id}>
                  <HomeTopicCard post={v} />
                </Card>
              ))}
            {!listPost?.results?.length && <Empty />}
          </div>
          <div
            css={css`
              text-align: center;
            `}
          >
            <AntPagination
              current={params.page || pagination.page}
              pageSize={pagination.limit}
              total={listPost?.count || 0}
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

export default PostPage;
