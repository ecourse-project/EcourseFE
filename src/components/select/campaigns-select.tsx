import { CaretDownOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Input, Select } from 'antd';
import React, { useState } from 'react';
import theme from 'src/styles/theme';
import { typeSelect } from '../../utils/enum';
const { Option } = Select;
const baseStyle = (isFocusing: boolean, isEmpty: boolean, hasError?: boolean) => {
  let isLabelAffected = isFocusing;
  if (!isEmpty) {
    isLabelAffected = true;
  }
  return css`
    position: relative;
    z-index: 1;
    width: 100%;
    .s-label {
      top: ${isLabelAffected ? '7px' : '-30px'};
      font-size: ${isLabelAffected ? '16px' : '16px'};
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
      top: 19px;
      right: 15px;
      .anticon {
        font-size: 24px;
      }
    }
    div {
      border-radius: 0;
      font-size: 14px;
      min-height: 48px;
      align-items: center;
      background-color: #f3f3f3 !important;
      border-color: ${hasError ? theme.text.errorColor : theme.text.blackColor};
      height: 38px;
      font-weight: 500;
      border-radius: 3px;
      width: 100%;
      &:hover {
        border-color: ${theme.text.blackColor};
      }
      &:focus {
        border: 1px solid ${theme.text.blueColor};
        box-shadow: none;
      }
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:active,
      &:-webkit-autofill:focus {
        -webkit-background-clip: text !important;
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

    &.role-field {
      div {
        min-height: 58px !important;
      }
    }
    &.show-field {
      display: inline-block;
      width: auto;
      min-height: 46px;
      margin-bottom: 0px;
      border-radius: 3px;
      transition: all 300ms ease;
      color: #fff;
      font-weight: 500;
      cursor: pointer;
      color: #fff;
      div {
        background-color: #051d29 !important;
        color: #fff;
      }
      label {
        color: #fff;
      }
      .ant-select-arrow {
        color: #fff;
      }
    }
    &.setting-field {
      div {
        border-radius: 0;
        font-size: 14px;
        min-height: 58px;
        align-items: center;
        background-color: #fff !important;
        border-color: ${theme.text.grayColor};
        height: 38px;
        font-weight: 500;
        border-radius: 3px;
        width: 100%;
        color: #333333;
        &:hover {
          border-color: ${theme.text.blackColor} !important;
        }
        &:focus {
          border: 1px solid ${theme.text.blackColor};
          box-shadow: none;
        }
      }
      .ant-select:not(.ant-select-customize-input) .ant-select-selector {
        border: 1px solid #cccccc;
      }
    }
    .ant-select-disabled .ant-select-arrow {
      display: none;
    }
  `;
};

const CustomSelect = styled(Select)`
  height: 20px;
`;

// export interface AppSelectProps extends SelectProps<VT> {}

const CampaignsSelect = (props) => {
  const {
    requiredMark,
    label,
    hasError,
    className,
    isForceFocus,
    handleChange,
    handleBlur,
    handleFocus,
    value,
    itemSelect,
    isSelect,
    placeholder,
    isCampaignsType,
    onSearch,
    ...rest
  } = props;

  const inputRef = React.useRef<Input | null>(null);
  const [isFocusing, setIsFocusing] = useState(!!value);
  const [isEmpty, setIsEmpty] = useState(!value);

  const onFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    handleFocus && handleFocus(e);
    setIsFocusing(true);
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    handleBlur && handleBlur(e);
    setIsFocusing(false);
  };

  const onChange = (value: React.ChangeEvent<HTMLInputElement>) => {
    handleChange && handleChange(value);

    if (value && +value > 0) {
      setIsEmpty(false);
    } else {
      setIsEmpty(true);
    }
  };

  const onInputRefFocus = () => {
    inputRef.current?.focus();
  };

  return (
    <div className={className} css={[baseStyle(isForceFocus || isFocusing, isEmpty, hasError)]}>
      <label className="s-label" onClick={onInputRefFocus}>{`${label}${requiredMark ? `*` : ''}`}</label>
      <CustomSelect
        {...rest}
        onChange={onChange}
        onBlur={onBlur}
        onFocus={onFocus}
        onSearch={(v) => {
          onSearch && onSearch(v);
        }}
        ref={inputRef}
        placeholder={placeholder}
        value={value !== '' ? value : null}
        disabled={isCampaignsType ? true : false}
        suffixIcon={<CaretDownOutlined />}
        getPopupContainer={() => document.querySelector('.campaign-tab')}
        dropdownRender={(menu) => (
          <div
            className="field select-field"
            css={css`
              background-color: ${isSelect === typeSelect.SELECT_ANALYTICS ? '#051d29' : '#f3f3f3 !important'};

              .option {
                color: ${isSelect === typeSelect.SELECT_ANALYTICS ? '#fff' : '#000 !important'};
                &:hover {
                  background-color: #1c87c6 !important;
                  color: ${isSelect === typeSelect.SELECT_ANALYTICS ? '#fff' : '#000 !important'};
                }
              }
            `}
          >
            {menu}
          </div>
        )}
      >
        {itemSelect?.map((item, index) => {
          return (
            <Option className="option" key={index} value={index}>
              {item}
            </Option>
          );
        })}
      </CustomSelect>
    </div>
  );
};

export default CampaignsSelect;
