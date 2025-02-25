import { InputProps } from 'antd/lib/input';
import React, { useState } from 'react';
import theme from 'src/styles/theme';

import { css } from '@emotion/react';
import TextArea from 'antd/lib/input/TextArea';

export interface AppInputProps extends InputProps {
  label?: string;
  requiredMark?: boolean;
  isSubmitting?: boolean;
  className?: string;
  isForceFocus?: boolean;
  value?: string | number | readonly string[];
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<AppInputProps> = (props) => {
  const { requiredMark, label, className, isForceFocus, handleChange, value, type, placeholder } = props;

  const [isFocusing] = useState(!!value);
  const [isEmpty, setIsEmpty] = useState(!value);

  const onChange = (e) => {
    handleChange && handleChange(e);
    if (type !== 'number' && e.target.value && e.target.value.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  return (
    <div className={className} css={[baseStyle(isForceFocus || isFocusing, isEmpty)]}>
      {label && <label className="s-label">{`${label}${requiredMark ? `*` : ''}`}</label>}
      <TextArea placeholder={placeholder} value={value || ''} onChange={onChange} />
    </div>
  );
};

export default AppInput;
const baseStyle = (isFocusing: boolean, isEmpty: boolean) => {
  let isLabelAffected = isFocusing;
  if (!isEmpty) {
    isLabelAffected = true;
  }
  return css`
    position: relative;
    z-index: 1;
    input {
      font-size: 20px;
      font-weight: 600;
      font-style: italic;
      color: #3f3939 !important;
      font-family: 'Montserrat';
    }
    .s-label {
      top: ${isLabelAffected ? '7px' : '-30px'};
      font-size: ${isLabelAffected ? '17px' : '17px'};
      opacity: 1;
      font-weight: 700;
      transition-property: top, font-size, opacity;
      transition-duration: 0.1s;
      transition-timing-function: linear;
      margin-bottom: 5px;
      display: inline-block;
    }
    .eyes {
      position: absolute;
      top: 50px;
      right: 15px;
      color: #051d29;
      .anticon {
        font-size: 24px;
      }
    }
    input {
      border-radius: 0;
      font-size: 14px;
      border: 1px solid;
      background-color: transparent;
      height: 100%;
      min-height: 46px;
      border-radius: 3px;
      &:hover {
        border-color: ${theme.text.blackColor};
      }
      &:focus {
        // border: 1px solid ${theme.text.blueColor};
        box-shadow: none;
      }
    }
    .forgot-pwd-input-base,
    .bg-input-base {
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        border: 1px solid rgba(255, 255, 255, 0.2) !important;
        -webkit-text-fill-color: #fff !important;
        -webkit-box-shadow: 0 0 0px 1000px #000 inset;
      }
    }

    .status {
      position: absolute;
      z-index: 2;
      top: 16px;
      right: 15px;
      width: 19px;
      height: 19px;
    }
    .tip {
      font-style: normal;
      font-weight: normal;
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.01em;
      color: #fff;
      opacity: 0.7;
    }
    &.login-field {
      input {
        font-size: 20px;
        font-weight: 600;
        font-style: italic;
        color: #3f3939 !important;
        font-family: 'Montserrat';
      }

      width: 100%;
      .s-label {
        margin: 0 0 0 10px;
        color: #000;
      }
      border-bottom: 4px solid transparent;
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 46px !important;
      input {
        border: none;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }
    &.register-field {
      .s-label {
        margin: 0 0 0 10px;
      }
      width: 100%;
      border-bottom: 4px solid transparent;
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 46px !important;
      input {
        border: none;
        &:-webkit-autofill,
        &:-webkit-autofill:hover,
        &:-webkit-autofill:focus,
        &:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
        }
      }
    }

    .ant-input-affix-wrapper {
      input {
        &:focus {
          border: none;
        }
      }
    }
  `;
};
