import { all, call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import CourseService from 'src/lib/api/course';
import {
  CreateOrderArg,
  OCart,
  OutputCancel,
  OutputOrder,
  Pagination,
  PaginationParams,
} from 'src/lib/types/backend_modal';

import { PayloadAction } from '@reduxjs/toolkit';

import AppAction from '../actions';
import { appActions, LoadingEnum } from './appSlice';

function* fetchListCart() {
  try {
    yield put(appActions.setAppLoading(LoadingEnum.INCREMENT));

    const listCarts: OCart = yield CourseService.getCart();
    yield put(appActions.fetchListCartSuccess(listCarts));
  } catch (err) {
    console.log('error', err);
  } finally {
    yield put(appActions.setAppLoading(LoadingEnum.DESCREMENT));
  }
}

function* fetchOrder(action: PayloadAction<PaginationParams>) {
  try {
    const result: Pagination<OutputOrder> = yield CourseService.getAllOrders(action.payload);
    yield put(appActions.fetchListOrder(result));
  } catch (error) {
    console.log('error fetch order', error);
  }
}
function* createOrder(action: PayloadAction<CreateOrderArg>) {
  try {
    const result: OutputOrder = yield CourseService.createOrder(action.payload);
    yield put(appActions.createOrder(result));
    yield put(appActions.clearDocCart(action.payload));
    yield put(appActions.clearCourseCart(action.payload));
  } catch (error) {
    console.log('error create order', error);
  }
}
function* cancelOrder(action: PayloadAction<OutputOrder>) {
  try {
    const result: OutputCancel = yield CourseService.cancelOrder(action.payload.id);
    yield put(appActions.cancelOrder(action.payload));
  } catch (error) {
    console.log('error cancel order', error);
  }
}

function* fetchAllData(action: PayloadAction<PaginationParams>) {
  try {
    yield put(appActions.setAppLoading(LoadingEnum.INCREMENT));
    const [orders, carts] = yield all([call(CourseService.getAllOrders, action.payload), call(CourseService.getCart)]);
    yield put(appActions.fetchListOrder(orders));
    yield put(appActions.fetchListCartSuccess(carts));
  } catch (error) {
    console.log('fetch all error', error);
  } finally {
    yield put(appActions.setAppLoading(LoadingEnum.DESCREMENT));
  }
}

function* appSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(AppAction.FETCH_ALL_DATA, fetchAllData);
  yield takeLatest(AppAction.FETCH_LIST_CART, fetchListCart);
  yield takeLatest(AppAction.FETCH_ORDER, fetchOrder);
  yield takeLatest(AppAction.CREATE_ORDER, createOrder);
  yield takeLatest(AppAction.CANCEL_ORDER, cancelOrder);
}

export default appSaga;
