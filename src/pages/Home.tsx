import React from 'react';
import { Carousel } from 'antd';
import '../styles/home.scss';
import Img from 'src/assets/bugicon.png';

const contentStyle: React.CSSProperties = {
	height: '160px',
	color: '#fff',
	lineHeight: '160px',
	textAlign: 'center',
	background: '#364d79',
};

const Home: React.FC = () => {
	return (
		<Carousel effect="fade" className="bg-success bg-gradient">
			<div>
				<h3 style={contentStyle}>Hoa hoc co ban</h3>
				<img src={Img} alt="imgae" />
			</div>
			<div>
				<h3 style={contentStyle}>Hoa hoc nang cao</h3>
			</div>
			<div>
				<h3 style={contentStyle}>Hoa huu co</h3>
			</div>
			<div>
				<h3 style={contentStyle}>Hoa vo co</h3>
			</div>
		</Carousel>
	);
};
export default Home;
