/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

export const tableStyle = css`
	background-color: #fff;
	padding: 30px;
	overflow: auto;
	h2 {
		font-size: 22px;
		font-weight: 700;
		margin-bottom: 30px;
	}
	.no-data-yet {
		font-size: 24px;
		text-align: center;
	}
	.past-orders-table {
		width: 1660px;
		max-width: inherit;
		.ant-table-content {
			.ant-table-thead {
				.ant-table-cell {
					background: #fff;
					color: #333333;
					font-size: 17px;
					font-weight: 700;
					padding: 14px 35px 14px 0;
					max-width: 200px;
					&:last-child {
						padding: 0;
					}
					&::before {
						display: none;
					}
				}
			}
			.ant-table-tbody {
				.ant-table-row {
					.ant-table-cell {
						background: #fff;
						color: #525b73;
						padding: 14px 35px 14px 0;
						max-width: 200px;
						&:last-child {
							padding: 0;
						}
						.ant-image {
							max-width: 83px;
						}
					}
					.mint-action {
						border-color: #ffa900 !important;
						background-color: #ffa900 !important;
						height: 30px;
						width: 153px;
						color: #333;
						font-size: 13px;
						font-weight: 700;
						border-radius: 2px;
						padding: 6px 12px;
						letter-spacing: initial;
						text-transform: initial;
						display: flex;
						align-items: center;
						&[disabled] {
							background-color: #cecece !important;
						}
					}
					.mint-price {
						font-size: 12px;
					}
				}
			}
		}
	}
`;
