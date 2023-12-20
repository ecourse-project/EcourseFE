import { Card, Input } from 'antd';

import { RightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { SearchProps } from 'antd/lib/input';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CourseService from 'src/lib/api/course';
import { Home } from 'src/lib/types/backend_modal';
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
  const [homeData, setHomeData] = useState<Home>({} as Home);

  const fetchHomeData = async () => {
    try {
      const homes: Home = await CourseService.getHome();
      setHomeData(homes);
    } catch (error) {
      console.log('error', error);
    }
  };

  useEffect(() => {
    fetchHomeData();
  }, []);

  const onSearch: SearchProps['onSearch'] = (value) => {
    const url = `/search/${value}`;

    // Use router.push with shallow option to update URL without reloading the page
    router.push(url, undefined, { shallow: true });
  };

  return (
    <HomeSideWrapper>
      <div className="side-item search-bar">
        <Card title="Search" style={{ width: 300 }}>
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
      </div>
    </HomeSideWrapper>
  );
}
