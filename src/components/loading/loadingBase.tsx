import { LoadingOutlined } from '@ant-design/icons';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import React, { ReactNode } from 'react';

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
    background-color: rgba(239, 239, 239, 0.48);
    z-index: 9999;
    display: grid;
    justify-content: center;
    align-items: center;
    .spiner-first-team {
      display: inline-block;
      position: relative;
      width: 80px;
      height: 80px;
    }
    .spiner-first-team div {
      display: inline-block;
      position: absolute;
      left: 8px;
      width: 16px;
      background: #001529;
      animation: spiner-first-team 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
    }
    .spiner-first-team div:nth-of-type(1) {
      left: 8px;
      animation-delay: -0.24s;
    }
    .spiner-first-team div:nth-of-type(2) {
      left: 32px;
      animation-delay: -0.12s;
    }
    .spiner-first-team div:nth-of-type(3) {
      left: 56px;
      animation-delay: 0;
    }
    @keyframes spiner-first-team {
      0% {
        top: 8px;
        height: 64px;
      }
      50%,
      100% {
        top: 24px;
        height: 32px;
      }
    }
  `;

  return (
    <LoadingPageWrapper className={`${cssName}`}>
      <div className="spiner-first-team">
        <div></div>
        <div></div>
        <div></div>
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
