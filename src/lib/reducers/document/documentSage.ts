import { ForkEffect, put, takeLatest } from 'redux-saga/effects';
import CourseService from 'src/lib/api/course';
import { Document, MoveEnum, Pagination, PaginationParams, SaleStatusEnum } from 'src/lib/types/backend_modal';

import { PayloadAction } from '@reduxjs/toolkit';

import AppAction from '../actions';
import { appActions } from '../app/appSlice';
import { docActions, LoadingEnum } from './documentSlice';

function* watchUpdateCart(action: PayloadAction<Document>) {
  try {
    yield put(docActions.updateLoading(LoadingEnum.INCREMENT));
    if (action.payload.sale_status === SaleStatusEnum.AVAILABLE) {
      const addTo: Document = yield CourseService.moveDoc(action.payload.id, MoveEnum.LIST, MoveEnum.CART);
      yield put(docActions.updateStatusAddDoc(addTo));
      yield put(appActions.addDocToCart(addTo));
    } else if (action.payload.sale_status === SaleStatusEnum.IN_CART) {
      const removeFrom: Document = yield CourseService.moveDoc(action.payload.id, MoveEnum.CART, MoveEnum.LIST);
      yield put(docActions.updateStatusRemoveDoc(removeFrom));
      yield put(appActions.removeDocFromCart(removeFrom));
    }
  } catch (error) {
    console.log('error update cart', error);
  } finally {
    yield put(docActions.updateLoading(LoadingEnum.DESCREMENT));
  }
}

function* fetchDoccument(action: PayloadAction<PaginationParams>) {
  try {
    const result: Pagination<Document> = yield CourseService.getAllDocs(action.payload);
    yield put(docActions.fetchListDoc(result));
  } catch (error) {
    console.log('error fetch doc', error);
  }
}

function* documentSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(AppAction.FETCH_DOCUMENT, fetchDoccument);
  yield takeLatest(docActions.updateCart.type, watchUpdateCart);
}

export default documentSaga;
