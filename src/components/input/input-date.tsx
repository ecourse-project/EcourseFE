import { DatePicker } from 'antd';
import { InputProps } from 'antd/lib/input';
import moment from 'moment';
import React, { useState } from 'react';
import theme from 'src/styles/theme';

import { css } from '@emotion/react';

const baseStyle = (isFocusing: boolean, isEmpty: boolean, hasError?: boolean) => {
  let isLabelAffected = isFocusing;
  if (!isEmpty) {
    isLabelAffected = true;
  }
  return css`
    position: relative;

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
    .ant-picker {
      min-height: 48px;
      width: 100%;
      border: 2px solid;
      border-color: ${hasError ? theme.text.errorColor : theme.text.grayColor}!important;

      &:focus {
        border-color: ${theme.text.blueColor}!important;
        box-shadow: none;
      }
    }
    .ant-picker-focused {
      border-color: ${theme.text.blueColor}!important;
      box-shadow: none;
    }
  `;
};

export interface AppInputDateProps extends InputProps {
  label: string;
  requiredMark?: boolean;
  hasError?: boolean;
  isSubmitting?: boolean;
  className?: string;
  isForceFocus?: boolean;
  value?: string | number | readonly string[];
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  dateFormat: string;
  isFuture?: boolean;
  isPast?: boolean;
}

const AppInputDate: React.FC<AppInputDateProps> = (props) => {
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
    type,
    placeholder,
    dateFormat,
    isFuture,
    isPast,
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

  return (
    <div className={className} css={[baseStyle(isForceFocus || isFocusing, isEmpty, hasError)]}>
      <label className="s-label">{`${label}${requiredMark ? `*` : ''}`}</label>
      <DatePicker
        defaultValue={undefined}
        format={dateFormat}
        onChange={(moment, date) => console.log('moment,date :>> ', moment, date)}
        showToday={false}
        getPopupContainer={(trigger) => trigger?.parentElement as HTMLElement}
        placement={'bottomRight'}
        placeholder={placeholder}
        disabledDate={(current) => {
          const customDate = moment().format(dateFormat);
          if (isPast) return current && current > moment(customDate, dateFormat);
          else if (isFuture) return current && current < moment(customDate, dateFormat);
          return false;
        }}
      />
    </div>
  );
};

export default AppInputDate;
