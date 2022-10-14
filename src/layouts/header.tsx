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
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Badge } from '@mui/material';
import { useAppSelector } from 'src/apps/hooks';
import { RootState } from 'src/reducers/model';
import { Image } from 'antd';

const pages = [
	{ name: 'Tài liệu', to: `${RoutePaths.DOCUMENT}` },
	{ name: 'Khoá học', to: `${RoutePaths.COURSE}` },
];
const settings = [
	{
		name: 'Trang cá nhân',
		to: `${RoutePaths.MY_ACCOUNT}`,
		icon: <ManageAccountsIcon />,
	},
	{ name: 'Đăng xuất', to: `${RoutePaths.LOGIN}`, icon: <LogoutIcon /> },
];

interface HeaderProps {
	headerClassName: string;
}

const Header: React.FC<HeaderProps> = (props) => {
	const { headerClassName } = props;
	const data = useAppSelector((state: RootState) => state.app);
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
			className={headerClassName}
			css={css`
				.menu-setting-icon svg {
					margin-right: 5px !important;
					color: red;
				}
				.menu-setting {
					color: #fff;
					font-size: 50px;
				}
				.menu-item {
					font-size: 1rem;
					letter-spacing: 0.1em;
					font-weight: 600;
					color: white;
					font-family: Roboto, Helvetica, Arial, sans-serif;
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
			`}
		>
			<AppBar position="static">
				<Container maxWidth="xl">
					<Toolbar disableGutters>
						<Link to={RoutePaths.CART}>
							<AutoStoriesIcon
								sx={{
									display: { xs: 'none', md: 'flex' },
									mr: 1,
									fontSize: 40,
									color: '#d26868',
								}}
							/>
						</Link>
						<Typography
							variant="h6"
							noWrap
							component="a"
							href={RoutePaths.HOME}
							sx={{
								mr: 2,
								display: { xs: 'none', md: 'flex' },
								fontFamily: 'monospace',
								fontWeight: 600,
								letterSpacing: '.1rem',
								color: 'inherit',
								textDecoration: 'none',
								'&:hover': {
									color: '#fff',
								},
							}}
						>
							Ecourse
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
								fontWeight: 600,
								letterSpacing: '.1rem',
								color: 'inherit',
								textDecoration: 'none',
							}}
						>
							Ecourse
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
									<Badge
										badgeContent={
											data?.appCart?.documents?.length +
											data?.appCart?.courses?.length
										}
										color="error"
									>
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
									<Badge
										badgeContent={data?.listOrder?.results?.length}
										color="error"
									>
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
											className="menu-setting"
											textAlign="center"
											component="a"
											href={setting.to}
											sx={{
												color: '#fff',
												'& .icon': {
													marginRight: '10px',
												},
											}}
										>
											<span className="icon">{setting.icon}</span>
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
};
export default Header;
