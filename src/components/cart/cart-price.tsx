import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import React, { ReactNode, useEffect, useState } from 'react';
import { formatCurrency } from 'src/utils/currency';
import CourseService from 'src/services/course';
import { Image, Modal } from 'antd';
import RoutePaths from 'src/utils/routes';
import { useAppDispatch } from 'src/apps/hooks';
import { cartActions } from 'src/reducers/document/documentSlice';
import AppButton from 'src/components/button';
import Img from 'src/assets/images/harry.jpg';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { CreateOrderArg } from 'src/models/backend_modal';
interface ChildProps {
	totalPrice: number;
	docNum: number;
	children: ReactNode;
	checkedDoc: CreateOrderArg;
}
const PricingCard: React.FC<ChildProps> = ({
	totalPrice,
	docNum,
	checkedDoc,
	children,
}) => {
	const [btnText, setBtnText] = useState<string>('Thanh toán');
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const handleOnClick = () => {
		// visible(true);
		try {
			CourseService.createOrder(checkedDoc);
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
			CourseService.createOrder(checkedDoc);
			setTimeout(() => {
				setOpen(false);
				setConfirmLoading(false);
				dispatch(cartActions.clearCart(checkedDoc));
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
				.total-price {
					display: flex;
					justify-content: space-between;
					font-size: 20px;
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
					<strong>{`${formatCurrency(totalPrice)}`}</strong>
				</p>
			</Modal>
			<hr className="text-muted" />
			<Image src={Img} />
			<div className="total-price">
				<span>Total:</span>
				<span>{formatCurrency(totalPrice)}</span>
			</div>

			<AppButton
				btnTextColor={'black'}
				btnStyle={'outline'}
				btnSize={'small'}
				btnWidth={'full-w'}
				onClick={showModal}
				href={docNum === 0 ? RoutePaths.DOCUMENT : undefined}
			>
				{btnText}
			</AppButton>
			{/* <Link to="/">
								<div className="btn btn-outline-primary">Continue Shopping</div>
							</Link> */}
		</div>
	);
};

export default PricingCard;
