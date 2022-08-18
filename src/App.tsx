import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import Login from 'src/pages/login';
import Logout from './pages/logout';
import Register from 'src/pages/register';
import Home from './pages/home';
import Notfound from './pages/Notfound';
import ResetPassword from './components/forgot-password/ResetPassword';
import RoutePaths from './utils/routes';
import { StorageKeys } from './utils/enum';
import Document from './pages/documents';
import { useQueryParam } from './hooks/useQueryParam';
import Cart from './pages/cart';
import OrderCart from './pages/order_cart';
import { useSelector } from 'react-redux';
import DocumentDetail from './pages/documents_detail';
import CourseService from './services/course';
import { useAppDispatch } from './apps/hooks';
import {
	fetchListCart,
	setTotalPrice,
} from './reducers/document/documentSlice';
const App = () => {
	const navigate = useNavigate();
	const queryParams = useQueryParam();
	const dispatch = useAppDispatch();
	const fetchData = async () => {
		const res = await CourseService.getCart();
		dispatch(fetchListCart(res.documents));
		dispatch(setTotalPrice(res.total_price));
	};
	useEffect(() => {
		// console.log('query', queryParams);
		// console.log('query', window.location.pathname.slice(1));
		fetchData();
		if (!localStorage.getItem(StorageKeys.SESSION_KEY)) navigate('/auth/login');

		// navigate('/home');
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path={RoutePaths.HOME} element={<Home />} />
				<Route path={RoutePaths.DOCUMENT} element={<Document />} />
				<Route path={RoutePaths.CART} element={<Cart />} />
				<Route path={RoutePaths.ORDER_CART} element={<OrderCart />} />

				<Route path={RoutePaths.DOCUMENT_DETAIL} element={<DocumentDetail />} />
				<Route path={RoutePaths.LOGIN} element={<Login />} />
				<Route path={RoutePaths.LOGOUT} element={<Logout />} />

				<Route path={RoutePaths.REGISTER} element={<Register />} />
				<Route path={RoutePaths.FORGOT_PASSWORD} element={<ResetPassword />} />

				<Route path={RoutePaths.NOT_FOUND} element={<Notfound />} />
			</Routes>
		</div>
	);
};

export default App;
