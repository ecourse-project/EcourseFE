import { ForkEffect, call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import CourseService from 'src/lib/api/course';

import { progressAction } from './progressSlice';
import { RootState } from '../model';

function* watchUpdateCheckedItem(action) {
  console.log('call sga check');
  const updateParams = yield select((state: RootState) => state.progress.updateParams);
  if (!updateParams.length) {
    updateParams.push(action.payload);
  }
  const idx = updateParams.findIndex((v) => v.lesson_id === action.payload.lesson_id);
  if (~idx) {
    updateParams.splice(idx, 1, action.payload);
  }
  try {
    yield call(CourseService.updateClassProgress, action.payload.updateParams);
    yield put(progressAction.updateCheckedItemSuccess('abc'));
  } catch (error) {
    yield put(progressAction.updateCheckedItemFailure(error));
  }
}

function* progressSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeEvery(progressAction.updateCheckedItem, watchUpdateCheckedItem);
}

export default progressSaga;
