import axios from 'axios';
import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './layouts/About';
import Admin from './layouts/Admin';
import Control from './layouts/Control';
// import Login from 'src/pages/login';
import Login from 'src/section/Login';
import Navigation from './layouts/Navigation';
import Register from 'src/section/Register';
// import Register from 'src/pages/register';
import Home from './pages/Home';
import Notfound from './pages/Notfound';
import PrivateRoute from './utils/PrivateRoute';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
function App() {
	useEffect(() => {
		// const x = async function fc() {
		// 	const y = await fetch("http://127.0.0.1/localhost:8000/courses/")
		// 	console.log("y la: ", y)
		// }
		// x()
		// fetch('http://127.0.0.1:8000/courses', {
		// 	mode: 'no-cors',
		// })
		// 	.then((response) => {
		// 		console.log('respomnse ', response);
		// 		return response;
		// 	})
		// 	.then((data) => console.log('data', data));
		const x = async () => {
			await fetch('http://localhost:8000/courses/')
				.then((response) => response)
				.then((data) => console.log('data', data.url));
			//abcdef test
			// console.log('res 127', await res.json());
		};
		x();
		// .then((response) => console.log(response))
		// .then((data) => console.log('data', data))
		// .catch((err) => console.log('error', err));
		// const x = async () => {
		// 	const y = await pokeApi.getData();
		// 	console.log('data la ', await y);
		// };
		// x();
	}, []);
	return (
		<div className="App">
			<div>
				<Navigation />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="carts" element={<About />} />
				<Route path="login" element={<Login />} />
				<Route path="control" element={<Control />} />
				<Route path="register" element={<Register />} />
				<Route path="admin" element={<PrivateRoute outlet={<Admin />} />} />
				<Route path="*" element={<Notfound />} />
			</Routes>
		</div>
	);
}

export default App;
