import { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from 'src/pages/login';
import Register from 'src/pages/register';
import './App.css';
import { useAppDispatch } from './apps/hooks';
import ResetPassword from './components/forgot-password/ResetPassword';
import Cart from './pages/cart';
import Course from './pages/courses';
import Document from './pages/documents';
import DocumentDetail from './pages/document-detail';
import Home from './pages/home';
import Logout from './pages/logout';
import MyAccount from './pages/my-account';
import OrderCart from './pages/order';
import AppAction from './reducers/actions';
import { StorageKeys } from './utils/enum';
import RoutePaths from './utils/routes';
import CourseDetail from './pages/course-detail';
import CourseProgress from './pages/course-progress';
import MyCourse from './pages/my-course';
const App = () => {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	useEffect(() => {
		if (!localStorage.getItem(StorageKeys.SESSION_KEY)) {
			console.log('vao ');
			navigate(RoutePaths.LOGIN);
		} else {
			dispatch({
				type: AppAction.FETCH_ALL_DATA,
				payload: {
					page: 1,
					limit: 10,
				},
			});
		}
		// navigate(RoutePaths.HOME);
	}, []);
	return (
		<div className="App">
			<Routes>
				<Route path={RoutePaths.HOME} element={<Home />} />
				<Route path={RoutePaths.DOCUMENT} element={<Document />} />
				<Route path={RoutePaths.COURSE} element={<Course />} />
				<Route path={RoutePaths.MY_COURSES} element={<MyCourse />} />

				<Route path={RoutePaths.CART} element={<Cart />} />
				<Route path={RoutePaths.ORDER_CART} element={<OrderCart />} />

				<Route path={RoutePaths.DOCUMENT_DETAIL} element={<DocumentDetail />} />
				<Route path={RoutePaths.COURSE_DETAIL} element={<CourseDetail />} />
				<Route path={RoutePaths.COURSE_PROGRESS} element={<CourseProgress />} />

				<Route path={RoutePaths.LOGIN} element={<Login />} />
				<Route path={RoutePaths.LOGOUT} element={<Logout />} />

				<Route path={RoutePaths.REGISTER} element={<Register />} />
				<Route path={RoutePaths.FORGOT_PASSWORD} element={<ResetPassword />} />
				<Route path={RoutePaths.MY_ACCOUNT} element={<MyAccount />} />
			</Routes>
		</div>
	);
};

export default App;
