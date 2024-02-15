import { Card, Input } from 'antd';

import { RightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import Meta from 'antd/es/card/Meta';
import { SearchProps } from 'antd/lib/input';
import { useRouter } from 'next/router';
import useCourseHook from 'src/lib/api/course/query-hooks/useCourseHook';
import RoutePaths from 'src/lib/utils/routes';
const { Search } = Input;
export interface IHomeSideProps {}

const HomeSideWrapper = styled.div`
  .side-item {
    margin-bottom: 10px;
  }
  a {
    text-decoration: none;
    font-weight: 600;
  }
  .fb-page {
    .ant-card-body {
      font-size: 20px;
      a {
        color: #0d8bf0 !important;
      }
    }
  }
  .topic {
    .topic-item {
      font-weight: 600;
      cursor: pointer;
      padding: 5px;
    }
  }
`;
export default function HomeSide(props: IHomeSideProps) {
  const router = useRouter();
  const { search: searchTerm } = router.query;
  const { homeData } = useCourseHook();

  const onSearch: SearchProps['onSearch'] = (value) => {
    const url = `/search/${value}`;

    // Use router.push with shallow option to update URL without reloading the page
    router.push(url, undefined, { shallow: true });
  };

  return (
    <HomeSideWrapper>
      <div className="side-item search-bar">
        <Card title="Tìm kiếm" style={{ width: 300 }}>
          <Search placeholder="Nhập để tìm" onSearch={onSearch} enterButton allowClear value={searchTerm} />
        </Card>
      </div>

      <div className="side-item popular-content"></div>
      <div className="side-item topic">
        <Card title="Chuyên mục" style={{ width: 300 }}>
          {homeData?.category?.map((v) => {
            return (
              <div className="topic-item" key={v} onClick={() => onSearch(v)}>
                <RightOutlined />
                {v.toLocaleUpperCase()}
              </div>
            );
          })}
        </Card>
        <Card title="Bài viết mới" style={{ width: 300 }}>
          {homeData?.new_post?.map((v) => {
            return (
              <div
                className="topic-item"
                key={v.id}
                onClick={() => {
                  router.push(`${RoutePaths.POST}/${v.id}`);
                }}
              >
                <Card
                  hoverable
                  style={{ width: '100%' }}
                  cover={<img src={v?.thumbnail?.image_path || ''} alt={'img'} width={200} height={130} />}
                >
                  <Meta title={v?.name} />
                </Card>
              </div>
            );
          })}
        </Card>
      </div>
    </HomeSideWrapper>
  );
}
