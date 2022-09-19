/* eslint-disable prettier/prettier */
import { FaRegUser } from 'react-icons/fa';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ProductSimpleCard from 'src/components/products/doc-item';
import CourseService from 'src/services/course';
import {
	Document,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import { useQueryParam } from 'src/hooks/useQueryParam';
import CustomPagination from 'src/components/pagination';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import AppAction from 'src/reducers/actions';

const DocumentUI: React.FC = () => {
	const [list, setList] = useState<Pagination<Document>>();
	const listDoc = useAppSelector((state: RootState) => state.document.listDoc);

	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 8,
	});
	const dispatch = useAppDispatch();
	const fetchDocument = async (pagination) => {
		dispatch({ type: AppAction.FETCH_DATA, payload: pagination });
	};

	useEffect(() => {
		fetchDocument(pagination);
	}, [pagination]);
	const onChangePage = (page: number) => {
		console.log('pagenum', page);
		setPagination({ ...pagination, page });
	};
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-2 mb-5">
				{listDoc?.results?.map((e, i) => {
					return (
						<div
							className="col"
							key={i}
							css={css`
								margin-top: 50px;
							`}
						>
							<ProductSimpleCard document={e} />
						</div>
					);
				})}
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
