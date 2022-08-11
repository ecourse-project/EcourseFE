import React, { useState } from 'react';
import { Input } from 'antd';
import styled from '@emotion/styled';
import { InputProps } from 'antd/lib/input';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import theme from 'src/styles/theme';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons/lib/icons';

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
		position: relative;
		z-index: 1;
		width: 100%;
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
			border-color: ${hasError
				? theme.text.errorColor
				: theme.text.grayColor}!important;
			height: 100%;
			min-height: 38px;
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
				border-radius: 0;
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
		<div
			className={className}
			css={[baseStyle(isForceFocus || isFocusing, isEmpty, hasError)]}
		>
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
