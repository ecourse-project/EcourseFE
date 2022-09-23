/* eslint-disable prettier/prettier */
// import React, { useEffect, useState } from 'react';
// import { Carousel } from 'antd';
// import '../styles/home.scss';
import chemistryImg from 'src/assets/images/chemistry.jpg';
import mathImg from 'src/assets/images/math.jpg';
import physicsImg from 'src/assets/images/physics.png';

/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useEffect, useState } from 'react';
import { Carousel, Col, Divider, Row } from 'antd';
import { useAppDispatch, useAppSelector } from 'src/apps/hooks';
import ProductSimpleCard from 'src/components/document/doc-item';
import {
	Document,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import AppAction from 'src/reducers/actions';
import { RootState } from 'src/reducers/model';

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
		<div
			className="container"
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
				.doc-wrapper {
					display: flex;
				}
			`}
		>
			<div className="row">
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
			<Divider />
			<h4>Tải nhiều nhất</h4>
			<div className="doc-wrapper">
				{listDoc?.results?.map((e, i) => {
					return (
						<div
							key={i}
							css={css`
								margin-top: 50px;
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
	);
};

export default HomeUI;
