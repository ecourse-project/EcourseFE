import {
	call,
	ForkEffect,
	put,
	select,
	takeEvery,
	takeLatest,
} from 'redux-saga/effects';
import { ActionBase } from '..';
import CourseService from 'src/services/course';
import { cartActions } from './documentSlice';
import { current, PayloadAction } from '@reduxjs/toolkit';
import {
	Document,
	OCart,
	OutputAdd,
	OutputCancel,
	OutputOrder,
	OutputRemove,
	Pagination,
	PaginationParams,
} from 'src/models/backend_modal';
import { DocStatus } from 'src/utils/enum';
import { runInContext } from 'vm';
import AppAction from '../actions';
import AppabcAction from '../app/action';
// import MailingService from 'src/services/mailing';
// import MailingAction from './action';
// import { AlertTextError } from 'src/alert/NotificationAlert';
// import { User } from '@goldfishcode/homemeta-cmp-sdk/libs/api/user/models';

function* fetchListCart() {
	console.log('trigger saga fetchlistcart');

	try {
		const listCarts: OCart = yield CourseService.getCart();
		console.log('run fetchlist');
		yield put(cartActions.fetchListCartSuccess(listCarts));
	} catch (err) {
		console.error(' list mailing list failure: ', err);
		yield put(cartActions.fetchListCartFail());
	}
}

function* watchUpdateCart(action: PayloadAction<Document>) {
	console.log('trigger saga', action.type);

	console.log('actionbase: ', action.payload);
	try {
		if (action.payload.sale_status === DocStatus.AVAILABLE) {
			const addTo: OutputAdd = yield CourseService.addDocToCArt(
				action.payload.id
			);
			console.log('add succes: ', addTo);
			yield put(cartActions.addToCart(action.payload));
		} else if (action.payload.sale_status === DocStatus.IN_CART) {
			console.log('remove succes');

			const removeFrom: OutputRemove = yield CourseService.removeDocFromCart(
				action.payload.id
			);
			yield put(cartActions.removeFromCart(action.payload));
		}
	} catch (error) {
		console.log('error update cart', error);
	}
}

function* fetchDoccument(action: PayloadAction<PaginationParams>) {
	console.log('trigger saga', action.type);

	try {
		const result: Pagination<Document> = yield CourseService.getAllDocs(
			action.payload
		);
		yield put(cartActions.fetchListDoc(result));
	} catch (error) {
		console.log('error fetch doc', error);
	}
}
function* fetchOrder(action: PayloadAction<PaginationParams>) {
	console.log('trigger saga', action.type);

	try {
		const result: Pagination<OutputOrder> = yield CourseService.getAllOrders(
			action.payload
		);
		yield put(cartActions.fetchListOrder(result));
	} catch (error) {
		console.log('error fetch order', error);
	}
}

function* cancelOrder(action: PayloadAction<OutputOrder>) {
	console.log('trigger saga', action.type);
	try {
		const result: Pagination<OutputCancel> = yield CourseService.cancelOrder(
			action.payload.id
		);
		yield put(cartActions.cancelOrder(action.payload));
	} catch (error) {
		console.log('error cancel order', error);
	}
}

function* documentSaga(): Generator<ForkEffect<never>, void, unknown> {
	console.log('run document saga');
	yield takeLatest(AppAction.FETCH_DATA, fetchDoccument);
	yield takeLatest(AppAction.FETCH_ORDER, fetchOrder);
	yield takeLatest(AppAction.CANCEL_ORDER, cancelOrder);
	yield takeLatest(cartActions.fetchListCart.type, fetchListCart);
	yield takeLatest(cartActions.updateCart.type, watchUpdateCart);
}

export default documentSaga;
