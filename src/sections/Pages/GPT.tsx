/* eslint-disable prettier/prettier */

import { Card, Input } from 'antd';
import { debounce } from 'lodash';
import { useState } from 'react';
import CourseService from 'src/lib/api/course';
import { ChatGPTMessage } from 'src/lib/types/backend_modal';
// import { ProChat } from '@ant-design/pro-chat';
import { useTheme } from 'antd-style';
import { ProChat } from 'src/components/prochat/pro-chat';

const { Search } = Input;

const GPTPageUI = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>('');
  const theme = useTheme();

  const getSearchData = async (searchTerm: string) => {
    try {
      setLoading(true);
      const searchResult: ChatGPTMessage = await CourseService.chat(searchTerm);
      console.log('🚀 ~ getSearchData ~ searchResult:', searchResult);
      return searchResult.message;
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
        resolve(
          "What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum." as string,
        );
      }, 2000);
    });
  };
  const handleSearch = debounce((value) => {
    getSearchData(value);
  }, 500);

  return (
    <div className="side-item search-bar">
      {/* <Card title="Tìm kiếm" style={{ width: 300 }}>
        <Search
          placeholder="Nhập câu hỏi của bạn!!!"
          onSearch={handleSearch}
          onChange={(e) => setSearchValue(e.target.value)}
          allowClear
          value={searchValue}
        />
      </Card> */}

      <div style={{ background: theme.colorBgLayout }}>
        <ProChat
          request={async (messages) => {
            const text = await delay(messages?.[0]?.content as string);
            return new Response(text);
          }}
          style={{ height: '300px' }}
        />
      </div>
    </div>
  );
};

const GPTSection: React.FC = () => {
  return <GPTPageUI />;
};

export default GPTSection;
