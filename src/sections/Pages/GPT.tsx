/* eslint-disable prettier/prettier */

import { Card, FloatButton, Input } from 'antd';
import { debounce } from 'lodash';
import { useState } from 'react';
import CourseService from 'src/lib/api/course';
import { ChatGPTMessage } from 'src/lib/types/backend_modal';
// import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import { ChatMessage, ProChat } from 'src/components/prochat/pro-chat';
import useCourseHook from 'src/lib/api/course/query-hooks/useCourseHook';
import Loading from 'src/components/prochat/pro-chat/es/ChatItem/components/Loading';
import useChatHistory from 'src/lib/api/course/query-hooks/useChatHistory';
import { ArrowLeftOutlined, RollbackOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router';
import { GiEntryDoor } from 'react-icons/gi';
const { Search } = Input;
import { TbDoorEnter } from 'react-icons/tb';
import styled from '@emotion/styled';
const GPTPageUI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const theme = useTheme();
  const route = useRouter();
  const getSearchData = async (searchTerm: string) => {
    try {
      setLoading(true);
      const searchResult: ChatGPTMessage = await CourseService.chat(searchTerm);
      return searchResult.content;
    } catch (error) {
      console.log('error', error);
    } finally {
      setLoading(false);
    }
  };
  const delay = async (text: string) => {
    const res = await getSearchData(text);
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        resolve(res || '');
      }, 2000);
    });
  };

  const { chatHistory, chatLoading } = useChatHistory();

  return (
    <div className="side-item search-bar">
      {chatLoading ? (
        <Loading />
      ) : (
        <div style={{ background: theme.colorBgLayout }}>
          <ProChat
            request={async (messages) => {
              const text = await delay(messages?.[messages?.length - 1]?.content as string);
              return new Response(text);
            }}
            style={{ height: '100vh' }}
            initialChats={
              (chatHistory?.map((v) => ({
                ...v,
                createAt: v.created_at,
                updateAt: v.created_at,
                role: v.owner === 'user' ? 'user' : 'system',
                error: undefined,
              })) || []) as unknown as ChatMessage[]
            }
          />
          <FloatButtonStyled>
            <FloatButton
              shape="circle"
              type="primary"
              style={{ top: 15, bottom: '100vh', left: 10, backgroundColor: 'transparent' }}
              icon={<TbDoorEnter />}
              tooltip={<div>Trang chủ</div>}
              onClick={() => {
                route.push('/');
              }}
            />
          </FloatButtonStyled>
        </div>
      )}
    </div>
  );
};

const GPTSection: React.FC = () => {
  return <GPTPageUI />;
};

const FloatButtonStyled = styled.div`
  .ant-float-btn > div {
    background: #252525;
    svg {
      fill: #fff;
    }
    &:hover {
      background-color: #252525;
    }
  }
`;

export default GPTSection;
