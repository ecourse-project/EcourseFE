import { Card, Input } from 'antd';

import { RightOutlined } from '@ant-design/icons';
import styled from '@emotion/styled';

import { useEffect, useState } from 'react';
import CourseService from 'src/lib/api/course';
import { Post } from 'src/lib/types/backend_modal';
import { SearchProps } from 'antd/lib/input';
import { useRouter } from 'next/router';
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
const topic = ['AR', 'Bài giảng', 'CHEM', 'CODE', 'Dạy học dự án', 'dạy học system', 'dạy học stem'];
export default function HomeSide(props: IHomeSideProps) {
  const [listPost, setListPost] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const router = useRouter();
  const { search: searchTerm } = router.query;
  console.log('🚀 ~ file: homeSide.tsx:43 ~ HomeSide ~ router:', router);

  const getAllPost = async () => {
    try {
      setLoading(true);
      const res = await CourseService.listPosts(100, 1, '', '');
      setListPost(res.results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getAllPost();
  }, []);

  const onSearch: SearchProps['onSearch'] = (value) => {
    const url = `/search/${value}`;

    // Use router.push with shallow option to update URL without reloading the page
    router.push(url, undefined, { shallow: true });
  };

  return (
    <HomeSideWrapper>
      {/* <div className="side-item translate">
        <Card title="Translate" style={{ width: 300 }}>
          Translate Section
        </Card>
      </div> */}
      <div className="side-item search-bar">
        <Card title="Search" style={{ width: 300 }}>
          <Search placeholder="Nhập để tìm" onSearch={onSearch} enterButton allowClear value={searchTerm} />
        </Card>
      </div>
      {/* <div className="side-item fb-page">
        <Card title="Facebook Page" style={{ width: 300 }}>
          <Link href={'https://www.facebook.com/chemistryresources.vn'} target="_blank">
            <FacebookOutlined />
            TeachingResources
          </Link>
        </Card>
      </div> */}
      <div className="side-item popular-content">
        {/* <Card title="Bài viết phổ biến" style={{ width: 300 }}>
          {listPost
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .concat(listPost)
            .map((v) => (
              <HomeTopicCard key={v.id} post={v} isSideBar />
            ))}
        </Card> */}
      </div>
      <div className="side-item topic">
        <Card title="Chuyên mục" style={{ width: 300 }}>
          {topic.map((v) => {
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
