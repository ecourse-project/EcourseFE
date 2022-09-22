/* eslint-disable prettier/prettier */
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
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
		limit: 8,
	});
	const dispatch = useAppDispatch();
	const fetchDocument = async (pagination) => {
		dispatch({ type: AppAction.FETCH_DATA, payload: pagination });
	};

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
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-2 mb-5">
				{listDoc?.results?.length
					? listDoc?.results?.map((e, i) => {
							return (
								<div
									className="col"
									key={i}
									css={css`
										margin-top: 50px;
									`}
								>
									<DocItemCard document={e} />
								</div>
							);
					  })
					: `There is no doc`}
			</div>
			<CustomPagination
				current={params.page || pagination.page}
				pageSize={pagination.limit}
				total={listDoc?.count || 10}
				showSizeChanger={false}
				onChange={onChangePage}
			/>
		</div>
	);
};
export default DocumentUI;
