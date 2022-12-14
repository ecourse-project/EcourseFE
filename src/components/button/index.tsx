/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';

import { css, useTheme } from '@emotion/react';
import theme from 'src/styles/theme';

interface AppButtonProps extends ButtonProps {
  btnTextColor: 'black' | 'white' | 'green';
  btnStyle: 'solid' | 'outline' | 'gradient';
  btnSize: 'large' | 'medium' | 'small';
  btnWidth: 'full-w' | 'fix-content';
  nonBordered?: boolean;
  borderRadius?: '5px' | '3px';
  colorHover?: 'darkBlue' | 'white' | 'BRICK';
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
        .ant-btn-loading-icon {
          position: relative;
          .anticon.anticon-loading.anticon-spin {
            position: absolute;
            top: -15px;
            left: -25px;
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
          background-color: #ffa535 !important;
          transition: all 400ms ease;
          color: #000;
          font-weight: 700;
          letter-spacing: initial;
          &:hover {
            letter-spacing: 8px;
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
        &.btn-agentlookup {
          background-color: #faae18 !important;
          transition: all 400ms ease;
          color: #000;
          font-weight: 700;
          letter-spacing: initial;
          &:hover {
            letter-spacing: 8px;
            color: #000;
          }
        }
        &.btn-website {
          min-width: 200px;
          min-height: 50px;
          margin-top: 20px;
          padding-top: 12px;
          padding-bottom: 12px;
          border-radius: 3px;
          background-color: #000;
          font-weight: 500;
          letter-spacing: 4px;
          text-transform: uppercase;
          display: inline-block;
          padding: 9px 15px;
          background-color: #3898ec;
          color: white;
          border: 0;
          line-height: inherit;
          text-decoration: none;
          cursor: pointer;
          border-radius: 0;
          border-radius: 4px;
        }
        &.btn-generic {
          font-size: 18px;
          height: 45px !important;
          max-width: 200px !important;
          background-color: #ffa900 !important;
          font-weight: 500;
          text-transform: uppercase;
          border: none;
          margin-top: 30px;
          padding-top: 12px;
          padding-bottom: 12px;
          border-radius: 3px;
          font-weight: 500 !important;
          letter-spacing: 4px;
          display: inline-block;
          padding: 9px 15px;
          color: white;
          border: 0;
          line-height: inherit;
          text-decoration: none;
          cursor: pointer;
          &:active,
          &:focus,
          &:hover {
            background-color: #ffa900 !important;
            color: #fff;
            border: none;
          }
          @media only screen and (max-width: ${theme.media.phones}px) {
            max-width: 100% !important;
            margin-top: 46px;
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
          background-color: #000;
          background-image: none;
          transition: box-shadow 600ms ease, border-color 600ms ease, color 600ms ease, background-color 600ms ease;
          color: #fff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          text-align: center;
          letter-spacing: 4px;
          text-decoration: none;
          text-transform: uppercase;
          &:hover {
            background-color: #ffa535 !important;
          }
        }
        &.btn-protected {
          height: 48px;
          padding: 12px 20px 12px 24px;
          justify-content: center;
          align-items: center;
          border-style: none;
          border-radius: 0px;
          background-color: #000;
          background-image: none;
          transition: box-shadow 600ms ease, border-color 600ms ease, color 600ms ease, background-color 600ms ease;
          color: #fff;
          font-size: 14px;
          line-height: 20px;
          font-weight: 400;
          text-align: center;
          letter-spacing: 4px;
          text-decoration: none;
          text-transform: uppercase;
          &:hover {
            background-color: #ffa535 !important;
          }
        }
        &.bth-header {
          font-weight: 300;
          font-size: 14px;
          opacity: 0.8;
          @media only screen and (max-width: ${theme.media.desktops}px) {
            height: 36px;
            font-size: 12px;
          }
          @media only screen and (max-width: ${theme.media.tablets}px) {
            letter-spacing: 2px;
          }
        }
        &.shadow-inset {
          box-shadow: inset 0 0 0 1px hsl(0deg 0% 100% / 50%) !important;
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
        &.overview-btn {
          min-width: 200px;

          letter-spacing: 4px;
        }
        &.btn-downsizes {
          max-width: 200px !important;
          background-color: #ffa535 !important;
          transition: all 500ms ease;
          font-weight: 500;
          text-transform: uppercase;
          border: none;
          margin-top: 20px;
          padding-top: 12px;
          padding-bottom: 12px;
          border-radius: 3px;
          letter-spacing: 4px;
          display: inline-block;
          padding: 9px 15px;
          color: white;
          border: 0;
          line-height: inherit;
          text-decoration: none;
          cursor: pointer;
          &:hover {
            background-color: #0096f4 !important;
            color: #fff;
          }
          @media only screen and (max-width: ${theme.media.phones}px) {
            max-width: 100% !important;
            margin-top: 46px;
          }
        }
        &.btn-managetAgents {
          max-width: 100% !important;
          height: 54px;
          background-color: #ffa535 !important;
          transition: all 400ms ease;
          text-transform: uppercase;
          border-radius: 3px;
          letter-spacing: 0px;
          display: inline-block;
          padding: 1px 15px;
          color: #000;
          border: 0;
          line-height: inherit;
          text-decoration: none;
          cursor: pointer;
          font-weight: 600;
          &:hover {
            border: none;
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
      {children}
    </Button>
  );
});

export default AppButton;
