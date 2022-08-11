// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';
// import '../styles/home.scss';
import mathImg from 'src/assets/images/math.jpg';
import physicsImg from 'src/assets/images/physics.png';
import chemistryImg from 'src/assets/images/chemistry.png';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import axios from 'axios';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'antd';
import Header from 'src/layouts/header';

import ProductSimpleCard from 'src/components/products/product-simple-card';

const HomeUI = () => {
	const list = [1, 2, 3, 4, 5, 6, 7, 8];

	return (
		<div>
			<Header simple="" hideAuth="" />
			<div className="container py-3">
				<div className="row mb-4">
					<div className="col-12">
						<Carousel
							autoplay
							autoplaySpeed={2000}
							arrows
							css={css`
								.cover {
									color: '#fff';
									lineheight: '160px';
									textalign: 'center';
									background: '#fff';
									margin: '0 auto';

									.rounded {
										margin: 0 auto;
										height: 500px;
									}
								}
								> .slick-arrows {
									color: red;
								}
								> .slick-dots li button {
									width: 13px;
									height: 13px;
									border-radius: 100%;
									margin: 0 20px;
								}
								> .slick-dots li.slick-active button {
									width: 15px;
									height: 15px;
									border-radius: 100%;
									background: blue;
								}
							`}
						>
							<div className="cover">
								<img
									// src="../assets/images/math.jpg"
									src={mathImg}
									alt="Cover 1"
									className="rounded"
								/>
							</div>
							<div className="cover">
								<img src={physicsImg} alt="Cover 2" className="rounded" />
							</div>{' '}
							<div className="cover">
								<img src={chemistryImg} alt="Cover 3" className="rounded" />
							</div>
						</Carousel>
					</div>
				</div>
				<div className="row row-cols-1 row-cols-md-3 g-3 mb-4">
					<div className="col">
						<div className="card h-100 border-0 shadow-sm">
							<figure className="figure card-body mb-0">
								<div
									className="bg-secondary rounded-circle d-flex mb-2"
									style={{ width: 50, height: 50 }}
								>
									<FontAwesomeIcon
										icon={['fas', 'money-bill-alt']}
										size="lg"
										className="text-primary m-auto"
									/>
								</div>
								<h5 className="mb-1 fw-bold">Reasonable Price</h5>
								<figcaption className="figure-caption text-dark">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</figcaption>
							</figure>
						</div>
					</div>
					<div className="col">
						<div className="card h-100 border-0 shadow-sm">
							<figure className="figure card-body mb-0">
								<div
									className="bg-secondary rounded-circle d-flex mb-2"
									style={{ width: 50, height: 50 }}
								>
									<FontAwesomeIcon
										icon={['fas', 'headset']}
										size="lg"
										className="text-primary m-auto"
									/>
								</div>
								<h5 className="mb-1 fw-bold">Customer Support 24/7</h5>
								<figcaption className="figure-caption text-dark">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</figcaption>
							</figure>
						</div>
					</div>
					<div className="col">
						<div className="card h-100 border-0 shadow-sm">
							<figure className="figure card-body mb-0">
								<div
									className="bg-secondary rounded-circle d-flex mb-2"
									style={{ width: 50, height: 50 }}
								>
									<FontAwesomeIcon
										icon={['fas', 'truck']}
										size="lg"
										className="text-primary m-auto"
									/>
								</div>
								<h5 className="mb-1 fw-bold">Fast Delivery</h5>
								<figcaption className="figure-caption text-dark">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
								</figcaption>
							</figure>
						</div>
					</div>
				</div>
				<h4 className="mb-3 fw-semibold">Most Download</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5">
					{list.map((e, i) => {
						return (
							<div className="col" key={i}>
								<ProductSimpleCard id={i} title={`Course ${i}`} />
							</div>
						);
					})}
				</div>
			</div>
			<div className="d-flex flex-column align-items-center bg-primary py-5">
				<span className="mb-4 text-light text-opacity-75">
					Subscribe for promotions and wonderful events
				</span>
				<form className="d-flex">
					<div className="me-2">
						<input
							type="email"
							className="form-control"
							placeholder="Your email"
						/>
					</div>
					<button className="btn btn-warning">
						<FontAwesomeIcon icon={['fas', 'envelope']} className="me-2" />
						Subscribe
					</button>
				</form>
			</div>
		</div>
	);
};

export default HomeUI;
