import { ForkEffect, put, select, takeLatest } from 'redux-saga/effects';
import CourseService from 'src/lib/api/course';
import { Course } from 'src/lib/types/backend_modal';

import { convertDataToUpdateParams } from 'src/components/course/course-progress/course-progress';
import { RootState } from '../model';
import { progressAction } from './progressSlice';

// function* watchUpdateProgress(action: PayloadAction<Course>) {
function* watchUpdateProgress() {
  const state = yield select((state: RootState) => state.progress);

  let results = {} as Course;
  if (state.courseDetail.course_of_class) {
    results = yield CourseService.updateClassProgress(state.updateParams);
  } else {
    results = yield CourseService.updateLessonProgress(state.updateParams);
  }
  const updateParams = convertDataToUpdateParams(results.lessons || []);
  yield put(
    progressAction.setUpdateParams({
      course_id: results.id,
      lessons: updateParams,
    }),
  );
  yield put(progressAction.setCourse(results));
  // yield debounce(function* () {
  //   try {
  //     //console.log('ab');
  //     const results: Course = yield CourseService.updateClassProgress(state.updateParams);
  //     const updateParams = convertDataToUpdateParams(results.lessons || []);
  //     yield put(progressAction.setUpdateParams(updateParams));
  //   } catch (error) {
  //     //console.log('error', error);
  //   }
  // }, 500)();
}

function* progressSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(progressAction.updateProgress.type, watchUpdateProgress);
}

export default progressSaga;
