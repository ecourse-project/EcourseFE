import { ForkEffect, put, select, takeLatest } from 'redux-saga/effects';
import { ActionBase } from '..';
import AppAction from 'src/reducers/app/action';
import MailingService from 'src/services/mailing';
import MailingAction from './action';
import { AlertTextError } from 'src/alert/NotificationAlert';
import { User } from '@goldfishcode/homemeta-cmp-sdk/libs/api/user/models';
import { RootState } from '../model';

function* watchListMailingList(action: ActionBase) {
  const user: User = yield select((state: RootState) => state?.auth?.myProfile);
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });

    const mailingList = yield MailingService.listMailingList(action.payload.page, action.payload.limit);
    yield put({
      type: MailingAction.LIST_MAILING_LIST_SUCCESS,
      payload: mailingList,
    });
    if (mailingList?.results && mailingList?.results.length === 0 && !user?.is_first_mailing_list) {
      yield put({
        type: AppAction.VISIBLE_MODAL_ADD_MAILING,
        payload: true,
      });
    }
  } catch (err) {
    console.error(' list mailing list failure: ', err);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchUpdateMailingList(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });

    const mailingList = yield MailingService.updateMailingList(action.payload.id, action.payload.data);

    yield put({
      type: MailingAction.UPDATE_MAILING_LIST_SUCCESS,
      payload: mailingList,
    });
  } catch (err) {
    AlertTextError((err as any).message);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* watchDeleteMailingList(action: ActionBase) {
  try {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'INCREMENT',
    });

    yield MailingService.deleteMailingList(action.payload);

    yield put({
      type: MailingAction.DELETE_MAILING_LIST_SUCCESS,
      payload: action.payload,
    });
  } catch (err) {
    console.error(' delete mailing list failure: ', err);
  } finally {
    yield put({
      type: AppAction.APP_LOADING,
      payload: 'DECREMENT',
    });
  }
}

function* mailingSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(MailingAction.LIST_MAILING_LIST, watchListMailingList);
  yield takeLatest(MailingAction.UPDATE_MAILING_LIST, watchUpdateMailingList);
  yield takeLatest(MailingAction.DELETE_MAILING_LIST, watchDeleteMailingList);
}

export default mailingSaga;
