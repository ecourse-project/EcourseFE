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
import { DeleteOutlined, TagOutlined } from '@ant-design/icons';
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
				.document-item {
					display: flex;
					flex-direction: row;
					align-items: flex-end;
					justify-content: space-between;
					.document-content {
						display: flex;
					}
				}
				.description {
					text-align: left;
					max-width: 80%;
					padding: 0 20px;
					.description-content {
						font-size: 15px;
						text-align: left;
						display: -webkit-box;
						-webkit-line-clamp: 2;
						-webkit-box-orient: vertical;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}
				.thumb {
					objectfit: 'cover';
					margin: 10px;
					border-radius: 5px;
				}
				.price-group {
					position: relative;
					font-size: 20px;
					margin-bottom: 10px;

					.price {
						margin: 10px;
						.anticon-tag {
							position: absolute;

							left: -10%;
							bottom: 23%;
						}
					}
					.anticon-delete {
						&:hover {
							font-size: 22px;
							color: red;
						}
					}
				}
			`}
		>
			<div className="document-item">
				<div className="document-content">
					<img
						className="thumb"
						src={`${document.thumbnail.image_path}`}
						// src="https://localhost:4000/media/2022/08/14/gdcd.png"

						width={80}
						height={80}
						alt="Product image."
						style={{ objectFit: 'cover' }}
					/>
					<div className="description">
						<h4>{document.name}</h4>
						<p className="description-content">{document.description}</p>
					</div>
				</div>
				<div className="price-group">
					<p className="price">
						<TagOutlined />
						{formatCurrency(document.price)}
					</p>
					<DeleteOutlined onClick={handleDelete} />
				</div>
			</div>
		</div>
	);
};

export default CartItemRow;
