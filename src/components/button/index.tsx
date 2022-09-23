/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import React, { useEffect } from 'react';
import { Button } from 'antd';
import { ButtonProps } from 'antd/lib/button';
/** @jsxImportSource @emotion/react */
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
				height: ${getSize()};
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
				cursor: ${disabled ? 'not-allowed !important' : 'pointer'};

				.ant-btn-loading-icon {
					position: relative;
					.anticon.anticon-loading.anticon-spin {
						position: absolute;
						top: -15px;
						left: -25px;
					}
				}
				&.btn-login {
					background-color: #faae18 !important;
					transition: all 400ms ease;
					color: #333;
					font-weight: 600;
					letter-spacing: initial;
					&:hover {
						letter-spacing: 8px;
						color: #333;
					}
				}

				&.bth-header {
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
			`}
			{...rest}
		>
			{children}
		</Button>
	);
});

export default AppButton;
