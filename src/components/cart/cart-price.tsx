import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import React, { ReactNode, useEffect, useState } from 'react';
import { formatCurrency } from 'src/utils/currency';
import CourseService from 'src/services/course';
import { Modal } from 'antd';
import RoutePaths from 'src/utils/routes';
import { useAppDispatch } from 'src/apps/hooks';
import { cartActions } from 'src/reducers/document/documentSlice';
import AppButton from 'src/components/button';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
interface ChildProps {
	data: number;
	docNum: number;
	children: ReactNode;
	visible: (value: boolean) => void;
}
const PricingCard: React.FC<ChildProps> = ({
	data,
	docNum,
	children,
	visible,
}) => {
	const [btnText, setBtnText] = useState<string>('Thanh toán');
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const handleOnClick = () => {
		// visible(true);
		try {
			CourseService.createOrder();
			setBtnText('CREATED');
		} catch (error) {}
	};
	const showModal = () => {
		setOpen(true);
	};
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		try {
			CourseService.createOrder();
			setBtnText('CREATED');
			setTimeout(() => {
				setOpen(false);
				setConfirmLoading(false);
				dispatch(cartActions.clearCart());
				navigate(RoutePaths.ORDER_CART);
			}, 1000);
		} catch (error) {
			console.log(error);
		}
	};
	useEffect(() => {
		if (docNum === 0) {
			setBtnText('Tiếp tục chọn tài liệu');
		} else {
			setBtnText('Thanh toán');
		}
	}, [docNum]);
	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
	};
	return (
		<div
			className=""
			css={css`
				.ant-btn {
					letter-spacing: 4px;
					&:hover {
						letter-spacing: 6px;
					}
				}
				a.ant-btn {
					padding-top: 8px !important;
				}
			`}
		>
			<Modal
				title="Xác nhận đặt hàng"
				visible={open}
				onOk={handleOk}
				confirmLoading={confirmLoading}
				onCancel={handleCancel}
			>
				<p>
					Xác nhận đặt đơn hàng trị giá:
					<strong>{`${formatCurrency(data)}`}</strong>
				</p>
			</Modal>
			<hr className="text-muted" />

			<div className="d-flex justify-content-between">
				<span className="h5">Total:</span>
				<span className="fw-bold h5 mb-0">{formatCurrency(data)}</span>
			</div>

			{
				<div className="d-grid gap-2 mt-2">
					<AppButton
						btnTextColor={'black'}
						btnStyle={'outline'}
						btnSize={'small'}
						btnWidth={'full-w'}
						onClick={showModal}
						href={docNum === 0 ? RoutePaths.DOCUMENT : ''}
					>
						{btnText}
					</AppButton>
					{/* <Link to="/">
								<div className="btn btn-outline-primary">Continue Shopping</div>
							</Link> */}
				</div>
			}
		</div>
	);
};

export default PricingCard;
