/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import {
	HomeOutlined,
	SearchOutlined,
	ShoppingCartOutlined,
	ShoppingOutlined,
} from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {Link} from 'react-router-dom';
import React, { useEffect } from 'react';
import { Link, Routes } from 'react-router-dom';
import AppInput from 'src/components/input';
import { StorageKeys } from 'src/utils/enum';
import PublicProvider from 'src/components/providers/PublicProvider';
import RoutePaths from 'src/utils/routes';
import { useQueryParam } from 'src/hooks/useQueryParam';
import AppButton from 'src/components/button';
import { useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/apps/storeRedux';
// eslint-disable-next-line react/prop-types
function Header({ simple, hideAuth }) {
	const title = process.env.APP_NAME;
	const data = useAppSelector((state: RootState) => state.document);
	const token = localStorage.getItem(StorageKeys.SESSION_KEY);
	const queryParams = useQueryParam();
	const tab = window.location.pathname.split('/')[1];
	useEffect(() => {
		console.log(window.location.pathname);
		console.log(queryParams);
		console.log('tab: ', tab);
		console.log('token', token);
		document.getElementById(`${tab}`)?.classList.add('active');
	}, [tab]);
	return (
		<div
			className="container mt-3"
			css={css`
				* {
					margin: 0;
					padding: 0;
				}

				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				// background-color: #000;
				position: relative;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;
				padding: 20px 24px 0px 24px;
				color: #fff;
				z-index: 100;
				.card {
					width: 100%;
					border-radius: 13px;
				}
				.card1 {
					width: 100%;
				}
				.innercard {
					width: 100%;
					background-color: #eef8fe;
					border-radius: 11px;
				}
				.btn {
					height: 40px;
					width: 75px;
					border: none;
					background-color: #eef8fe !important;
					font-size: 18px;
					color: #000 !important;
					border-radius: 5px;
					display: flex;
					justify-content: center;
					align-items: center;
					font-weight: 700;
					letter-spacing: 0px;
				}
				.order {
					&::before {
						height: 30px;
						color: #000;
						border-left: 3px solid black;
						display: block;
						content: '';
						position: relative;
						left: -15px;
					}
				}
				.logout {
					margin-left: 10px;
					&::before {
						height: 30px;
						color: #000;
						border-left: 3px solid black;
						display: block;
						content: '';
						position: relative;
						left: -8px;
					}
				}
				.btn:hover {
					border: none;
				}
				.btn:focus {
					box-shadow: none;
					outline: none;
					border: none;
				}

				.navbar-brand {
					font-weight: 700;
					font-size: 22px;
				}
				.go {
					color: #119cff;
				}
				.active {
					.nav-link {
						font-weight: 650;
					}
					&::after {
						content: '';
						position: absolute;
						background: gray;
						width: 7px;
						height: 6px;
						border-radius: 51px;
					}
				}

				.nav-item {
					font-weight: 500;
					color: #000000;
					margin-left: 5px;
				}
				.nav-content {
					margin-left: 15px;
					font-size: 23px;
				}
				.card-num {
					position: absolute;
					bottom: 9px;
					right: -11px;
					color: red;
				}
				.anticon {
					position: relative;
					bottom: 3px;
					margin-right: 5px;
					font-size: 25px;
				}
			`}
		>
			<div className="card card1 p-2">
				<div className="innercard p-2">
					<nav className="navbar navbar-expand-lg navbar-light">
						<div className="container-fluid">
							<Link className="navbar-brand name" to={RoutePaths.HOME}>
								E<span className="go">Course</span>
							</Link>
							<button
								className="navbar-toggler"
								type="button"
								data-bs-toggle="collapse"
								data-bs-target="#navbarSupportedContent"
								aria-controls="navbarSupportedContent"
								aria-expanded="false"
								aria-label="Toggle navigation"
							>
								{' '}
								<span className="navbar-toggler-icon"></span>{' '}
							</button>
							<div
								className="collapse navbar-collapse nav-content"
								id="navbarSupportedContent"
							>
								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
									{/* <li className="nav-item" id="home">
										<Link to={RoutePaths.HOME} className="nav-link">
											<span className="home">Home</span>
										</Link>
									</li> */}
									<li className="nav-item" id="document">
										<Link className="nav-link" to={RoutePaths.DOCUMENT}>
											Tài liệu
										</Link>
									</li>
									<li className="nav-item" id="course">
										<Link className="nav-link" to="#">
											Khoá học
										</Link>
									</li>
									<li className="nav-item" id="course">
										<Link className="nav-link" to="#">
											Lớp học
										</Link>
									</li>
								</ul>
								<div className="d-flex">
									<AppButton
										btnTextColor={'black'}
										btnStyle={'solid'}
										btnSize={'medium'}
										btnWidth={'full-w'}
										className="shoping btn cart"
									>
										<Link to={RoutePaths.CART}>
											<ShoppingCartOutlined />
											<span className="card-num">{data.cartNum}</span>
										</Link>
									</AppButton>
									<AppButton
										btnTextColor={'black'}
										btnStyle={'solid'}
										btnSize={'medium'}
										btnWidth={'full-w'}
										className="order btn order_cart"
									>
										<Link to={RoutePaths.ORDER_CART}>
											<ShoppingOutlined />
											<span className="card-num">3{/* number of cart */}</span>
										</Link>
									</AppButton>
									{token ? (
										<AppButton
											btnTextColor={'black'}
											btnStyle={'solid'}
											btnSize={'medium'}
											btnWidth={'full-w'}
											className="btn logout"
										>
											<Link to={RoutePaths.LOGOUT}>Logout</Link>
										</AppButton>
									) : (
										<AppButton
											btnTextColor={'black'}
											btnStyle={'solid'}
											btnSize={'medium'}
											btnWidth={'full-w'}
											className="btn"
										>
											<Link to={RoutePaths.LOGIN}>Login</Link>
										</AppButton>
									)}
								</div>
							</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default Header;
