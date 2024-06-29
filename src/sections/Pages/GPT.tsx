/* eslint-disable prettier/prettier */

import { Card, Input } from 'antd';
import { debounce } from 'lodash';
import { useState } from 'react';
import CourseService from 'src/lib/api/course';
import { ChatGPTMessage } from 'src/lib/types/backend_modal';
// import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import { ChatMessage, ProChat } from 'src/components/prochat/pro-chat';
import useCourseHook from 'src/lib/api/course/query-hooks/useCourseHook';
import Loading from 'src/components/prochat/pro-chat/es/ChatItem/components/Loading';

const { Search } = Input;

const GPTPageUI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const theme = useTheme();

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

  const { chatHistory, chatLoading } = useCourseHook();

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
        </div>
      )}
    </div>
  );
};

const GPTSection: React.FC = () => {
  return <GPTPageUI />;
};

export default GPTSection;
