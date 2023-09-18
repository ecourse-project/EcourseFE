/* eslint-disable react/prop-types */
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
/* eslint-disable react/display-name */
import React from 'react';
import theme from 'src/styles/theme';

import { css } from '@emotion/react';

interface AppButtonProps extends ButtonProps {
  btnTextColor: 'black' | 'white' | 'green';
  btnStyle: 'solid' | 'outline' | 'gradient';
  btnSize: 'large' | 'medium' | 'small';
  btnWidth: 'full-w' | 'fix-content';
  nonBordered?: boolean;
  borderRadius?: '5px' | '3px';
  colorHover?: 'darkBlue' | 'white' | 'BRICK';
  bgColor?: string;
}
const AppButton: React.FC<AppButtonProps> = React.memo((props) => {
  const {
    disabled,
    children,
    btnSize,
    btnStyle,
    btnTextColor,
    nonBordered,
    colorHover,
    borderRadius,
    btnWidth,
    bgColor,
    loading,
    ...rest
  } = props;
  const getSize = () => {
    switch (btnSize) {
      case 'large':
        return '58px';
      case 'medium':
        return '48px';
      default:
        return '44px';
    }
  };
  const getWidth = () => {
    switch (btnWidth) {
      case 'full-w':
        return '100%';
      case 'fix-content':
        return 'fix-content';
      default:
        return '100%';
    }
  };

  const getTextColor = () => {
    if (disabled) {
      switch (btnStyle) {
        case 'outline':
          return theme.color.BLACK_1;
        default:
          return theme.color.BLACK_3;
      }
    }

    switch (btnTextColor) {
      case 'black':
        return '#000';
      case 'white':
        return theme.color.WHITE;
      default:
        return theme.color.GREEN;
    }
  };

  const getBackgroundColor = () => {
    if (bgColor) return bgColor;
    if (disabled) {
      switch (btnStyle) {
        case 'outline':
          return 'transparent';
        default:
          return theme.color.GRAY_2;
      }
    }
    switch (btnStyle) {
      case 'solid':
        return btnTextColor === 'black'
          ? theme.color.WHITE
          : btnTextColor === 'white'
          ? theme.color.DARKBLUE
          : 'transparent';
      case 'outline':
        return 'transparent';
      default:
        return 'linear-gradient(to right, #FED49B , #FFFFFF)';
    }
  };

  const getBorderStyle = () => {
    let color: string | null = null;
    if (disabled) {
      switch (btnStyle) {
        case 'outline':
          color = theme.color.BLACK_4;
          break;
        default:
          color = null;
          break;
      }
    } else {
      switch (btnStyle) {
        case 'solid':
          color =
            btnTextColor === 'black'
              ? theme.color.BLACK
              : btnTextColor === 'white'
              ? theme.color.WHITE
              : btnTextColor === 'green'
              ? theme.color.GREEN
              : null;
          break;
        case 'outline':
          color =
            btnTextColor === 'black'
              ? theme.color.BLACK
              : btnTextColor === 'white'
              ? theme.color.WHITE
              : btnTextColor === 'green'
              ? theme.color.GREEN
              : null;
          break;
        default:
          color = null;
          break;
      }
    }

    if (!color) return 'none';
    return `1px solid ${color}`;
  };

  const getFontSize = () => {
    switch (btnSize) {
      case 'large':
        return '18px';
      case 'medium':
        return '16px';
      default:
        return '14px';
    }
  };

  return (
    <Button
      css={css`
        width: ${getWidth()};
        height: ${getSize()} !important;
        color: ${getTextColor()};
        background: ${getBackgroundColor()}!important;
        background-image: ${getBackgroundColor()};
        border: ${nonBordered ? 'none' : getBorderStyle()};
        font-size: ${getFontSize()};
        border-radius: 0;
        text-transform: uppercase;
        pointer-events: ${disabled ? 'none' : 'initial'};
        opacity: ${disabled ? '0.5' : '1'};
        letter-spacing: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 500;
        padding: 12px 20px 12px 24px;
        border-radius: ${borderRadius ? borderRadius : 'initial'};
        cursor: ${disabled ? 'default' : 'pointer'};
        &,
        span {
          transition: all 400ms ease;
        }
        outline: none !important;
        .ant-btn-loading-icon {
          position: relative;
          .anticon.anticon-loading.anticon-spin {
            font-size: 23px;
            padding: 0;
            margin: 0;
            border: none;
          }
        }
        .lds-ring {
          display: inline-block;
          position: relative;
          width: 80px;
          height: 80px;
        }
        .lds-ring div {
          box-sizing: border-box;
          display: block;
          position: absolute;
          width: 30px;
          height: 30px;
          margin: 25px;
          border: 4px solid;
          border-radius: 50%;
          animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
          border-color: #70d1c1 transparent transparent transparent;
        }
        .lds-ring div:nth-of-type(1) {
          animation-delay: -0.45s;
        }
        .lds-ring div:nth-of-type(2) {
          animation-delay: -0.3s;
        }
        .lds-ring div:nth-of-type(3) {
          animation-delay: -0.15s;
        }
        @keyframes lds-ring {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        &.btn-cmt {
          // background-color: red !important;
          // min-width: 200px;
          border-radius: 5px;
          margin: 10px 0;
          letter-spacing: 2px;
        }
        &.btn-login {
          background-color: #ffa535;
          transition: all 400ms ease;
          color: #000;
          border-color: #000;
          font-weight: 700;
          letter-spacing: unset;
          border-radius: 5px;
          &:hover {
            letter-spacing: 2px;
            border-color: #000;
            color: #000;
          }
        }
        &.btn-skip {
          background-color: #fff !important;
          transition: all 400ms ease;
          color: #000;
          font-weight: 600;
          letter-spacing: initial;
          &:hover {
            letter-spacing: 8px;
            color: #000;
          }
        }

        &.btn-setting {
          padding-right: 40px;
          padding-left: 40px;
          border-radius: 3px;
          height: 48px;
          padding: 12px 20px 12px 24px;
          justify-content: center;
          align-items: center;
          border-style: none;
          background-color: #666666 !important;
          background-image: none;
          transition:
            box-shadow 600ms ease,
            border-color 600ms ease,
            color 600ms ease,
            background-color 600ms ease;
          color: #fff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          text-align: center;
          letter-spacing: 2px;
          text-decoration: none;
          text-transform: uppercase;
          font-weight: 500;
          &:hover {
            letter-spacing: 4px;
          }
        }

        &.ant-btn {
          position: unset !important;
          .fa-icon {
            display: inline;
            margin-right: 10px;
            font-family: 'Fa 300', sans-serif !important;
            font-size: 24px;
            line-height: 1.2;
            @media only screen and (max-width: ${theme.media.desktops}px) {
              font-size: 20px;
            }
            &.user {
              margin-right: 0px;
              margin-left: 10px;
            }
          }
        }

        ${colorHover
          ? `
        &:hover,
        :active,
        :focus,
        :visited,
        :active {
          color: ${
            colorHover === 'darkBlue' || colorHover === 'BRICK'
              ? '#fff'
              : colorHover === 'white'
              ? '#051d29'
              : 'initial'
          }!important;
          background: ${
            colorHover === 'darkBlue'
              ? '#043046'
              : colorHover === 'BRICK'
              ? '#900'
              : colorHover === 'white'
              ? '#fff'
              : 'initial'
          }!important;
          border: ${nonBordered ? 'none' : getBorderStyle()};
        `
          : `
        &:hover,
        :active,
        :focus,
        :visited,
        :active {
          color: ${getTextColor()};
          background: ${getBackgroundColor()};
          background-image: ${getBackgroundColor()};
          border: ${nonBordered ? 'none' : getBorderStyle()};
        }
      }
        `}
      `}
      disabled={disabled}
      {...rest}
    >
      {loading ? (
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) : (
        children
      )}
    </Button>
  );
});

export default AppButton;
