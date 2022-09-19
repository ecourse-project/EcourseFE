/* eslint-disable prettier/prettier */
// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';
// import '../styles/home.scss';
import mathImg from 'src/assets/images/math.jpg';
import physicsImg from 'src/assets/images/physics.png';
import chemistryImg from 'src/assets/images/chemistry.jpg';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
// import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Carousel } from 'react-responsive-carousel';
import { Carousel } from 'antd';
import Header from 'src/layouts/header';

import ProductSimpleCard from 'src/components/products/doc-item';
import {
	CarOutlined,
	ConsoleSqlOutlined,
	DollarCircleOutlined,
	GithubOutlined,
	MailOutlined,
} from '@ant-design/icons';
import { useQueryParam } from 'src/hooks/useQueryParam';
import CourseService from 'src/services/course';
import {
	Document,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import responsiveObserve from 'antd/lib/_util/responsiveObserve';
import CustomPagination from 'src/components/pagination';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import AppAction from 'src/reducers/actions';

const HomeUI = () => {
	const [list, setList] = useState<Pagination<Document>>();
	const [pagination, setPagination] = useState<PaginationParams>({
		page: 1,
		limit: 4,
	});
	const dispatch = useAppDispatch();
	const fetchData = async (pagination) => {
		dispatch({ type: AppAction.FETCH_DATA, payload: pagination });
		// const response = await CourseService.getAll(pagination);
		// console.log('reponse', response);
		// setList(response);
	};

	useEffect(() => {
		fetchData(pagination);
		// console.log('list: ', list);
		// console.log('pag', pagination);
	}, [pagination]);
	const listDoc = useAppSelector((state: RootState) => state.document.listDoc);
	const onChangePage = (page: number) => {
		setPagination({ ...pagination, page });
	};
	return (
		<div>
			<div
				className="container py-3"
				css={css`
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
					// .anticon {
					// 	position: relative;
					// 	top: 8px;
					// 	left: 8px;
					// 	font-size: 35px;
					// }
				`}
			>
				<div className="row mb-4">
					<div className="col-12">
						<Carousel autoplay autoplaySpeed={2000} arrows>
							<div className="cover">
								<img src={mathImg} alt="Cover 1" className="rounded" />
							</div>
							<div className="cover">
								<img src={physicsImg} alt="Cover 2" className="rounded" />
							</div>
							<div className="cover">
								<img src={chemistryImg} alt="Cover 3" className="rounded" />
							</div>
						</Carousel>
					</div>
				</div>

				<h4 className="mb-3 fw-semibold">Most Download</h4>
				<div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 mb-5 d-flex justify-content-around">
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
			</div>
		</div>
	);
};

export default HomeUI;
