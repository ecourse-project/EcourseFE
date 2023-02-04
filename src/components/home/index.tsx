import { AppstoreAddOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import * as React from 'react';
import { Homepage } from 'src/lib/types/backend_modal';

export interface IHomeData {
  homeData: Homepage;
}

export default function HomeData(props: IHomeData) {
  const { homeData } = props;
  return (
    <div
      css={css`
        .title {
          font-size: 15px;
        }
      `}
    >
      <AppstoreAddOutlined />
      <span className="title">{homeData.title}</span>
    </div>
  );
}
