import { Spin } from 'antd';
import React, { ReactNode } from 'react';

import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export interface ILoadingPageProps {
  isLoading: boolean;
  cssName?: string;
}

export const LoadingPage: React.FC<ILoadingPageProps> = (props: ILoadingPageProps) => {
  const { cssName, isLoading } = props;

  if (!isLoading) {
    return null;
  }
  const LoadingPageWrapper = styled.div`
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background-color: #fff;
    z-index: 9999;
    display: grid;
    justify-content: center;
    align-items: center;
    .loader {
      width: 100vw;
      height: 100vh;
      border: 1px solid mistyrose;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-image: url('/loading.gif');
      background-position: center center;
      background-repeat: no-repeat;
    }
  `;

  return (
    <LoadingPageWrapper className={`${cssName}`}>
      {/* <div className="spiner-first-team">
        <div></div>
        <div></div>
        <div></div>
      </div> */}
      <div className="loader">
        <div id="ld3"></div>
      </div>
    </LoadingPageWrapper>
  );
};
export enum NumPosition {
  CENTER = 'CENTER',
  TOP = 'TOP',
}

interface LoadingContentProps {
  isLoading: boolean;
  className?: string;
  position?: NumPosition;
  children?: ReactNode;
}

export const LoadingContent: React.FC<LoadingContentProps> = (props) => {
  const { isLoading, children, className, position = NumPosition.CENTER } = props;
  const antIcon = <LoadingOutlined style={{ fontSize: 29 }} spin />;

  return (
    <div
      css={css`
        ${isLoading && 'position: relative; opacity: .6;'}
      `}
      className={className ?? ''}
    >
      {isLoading && (
        <div
          className="absolute w-full h-full flex justify-center items-center"
          css={css`
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: ${position === NumPosition.CENTER ? 'center' : 'start'};
            z-index: 999;
            user-select: none;
            ${position === NumPosition.TOP && 'padding-top:15%;'}
            .ant-spin {
              color: #000;
            }
          `}
        >
          <Spin indicator={antIcon} size="large" />
        </div>
      )}
      {children ? children : <DivBlank />}
    </div>
  );
};
export const DivBlank = styled.div`
  min-height: 100px;
  height: 100%;
  background-color: #e7edf3;
`;
