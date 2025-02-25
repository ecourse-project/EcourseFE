/* eslint-disable prettier/prettier */

import { UnorderedListOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Card, Col, Empty, Row } from 'antd';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import CourseItem from 'src/components/course/course-item';
import DocItem from 'src/components/document/doc-item';
import { DocCourseWrapper } from 'src/components/document/style';
import HomeSide from 'src/components/home/homeSide';
import HomeTopicCard from 'src/components/home/homeTopicCard';
import CourseService from 'src/lib/api/course';
import { NavTypeEnum, SearchItem } from 'src/lib/types/backend_modal';
import RoutePaths from 'src/lib/utils/routes';

const SearchPageUI = () => {
  const router = useRouter();
  const { search: searchTerm } = router.query;
  const [loading, setLoading] = useState<boolean>(false);
  const [searchResultData, setSearchResultData] = useState<SearchItem[]>([]);

  const getSearchData = async (searchTerm: string) => {
    try {
      setLoading(true);
      const searchResult: SearchItem[] = await CourseService.searchItems(searchTerm);
      setSearchResultData(searchResult);
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getSearchData((searchTerm as string) || '');
  }, [searchTerm]);
  return (
    <div className="page-container">
      <Row gutter={16} style={{ maxWidth: '100%' }}>
        <Col span={18}>
          <div
            css={css`
              margin-bottom: 10px;
              .title {
                font-size: 14px;
                font-weight: 700;
                text-decoration: underline;
              }
              .ant-card-head-title {
                font-weight: 700;
              }
              .ant-card-body {
                display: grid;
                grid-template-columns: repeat(1, 1fr);
              }
              .ant-card-body::before {
                display: none;
              }
            `}
          >
            <Card
              title={`Kết quả tìm kiếm của "${searchTerm || ''}"`}
              extra={
                <a href={RoutePaths.HOME}>
                  <UnorderedListOutlined />
                  Xem tất cả
                </a>
              }
            >
              {loading ? (
                <Skeleton count={10} height={120} />
              ) : searchResultData?.length ? (
                searchResultData.map((item) => {
                  if (item.type === NavTypeEnum.DOCUMENT)
                    return (
                      <DocCourseWrapper>
                        <Col className="search-doc">
                          <DocItem document={item as any} isSearch />
                        </Col>
                      </DocCourseWrapper>
                    );
                  else if ([NavTypeEnum.COURSE, NavTypeEnum.CLASS].includes(item.type as NavTypeEnum))
                    return (
                      <DocCourseWrapper>
                        <Col className="search-course">
                          <CourseItem course={item as any} isSearch />
                        </Col>
                      </DocCourseWrapper>
                    );
                  else if (item.type === NavTypeEnum.POST)
                    return (
                      <DocCourseWrapper>
                        <Col className="search-course">
                          <HomeTopicCard post={{ ...item } as any} isSearch />
                        </Col>
                      </DocCourseWrapper>
                    );
                })
              ) : (
                <Empty className="empty-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
              )}
            </Card>
          </div>
        </Col>
        <Col span={6}>
          <HomeSide />
        </Col>
      </Row>
    </div>
  );
};
const HomeSection: React.FC = () => {
  return <SearchPageUI />;
};

export default HomeSection;
