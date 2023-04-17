import { ForkEffect, call, put, select, takeLatest } from 'redux-saga/effects';
import CourseService from 'src/lib/api/course';
import { Course, MoveEnum, Pagination, PaginationParams, SaleStatusEnum } from 'src/lib/types/backend_modal';

import { PayloadAction } from '@reduxjs/toolkit';
import { progressAction } from './progressSlice';
import { RootState } from '../model';
import { debounce } from 'lodash';
import { convertDataToUpdateParams } from 'src/components/course/course-progress/course-progress';

function* watchUpdateProgress(action: PayloadAction<Course>) {
  const state = yield select((state: RootState) => state.progress);
  yield console.log('action :>> ', action);
  yield console.log('state:>> saga-======', state.updateParams);
  const results: Course = yield CourseService.updateClassProgress(state.updateParams);
  const updateParams = convertDataToUpdateParams(results.lessons || []);
  yield put(progressAction.setUpdateParams(updateParams));
  // yield debounce(function* () {
  //   try {
  //     console.log('ab');
  //     const results: Course = yield CourseService.updateClassProgress(state.updateParams);
  //     const updateParams = convertDataToUpdateParams(results.lessons || []);
  //     yield put(progressAction.setUpdateParams(updateParams));
  //   } catch (error) {
  //     console.log('error', error);
  //   }
  // }, 500)();
}

function* progressSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(progressAction.updateProgress.type, watchUpdateProgress);
}

export default progressSaga;
