/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */
import { SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import DocItem from 'src/components/document/doc-item';
import CustomPagination from 'src/components/pagination';
import { useQueryParam } from 'src/hooks/useQueryParam';
import {
	Document,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import AppAction from 'src/reducers/actions';
import { RootState } from 'src/reducers/model';
import RoutePaths from 'src/utils/routes';
interface DocumentParams {
	page?: number;
}
const DocumentUI: React.FC = () => {
	const [list, setList] = useState<Pagination<Document>>();
	const listDoc = useAppSelector((state: RootState) => state.document.listDoc);
	const navigate = useNavigate();
	const params: DocumentParams = useQueryParam();
	const [pagination, setPagination] = useState<PaginationParams>({
		page: params.page || 1,
		limit: 10,
	});
	const dispatch = useAppDispatch();
	const fetchDocument = async (pagination) => {
		dispatch({ type: AppAction.FETCH_DOCUMENT, payload: pagination });
	};
	useEffect(() => {
		console.log('re render');
	}, []);
	useEffect(() => {
		fetchDocument(pagination);
	}, [pagination]);
	const onChangePage = (page: number) => {
		setPagination({ ...pagination, page });
		navigate(`${RoutePaths.DOCUMENT}/?page=${page}`);
	};
	return (
		<div className="page-container">
			<Divider orientation="left">
				<Breadcrumb separator={<SwapOutlined />}>
					<Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
					<Breadcrumb.Item>Tài liệu</Breadcrumb.Item>
				</Breadcrumb>
			</Divider>
			<div
				className="document-wrapper"
				css={css`
					margin: 20px 0;
					display: flex;
					flex-wrap: wrap;
					text-align: left;
					.ant-col {
						padding: 0 5px 30px 5px;
					}
					// @media only screen and (min-width: 768px) {
					// 	.ant-col {
					// 		max-width: 33% !important;
					// 	}
					// }
					// @media only screen and (min-width: 992px) {
					// 	.ant-col {
					// 		max-width: 25% !important;
					// 		min-width: 25% !important;
					// 	}
					// }
					// @media only screen and (min-width: 1350px) {
					// 	.ant-col {
					// 		max-width: 20% !important;
					// 		min-width: 20% !important;
					// 	}
					// 	.ant-btn[disabled] {
					// 		letter-spacing: 2px;
					// 	}
					// }
				`}
			>
				{listDoc?.results?.length
					? listDoc?.results?.map((e, i) => {
							return (
								<Col key={i}>
									<DocItem document={e} />
								</Col>
							);
					  })
					: `There is no doc`}
			</div>
			<div
				css={css`
					text-align: center;
				`}
			>
				<CustomPagination
					current={pagination.page}
					pageSize={pagination.limit}
					total={listDoc?.count || 10}
					showSizeChanger={false}
					onChange={onChangePage}
				/>
			</div>
		</div>
	);
};
export default DocumentUI;
