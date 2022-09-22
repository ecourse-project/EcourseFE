/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItemRow from '../../components/cart/cart-item';
import React, { isValidElement, useEffect, useState } from 'react';
import { OCart } from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import { Image, Modal } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import EmptyImg from 'src/assets/images/empty-cart-man.jpg';
import PricingCard from 'src/components/cart/cart-price';
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
	const handleSetVisible = (value) => {
		// console.log('value', value);
		setIsModalVisible(value);
	};
	return (
		<div className="container py-4">
			<div className="row g-3">
				<div className="col-lg-8">
					<div className="card border-0 shadow-sm">
						<div className="card-header bg-white">
							<h5 className="my-2">Danh sách tài liệu trong giỏ</h5>
						</div>
						<div className="card-body p-2">
							{cartData.listCartDoc.length ? (
								cartData.listCartDoc.map((doc, index) => (
									<div key={index}>
										<CartItemRow document={doc} />
									</div>
								))
							) : (
								<Image src={EmptyImg} preview={false} />
							)}
						</div>
					</div>
				</div>
				<div className="col-lg-4">
					<div className="card mb-3 border-0 shadow-sm">
						<div className="card-body">
							<div className="input-group">
								<input
									className="form-control"
									type="text"
									placeholder="Coupon code here"
								/>
								<button type="button" className="btn btn-primary">
									Apply
								</button>
							</div>
						</div>
					</div>
					<PricingCard
						data={cartData.totalPrice || 0}
						docNum={cartData.listCartDoc.length}
						children={null}
						visible={handleSetVisible}
					/>
				</div>
				{/* <Modal
					title="Basic Modal"
					visible={isModalVisible}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal> */}
			</div>
			<br />
			<br />
			<br />
		</div>
	);
}

export default ShoppingCart;
