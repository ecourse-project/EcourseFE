import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from 'src/pages/login';
import Register from 'src/pages/register';
import './App.css';
import { useAppDispatch } from './apps/hooks';
import ResetPassword from './components/forgot-password/ResetPassword';
import { useQueryParam } from './hooks/useQueryParam';
import Cart from './pages/cart';
import Document from './pages/documents';
import DocumentDetail from './pages/documents-detail';
import Home from './pages/home';
import Logout from './pages/logout';
import Notfound from './pages/Notfound';
import OrderCart from './pages/order-cart';
import AppAction from './reducers/actions';
import { cartActions } from './reducers/document/documentSlice';
import CourseService from './services/course';
import { StorageKeys } from './utils/enum';
import RoutePaths from './utils/routes';
const App = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch({
			type: AppAction.FETCH_ALL_DATA,
			payload: {
				page: 1,
				limit: 10,
			},
		});
		if (!localStorage.getItem(StorageKeys.SESSION_KEY))
			navigate(RoutePaths.LOGIN);
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
