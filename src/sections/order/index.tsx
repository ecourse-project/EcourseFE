/* eslint-disable react/no-children-prop */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CartItemRow from '../../components/shopping-cart/cart-item-row';
import PricingCard from '../../components/shopping-cart/pricing-card';
import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import CourseService from 'src/services/course';
import { Order } from 'src/models/backend_modal';
const OrderCartUI = () => {
	const [order, setOrder] = useState<Order>();
	const fetchData = async () => {
		const response = await CourseService.getAllOrder();
		setOrder(response);
	};
	useEffect(() => {
		fetchData();
	}, []);
	useEffect(() => {
		console.log(order);
	}, [order]);
	return (
		<div
			css={css`
				margin-top: 20px;
				color: #484b51;

				.text-secondary-d1 {
					color: #728299 !important;
				}
				.page-header {
					margin: 0 0 1rem;
					padding-bottom: 1rem;
					padding-top: 0.5rem;
					border-bottom: 1px dotted #e2e2e2;
					display: -ms-flexbox;
					display: flex;
					-ms-flex-pack: justify;
					justify-content: space-between;
					-ms-flex-align: center;
					align-items: center;
				}
				.page-title {
					padding: 0;
					margin: 0;
					font-size: 1.75rem;
					font-weight: 300;
				}
				.brc-default-l1 {
					border-color: #dce9f0 !important;
				}

				.ml-n1,
				.mx-n1 {
					margin-left: -0.25rem !important;
				}
				.mr-n1,
				.mx-n1 {
					margin-right: -0.25rem !important;
				}
				.mb-4,
				.my-4 {
					margin-bottom: 1.5rem !important;
				}

				hr {
					margin-top: 1rem;
					margin-bottom: 1rem;
					border: 0;
					border-top: 1px solid rgba(0, 0, 0, 0.1);
				}

				.text-grey-m2 {
					color: #888a8d !important;
				}

				.text-success-m2 {
					color: #86bd68 !important;
				}

				.font-bolder,
				.text-600 {
					font-weight: 600 !important;
				}

				.text-110 {
					font-size: 110% !important;
				}
				.text-blue {
					color: #478fcc !important;
				}
				.pb-25,
				.py-25 {
					padding-bottom: 0.75rem !important;
				}

				.pt-25,
				.py-25 {
					padding-top: 0.75rem !important;
				}
				.bgc-default-tp1 {
					background-color: rgba(121, 169, 197, 0.92) !important;
				}
				.bgc-default-l4,
				.bgc-h-default-l4:hover {
					background-color: #f3f8fa !important;
				}
				.page-header .page-tools {
					-ms-flex-item-align: end;
					align-self: flex-end;
				}

				.btn-light {
					color: #757984;
					background-color: #f5f6f9;
					border-color: #dddfe4;
				}
				.w-2 {
					width: 1rem;
				}

				.text-120 {
					font-size: 120% !important;
				}
				.text-primary-m1 {
					color: #4087d4 !important;
				}

				.text-danger-m1 {
					color: #dd4949 !important;
				}
				.text-blue-m2 {
					color: #68a3d5 !important;
				}
				.text-150 {
					font-size: 150% !important;
				}
				.text-60 {
					font-size: 60% !important;
				}
				.text-grey-m1 {
					color: #7b7d81 !important;
				}
				.align-bottom {
					vertical-align: bottom !important;
				}
			`}
		>
			<link
				href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
				rel="stylesheet"
			/>

			<div className="page-content container">
				<div className="container px-0">
					<div className="row mt-4">
						<div className="col-12 col-lg-12">
							<div className="row">
								<div className="col-12"></div>
							</div>

							<hr className="row brc-default-l1 mx-n1 mb-4" />

							<div className="mt-4">
								{/* {loop} */}
								<div className="row text-600 text-white bgc-default-tp1 py-25">
									<div className="d-none d-sm-block col-1">#</div>
									<div className="col-9 col-sm-5">Description</div>
									<div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
									<div className="d-none d-sm-block col-sm-2">Unit Price</div>
									<div className="col-2">Amount</div>
								</div>

								<div className="text-95 text-secondary-d3">
									<div className="row mb-2 mb-sm-0 py-25">
										<div className="d-none d-sm-block col-1">1</div>
										<div className="col-9 col-sm-5">Domain registration</div>
										<div className="d-none d-sm-block col-2">2</div>
										<div className="d-none d-sm-block col-2 text-95">$10</div>
										<div className="col-2 text-secondary-d2">$20</div>
									</div>
								</div>

								<div className="row border-b-2 brc-default-l2"></div>

								<div className="row mt-3">
									<div className="col-12 col-sm-7 text-grey-d2 text-95 mt-2 mt-lg-0">
										Extra note such as company or payment information...
									</div>

									<div className="col-12 col-sm-5 text-grey text-90 order-first order-sm-last">
										<div className="row my-2">
											<div className="col-7 text-right">SubTotal</div>
											<div className="col-5">
												<span className="text-120 text-secondary-d1">
													$2,250
												</span>
											</div>
										</div>

										<div className="row my-2">
											<div className="col-7 text-right">Tax (10%)</div>
											<div className="col-5">
												<span className="text-110 text-secondary-d1">$225</span>
											</div>
										</div>

										<div className="row my-2 align-items-center bgc-primary-l3 p-2">
											<div className="col-7 text-right">Total Amount</div>
											<div className="col-5">
												<span className="text-150 text-success-d3 opacity-2">
													$2,475
												</span>
											</div>
										</div>
									</div>
								</div>

								<hr />

								<div>
									<span className="text-secondary-d1 text-105">
										Thank you for your business
									</span>
									<a
										href="#"
										className="btn btn-info btn-bold px-4 float-right mt-3 mt-lg-0"
									>
										Pay Now
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default OrderCartUI;
