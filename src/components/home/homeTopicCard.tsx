import { Image } from 'antd';

import styled from '@emotion/styled';

export interface IHomeTopicCardProps {}
const HomeTopicCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .topic-name {
    font-weight: 600;
  }
`;
export default function HomeTopicCard(props: IHomeTopicCardProps) {
  return (
    <HomeTopicCardWrapper>
      <Image
        src={'https://unitedservicesforchildren.org/app/uploads/2018/10/todays-topic-logo-1024x662.jpg'}
        preview={false}
        width={100}
      />
      <div className="topic-name">Bài viết 1</div>
    </HomeTopicCardWrapper>
  );
}
