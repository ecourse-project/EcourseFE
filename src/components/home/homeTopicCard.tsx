import { Image } from 'antd';

import styled from '@emotion/styled';
import { Post } from 'src/lib/types/backend_modal';
import Link from 'next/link';
import RoutePaths from 'src/lib/utils/routes';
import { getFormatDate } from 'src/lib/utils/utils';

export interface IHomeTopicCardProps {
  post: Post;
  isSideBar?: boolean;
  isSearch?: boolean;
}
const HomeTopicCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 100%;
  max-width: ${(props: { isSearch: boolean }) => (props.isSearch ? '' : '210px')};
  min-width: 200px;
  min-height: 300px;
  p {
    margin: 0;
  }
  .ant-image {
    float: left;
    margin-right: 15px;
    margin-bottom: 5px;
    min-height: 150px;
  }
  .post-name {
    font-weight: 700;
    min-height: ${(props: { isSearch: boolean }) => (props.isSearch ? '' : '')};
    word-break: break-all;
  }
  .post-sumary {
    font-style: italic;
    font-weight: 500;
    min-height: 80px;
  }
  .author {
    font-family: 'Montserrat';
    text-align: left;
    font-size: 14px;
    font-weight: 500;
    font-style: italic;
  }
  .post-create {
    margin: 10px;
    margin-bottom: 0;
    text-align: right;
  }
  .postItem {
    .post-detail {
      display: ${(props: { isSearch: boolean }) => (props.isSearch ? 'flex' : 'grid')};
    }
    width: 100%;
    img {
      width: 200px;
      height: 130px;
      aspect-ratio: auto 240/135;
    }
  }
  .post-content {
    width: ${(props: { isSearch: boolean }) => (props.isSearch ? '100%' : '')};
  }
`;
export default function HomeTopicCard(props: IHomeTopicCardProps) {
  const { post, isSideBar, isSearch } = props;
  return (
    <HomeTopicCardWrapper isSearch={!!isSearch}>
      <div className="postItem">
        <Link href={`${RoutePaths.POST}/${post.id}`} className="post-detail">
          <Image src={post?.thumbnail?.image_path} preview={false} />
          <div className="post-content">
            <p className="post-name">{post?.name}</p>
            {(post as any)?.author && <div className="author">Tác giả: {(post as any)?.author}</div>}
            <p className="post-sumary">
              {post?.content_summary.length ? `${post?.content_summary?.slice(0, 160) + '...'}` : ''}
            </p>
            <p className="post-create">{getFormatDate(post?.created)}</p>
          </div>
        </Link>
      </div>
    </HomeTopicCardWrapper>
  );
}
