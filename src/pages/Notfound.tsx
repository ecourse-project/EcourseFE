import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notfound.scss';
const Notfound = () => {
	return (
		<div className="notfound-container">
			<h1>404</h1>
			<div className="cloak__wrapper">
				<div className="cloak__container">
					<div className="cloak"></div>
				</div>
			</div>
			<div className="info">
				<h2>We can&apos;t find that page</h2>
				<p>
					We&apos;re fairly sure that page used to be here, but seems to have
					gone missing. We do apologise on it&apos;s behalf.
				</p>
				<Link to="/" target="_self" rel="noreferrer noopener">
					Home
				</Link>
			</div>
		</div>
	);
};

export default Notfound;
