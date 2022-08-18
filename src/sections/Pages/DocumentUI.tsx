/* eslint-disable prettier/prettier */
import { FaRegUser } from 'react-icons/fa';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import ProductSimpleCard from 'src/components/products/product-simple-card';
import CourseService from 'src/services/course';
import {
	Document,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import { useQueryParam } from 'src/hooks/useQueryParam';
import CustomPagination from 'src/components/pagination';

const DocumentUI: React.FC = () => {
	const [list, setList] = useState<Pagination<Document>>();
	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 8,
	});

	const list1 = async (pagination) => {
		const response = await CourseService.getAll(pagination);
		console.log('reponse', response);
		setList(response);
	};

	useEffect(() => {
		list1(pagination);
	}, [pagination]);
	const onChangePage = (page: number) => {
		console.log('pagenum', page);
		setPagination({ ...pagination, page });
	};
	return (
		<div className="container">
			<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-5 g-2 mb-5">
				{list?.results.map((e, i) => {
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
				total={list?.count || 10}
				showSizeChanger={false}
				onChange={onChangePage}
			/>
		</div>
	);
};
export default DocumentUI;
