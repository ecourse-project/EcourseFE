import { Divider, Image, Modal } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'src/apps/hooks';
import Img from 'src/assets/images/harry.jpg';
import AppButton from 'src/components/button';
import { docActions } from 'src/reducers/document/documentSlice';
import CourseService from 'src/services/course';
import { formatCurrency, formatCurrencySymbol } from 'src/utils/currency';
import RoutePaths from 'src/utils/routes';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import {
	CalculatePriceArgs,
	CreateOrderArg,
	TotalPrice,
} from 'src/models/backend_modal';
import { GlobalStyle } from 'src/utils/enum';
import AppAction from 'src/reducers/actions';
interface ChildProps {
	docNum: number;
	children: ReactNode;
	checkoutList: CreateOrderArg;
}
const PricingCard: React.FC<ChildProps> = ({
	docNum,
	checkoutList,
	children,
}) => {
	const [btnText, setBtnText] = useState<string>('Thanh toán');
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const [totalPrice, setTotalPrice] = useState<TotalPrice>();

	const showModal = () => {
		docNum && setOpen(true);
	};
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const handleOk = async () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		try {
			// const newOrder = await CourseService.createOrder(checkoutList);
			setTimeout(() => {
				setOpen(false);
				setConfirmLoading(false);
				// dispatch(docActions.clearCart(checkoutList));
				// dispatch(docActions.createOrder(newOrder));
				dispatch({ type: AppAction.CREATE_ORDER, payload: checkoutList });
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
		setOpen(false);
	};
	const currency = <CurrencyRubleIcon />;
	return (
		<div
			className=""
			css={css`
				.ant-btn {
					letter-spacing: 0px;
					&:hover {
						letter-spacing: 1px;
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

				.ant-statistic {
					text-align: left;
				}
				.total-price {
					font-size: 18px;
					cursor: pointer;
					font-weight: 400;
				}
				.current-price {
					font-family: monospace;
					font-weight: 700;
					font-size: 36px;
					cursor: pointer;
					text-align: left;
					&:hover {
						color: ${GlobalStyle.BROWN_YELLOW};
					}
				}
				.ant-divider {
					margin: 0;
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
					<strong>{` ${formatCurrencySymbol(
						checkoutList.total_price,
						'VND'
					)}`}</strong>
				</p>
			</Modal>
			<Image src={Img} />
			<div className="total-price">Tổng đơn:</div>
			<Divider />
			<div className="current-price">
				{formatCurrencySymbol(checkoutList.total_price, 'VND', true)}
				{/* {'/'}
				{formatCurrencySymbol(totalPrice, 'VND', true)} */}
				{/* {totalPrice} */}
			</div>
			{/* <Statistic title="Tổng" value={formatCurrency(totalPrice)} /> */}
			<AppButton
				btnTextColor={'black'}
				btnStyle={'outline'}
				btnSize={'small'}
				btnWidth={'full-w'}
				onClick={showModal}
				disabled={checkoutList.total_price === 0}
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
