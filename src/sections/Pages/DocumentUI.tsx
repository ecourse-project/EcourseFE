/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */
import { SwapOutlined } from '@ant-design/icons';
import { css } from '@emotion/react';
import { Breadcrumb, Col, Divider, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import DocItemCard from 'src/components/document/doc-item';
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
		dispatch({ type: AppAction.FETCH_DATA, payload: pagination });
	};
	useEffect(() => {
		console.log('re render');
	}, []);
	useEffect(() => {
		fetchDocument(pagination);
		console.log('pagination:', pagination.page);
	}, [pagination]);
	const onChangePage = (page: number) => {
		console.log('pagenum', page);
		setPagination({ ...pagination, page });
		navigate(`${RoutePaths.DOCUMENT}/?page=${page}`);
	};
	return (
		<div className="container">
			<Divider orientation="left">
				<Breadcrumb separator={<SwapOutlined />}>
					<Breadcrumb.Item href={RoutePaths.HOME}>Trang chính</Breadcrumb.Item>
					<Breadcrumb.Item href={''}>Tài liệu</Breadcrumb.Item>
				</Breadcrumb>
			</Divider>
			<div
				className="document-wrapper"
				css={css`
					margin: 30px 0;
					display: flex;
					flex-wrap: wrap;
					@media only screen and (min-width: 992px) {
						.ant-col {
							max-width: 20% !important;
						}
						.ant-btn[disabled] {
							letter-spacing: 2px;
						}
					}
				`}
			>
				<Row gutter={[16, 32]}>
					{listDoc?.results?.length
						? listDoc?.results?.map((e, i) => {
								return (
									<Col key={i}>
										<DocItemCard document={e} />
									</Col>
								);
						  })
						: `There is no doc`}
				</Row>
			</div>
			<CustomPagination
				current={pagination.page}
				pageSize={pagination.limit}
				total={listDoc?.count || 10}
				showSizeChanger={false}
				onChange={onChangePage}
			/>
		</div>
	);
};
export default DocumentUI;
