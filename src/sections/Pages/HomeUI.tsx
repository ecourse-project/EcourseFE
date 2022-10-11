/* eslint-disable prettier/prettier */

/** @jsxImportSource @emotion/react */
import {
	AppstoreAddOutlined,
	BorderlessTableOutlined,
} from '@ant-design/icons';
import { css } from '@emotion/react';
import { Col, Divider } from 'antd';
import { useEffect, useReducer, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import ProductSimpleCard from 'src/components/document/doc-item';
import { Course, Document, Pagination } from 'src/models/backend_modal';
import Home from 'src/pages/home';
import AppAction from 'src/reducers/actions';
import { docActions } from 'src/reducers/document/documentSlice';
import { RootState } from 'src/reducers/model';
import CourseService from 'src/services/course';
import { SaleStatusEnum } from 'src/models/backend_modal';
import { courseAction } from 'src/reducers/course/courseSlice';
import CourseItem from 'src/components/course/course-item';
const LIMIT = 4;

interface InitialState {
	listDoc: Document[];
	listCourse: Course[];
}
const initialState: InitialState = {
	listDoc: [],
	listCourse: [],
};
enum HomeActionKind {
	LIST_DOC = 'LIST_DOC',
	LIST_COURSE = 'LIST_COURSE',
	UPDATE_DOC = 'UPDATE_DOC',
	UPDATE_COURSE = 'UPDATE_COURSE',
}
export interface ActionBase {
	type: string;
	payload?: any;
}
function reducer(state: InitialState, action: ActionBase) {
	switch (action.type) {
		case HomeActionKind.LIST_DOC:
			return {
				...state,
				listDoc: action.payload,
			};
		case HomeActionKind.UPDATE_DOC:
			const item = [...state.listDoc];
			const itemUpdateIdx = state.listDoc?.findIndex(
				(item) => item.id === action.payload.id
			);
			if (itemUpdateIdx < 0) return state;
			//update existed drip
			const updateStatus = {
				...action.payload,
				sale_status:
					action.payload.sale_status !== SaleStatusEnum.AVAILABLE
						? SaleStatusEnum.AVAILABLE
						: SaleStatusEnum.IN_CART,
			};
			item.splice(itemUpdateIdx, 1, updateStatus);
			return {
				...state,
				listDoc: item,
			};
		default:
			return state;
	}
}
const HomeUI = () => {
	const dispatch = useAppDispatch();
	const fetchHomeData = async () => {
		const mostDownloadDoc = await CourseService.getMostDownloadDocs();
		const mostDownloadCourse = await CourseService.getMostDownloadCourses();
		dispatch(docActions.fetchMostDoc(mostDownloadDoc));
		dispatch(courseAction.fetchMostCourse(mostDownloadCourse));
	};
	const listDoc = useAppSelector(
		(state: RootState) => state.document.mostDownDoc
	);
	const listCourse = useAppSelector(
		(state: RootState) => state.course.mostDownCourse
	);
	useEffect(() => {
		fetchHomeData();
	}, []);
	return (
		<div
			className="page-container"
			css={css`
				.doc-wrapper {
					padding-bottom: 40px;
					&:last-child {
						padding-bottom: 60px;
					}
				}
				.ant-col {
					height: 100%;
				}
				.cover {
					color: '#fff';
					lineheight: '160px';
					textalign: 'center';
					background: '#fff';
					margin: '0 auto';
					.rounded {
						margin: 0 auto;
						height: 350px;
					}
				}
				.doc {
					display: flex;
				}
				.title {
					font-weight: 700;
					font-size: 20px;
					text-align: center;
				}
				.doc-title {
					font-size: 30px;
					font-weight: 500;
					text-decoration: overline;
					.anticon {
						vertical-align: baseline;
					}
				}
			`}
		>
			<Divider orientation="center">Tải nhiều nhất</Divider>
			<div className="doc-wrapper">
				<div className="doc-title">
					<AppstoreAddOutlined />
					{' Tài liệu'}
				</div>
				<div className="doc">
					{listDoc?.slice(0, LIMIT).map((e, i) => {
						return (
							<div
								key={i}
								css={css`
									margin-top: 10px;
									min-width: 25%;
								`}
							>
								<Col>
									<ProductSimpleCard document={e} />
								</Col>
							</div>
						);
					})}
				</div>
			</div>
			<div className="doc-wrapper">
				<div className="doc-title">
					<AppstoreAddOutlined />
					{'Khoá học'}
				</div>
				<div className="doc">
					{listCourse?.slice(0, LIMIT).map((e, i) => {
						return (
							<div
								key={i}
								css={css`
									margin-top: 10px;
									min-width: 25%;
								`}
							>
								<Col>
									<CourseItem course={e} />
								</Col>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default HomeUI;
