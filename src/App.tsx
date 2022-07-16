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
import Gallery from 'src/pages/Gallery';
import Slideshow from 'src/pages/Slideshow';
import Slide from './pages/SlideShowImage';

function App() {
	return (
		<div className="App">
			<div>
				<Navigation />
			</div>
			<Routes>
				<Route path="/" element={<Home />} />
				{/* <Route path="/home" element={<Gallery />} />
				<Route path="/slideshow" element={<Slideshow />} /> */}
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
