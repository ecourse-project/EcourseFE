import React, { useState } from 'react';
import {
	Avatar,
	Button,
	Card,
	Col,
	Collapse,
	List,
	Modal,
	Row,
	Select,
	Skeleton,
	Statistic,
} from 'antd';
import { SettingOutlined } from '@ant-design/icons';
import { ExpandIconPosition } from 'antd/lib/collapse/Collapse';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { OutputOrder } from 'src/models/backend_modal';
import { formatCurrency } from 'src/utils/currency';
import moment from 'moment';
import Base from 'antd/lib/typography/Base';
import BaseModal from 'src/components/modal';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'src/apps/hooks';
import AppAction from 'src/reducers/actions';
import InfoIcon from '@mui/icons-material/Info';
const { Panel } = Collapse;
const { Option } = Select;
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

interface OrderItemPropType {
	orderItem: OutputOrder;
}

export enum OrderStatus {
	PENDING = 'PENDING',
	SUCCESS = 'SUCCESS',
	FAILED = 'FAILED',
}
interface BaseType {
	open: boolean;
}
const OrderCardItem: React.FC<OrderItemPropType> = (props) => {
	const [expandIconPosition, setExpandIconPosition] =
		useState<ExpandIconPosition>('start');
	const [open, setOpen] = useState(false);
	const [confirmLoading, setConfirmLoading] = useState(false);
	const [modalText, setModalText] = useState('Content of the modal');
	const { orderItem } = props;
	const onPositionChange = (newExpandIconPosition: ExpandIconPosition) => {
		setExpandIconPosition(newExpandIconPosition);
	};

	const onChange = (key: string | string[]) => {
		console.log(key);
	};

	const genExtra = () => (
		<InfoIcon
			id="info-icon"
			onClick={(event) => {
				// If you don't want click extra trigger collapse, you can prevent this:
				// event.stopPropagation();
			}}
		/>
	);
	const showModal = () => {
		console.log(open);
		setOpen(true);
	};
	const dispatch = useAppDispatch();
	const handleOk = () => {
		setModalText('The modal will be closed after two seconds');
		setConfirmLoading(true);
		setTimeout(() => {
			dispatch({ type: AppAction.CANCEL_ORDER, payload: orderItem });
			genExtra();
			setConfirmLoading(false);
			setOpen(false);
		}, 1000);
	};

	const handleCancel = () => {
		console.log('Clicked cancel button');
		setOpen(false);
	};

	return (
		<div className="modal-over" id="modal-over">
			<BaseModal
				getContainer={() =>
					document.getElementById('btn-cancel') || document.body
				}
				visible={open}
				title="Xác nhận huỷ đơn hàng"
				onOK={handleOk}
				onCancel={handleCancel}
				okText="Xác nhận"
				cancelText="Huỷ"
				style={{ marginTop: '20%' }}
				confirmLoading={confirmLoading}
			>
				Xác nhận huỷ đơn hàng{' '}
				<strong>#{orderItem.code.split('-')[0].slice(3, 10)}</strong>
			</BaseModal>
			<div className="container" id="order-detail">
				<Collapse
					onChange={onChange}
					expandIconPosition={'end'}
					css={css`
						margin: 10px 0 20px 0;
						.ant-collapse-header-text {
							width: 60%;
						}

						.header-row {
							justify-content: space-between;
							padding: 0 40px;
							font-size: 20px;
							font-weight: 700;
						}
						.card-title {
							justify-content: space-between;
						}
						.total {
							display: flex;
							justify-content: flex-end;
						}
						.MuiSvgIcon-root {
							font-size: 30px;
							border-radius: 50px;
							${orderItem.status === OrderStatus.PENDING
								? `color: gray`
								: `${
										orderItem.status === OrderStatus.SUCCESS
											? `color: green`
											: `color: red`
								  }`}
						}
					`}
				>
					<Panel
						showArrow={false}
						header={
							<Row gutter={32} className="header-row">
								<Col>
									Mã đơn hàng: #{orderItem.code.split('-')[0].slice(3, 10)}
								</Col>
								<Col className="price">
									Ngày tạo: {moment(orderItem.created).format('DD/MM/YYYY')}
								</Col>
							</Row>
						}
						key="1"
						extra={genExtra()}
					>
						<Card
							title={
								<Row className="card-title">
									<Col>{orderItem.status}</Col>
									{orderItem.status === OrderStatus.PENDING ? (
										<Col>
											<Button id="btn-cancel" onClick={showModal}>
												Cancel
											</Button>
										</Col>
									) : (
										''
									)}
								</Row>
							}
							style={{ width: '100%', textAlign: 'left' }}
						>
							<List
								className="demo-loadmore-list"
								itemLayout="horizontal"
								dataSource={orderItem.documents}
								renderItem={(item) => (
									<List.Item>
										<Skeleton avatar title={false} active loading={false}>
											<List.Item.Meta
												title={<a href="https://ant.design">{item.name}</a>}
												description={item.description}
												style={{ marginRight: '20px' }}
											/>
											<div>{formatCurrency(item.price)}</div>
										</Skeleton>
									</List.Item>
								)}
							/>
							<Row className="total">
								<Statistic
									className="total2"
									title="Tổng tiền"
									value={formatCurrency(orderItem.total_price)}
									precision={0}
								/>
							</Row>
						</Card>
					</Panel>
				</Collapse>
			</div>
		</div>
	);
};

export default OrderCardItem;