/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import React from 'react';
import { PlusSquareOutlined } from '@ant-design/icons';

function ProductSimpleHorizontal({ id }) {
	return (
		<div className="d-flex py-2">
			<div className="flex-shink-0" style={{ height: 80 }}>
				<img
					className="rounded"
					src={`https://source.unsplash.com/random/100x100?random=${Math.floor(
						Math.random() * 50
					)}`}
					width={80}
					height={80}
					alt="Product image."
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className="d-flex flex-column flex-grow-1 ms-3">
				<Link to={`product/${id}`}>
					<a className="text-dark text-decoration-none">Product name here</a>
				</Link>
				<h6 className="mb-0 fw-semibold">10000Ks</h6>
				<div className="mt-auto">
					<button className="btn btn-sm btn-secondary text-primary rounded-3">
						<PlusSquareOutlined />
						&nbsp;Add to cart
					</button>
				</div>
			</div>
		</div>
	);
}

export default ProductSimpleHorizontal;
