/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fileImg from 'src/assets/images/file.jpg';
import { Document } from 'src/models/backend_modal';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; // import ProductRating from '../product-rating';
import AppButton from '../button';
import CourseService from 'src/services/course';
import globalVariable from 'src/config/env';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import { cartActions } from 'src/reducers/document/documentSlice';
import { formatCurrency } from 'src/utils/currency';
import { WalletOutlined } from '@ant-design/icons';
import { DocStatus, GlobalStyle } from 'src/utils/enum';
import { isObject } from 'formik';
interface ChildProps {
	document: Document; // try not to use any.
}

const DocItemCard: React.FC<ChildProps> = (props) => {
	const { document } = props;
	const [added, setAdded] = useState(false);
	const [btnString, setBtnString] = useState<string>('Thêm');
	const cartData = useAppSelector((state: RootState) => state.document);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (document.status === DocStatus.AVAILABLE) {
			setBtnString('Thêm');
		} else if (document.status === DocStatus.IN_CART) {
			setBtnString('Xoá');
		} else if (document.status === DocStatus.PENDING) {
			setBtnString('Chờ thanh toán');
		} else if (document.status === DocStatus.BOUGHT) {
			setBtnString('Đã thanh toán');
		}
	}, [document]);
	const handleClick = () => {
		try {
			if (document.status === DocStatus.AVAILABLE) {
				setBtnString('Xoá');
				dispatch(cartActions.updateCart(document));
			} else if (document.status === DocStatus.IN_CART) {
				setBtnString('Thêm');
				dispatch(cartActions.updateCart(document));
			}
		} catch (error) {
			console.log('error: ', error);
		}
	};
	return (
		<div
			className="card h-100 border-0 shadow-sm container"
			css={css`
				.title,
				p {
					color: black;
				}
				.description,
				title {
					text-align: justify;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					color: gray;
				}

				.download {
					font-weight: bold;
				}
				.card-img-top {
					objectfit: 'cover';
					width: 200px;
					height: 150px;
				}
				.anticon {
					position: relative;
					bottom: 3px;
					right: 6px;
					color: ${GlobalStyle.BROWN_YELLOW};
				}
				card-btn {
					&:hover {
						background-color: red;
					}
				}
			`}
		>
			{/* <Link to={`/document/&id=${document.id}`}> */}
			<div className="content row">
				<img
					className="card-img-top"
					src={`${document.thumbnail}`}
					alt="document image."
				/>
			</div>
			<div className="card-body text-start row">
				<div className="mb-1 text-decoration-none ">
					<h2 className="title">{document.name}</h2>
				</div>
				<p className="description row">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iste
					vitae nihil beatae dignissimos, possimus molestiae ab, temporibus
					eligendi, necessitatibus architecto? Provident animi quisquam dolorum
					doloribus cum illum porro voluptate!
				</p>
				<p className="download">Số lượt tải: {document.sold}</p>
				{/* <ProductRating /> */}
			</div>
			{/* </Link> */}
			<div className="row">
				<h5 className="mb-0 fw-semibold mt-2 col">
					<WalletOutlined />
					{formatCurrency(document.price)}
				</h5>
			</div>
			<div className="row">
				<span className="col">
					<AppButton
						className="card-btn"
						btnTextColor={'black'}
						btnStyle={'outline'}
						btnSize={'small'}
						btnWidth={'full-w'}
						disabled={
							document.status === DocStatus.PENDING ||
							document.status === DocStatus.BOUGHT
						}
						onClick={handleClick}
					>
						{btnString}
					</AppButton>
				</span>
			</div>
		</div>
	);
};

export default DocItemCard;
