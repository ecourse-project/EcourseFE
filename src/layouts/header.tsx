// /** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
// import {
// 	HomeOutlined,
// 	LogoutOutlined,
// 	SearchOutlined,
// 	ShoppingCartOutlined,
// 	ShoppingOutlined,
// } from '@ant-design/icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// // import {Link} from 'react-router-dom';
// import React, { useEffect } from 'react';
// import { Link, Routes } from 'react-router-dom';
// import AppInput from 'src/components/input';
// import { StorageKeys } from 'src/utils/enum';
// import PublicProvider from 'src/components/providers/PublicProvider';
// import RoutePaths from 'src/utils/routes';
// import { useQueryParam } from 'src/hooks/useQueryParam';
// import AppButton from 'src/components/button';
// import { useAppSelector } from 'src/apps/hooks';
// import { RootState } from 'src/reducers/model';
// // eslint-disable-next-line react/prop-types
// function Header() {
// 	const title = process.env.APP_NAME;
// 	const data = useAppSelector((state: RootState) => state.document);
// 	const token = localStorage.getItem(StorageKeys.SESSION_KEY);
// 	const queryParams = useQueryParam();
// 	const tab = window.location.pathname.split('/')[1];
// 	useEffect(() => {
// 		document.getElementById(`${tab}`)?.classList.add('active');
// 	}, [tab]);
// 	return (
// 		<div
// 			className="container mt-3"
// 			css={css`
// 				* {
// 					margin: 0;
// 					padding: 0;
// 				}

// 				display: flex;
// 				justify-content: center;
// 				align-items: center;
// 				width: 100%;
// 				position: relative;
// 				display: flex;
// 				flex-direction: column;
// 				justify-content: center;
// 				align-items: center;
// 				padding: 20px 24px 0px 24px;
// 				color: #fff;
// 				z-index: 100;
// 				.card {
// 					width: 100%;
// 					border-radius: 13px;
// 				}
// 				.card1 {
// 					width: 100%;
// 				}
// 				.innercard {
// 					width: 100%;
// 					background-color: #eef8fe;
// 					border-radius: 11px;
// 				}
// 				.btn-group {
// 					width: 20%;
// 					.btn {
// 						justify-content: space-between;
// 						height: 40px;
// 						border: none;
// 						background-color: #eef8fe !important;
// 						font-size: 18px;
// 						color: #000 !important;
// 						border-radius: 5px;
// 						align-items: center;
// 						font-weight: 700;
// 						letter-spacing: 0px;
// 						padding: 0;
// 					}
// 				}

// 				// .order {
// 				// 	&::before {
// 				// 		height: 30px;
// 				// 		color: #000;
// 				// 		border-left: 3px solid black;
// 				// 		display: block;
// 				// 		content: '';
// 				// 		position: relative;
// 				// 		left: -15px;
// 				// 	}
// 				// }
// 				// .logout {
// 				// 	margin-left: 10px;
// 				// 	&::before {
// 				// 		height: 30px;
// 				// 		color: #000;
// 				// 		border-left: 3px solid black;
// 				// 		display: block;
// 				// 		content: '';
// 				// 		position: relative;
// 				// 		left: -8px;
// 				// 	}
// 				// }
// 				.btn:hover {
// 					border: none;
// 				}
// 				.btn:focus {
// 					box-shadow: none;
// 					outline: none;
// 					border: none;
// 				}

// 				.navbar-brand {
// 					font-weight: 700;
// 					font-size: 22px;
// 				}
// 				.go {
// 					color: #119cff;
// 				}
// 				.active {
// 					.nav-link {
// 						font-weight: 650;
// 					}
// 					// &::after {
// 					// 	content: '';
// 					// 	position: absolute;
// 					// 	background: gray;
// 					// 	width: 7px;
// 					// 	height: 6px;
// 					// 	border-radius: 51px;
// 					// }
// 				}

// 				.nav-item {
// 					font-weight: 500;
// 					color: #000000;
// 					margin-left: 5px;
// 				}
// 				.nav-content {
// 					margin-left: 15px;
// 					font-size: 23px;
// 				}
// 				// .card-num {
// 				// 	position: absolute;
// 				// 	bottom: 9px;
// 				// 	right: -11px;
// 				// 	color: red;
// 				// }
// 				.anticon {
// 					position: relative;
// 					bottom: 3px;
// 					margin-right: 5px;
// 					font-size: 25px;
// 				}
// 			`}
// 		>
// 			<div className="card card1 p-2">
// 				<div className="innercard p-2">
// 					<nav className="navbar navbar-expand-lg navbar-light">
// 						<div className="container-fluid">
// 							<Link className="navbar-brand name" to={RoutePaths.HOME}>
// 								E<span className="go">Course</span>
// 							</Link>
// 							<div
// 								className="collapse navbar-collapse nav-content"
// 								id="navbarSupportedContent"
// 							>
// 								<ul className="navbar-nav me-auto mb-2 mb-lg-0">
// 									{/* <li className="nav-item" id="home">
// 										<Link to={RoutePaths.HOME} className="nav-link">
// 											<span className="home">Home</span>
// 										</Link>
// 									</li> */}
// 									<li className="nav-item" id="document">
// 										<Link className="nav-link" to={RoutePaths.DOCUMENT}>
// 											Tài liệu
// 										</Link>
// 									</li>
// 									<li className="nav-item" id="course">
// 										<Link className="nav-link" to="#">
// 											Khoá học
// 										</Link>
// 									</li>
// 									<li className="nav-item" id="course">
// 										<Link className="nav-link" to="#">
// 											Lớp học
// 										</Link>
// 									</li>
// 								</ul>
// 								<ul>
// 									<div>
// 										<AppButton
// 											btnTextColor={'black'}
// 											btnStyle={'solid'}
// 											btnSize={'medium'}
// 											btnWidth={'full-w'}
// 											className="shoping btn cart"
// 										>
// 											<Link to={RoutePaths.CART}>
// 												<ShoppingCartOutlined />
// 												<span className="card-num">
// 													{data.listCartDoc.length}
// 												</span>
// 											</Link>
// 										</AppButton>
// 									</div>
// 									<div>
// 										<AppButton
// 											btnTextColor={'black'}
// 											btnStyle={'solid'}
// 											btnSize={'medium'}
// 											btnWidth={'full-w'}
// 											className="order btn order_cart"
// 										>
// 											<Link to={RoutePaths.ORDER_CART}>
// 												<ShoppingOutlined />
// 												{/* <span className="card-num">{data?.listOrder.count}</span> */}
// 											</Link>
// 										</AppButton>
// 									</div>
// 									<div>
// 										{token ? (
// 											<AppButton
// 												btnTextColor={'black'}
// 												btnStyle={'solid'}
// 												btnSize={'medium'}
// 												btnWidth={'full-w'}
// 												className="btn logout"
// 											>
// 												<Link to="">{<LogoutOutlined />}Đăng xuất</Link>
// 											</AppButton>
// 										) : (
// 											<AppButton
// 												btnTextColor={'black'}
// 												btnStyle={'solid'}
// 												btnSize={'medium'}
// 												btnWidth={'full-w'}
// 												className="btn"
// 											>
// 												<Link to={RoutePaths.LOGIN}>Login</Link>
// 											</AppButton>
// 										)}
// 									</div>
// 								</ul>
// 							</div>
// 						</div>
// 					</nav>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default Header;

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RoutePaths from 'src/utils/routes';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import ShoppingCartTwoToneIcon from '@mui/icons-material/ShoppingCartTwoTone';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import LogoutIcon from '@mui/icons-material/Logout';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Badge } from '@mui/material';
import { useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';

const pages = [
	{ name: 'Tài liệu', to: `${RoutePaths.DOCUMENT}` },
	{ name: 'Khoá học', to: `${RoutePaths.ORDER_CART}` },
];
const settings = [
	{ name: 'Trang cá nhân', to: '', icon: <ManageAccountsIcon /> },
	{ name: 'Đăng xuất', to: `${RoutePaths.LOGIN}`, icon: <LogoutIcon /> },
];

function Header() {
	const data = useAppSelector((state: RootState) => state.document);
	const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
		null
	);
	const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
		null
	);

	const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElNav(event.currentTarget);
	};
	const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorElUser(event.currentTarget);
	};
	const navigate = useNavigate();
	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleCloseUserMenu = () => {
		setAnchorElUser(null);
	};

	return (
		<div
			css={css`
				.menu-item {
					-webkit-box-align: center;
					align-items: center;
					-webkit-box-pack: center;
					justify-content: center;
					position: relative;
					box-sizing: border-box;
					-webkit-tap-highlight-color: transparent;
					background-color: transparent;
					outline: 0px;
					border: 0px;
					margin: 16px 0px;
					cursor: pointer;
					user-select: none;
					vertical-align: middle;
					appearance: none;
					text-decoration: none;
					font-family: Roboto, Helvetica, Arial, sans-serif;
					font-weight: 600;
					font-size: 1rem;
					line-height: 1.75;
					letter-spacing: 0.1em;
					text-transform: uppercase;
					min-width: 64px;
					padding: 6px 8px;
					border-radius: 4px;
					transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
						box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
						border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
						color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
					color: white;
					display: block;
				}
				.nav-link {
					opacity: 0.6;
					transition: all 0.5s linear; /* vendorless fallback */
					-o-transition: all 0.5s linear; /* opera */
					-ms-transition: all 0.5s linear; /* IE 10 */
					-moz-transition: all 0.5s linear; /* Firefox */
					-webkit-transition: all 0.5s linear; /*safari and chrome */
					opacity: 0.6;
					&:hover {
						transition: all 0.5s ease-in-out;
						opacity: 1;
						letter-spacing: 0.2em;
					}
				}

				.active {
					opacity: 1;
					font-weight: 700;
				}

				.setting-icon svg {
					margin-right: 5px !important;
					color: red;
				}
			`}
		>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
						<Typography
							variant="h6"
							noWrap
							component="a"
							href={RoutePaths.HOME}
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>
						{/* ===============mobile */}
						<Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: 'bottom',
									horizontal: 'left',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'left',
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: 'block', md: 'none' },
								}}
							>
								{pages.map((page) => (
									<MenuItem key={page.name} onClick={handleCloseNavMenu}>
										<Typography
											textAlign="center"
											sx={{ color: 'red' }}
											component="a"
											href={page.to}
										>
											{page.name}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
						{/* ------------------------mobile */}
						<AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
						<Typography
							variant="h5"
							noWrap
							component="a"
							href=""
							sx={{
								mr: 2,
								display: { xs: 'flex', md: 'none' },
								flexGrow: 1,
								fontFamily: 'monospace',
								fontWeight: 700,
								letterSpacing: '.3rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							LOGO
						</Typography>

						<Box
							sx={{
								flexGrow: 1,
								display: { xs: 'none', md: 'flex' },
								color: 'yellow',
							}}
						>
							{pages.map((page) => (
								<Button
									className="menu-item"
									key={page.name}
									onClick={handleCloseNavMenu}
									sx={{
										my: 2,
										display: 'block',
										color: 'blue',
									}}
								>
									<NavLink to={page.to} className="nav-link">
										{page.name}
									</NavLink>
								</Button>
							))}
						</Box>
						<Box sx={{ flexGrow: 1 }} />
						<Box sx={{ display: { xs: 'none', md: 'flex' } }}>
							<NavLink to={RoutePaths.CART} className="nav-link">
								<IconButton
									size="large"
									aria-label="show 4 new mails"
									color="inherit"
								>
									<Badge badgeContent={data.listCartDoc.length} color="error">
										<ShoppingCartIcon />
									</Badge>
								</IconButton>
							</NavLink>
							<NavLink to={RoutePaths.ORDER_CART} className="nav-link">
								<IconButton
									size="large"
									aria-label="show 17 new notifications"
									color="inherit"
								>
									<Badge badgeContent={data?.listOrder?.count} color="error">
										<AccountBalanceWalletIcon />
									</Badge>
								</IconButton>
							</NavLink>
						</Box>
						<Box sx={{ flexGrow: 0 }}>
							<Tooltip title="Open settings">
								<IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
									<Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
								</IconButton>
							</Tooltip>
							<Menu
								sx={{ mt: '45px' }}
								id="menu-appbar"
								anchorEl={anchorElUser}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorElUser)}
								onClose={handleCloseUserMenu}
							>
								{settings.map((setting) => (
									<MenuItem key={setting.name} onClick={handleCloseUserMenu}>
										<Typography
											textAlign="center"
											component="a"
											href={setting.to}
										>
											<span className="setting-icon">{setting.icon}</span>
											{`${setting.name}`}
										</Typography>
									</MenuItem>
								))}
							</Menu>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
}
export default Header;
