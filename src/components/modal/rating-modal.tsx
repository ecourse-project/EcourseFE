/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Rate } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import React, { useState } from 'react';
import BaseModal from '.';
import AppButton from '../button';
import AppInput from '../input';
interface RatingModalProps {
	visible: boolean;
	countStar: (value) => void;
	onChangeFeedback: (value) => void;
	onClose: () => void;
	onSave: () => void;
	defaultContent?: string;
}
const RatingModal: React.FC<RatingModalProps> = (props) => {
	const {
		visible,
		countStar,
		onChangeFeedback,
		onClose,
		onSave,
		defaultContent,
	} = props;
	const [star, setStar] = useState<number>(0);
	return (
		<BaseModal
			visible={visible}
			onCancel={onClose}
			css={css`
				position: relative;
				top: 30%;
				.ant-modal-content {
					width: 650px;
				}
				.ant-modal-body {
					text-align: center;
					height: 450px;
					display: flex;
					align-items: center;
					justify-content: space-evenly;
					flex-direction: column;

					.ant-rate {
						font-size: 50px;
					}
					.title {
						font-size: 24px;
						font-weight: 700;
						font-family: 'Montserrat';
						text-transform: capitalize;
					}
					.ant-input-textarea {
						width: 560px;
						font-size: 18px;
						& textarea {
							border: medium solid #000;
							resize: none;
							border-color: #000;
							padding: 20px;
							letter-spacing: 1px;
							font-size: 18px;
						}
					}
					.ant-input-textarea-show-count:after {
						float: left !important;
					}
					.save-btn {
						float: right;
						margin-top: 5px;
						font-weight: 600;
						color: #fff;
						&:hover {
							letter-spacing: 6px;
						}
					}
				}
			`}
		>
			{defaultContent ? (
				<div>defaultContent</div>
			) : (
				<>
					<div className="title">Để lại đánh giá</div>
					<div>
						<Rate
							className="rating"
							onChange={(value) => {
								setStar(value);
								countStar(value);
							}}
							defaultValue={star}
							style={{ color: '#e59819', marginBottom: '20px' }}
						/>
						{star ? (
							<>
								<TextArea
									maxLength={100}
									showCount
									rows={5}
									onChange={(e) => onChangeFeedback(e.target.value)}
								/>
								<AppButton
									className="save-btn"
									btnTextColor={'white'}
									btnStyle={'solid'}
									btnSize={'small'}
									btnWidth={'fix-content'}
									onClick={onSave}
								>
									Lưu
								</AppButton>
							</>
						) : (
							<div></div>
						)}
					</div>
				</>
			)}
		</BaseModal>
	);
};

export default RatingModal;
