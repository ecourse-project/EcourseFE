import { LoadingOutlined } from '@ant-design/icons';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Spin } from 'antd';
import React, { ReactNode, useEffect } from 'react';

export interface ILoadingPageProps {
  isLoading: boolean;
  cssName?: string;
}

export const LoadingPage: React.FC<ILoadingPageProps> = (props: ILoadingPageProps) => {
  const { cssName, isLoading } = props;
  useEffect(() => {
    console.log('isLoading in loading comp', isLoading);
  }, [isLoading]);
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
    .loader {
      width: 100vw;
      height: 100vh;
      border: 1px solid mistyrose;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    #ld1 {
      position: relative;
      transform: rotate(45deg);
    }
    #ld1 div {
      height: 20px;
      width: 20px;
      background: #fe4a49;
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #ld1 div:nth-of-type(1) {
      animation: ld1_div1 1s ease-in-out infinite;
    }
    #ld1 div:nth-of-type(2) {
      animation: ld1_div2 1s ease-in-out infinite;
    }
    #ld1 div:nth-of-type(3) {
      animation: ld1_div3 1s ease-in-out infinite;
    }

    @keyframes ld1_div1 {
      0% {
        top: 52.5px;
        background: #fe4a49;
      }
      50% {
        top: -52.5px;
        background: #59cd90;
      }
      100% {
        top: 52.5px;
        background: #009fb7;
      }
    }
    @keyframes ld1_div2 {
      0% {
        right: 52.5px;
        background: #fe4a49;
      }
      50% {
        right: -52.5px;
        background: #fed766;
      }
      100% {
        right: 52.5px;
        background: #59cd90;
      }
    }
    @keyframes ld1_div3 {
      0% {
        left: 52.5px;
        background: #fe4a49;
      }
      50% {
        left: -52.5px;
        background: #d91e36;
      }
      100% {
        left: 52.5px;
        background: #fe4a49;
      }
    }
    #ld2 {
      display: flex;
      flex-direction: row;
    }
    #ld2 div {
      height: 20px;
      width: 5px;
      background: #fe4a49;
      margin: 3px;
      border-radius: 25px;
    }
    #ld2 div:nth-of-type(1) {
      animation: ld2 1s ease-in-out infinite 0s;
    }
    #ld2 div:nth-of-type(2) {
      animation: ld2 1s ease-in-out infinite 0.1s;
    }
    #ld2 div:nth-of-type(3) {
      animation: ld2 1s ease-in-out infinite 0.2s;
    }
    #ld2 div:nth-of-type(4) {
      animation: ld2 1s ease-in-out infinite 0.3s;
    }
    #ld2 div:nth-of-type(5) {
      animation: ld2 1s ease-in-out infinite 0.4s;
    }
    #ld2 div:nth-of-type(6) {
      animation: ld2 1s ease-in-out infinite 0.5s;
    }
    #ld2 div:nth-of-type(7) {
      animation: ld2 1s ease-in-out infinite 0.6s;
    }

    @keyframes ld2 {
      0% {
        transform: scaleY(1);
        background: #fed766;
      }
      25% {
        background: #009fb7;
      }
      50% {
        transform: scaleY(2);
        background: #59cd90;
      }
      75% {
        background: #fe4a49;
      }
      100% {
        transform: scaleY(1);
        background: #d91e36;
      }
    }
    #ld3 {
      /* position: relative; */
      animation: outercontainer 4s linear infinite;
    }
    #ld3 div {
      height: 12px;
      width: 12px;
      border-radius: 50%;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
    #ld3 div:nth-of-type(1) {
      top: 20px;
      background: #59cd90;
      animation: ld3_div1 2s linear infinite;
    }
    #ld3 div:nth-of-type(2) {
      top: -20px;
      background: #d91e36;
      animation: ld3_div2 2s linear infinite;
    }
    #ld3 div:nth-of-type(3) {
      left: 20px;
      background: #f39237;
      animation: ld3_div4 2s linear infinite;
    }
    #ld3 div:nth-of-type(4) {
      left: -20px;
      background: #0072bb;
      animation: ld3_div3 2s linear infinite;
    }

    @keyframes outercontainer {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes ld3_div1 {
      0% {
        top: 20px;
      }
      25% {
        top: 0;
      }
      50% {
        top: 20px;
      }
      75% {
        top: 0;
      }
      100% {
        top: 20px;
      }
    }
    @keyframes ld3_div2 {
      0% {
        top: -20px;
      }
      25% {
        top: 0;
      }
      50% {
        top: -20px;
      }
      75% {
        top: 0;
      }
      100% {
        top: -20px;
      }
    }
    @keyframes ld3_div3 {
      0% {
        left: -20px;
      }
      25% {
        left: 0;
      }
      50% {
        left: -20px;
      }
      75% {
        left: 0;
      }
      100% {
        left: -20px;
      }
    }
    @keyframes ld3_div4 {
      0% {
        left: 20px;
      }
      25% {
        left: 0;
      }
      50% {
        left: 20px;
      }
      75% {
        left: 0;
      }
      100% {
        left: 20px;
      }
    }
    #ld4 {
      position: relative;
      display: flex;
      width: 25%;
      justify-content: space-between;
    }
    #ld4 div {
      height: 15px;
      width: 15px;
      border-radius: 50%;
      background: #d91e36;
    }
    #ld4 div:nth-of-type(1) {
      animation: ld4 3s linear infinite 0s;
    }
    #ld4 div:nth-of-type(2) {
      animation: ld4 3s linear infinite 0.15s;
    }
    #ld4 div:nth-of-type(3) {
      animation: ld4 3s linear infinite 0.3s;
    }
    #ld4 div:nth-of-type(4) {
      animation: ld4 3s linear infinite 0.45s;
    }

    @keyframes ld4 {
      0% {
        opacity: 0;
        transform: scale(0.3);
        background: #59cd90;
      }
      25% {
        opacity: 1;
        transform: scale(1.8);
        background: #0072bb;
      }
      50% {
        opacity: 0;
        transform: scale(0.3);
        background: #fe4a49;
      }
      75% {
        opacity: 1;
        transform: scale(1.8);
        background: #fed766;
      }
      100% {
        opacity: 0;
      }
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
        <div id="ld3">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
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
