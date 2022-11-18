import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Course, Document } from 'src/models/backend_modal';
import { formatCurrency } from 'src/utils/currency';
import {
	ConsoleSqlOutlined,
	DeleteOutlined,
	TagOutlined,
} from '@ant-design/icons';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { docActions } from 'src/reducers/document/documentSlice';
import { set } from 'immer/dist/internal';
import { RootState } from 'src/reducers/model';
import { debounce } from 'lodash';
import { Spin } from 'antd';
import { courseAction } from 'src/reducers/course/courseSlice';

interface ChildProps {
	document?: Document;
	course?: Course;
}
const CartItemRow: React.FC<ChildProps> = ({ document, course }) => {
	const [deleteLoading, setDeletetLoading] = useState<boolean>(false);
	const dispatch = useAppDispatch();

	const deleteDoc = () => {
		setDeletetLoading(true);
		document && dispatch(docActions.updateCart(document));
		setTimeout(() => {
			setDeletetLoading(false);
		}, 300);
	};
	const deleteCourse = () => {
		setDeletetLoading(true);

		course && dispatch(courseAction.updateCart(course));
		setTimeout(() => {
			setDeletetLoading(false);
		}, 300);
	};
	useEffect(() => {
		console.log('course', course);
	}, []);
	return (
		<div
			className="container"
			css={css`
				.document-item {
					display: flex;
					align-items: flex-end;
					justify-content: space-between;
					flex-direction: column;
					.document-content {
						display: flex;
					}
				}
				.description {
					text-align: left;
					max-width: 80%;
					padding: 0 20px;
					.doc-name {
						font-size: 16px;
						text-decoration: underline;
					}
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
					display: flex;
					align-items: center;
					justify-content: end;
					min-width: fit-content;
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
			{document && !course && (
				<div className="document-item">
					<div className="document-content">
						<img
							className="thumb"
							src={`${document?.thumbnail?.image_path}`}
							// src="https://localhost:4000/media/2022/08/14/gdcd.png"

							width={80}
							height={80}
							alt="Product image."
							style={{ objectFit: 'cover' }}
						/>
						<div className="description">
							<p className="doc-name">{document?.name}</p>
							<p className="description-content">{document?.description}</p>
						</div>
					</div>
					<div className="price-group">
						<p className="price">
							{/* <TagOutlined /> */}
							{formatCurrency(document?.price, true)}
						</p>
						{deleteLoading ? (
							<Spin size="default" />
						) : (
							<DeleteOutlined
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									setDeletetLoading(true);
									deleteDoc();
								}}
							/>
						)}
					</div>
				</div>
			)}
			{!document && course && (
				<div className="document-item">
					<div className="document-content">
						<img
							className="thumb"
							src={`${course?.thumbnail?.image_path}`}
							// src="https://localhost:4000/media/2022/08/14/gdcd.png"

							width={80}
							height={80}
							alt="Product image."
							style={{ objectFit: 'cover' }}
						/>
						<div className="description">
							<p className="doc-name">{course.name}</p>
							<p className="description-content">{course.description}</p>
						</div>
					</div>
					<div className="price-group">
						<p className="price">
							{/* <TagOutlined /> */}
							{formatCurrency(course.price, true)}
						</p>
						{deleteLoading ? (
							<Spin size="default" />
						) : (
							<DeleteOutlined
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									deleteCourse();
								}}
							/>
						)}
					</div>
				</div>
			)}
		</div>
	);
};

export default CartItemRow;
