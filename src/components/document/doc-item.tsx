/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Document, MoveEnum } from 'src/models/backend_modal';
/** @jsxImportSource @emotion/react */
import {
	EyeOutlined,
	HeartFilled,
	HeartOutlined,
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

const DocItemCard: React.FC<ChildProps> = (props) => {
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
		setTimeout(() => {
			if (document.sale_status === SaleStatusEnum.AVAILABLE) {
				dispatch(docActions.updateCart(document));
				setLoading(false);
			} else if (document.sale_status === SaleStatusEnum.IN_CART) {
				dispatch(docActions.updateCart(document));
				setLoading(false);
			}
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
				justify-content: space-between;
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
					font-size: 20px;
					font-weight: 700;
					margin: 0.5rem 0;
					font-family: 'Montserrat';
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
					font-weight: bold;
				}

				.doc--image {
					position: relative;

					padding-bottom: 56.25%;
					width: 100%;
					.doc-img {
						position: absolute;
						width: 100%;
						height: 100%;
					}
				}
				.anticon {
					position: relative;
					bottom: 3px;
					right: 6px;
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
							<p>Loại tệp: {document.file.file_type}</p>
							<p>
								Dung lượng:{' '}
								{/* {(Number(document.file.file_size) / 1024000).toFixed(1)} MB */}
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
								width={240}
								height={135}
								src={`${document.thumbnail.image_path}`}
								alt="document image."
							/>
						</div>

						<div className="title">{document.name}</div>
						<div className="doc-info">
							{/* <p className="description">{document.description}</p> */}
							<p className="download">
								<VerticalAlignBottomOutlined />
								Số lượt tải: {document.sold}
							</p>
							<p className="download">
								<EyeOutlined /> Số lượt xem: {document.views}
							</p>
							<p className="download">
								<LikeOutlined /> Đánh giá: {document.rating}
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

export default DocItemCard;
