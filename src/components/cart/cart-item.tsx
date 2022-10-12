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

	const debounceDeleteDoc = useCallback(
		debounce((e) => {
			e.stopPropagation();
			document && dispatch(docActions.updateCart(document));
			setDeletetLoading(false);
		}, 300),
		[]
	);
	const debounceDeleteCourse = useCallback(
		debounce((e) => {
			e.stopPropagation();
			course && dispatch(courseAction.updateCart(course));
			setDeletetLoading(false);
		}, 300),
		[]
	);
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
							src={`${document.thumbnail.image_path}`}
							// src="https://localhost:4000/media/2022/08/14/gdcd.png"

							width={80}
							height={80}
							alt="Product image."
							style={{ objectFit: 'cover' }}
						/>
						<div className="description">
							<p className="doc-name">{document.name}</p>
							<p className="description-content">{document.description}</p>
						</div>
					</div>
					<div className="price-group">
						<p className="price">
							<TagOutlined />
							{formatCurrency(document.price, true)}
						</p>
						{deleteLoading ? (
							<Spin size="default" />
						) : (
							<DeleteOutlined
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									setDeletetLoading(true);
									debounceDeleteDoc(e);
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
							<TagOutlined />
							{formatCurrency(course.price, true)}
						</p>
						{deleteLoading ? (
							<Spin size="default" />
						) : (
							<DeleteOutlined
								onClick={(e) => {
									e.stopPropagation();
									e.preventDefault();
									setDeletetLoading(true);
									debounceDeleteCourse(e);
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
