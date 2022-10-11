import { PayloadAction } from '@reduxjs/toolkit';
import { ForkEffect, put, takeLatest } from 'redux-saga/effects';
import {
	Course,
	MoveEnum,
	Pagination,
	PaginationParams,
	SaleStatusEnum,
} from 'src/models/backend_modal';
import CourseService from 'src/services/course';
import AppAction from '../actions';
import { appActions } from '../app/appSlice';

import { courseAction } from './courseSlice';

function* fetchCourse(action: PayloadAction<PaginationParams>) {
	console.log('trigger saga', action.type);

	try {
		const result: Pagination<Course> = yield CourseService.getAllCourses(
			action.payload
		);
		yield put(courseAction.fetchListCourse(result));
	} catch (error) {
		console.log('error fetch doc', error);
	}
}

function* watchUpdateCart(action: PayloadAction<Course>) {
	console.log('trigger saga', action.type);
	try {
		// yield put(courseAction.updateLoading(LoadingEnum.INCREMENT));
		if (action.payload.sale_status === SaleStatusEnum.AVAILABLE) {
			const addTo: Course = yield CourseService.moveCourse(
				action.payload.id,
				MoveEnum.LIST,
				MoveEnum.CART
			);
			console.log('add succes: ');
			yield put(courseAction.updateStatusAddCourse(addTo));
			yield put(appActions.addCourseToCart(addTo));
		} else if (action.payload.sale_status === SaleStatusEnum.IN_CART) {
			console.log('remove succes');

			const removeFrom: Course = yield CourseService.moveCourse(
				action.payload.id,
				MoveEnum.CART,
				MoveEnum.LIST
			);
			yield put(courseAction.updateStatusRemoveCourse(removeFrom));
			yield put(appActions.removeCourseFromCart(removeFrom));
		}
	} catch (error) {
		console.log('error update cart', error);
	} finally {
		// yield put(courseAction.updateLoading(LoadingEnum.DESCREMENT));
	}
}

function* documentSaga(): Generator<ForkEffect<never>, void, unknown> {
	console.log('run COURSE saga');
	yield takeLatest(AppAction.FETCH_COURSE, fetchCourse);
	yield takeLatest(courseAction.updateCart.type, watchUpdateCart);
}

export default documentSaga;
