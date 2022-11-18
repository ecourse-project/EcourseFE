/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import fileImg from 'src/assets/images/file.jpg';
import { Course, Document, MoveEnum } from 'src/models/backend_modal';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'; // import ProductRating from '../product-rating';
import AppButton from '../button';
import CourseService from 'src/services/course';
import globalVariable from 'src/config/env';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import { docActions } from 'src/reducers/document/documentSlice';
import { formatCurrency } from 'src/utils/currency';
import {
	EyeOutlined,
	HeartFilled,
	HeartOutlined,
	LikeOutlined,
	VerticalAlignBottomOutlined,
	WalletOutlined,
} from '@ant-design/icons';
import { SaleStatusEnum, GlobalStyle } from 'src/utils/enum';
import { isObject } from 'formik';
import { Button, Popover, Rate, Tag } from 'antd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';

import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { courseAction } from 'src/reducers/course/courseSlice';
import { formatDate } from 'src/utils/format';
import RoutePaths from 'src/utils/routes';
interface ChildProps {
	course: Course;
	isMyLearn?: boolean;
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
const CourseItem: React.FC<ChildProps> = (props) => {
	// eslint-disable-next-line prefer-const
	const { course, isMyLearn } = props;
	const [added, setAdded] = useState(false);
	const [btnString, setBtnString] = useState<string>(BtnString.AVAILABLE);
	const cartData = useAppSelector((state: RootState) => state.course);
	const [loading, setLoading] = useState<boolean>(false);
	const [currentCourse, setCurrentCourse] = useState<Course>(course);
	const dispatch = useAppDispatch();
	useEffect(() => {
		if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
			setBtnString(BtnString.AVAILABLE);
		} else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
			setBtnString(BtnString.IN_CART);
		} else if (currentCourse.sale_status === SaleStatusEnum.PENDING) {
			setBtnString(BtnString.PENDING);
		} else if (currentCourse.sale_status === SaleStatusEnum.BOUGHT) {
			setBtnString(BtnString.BOUGHT);
		}
	}, [currentCourse]);

	const handleClick = () => {
		setLoading(true);
		if (currentCourse.sale_status === SaleStatusEnum.AVAILABLE) {
			dispatch(courseAction.updateCart(currentCourse));
		} else if (currentCourse.sale_status === SaleStatusEnum.IN_CART) {
			dispatch(courseAction.updateCart(currentCourse));
		}
		setTimeout(() => {
			setLoading(false);
		}, 500);
	};
	const handleAddFav = async (id) => {
		setLoading(true);
		setTimeout(async () => {
			if (currentCourse.is_favorite) {
				const removeFromFav: Course = await CourseService.moveCourse(
					id,
					MoveEnum.FAVORITE,
					MoveEnum.LIST
				);
				dispatch(courseAction.setIsFavourite(removeFromFav));
				setCurrentCourse(removeFromFav);
			} else {
				const addToFav: Course = await CourseService.moveCourse(
					id,
					MoveEnum.LIST,
					MoveEnum.FAVORITE
				);
				dispatch(courseAction.setIsFavourite(addToFav));
				setCurrentCourse(addToFav);
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
				min-height: 435px;
				padding: 0;
				max-width: 260px;
				// min-width: 350px;
				.title,
				p {
					color: black;
					margin-bottom: 6px;
				}
				.title {
					display: block !important;
					display: -webkit-box !important;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
					overflow: hidden;
					text-overflow: ellipsis;
					white-space: normal;
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
				.heart-icon {
					position: absolute;
					top: 0;
					font-size: 25px;
					right: 0;
					color: #fff;
				}
				.course_info {
					margin: 0 10px;
				}
				.anticon {
					position: relative;
					bottom: 3px;
					right: 6px;
					color: ${GlobalStyle.BROWN_YELLOW};
				}
				.anticon-star {
					color: unset;
					position: unset;
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
					justify-content: flex-start;
					font-weight: 600;
					font-size: 22px;
					align-items: center;
					margin-left: 10px;
				}
				[ant-click-animating-without-extra-node='true']:after {
					display: none;
				}
				.ant-rate {
					font-size: 14px;
					margin: 0 10px;
					color: #ffa535;
					.ant-rate-star {
						margin: 0 1px;
					}
				}
			`}
		>
			<Popover
				placement="right"
				content={
					<div
						css={css`
							max-width: 300px;
							.title-popup {
								font-weight: 700;
								font-size: 15px;
							}
							.heart {
								font-size: 40px;
								margin-left: 10px;
								.anticon {
									color: ${currentCourse.is_favorite ? 'red' : ''};
								}
								.anticon:hover {
									color: red;
									cursor: pointer;
								}
							}
						`}
					>
						<p className="title-popup">{currentCourse.name}</p>

						<Tag color="geekblue">Best Seller</Tag>
						<p>Cập nhật: {formatDate(currentCourse?.modified)}</p>
						<p>Số bài học: {currentCourse?.lessons?.length}</p>
						{/* <p>
							Dung lượng: {(Number(currentCourse.) / 1024000).toFixed(1)}{' '}
						MB
						</p> */}

						<p>{currentCourse.description}</p>
						<p className="heart" onClick={() => handleAddFav(currentCourse.id)}>
							{currentCourse.is_favorite ? <HeartFilled /> : <HeartOutlined />}
						</p>
					</div>
				}
				trigger="hover"
			>
				<Link to={`${RoutePaths.COURSE_DETAIL}?id=${currentCourse.id}`}>
					<div className="doc--image">
						<img
							className="doc-img"
							src={`${currentCourse?.thumbnail?.image_path}`}
							alt="document image."
						/>
					</div>
					<div className="course_info">
						<div>
							<h4 className="title">{currentCourse.name}</h4>
						</div>
						<p className="download">
							<VerticalAlignBottomOutlined />
							Số lượt tải: {currentCourse.sold}
						</p>
						<p className="download">
							<EyeOutlined /> Số lượt xem: {currentCourse.views}
						</p>
						<p className="download">
							<LikeOutlined /> Đánh giá:{' '}
							<Rate
								allowHalf
								disabled
								defaultValue={Number(Number(currentCourse.rating).toFixed(1))}
								// defaultValue={2.5}
							/>
							<p>{Number(Number(currentCourse.rating).toFixed(1))}</p>
							<br />
							{`(${currentCourse.num_of_rates} lượt đánh gía)`}
						</p>
					</div>
				</Link>
			</Popover>
			<div>
				<div className="price-tag">
					<span>
						<WalletOutlined />
						{formatCurrency(currentCourse.price)}
					</span>

					{currentCourse.sale_status === SaleStatusEnum.BOUGHT && (
						<TaskAltIcon sx={{ color: `${Color.BOUGHT}` }} />
					)}
				</div>
				{!isMyLearn && (
					<AppButton
						className="card-btn"
						btnTextColor={'black'}
						btnStyle={'outline'}
						btnSize={'small'}
						btnWidth={'full-w'}
						loading={loading}
						disabled={
							loading ||
							currentCourse.sale_status === SaleStatusEnum.PENDING ||
							currentCourse.sale_status === SaleStatusEnum.BOUGHT
						}
						onClick={handleClick}
					>
						{btnString}
					</AppButton>
				)}
			</div>
		</div>
	);
};

export default CourseItem;
