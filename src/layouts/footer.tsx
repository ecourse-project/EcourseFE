/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
	FacebookOutlined,
	SearchOutlined,
	YoutubeOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';
import React from 'react';
import { Link } from 'react-router-dom';
import AppInput from 'src/components/input';
import { GlobalStyle, StorageKeys } from 'src/utils/enum';
import PublicProvider from 'src/components/providers/PublicProvider';
import RoutePaths from 'src/utils/routes';
// eslint-disable-next-line react/prop-types
function Footer({ simple, hideAuth }) {
	const title = process.env.APP_NAME;
	const token = localStorage.getItem(StorageKeys.SESSION_KEY);
	return (
		<footer
			className="mainfooter container"
			role="contentinfo"
			css={css`
				background: ${GlobalStyle.HEADER_BG} !important;
				background: -webkit-linear-gradient(59deg, #3a6073, #16222a);
				background: linear-gradient(59deg, #3a6073, #16222a);
				color: white;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				background-color: #000;
				color: #fff;
				z-index: 100;
				& a {
					color: #000;
					font-size: 14px;
					transition-duration: 0.2s;
				}

				& a:hover {
					color: #fa944b;
					text-decoration: none;
				}

				.copy {
					font-size: 12px;
					padding: 10px;
					border-top: 1px solid #ffffff;
				}

				.footer-middle {
					padding-top: 2em;
					color: #000;
					width: 80%;
				}

				/*SOCİAL İCONS*/

				/* footer social icons */

				ul.social-network {
					list-style: none;
					display: inline;
					margin-left: 0 !important;
					padding: 0;
				}

				ul.social-network li {
					display: inline;
					margin: 0 5px;
				}

				/* footer social icons */

				.social-network a.icoFacebook:hover {
					background-color: #3b5998;
				}

				.social-network a.icoLinkedin:hover {
					background-color: #007bb7;
				}

				.social-network a.icoFacebook:hover i,
				.social-network a.icoLinkedin:hover i {
					color: #000;
				}

				.social-network a.socialIcon:hover,
				.socialHoverClass {
					color: #44bcdd;
				}

				.social-circle li a {
					display: inline-block;
					position: relative;
					margin: 0 auto 0 auto;
					-moz-border-radius: 50%;
					-webkit-border-radius: 50%;
					border-radius: 50%;
					text-align: center;
					width: 60px;
					height: 60px;
					font-size: 30px;
					border: 2px dotted #fa944b;
				}

				.social-circle li i {
					margin: 0;
					line-height: 30px;
					text-align: center;
				}

				.social-circle li a:hover i,
				.triggeredHover {
					-moz-transform: rotate(360deg);
					-webkit-transform: rotate(360deg);
					-ms--transform: rotate(360deg);
					transform: rotate(360deg);
					-webkit-transition: all 0.2s;
					-moz-transition: all 0.2s;
					-o-transition: all 0.2s;
					-ms-transition: all 0.2s;
					transition: all 0.2s;
				}

				.social-circle i {
					color: #595959;
					-webkit-transition: all 0.8s;
					-moz-transition: all 0.8s;
					-o-transition: all 0.8s;
					-ms-transition: all 0.8s;
					transition: all 0.8s;
				}

				.social-network a {
					background-color: #f9f9f9;
				}
			`}
		>
			<div className="footer-middle">
				<div className="container">
					<div className="row">
						<div className="col-md-3 col-sm-6">
							<div className="footer-pad">
								<h4>Heading 1</h4>
								<ul className="list-unstyled">
									<li>
										<a href="#"></a>
									</li>
									<li>
										<a href="#">Payment Center</a>
									</li>
									<li>
										<a href="#">Contact Directory</a>
									</li>
									<li>
										<a href="#">FAQs</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="footer-pad">
								<h4>Heading 2</h4>
								<ul className="list-unstyled">
									<li>
										<a href="#">Website Tutorial</a>
									</li>
									<li>
										<a href="#">Accessibility</a>
									</li>
									<li>
										<a href="#">Disclaimer</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3 col-sm-6">
							<div className="footer-pad">
								<h4>Heading 3</h4>
								<ul className="list-unstyled">
									<li>
										<a href="#">Parks and Recreation</a>
									</li>
									<li>
										<a href="#">Public Works</a>
									</li>
									<li>
										<a href="#">Police Department</a>
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-3">
							<h4>Follow Us</h4>
							<ul className="social-network social-circle">
								<li>
									<a href="#" className="icoFacebook" title="Facebook">
										<YoutubeOutlined />
									</a>
								</li>
								<li>
									<a href="#" className="icoLinkedin" title="Linkedin">
										<FacebookOutlined />
									</a>
								</li>
							</ul>
						</div>
					</div>
					<div className="row">
						<div className="col-md-12 copy">
							<p className="text-center">
								&copy; Copyright 2018 - Company Name. All rights reserved.
							</p>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
