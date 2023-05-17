import { css } from '@emotion/react';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CourseService from 'src/lib/api/course';
import { Post } from 'src/lib/types/backend_modal';
import { getFormatDate } from 'src/lib/utils/utils';

const PostDetail: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  const [content, setContent] = useState<string>('');
  const [postDetail, setPostDetail] = useState<Post>();
  const getPostDetail = async () => {
    try {
      const res = await CourseService.getPostDetail(id as string);
      setContent(res.content || '');
      setPostDetail(res);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getPostDetail();
  }, []);

  return (
    <div
      css={css`
        padding: 30px;
        padding-top: 0;
        .create-date {
          text-align: right;
          font-weight: 500;
        }
        .author {
          font-weight: 700;
          font-size: 20px;
          text-align: right;
        }
        .topic {
          text-align: center;
        }
      `}
    >
      {/* <h1 className="topic">{postDetail?.name}</h1> */}
      <p className="create-date">Ngày đăng: {getFormatDate(postDetail?.created)}</p>
      <div dangerouslySetInnerHTML={{ __html: postDetail?.content || '' }}></div>
      {/* <p className="author">LTD</p> */}
    </div>
  );
};

export default PostDetail;
