/* eslint-disable react/prop-types */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Input } from 'antd';
import { InputProps } from 'antd/lib/input';
import React, { useState } from 'react';
const { Search } = Input;
const baseStyle = (
	isFocusing: boolean,
	isEmpty: boolean,
	hasError?: boolean
) => {
	let isLabelAffected = isFocusing;
	if (!isEmpty) {
		isLabelAffected = true;
	}
	return css`
		width: 100%;
		.ant-input {
			min-height: 44px;
			margin-bottom: 0px;
			border-style: solid;
			border-width: 1px;
			border-color: #051d29;
			border-radius: 3px 0px 0px 3px;
		}
		.ant-btn {
			display: inline-block;
			padding: 9px 15px;
			color: white;
			border: 0;
			line-height: inherit;
			text-decoration: none;
			cursor: pointer;
			border-radius: 0;
			width: 60px;
			border-top-right-radius: 3px;
			border-bottom-right-radius: 3px;
			background-color: #000;

			transition: all 300ms ease;
			&:hover {
				background-color: #073f5c;
			}
		}
		.ant-input-search-button {
			height: 44px;
		}
		.anticon {
			font-size: 20px;
			font-weight: 800 !important;
		}
	`;
};

const CustomSearchInput = styled(Search)`
	height: 20px;
`;

export interface AppInputProps extends InputProps {
	showEye?: boolean;
	label?: string;
	requiredMark?: boolean;
	hasError?: boolean;
	className?: string;
	isForceFocus?: boolean;
	value?: string | number | readonly string[];
	handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
	handleBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
	handleFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const AppInputSearch = (props) => {
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

		placeholder,
		onSearch,
		...rest
	} = props;

	const inputRef = React.useRef<any | null>(null);
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

	const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		handleChange && handleChange(e);
		if (e.target.value && e.target.value.length > 0) {
			setIsEmpty(false);
		} else {
			setIsEmpty(true);
		}
	};

	const onInputRefFocus = () => {
		inputRef.current?.focus();
	};

	return (
		<div
			className={className}
			css={[baseStyle(isForceFocus || isFocusing, isEmpty, hasError)]}
		>
			<label className="s-label" onClick={onInputRefFocus}>{`${label}${
				requiredMark ? `*` : ''
			}`}</label>
			<CustomSearchInput
				{...rest}
				className="search"
				placeholder={placeholder}
				onSearch={onSearch}
				// value={value}
				onBlur={onBlur}
				onFocus={onFocus}
				onChange={onChange}
				ref={inputRef}
			/>
		</div>
	);
};

export default AppInputSearch;
