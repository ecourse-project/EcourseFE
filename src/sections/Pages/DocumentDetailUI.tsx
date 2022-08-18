import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductRating from 'src/components/products/product-rating';
import ProductSimpleHorizontal from 'src/components/products/product-simple-horizontal';
import { Image, Space, Table, Tooltip, Button } from 'antd';
import { tableStyle } from 'src/styles/tableStyle';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React from 'react';
import { FileDoneOutlined, ShopOutlined } from '@ant-design/icons';
import AppButton from 'src/components/button';

const DocumentDetailUI = () => {
	const images = [2, 4, 6, 8, 1];
	const dataSource = [
		{
			key: '1',
			props: 'Mã môn',
			age: 32,
			data: '#123',
		},
		{
			key: '2',
			props: 'Thể loại',
			age: 42,
			data: 'KHTN',
		},
		{
			key: '3',
			props: 'Tác giả',
			age: 42,
			data: 'Ms./Mr.',
		},
	];

	const columns = [
		{
			// title: 'Name',
			dataIndex: 'props',
			key: 'props',
			// width: 170,
		},

		{
			// title: 'Address',
			dataIndex: 'data',
			key: 'data',
		},
	];
	return (
		<div
			className="vstack"
			css={css`
				.ant-table-tbody > tr > td {
					border-bottom: none;
				}
				.description {
					text-align: left;
				}
			`}
		>
			<div className="bg-secondary">
				<div className="container">
					<div className="row py-4 px-2">
						<nav aria-label="breadcrumb col-12">
							<ol className="breadcrumb mb-1">
								{/* <li className="breadcrumb-item">
									<a href="#">All Categories</a>
								</li>
								<li className="breadcrumb-item">
									<a href="#">Electronics</a>
								</li> */}
								<li className="breadcrumb-item active" aria-current="page">
									Product name
								</li>
							</ol>
						</nav>
					</div>
				</div>
			</div>
			<div className="bg-white mb-4">
				<div className="container py-4">
					<div className="row gy-3 gx-4">
						<div className="col-lg-4">
							<div className="row">
								<div className="col-12">
									<div className="ratio ratio-1x1">
										<img
											className="rounded"
											src={`https://source.unsplash.com/random/300x300?random=${Math.floor(
												Math.random() * 50
											)}`}
											width={300}
											height={300}
											alt="Product image."
										/>
									</div>
								</div>
							</div>
							<div className="row mt-3 d-none d-lg-block">
								<div className="col-12 d-flex justify-content-center">
									{images.map((e) => {
										return (
											<div
												key={e}
												style={{ width: 60 }}
												className="me-2 ratio ratio-1x1"
											>
												<img
													className="rounded"
													src={`https://source.unsplash.com/random/80x80?random=${Math.floor(
														Math.random() * 50
													)}`}
													width={60}
													height={60}
													alt="Product image."
													key={e}
												/>
											</div>
										);
									})}
								</div>
							</div>
						</div>

						<div className="col-lg-8">
							<h1 className="text-center">Document Name</h1>

							<div className="vstack">
								<div className="d-flex mb-3 gap-2">
									<ProductRating />
									<span className="order_num">150 orders</span>
									<span className="text-success small">&nbsp;Downloaded</span>
									<FileDoneOutlined />
								</div>
								<h4 className="price">15000VND</h4>
								<p className="description">
									Lorem ipsum is placeholder text commonly used in the graphic,
									print, and publishing industries for previewing layouts and
									visual mockups.
								</p>
								<Table
									dataSource={dataSource}
									columns={columns}
									showHeader={false}
									pagination={false}
									bordered={false}
								/>

								<hr className="text-muted" />

								<div className="d-flex">
									<AppButton
										btnTextColor={'black'}
										btnStyle={'solid'}
										btnSize={'small'}
										btnWidth={'fix-content'}
									>
										&nbsp;Add to cart <ShopOutlined />
									</AppButton>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="row g-3">
					<div className="col-lg-8">
						<div className="card border-0 shadow-sm">
							<div
								className="px-3 d-flex border-bottom overflow-auto"
								style={{ height: 70 }}
							>
								<ul className="nav nav-pills my-auto flex-nowrap">
									<li className="nav-item">
										<a href="#" className="nav-link active" aria-current="true">
											Description
										</a>
									</li>
									<li className="nav-item">
										<a href="#" className="nav-link">
											Specifications
										</a>
									</li>
								</ul>
							</div>
							<div className="card-body">
								<p>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Duis ultricies lacus sed turpis tincidunt. Urna cursus eget
									nunc scelerisque. Sit amet massa vitae tortor condimentum.
									Amet est placerat in egestas erat. Vel quam elementum pulvinar
									etiam non quam lacus suspendisse faucibus. Duis at consectetur
									lorem donec massa sapien faucibus. Leo integer malesuada nunc
									vel risus commodo viverra maecenas. Pellentesque eu tincidunt
									tortor aliquam nulla facilisi. Gravida in fermentum et
									sollicitudin ac. Amet purus gravida quis blandit turpis cursus
									in hac habitasse. Augue mauris augue neque gravida in
									fermentum et sollicitudin. Faucibus in ornare quam viverra.
									Nisl rhoncus mattis rhoncus urna neque viverra justo. Cras
									semper auctor neque vitae. Nulla facilisi morbi tempus
									iaculis. Quam vulputate dignissim suspendisse in. Vestibulum
									rhoncus est pellentesque elit ullamcorper. Suspendisse
									ultrices gravida dictum fusce ut. Lacus vel facilisis volutpat
									est velit egestas.
								</p>
							</div>
							<div className="card-footer py-3">
								<small>
									<FontAwesomeIcon
										icon={['fas', 'truck']}
										className="text-success me-2"
									/>
									Delivery within 1-2 weeks
								</small>
							</div>
						</div>
					</div>
					<div className="col-lg-4">
						<div className="card border-0 shadow-sm">
							<div className="px-3 d-flex border-bottom" style={{ height: 70 }}>
								<h5 className="my-auto fw-semibold">Related products</h5>
							</div>
							<div className="card-body">
								<ProductSimpleHorizontal id={1} />
								<ProductSimpleHorizontal id={2} />
								<ProductSimpleHorizontal id={3} />
								<ProductSimpleHorizontal id={4} />
								<ProductSimpleHorizontal id={5} />
							</div>
						</div>
					</div>
				</div>
			</div>
			<br />
			<br />
			<br />
		</div>
	);
};

export default DocumentDetailUI;
