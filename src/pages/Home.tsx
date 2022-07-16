import React from 'react';
import { Carousel } from 'antd';
import '../styles/home.scss';
import Img from 'src/assets/bugicon.png';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

const Home: React.FC = () => {
	return (
		<Carousel
			effect="fade"
			css={css`
				height: 90vh;
			`}
		>
			<div>
				<h3
					css={css`
						position: absolute;
						top: 10px;
						left: 10px;
						z-index: 1;
					`}
				>
					Hoa hoc co ban
				</h3>
				<img src={Img} alt="imgae" />
			</div>
			<div>
				<h3>Hoa hoc nang cao</h3>
			</div>
			<div>
				<h3>Hoa huu co</h3>
			</div>
			<div>
				<h3>Hoa vo co</h3>
			</div>
		</Carousel>
	);
};
export default Home;
