/* eslint-disable react/no-children-prop */
import { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Typography } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import OrderItem from 'src/components/order/order-item';
import { PaginationParams } from 'src/models/backend_modal';
import AppAction from 'src/reducers/actions';
import { RootState } from 'src/reducers/model';
const { Title, Paragraph, Text, Link } = Typography;

const OrderUI = () => {
	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 100,
	});
	const dispatch = useAppDispatch();
	const listOrder = useAppSelector((state: RootState) => state.app.listOrder);
	// const fetchOrder = async () => {
	// 	dispatch({
	// 		type: AppAction.FETCH_ORDER,
	// 		payload: pagination,
	// 	});
	// };
	// useEffect(() => {
	// 	fetchOrder();
	// }, []);

	return (
		<div
			className="order-wrapper page-container"
			css={css`
				.ant-typography {
					padding: 0.5em 0;
					margin: 0;
				}
			`}
		>
			<Title>Danh sách đơn hàng</Title>
			{listOrder?.results?.map((v, i) => (
				<div key={i}>
					<OrderItem orderItem={v} />
				</div>
			))}
		</div>
	);
};
export default OrderUI;
