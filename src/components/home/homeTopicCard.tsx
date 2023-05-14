import { Image } from 'antd';

import styled from '@emotion/styled';
import { Post } from 'src/lib/types/backend_modal';
import Link from 'next/link';
import RoutePaths from 'src/lib/utils/routes';
import { getFormatDate } from 'src/lib/utils/utils';

export interface IHomeTopicCardProps {
  post: Post;
  isSideBar?: boolean;
}
const HomeTopicCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  p {
    margin: 0;
  }
  .ant-image {
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
  }
  .post-name {
    font-weight: 700;
  }
  .post-sumary {
    font-style: italic;
    font-weight: 500;

    /* text-align: left;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: gray;
    white-space: normal; */
  }
  .post-create {
    margin: 10px;
    margin-bottom: 0;
    text-align: right;
  }
`;
export default function HomeTopicCard(props: IHomeTopicCardProps) {
  const { post, isSideBar } = props;
  return (
    <HomeTopicCardWrapper>
      <Link href={`${RoutePaths.POST}/${post.id}`}>
        <Image src={post?.thumbnail?.image_path} preview={false} width={100} />
        <div className="post-content">
          <p className="post-name">{post?.name}</p>
          <p className="post-sumary">{`${post?.content_summary.slice(0, 160)}...`}</p>
          <p className="post-create">{getFormatDate(post?.created)}</p>
        </div>
      </Link>
    </HomeTopicCardWrapper>
  );
}
