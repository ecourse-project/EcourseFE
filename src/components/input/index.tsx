import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { useState } from 'react';
import theme from 'src/styles/theme';

import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons/lib/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const baseStyle = (isFocusing: boolean, isEmpty: boolean, hasError?: boolean) => {
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
      border-color: ${hasError ? theme.text.errorColor : theme.text.grayColor}!important;
      height: 100%;
      min-height: 58px;
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
      /* text-align: center; */
      border-bottom: 4px solid transparent;
      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 58px !important;
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
      /* text-align: center; */
      border-bottom: 4px solid transparent;
      /* border-image: linear-gradient(0.25turn, rgba(255, 249, 34), rgba(255, 0, 128), rgba(56, 2, 155, 0)); */
      border-image: linear-gradient(
        207deg,
        rgba(66, 103, 212, 1) 20%,
        rgba(66, 146, 212, 1) 53%,
        rgba(197, 22, 240, 1) 84%,
        rgba(0, 212, 255, 1) 100%
      );
      border-image-slice: 1;
      min-height: 58px !important;
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
    &.company-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.email-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.password-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.firstName-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.lastName-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.confirm-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.name-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.market-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.dre-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.website-field {
      input {
        background-color: #fff !important;
        min-height: 40px !important;
      }
    }
    &.website-lookup-field {
      input {
        background-color: #fff !important;
        min-height: 58px !important;
      }
    }
    &.password-protected {
      .s-label {
        display: block;
        margin-bottom: 5px;
        font-weight: 700;
      }
      input {
        display: block;
        width: 100%;
        min-height: 38px;
        padding: 8px 12px;
        margin-bottom: 10px;
        font-size: 14px;
        line-height: 1.42857143;
        color: #333333;
        vertical-align: middle;
        background-color: #ffffff;
        border: 1px solid #cccccc;
        border-radius: 5px;
        &:focus {
          border: 1px solid ${theme.text.blueColor};
          box-shadow: none;
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

const CustomInput = styled(Input)`
  height: 45px;
  width: 100%;
  border-radius: 5px;
`;

export interface AppInputProps extends InputProps {
  showEye?: boolean;
  label?: string;
  requiredMark?: boolean;
  hasError?: boolean;
  isSubmitting?: boolean;
  className?: string;
  isForceFocus?: boolean;
  value?: string | number | readonly string[];
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AppInput: React.FC<AppInputProps> = (props) => {
  const {
    requiredMark,
    label,
    hasError,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    isSubmitting,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    className,
    isForceFocus,
    handleChange,
    handleBlur,
    handleFocus,
    onInput,
    value,
    showEye,
    type,
    placeholder,
    ...rest
  } = props;

  // const inputRef = React.useRef(null);
  const [isFocusing, setIsFocusing] = useState(!!value);
  const [isEmpty, setIsEmpty] = useState(!value);
  const [typeLocal, setTypeLocal] = useState(type);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    handleFocus && handleFocus(e);
    setIsFocusing(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur && handleBlur(e);
    setIsFocusing(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChange && handleChange(e);
    if (e.target.value && e.target.value.length > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  // const onInputRefFocus = () => {
  // 	inputRef.current?.focus();
  // };

  return (
    <div className={className} css={[baseStyle(isForceFocus || isFocusing, isEmpty, hasError)]}>
      {/* onClick={onInputRefFocus} */}
      <label className="s-label">{`${label}${requiredMark ? `*` : ''}`}</label>
      <CustomInput
        {...rest}
        type={typeLocal}
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onFocus={onFocus}
        onChange={onChange}
        // ref={inputRef}
        onInput={onInput}
      />
      {showEye && (
        <div className="eyes">
          {typeLocal === 'password' ? (
            <EyeOutlined
              onClick={() => {
                setTypeLocal('text');
              }}
            />
          ) : (
            <EyeInvisibleOutlined
              onClick={() => {
                setTypeLocal('password');
              }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default AppInput;
