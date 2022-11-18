/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, MoveEnum } from 'src/models/backend_modal';
/** @jsxImportSource @emotion/react */
import {
	EyeFilled,
	EyeOutlined,
	HeartFilled,
	HeartOutlined,
	LikeFilled,
	LikeOutlined,
	VerticalAlignBottomOutlined,
	WalletOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Popover, Tag } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { docActions } from 'src/reducers/document/documentSlice';
import { RootState } from 'src/reducers/model';
import CourseService from 'src/services/course';
import { formatCurrencySymbol } from 'src/utils/currency';
import { GlobalStyle, SaleStatusEnum } from 'src/utils/enum';
import AppButton from '../button';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { formatDate } from 'src/utils/format';

interface ChildProps {
	document: Document; // try not to use any.
}
enum BtnString {
	AVAILABLE = 'THÊM',
	IN_CART = 'XOÁ',
	PENDING = 'CHỜ THANH TOÁN',
	BOUGHT = 'ĐÃ THANH TOÁN',
}
enum Color {
	AVAILABLE = '#0dcaf0',
	IN_CART = '#ed5e68',
	PENDING = '#8c8c8c',
	BOUGHT = '#23c501',
}

const DocItem: React.FC<ChildProps> = (props) => {
	const { document } = props;
	const [added, setAdded] = useState(false);
	const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
	const cartData = useAppSelector((state: RootState) => state.document);
	const [loading, setLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (document.sale_status === SaleStatusEnum.AVAILABLE) {
			setBtnString(BtnString.AVAILABLE);
		} else if (document.sale_status === SaleStatusEnum.IN_CART) {
			setBtnString(BtnString.IN_CART);
		} else if (document.sale_status === SaleStatusEnum.PENDING) {
			setBtnString(BtnString.PENDING);
		} else if (document.sale_status === SaleStatusEnum.BOUGHT) {
			setBtnString(BtnString.BOUGHT);
		}
	}, [document]);

	const handleClick = () => {
		setLoading(true);
		if (document.sale_status === SaleStatusEnum.AVAILABLE) {
			dispatch(docActions.updateCart(document));
		} else if (document.sale_status === SaleStatusEnum.IN_CART) {
			dispatch(docActions.updateCart(document));
		}
		setTimeout(() => {
			setLoading(false);
		}, 300);
	};
	const handleAddFav = async (id) => {
		setLoading(true);
		setTimeout(async () => {
			if (document.is_favorite) {
				const removeFromFav: Document = await CourseService.moveDoc(
					id,
					MoveEnum.FAVORITE,
					MoveEnum.LIST
				);
				dispatch(docActions.setIsFavourite(removeFromFav));
			} else {
				const addToFav: Document = await CourseService.moveDoc(
					id,
					MoveEnum.LIST,
					MoveEnum.FAVORITE
				);
				dispatch(docActions.setIsFavourite(addToFav));
			}
			setLoading(false);
		}, 300);
	};
	return (
		<div
			className="container"
			css={css`
				display: flex;
				flex-direction: column;
				justify-content: space-evenly;
				min-height: 100%;
				.title,
				p {
					color: black;
				}
				.title {
					display: block !important;
					display: -webkit-box !important;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
					margin: 0.5rem 0;
					font-family: 'Montserrat';
					text-align: left;
					font-size: 17px;
					font-weight: 600;
					height: 40px;
				}
				.description {
					text-align: left;
					display: -webkit-box;
					-webkit-line-clamp: 3;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					color: gray;
					white-space: normal;
				}
				@media only screen and (min-width: 1200px) {
					.ant-btn[disabled] {
						letter-spacing: 2px;
					}
				}
				@media only screen and (max-width: 1200px) {
					.ant-btn[disabled] {
						letter-spacing: 0px;
					}
				}
				.download {
					font-weight: 400;
				}

				// .doc--image {
				// 	width: 240px;
				// 	height: 240px;
				// 	max-width: 100%;
				// 	margin-bottom: 10px;
				// 	.doc-img {
				// 		width: 100%;
				// 		height: 100%;
				// 		object-fit: scale-down;
				// 	}
				// }
				.doc--image {
					// width: 240px;
					// height: 240px;
					max-width: 100%;
					margin-bottom: 10px;

					.doc-img {
						// width: 200px;
						height: 210px;
						width: 100%;
					}
				}
				.doc_info {
					margin: 0 10px;
				}
				.anticon {
					position: relative;
					bottom: 3px;
					right: 6px;
					font-size: 18px;
					color: ${GlobalStyle.BROWN_YELLOW};
				}
				.card-btn {
					width: 100%;
					color: #000;
					border-color: #000;
					&:hover {
						border-color: ${btnString === BtnString.AVAILABLE
							? Color.AVAILABLE
							: Color.IN_CART};

						color: ${btnString === BtnString.AVAILABLE
							? Color.AVAILABLE
							: Color.IN_CART};
						letter-spacing: 8px;
					}
				}

				.anticon-loading {
					position: absolute;
					top: -7px !important;
					left: -32px !important;
					font-size: 18px;
					color: ${btnString === BtnString.AVAILABLE
						? Color.AVAILABLE
						: Color.IN_CART};
				}
				.price-tag {
					display: flex;
					justify-content: left;
					font-weight: 600;
					font-size: 22px;
					margin-left: 10px;
					align-items: center;
				}
				.doc-info {
					margin-left: 10px;
					opacity: 0.7;
				}
				[ant-click-animating-without-extra-node='true']:after {
					display: none;
				}
			`}
		>
			<div className="pop-up">
				<Popover
					placement="right"
					content={
						<div
							css={css`
								max-width: 300px;
								.title {
									font-weight: 700;
									font-size: 15px;
								}
								.heart {
									font-size: 40px;
									margin-left: 10px;
									.anticon {
										color: ${document.is_favorite ? 'red' : ''};
									}
									.anticon:hover {
										color: red;
										cursor: pointer;
									}
								}
							`}
						>
							<p className="title">{document.name}</p>

							<Tag color="geekblue">Best Seller</Tag>
							<p>Cập nhật: {formatDate(document.created)}</p>
							<p>Loại tệp: {document?.file?.file_type}</p>
							<p>
								Dung lượng:{' '}
								{(Number(document?.file?.file_size) / 1024000).toFixed(1)} MB
							</p>

							<p>{document.description}</p>
							<p className="heart" onClick={() => handleAddFav(document.id)}>
								{document.is_favorite ? <HeartFilled /> : <HeartOutlined />}
							</p>
						</div>
					}
					trigger="hover"
				>
					<Link to={`/document/detail?id=${document.id}`}>
						<div className="doc--image">
							<img
								className="doc-img"
								src={`${document.thumbnail.image_path}`}
								alt="document image."
							/>
						</div>

						<div className="doc_info">
							<div className="title">{document.name}</div>
							{/* <p className="description">{document.description}</p> */}
							<p className="download">
								<VerticalAlignBottomOutlined />
								Số lượt tải: {document.sold}
							</p>
							<p className="download">
								<EyeFilled /> Số lượt xem: {document.views}
							</p>
							<p className="download">
								<LikeFilled /> Đánh giá: {document.rating}
								<br />
								{`(${document.num_of_rates} lượt đánh gía)`}
							</p>
						</div>
					</Link>
				</Popover>
			</div>
			<div>
				<div className="price-tag">
					<span>
						<WalletOutlined />
						{formatCurrencySymbol(document.price, 'VND')}
					</span>

					{document.sale_status === SaleStatusEnum.BOUGHT && (
						<TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />
					)}
				</div>
				<AppButton
					className="card-btn"
					btnTextColor={'black'}
					btnStyle={'outline'}
					btnSize={'small'}
					btnWidth={'full-w'}
					loading={loading}
					disabled={
						document.sale_status === SaleStatusEnum.PENDING ||
						document.sale_status === SaleStatusEnum.BOUGHT ||
						loading
					}
					onClick={(e) => {
						e.stopPropagation();
						handleClick();
					}}
				>
					{btnString}
				</AppButton>
			</div>
		</div>
	);
};

export default DocItem;
