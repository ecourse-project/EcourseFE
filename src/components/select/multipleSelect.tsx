import { LoadingOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Empty, Select, Spin } from 'antd';
import { SpinProps } from 'antd/lib';
import { BaseOptionType, DefaultOptionType } from 'antd/lib/select';
import React, { CSSProperties, useState } from 'react';
export const InnerLoading = ({ iconStyle, ...props }: SpinProps & { iconStyle?: CSSProperties }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 29, ...iconStyle }} spin />;
  return <Spin {...props} indicator={antIcon} />;
};
const baseStyle = (isFocusing: boolean, isEmpty: boolean, hasError?: boolean) => {
  let isLabelAffected = isFocusing;
  if (!isEmpty) {
    isLabelAffected = true;
  }
  return css`
    position: relative;
    z-index: 1;
    width: 100%;
    .ant-select {
      min-height: 46px;
      height: fit-content;
      .ant-select-selection-overflow {
        padding: 10px;
      }
      .ant-select-selection-placeholder {
        padding-left: 10px;
      }
    }
    .ant-select-arrow .anticon:not(.ant-select-suffix) {
      pointer-events: none;
    }
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
  `;
};

const CustomSelect = styled(Select)`
  height: 20px;
`;
interface MultipleSelectProps {
  requiredMark?: boolean;
  label?: string;
  hasError?: boolean;
  className?: string;
  isForceFocus?: boolean;
  handleChange?: (value: any) => void;
  handleBlur?: (e: React.FocusEvent) => void;
  handleFocus?: (e: React.FocusEvent) => void;
  value?: string | null | undefined | string[];
  itemSelect?: { value: string; label: string }[];
  placeholder?: string;
  isGetContainer?: boolean;
  suffixIcon?: React.ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  name: string;
  type?: string;
  searchValue?: string;
  loadingMoreMailing?: boolean;
  onSearch?: (value: any) => void;
  handlePopupScroll?: (event: React.UIEvent<HTMLDivElement>) => Promise<void>;
  filterOption?: (input: string, option: BaseOptionType | DefaultOptionType | undefined) => boolean;
}
const MultipleSelect = (props: MultipleSelectProps) => {
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
    placeholder,
    isGetContainer,
    suffixIcon,
    isLoading = false,
    handlePopupScroll,
    loadingMoreMailing,
    ...rest
  } = props;
  const inputRef = React.useRef<any>(null);
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

  const onChange = (value) => {
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
      {label && (
        <label className="s-label" onClick={onInputRefFocus}>
          {label}
          {requiredMark ? <span className="mark">*</span> : ''}
        </label>
      )}
      <InnerLoading spinning={isLoading}>
        <CustomSelect
          showArrow
          onChange={onChange}
          suffixIcon={suffixIcon}
          onBlur={onBlur}
          onFocus={onFocus}
          mode="multiple"
          notFoundContent={
            loadingMoreMailing ? 'Loading...' : <Empty className="empty-data" image={Empty.PRESENTED_IMAGE_SIMPLE} />
          }
          ref={inputRef}
          filterOption={handlePopupScroll ? false : true}
          placeholder={placeholder}
          value={value !== '' ? value : null}
          onPopupScroll={handlePopupScroll}
          getPopupContainer={
            isGetContainer ? () => document.getElementById('market') as HTMLElement : () => document.body
          }
          {...rest}
        >
          {itemSelect?.map((option, index) => (
            <Select.Option key={option.value + index} value={option.value} label={option.label}>
              {option.label}
            </Select.Option>
          ))}
        </CustomSelect>
      </InnerLoading>
    </div>
  );
};

export default MultipleSelect;
