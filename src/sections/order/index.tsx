/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import OrderCardItem from 'src/components/order/order-card';
import { PaginationParams } from 'src/models/backend_modal';
import AppAction from 'src/reducers/actions';
import { RootState } from 'src/reducers/model';
const { Title, Paragraph, Text, Link } = Typography;

const OrderCartUI = () => {
	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 100,
	});
	const [order, setOrder] = useState();
	const dispatch = useAppDispatch();
	const listOrder = useAppSelector(
		(state: RootState) => state.document.listOrder
	);
	const fetchOrder = async () => {
		dispatch({
			type: AppAction.FETCH_ORDER,
			payload: pagination,
		});
	};
	useEffect(() => {
		fetchOrder();
	}, []);
	useEffect(() => {
		console.log(order);
	}, [order]);
	return (
		<div
			className="order-wrapper container"
			css={css`
				margin-top: 20px;
			`}
		>
			<Title>Danh sách đơn hàng</Title>
			{listOrder?.results?.map((v, i) => (
				<div key={i}>
					<OrderCardItem orderItem={v} />
				</div>
			))}
		</div>
	);
};
export default OrderCartUI;
