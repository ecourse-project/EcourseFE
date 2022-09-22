import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React from 'react';
import { Document } from 'src/models/backend_modal';
import { formatCurrency } from 'src/utils/currency';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import globalVariable from 'src/config/env';
import { useDispatch } from 'react-redux';
import { useAppDispatch } from 'src/apps/hooks';
import CourseService from 'src/services/course';
import { cartActions } from 'src/reducers/document/documentSlice';
interface ChildProps {
	document: Document;
}
const CartItemRow: React.FC<ChildProps> = ({ document }) => {
	const dispatch = useAppDispatch();
	const handleDelete = () => {
		dispatch(cartActions.updateCart(document));
	};
	return (
		<div
			className="container"
			css={css`
				.price-group {
					display: flex;
					align-items: center;
					justify-content: center;
				}
				.document {
					display: flex;
					justify-content: space-evenly;
					align-items: center;
				}
				.des {
					font-size: 15px;
					text-align: left;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
				}
				.thumb {
					objectfit: 'cover';
					margin: 10px;
				}
				.price {
					margin: 10px;
				}
			`}
		>
			<div className="row">
				<div className="document col-6">
					<img
						className="rounded thumb"
						src={`${document.thumbnail.image_path}`}
						// src="https://localhost:4000/media/2022/08/14/gdcd.png"

						width={80}
						height={80}
						alt="Product image."
						style={{ objectFit: 'cover' }}
					/>
					<span className="h5">
						<Link to="/product/1">
							<a className="link-dark text-decoration-none">{document.name}</a>
						</Link>
						<p className="des">{document.description}</p>
					</span>
				</div>

				<div className="col-6 price-group">
					<h6 className="price">{formatCurrency(document.price)}</h6>
					<span>
						<button
							className="btn btn-sm btn-danger trash"
							type="button"
							onClick={handleDelete}
						>
							<FontAwesomeIcon icon={faTrashCan} />
						</button>
					</span>
				</div>
			</div>
		</div>
	);
};

export default CartItemRow;
