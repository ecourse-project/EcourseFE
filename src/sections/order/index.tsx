/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItemRow from '../../components/shopping-cart/cart-item-row';
import PricingCard from '../../components/shopping-cart/pricing-card';
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CourseService from 'src/services/course';
import OrderCart from 'src/pages/order-cart';
import OrderCardItem from './order-card';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import AppAction from 'src/reducers/actions';
import { pagination } from 'src/utils/api';
import { PaginationParams } from 'src/models/backend_modal';
import { Divider, Typography } from 'antd';
import BaseModal from 'src/components/modal';
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
