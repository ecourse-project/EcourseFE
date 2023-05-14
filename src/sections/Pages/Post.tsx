import { css } from '@emotion/react';
import { Card } from 'antd';
import React, { useEffect, useState } from 'react';
import HomeTopicCard from 'src/components/home/homeTopicCard';
import CourseService from 'src/lib/api/course';
import { Post } from 'src/lib/types/backend_modal';

const Post: React.FC = () => {
  const [listPost, setlistPost] = useState<Post[]>([]);
  const getListPost = async () => {
    try {
      const res = await CourseService.listPosts(100, 1, '');
      // setlistPost(Array(13).fill(res.results[0]));
      setlistPost(res.results);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getListPost();
  }, []);
  return (
    <div>
      <div
        className="side-item popular-content"
        css={css`
          display: flex;
          flex-wrap: wrap;
          gap: 30px;
        `}
      >
        {listPost.map((v) => (
          <Card key={v.id} style={{ width: 300 }}>
            <HomeTopicCard post={v} />
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Post;
