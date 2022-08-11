/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { SearchOutlined } from '@ant-design/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import Link from 'next/link';
import React from 'react';
import { Link } from 'react-router-dom';
import AppInput from 'src/components/input';
import { StorageKeys } from 'src/utils/enum';
import PublicProvider from 'src/components/providers/PublicProvider';
import RoutePaths from 'src/utils/routes';
// eslint-disable-next-line react/prop-types
function Header({ simple, hideAuth }) {
	const title = process.env.APP_NAME;
	const token = localStorage.getItem(StorageKeys.SESSION_KEY);
	return (
		<header>
			<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
				<div className="container">
					<Link to="/home">
						<a className="navbar-brand">
							{/* <FontAwesomeIcon
                icon={["fas", "shopping-basket"]}
                className="d-inline-block"
              /> */}
							<span className="ms-2 mb-0 h4 text-primary fw-bold">
								E-Course
							</span>
						</a>
					</Link>
					<div
						className="collapse navbar-collapse"
						css={css`
							.input-group {
								width: 300px;
							}
							.form-control > input {
								border: none;
							}
						`}
					>
						<form className="d-flex">
							<div className="input-group">
								<AppInput
									className="form-control"
									label=""
									placeholder="Search..."
								/>
								<button type="button" className="btn btn-primary">
									<SearchOutlined />
								</button>
							</div>
						</form>
					</div>
					<div className="d-flex">
						{token ? (
							<Link to={RoutePaths.LOGOUT}>
								<a className="btn btn-outline-primary d-none d-md-block">
									Logout
								</a>
							</Link>
						) : (
							<Link to={RoutePaths.LOGIN}>
								<a className="btn btn-outline-primary d-none d-md-block">
									Login
								</a>
							</Link>
						)}

						<Link to="/shopping-cart">
							<a className="btn btn-light border position-relative ms-2 fw-normal">
								<FontAwesomeIcon icon={['fas', 'shopping-cart']} />
								&nbsp;Cart
								<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger my-auto">
									3{/* number of cart */}
								</span>
							</a>
						</Link>
					</div>
				</div>
			</nav>
			{!simple && (
				<nav className="navbar navbar-expand-lg navbar-light bg-white border-bottom">
					<div className="container">
						<button
							className="navbar-toggler ms-auto"
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#navbarNavDropdown"
							aria-controls="navbarNavDropdown"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>
						<div className="collapse navbar-collapse" id="navbarNavDropdown">
							<ul className="navbar-nav">
								<li className="nav-item">
									<Link to="/document">
										<a className="nav-link">Tài liệu</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/classroom">
										<a className="nav-link">Lớp học</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/courses">
										<a className="nav-link">Khoá học</a>
									</Link>
								</li>
								{/* <li className="nav-item">
									<Link to="/explore">
										<a className="nav-link">Furnitures</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/explore">
										<a className="nav-link">Medicines</a>
									</Link>
								</li>
								<li className="nav-item">
									<Link to="/explore">
										<a className="nav-link">Cosmetics</a>
									</Link>
								</li> */}
							</ul>
							<ul className="ms-auto navbar-nav">
								<li className="nav-item dropdown">
									<a
										href="#"
										className="nav-link dropdown-toggle"
										role="button"
										data-bs-toggle="dropdown"
										aria-expanded="false"
										id="languageMenuLink"
									>
										English
									</a>
									<ul
										className="dropdown-menu dropdown-menu-macos dropdown-menu-end"
										aria-labelledby="languageMenuLink"
									>
										<li>
											<a href="#" className="dropdown-item">
												English
											</a>
										</li>
										<li>
											<a href="#" className="dropdown-item mt-1">
												Myanmar
											</a>
										</li>
									</ul>
								</li>
							</ul>
						</div>
					</div>
				</nav>
			)}
		</header>
	);
}

export default Header;
