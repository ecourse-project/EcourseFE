/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItemRow from '../../components/cart/cart-item';
import React, { isValidElement, useEffect, useState } from 'react';
import { OCart } from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import { Checkbox, Col, Divider, Image, Modal, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import EmptyImg from 'src/assets/images/empty-cart-man.jpg';
import PricingCard from 'src/components/cart/cart-price';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import type { CheckboxValueType } from 'antd/es/checkbox/Group';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

const CheckboxGroup = Checkbox.Group;
function ShoppingCart() {
	const [cart, setCart] = useState<OCart>();
	const [isModalVisible, setIsModalVisible] = useState(true);
	const cartData = useAppSelector((state: RootState) => state.document);
	const [total, setTotal] = useState(0);
	const dispatch = useAppDispatch();
	// const data = useAppSelector((state: RootState) => state.document.cartDoc);
	const fetchData = async () => {
		const res = await CourseService.getCart();
		// dispatch(fetchListCart(res.documents));
		// console.log('added');
		setCart(res);
	};
	useEffect(() => {
		// console.log('active cart', cartData);
		// fetchData();
		// setTotal(
		// 	// cartData.reduce(
		// 	// 	(previousValue, currentValue) => previousValue + currentValue.price,
		// 	// 	total
		// 	// )
		// );
	}, []);
	useEffect(() => {
		// console.log('visible: ', isModalVisible);
	}, [isModalVisible]);
	const handleOk = () => {
		setIsModalVisible(false);
	};

	const handleCancel = () => {
		setIsModalVisible(false);
	};
	const [checkedList, setCheckedList] = useState<string[]>([]);
	const [indeterminate, setIndeterminate] = useState(true);
	const [checkAll, setCheckAll] = useState(false);
	// const plainOptions = ['Apple', 'Pear', 'Orange'];
	const plainOptions = cartData.listCartDoc;
	useEffect(() => {
		console.log('checklist ', checkedList);
	}, [checkedList]);
	const onChange = (list) => {
		setCheckedList(list);
		console.log('list ', list);
		setIndeterminate(!!list.length && list.length < plainOptions.length);
		setCheckAll(list.length === plainOptions.length);
	};

	const onCheckAllChange = (e: CheckboxChangeEvent) => {
		setCheckedList(e.target.checked ? plainOptions.map((v) => v.id) : []);
		setIndeterminate(false);
		setCheckAll(e.target.checked);
	};
	const handleSetVisible = (value) => {
		// console.log('value', value);
		setIsModalVisible(value);
	};
	return (
		<div
			className="container"
			css={css`
				.empty-img {
					opacity: 0.6;
				}
				.ant-checkbox {
					width: 25px;
					height: 25px;
					.ant-checkbox-inner {
						width: 25px;
						height: 25px;
						&:after {
							width: 8.714286px;
							height: 19.142857px;
							border: 3px solid #fff;
							border-top: 0;
							border-left: 0;
						}
					}
				}
				.checkbox-group {
					.ant-checkbox-wrapper {
						align-item: start;
					}
				}

				.check-all {
					.ant-checkbox-indeterminate {
						.ant-checkbox-inner:after {
							width: 15px;
							height: 15px;
						}
					}
				}
			`}
		>
			<h2>Danh sách tài liệu trong giỏ</h2>
			<Row>
				<Col span={16}>
					{cartData.listCartDoc.length ? (
						<>
							<Checkbox
								className="check-all"
								indeterminate={indeterminate}
								onChange={onCheckAllChange}
								checked={checkAll}
							>
								<h3>Chọn tất cả tài liệu</h3>
							</Checkbox>
							<Divider />
							<CheckboxGroup
								value={checkedList}
								onChange={onChange}
								className="checkbox-group"
							>
								{cartData.listCartDoc.map((doc, index) => (
									<div key={index}>
										<Checkbox value={doc.id}>
											<CartItemRow document={doc} />
										</Checkbox>
									</div>
								))}
							</CheckboxGroup>
						</>
					) : (
						<Image src={EmptyImg} preview={false} className="empty-img" />
					)}
				</Col>
				<Col span={8}>
					<div className="">
						<PricingCard
							data={cartData.totalPrice || 0}
							docNum={cartData.listCartDoc.length}
							children={null}
							visible={handleSetVisible}
						/>
					</div>
				</Col>
			</Row>
		</div>
	);
}

export default ShoppingCart;
