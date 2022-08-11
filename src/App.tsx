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
import ProductDetail from './components/products/product_detail';

const App = () => {
	const navigate = useNavigate();
	useEffect(() => {
		if (localStorage.getItem(StorageKeys.SESSION_KEY)) navigate('/home');
		else navigate('auth/login');
		// console.log('Mount');
		// navigate('auth/login');
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path="/home" element={<Home />} />
				<Route path="/product/:id" element={<ProductDetail />} />
				<Route path="auth/login" element={<Login />} />
				<Route path="auth/logout" element={<Logout />} />

				<Route path="register" element={<Register />} />
				<Route path="forgot-password" element={<ResetPassword />} />

				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
};

export default App;
