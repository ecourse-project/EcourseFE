import { combineReducers } from 'redux';
import { fork, ForkEffect } from 'redux-saga/effects';

import appSaga from './app/appSage';
import app from './app/appSlice';
import courseSaga from './course/courseSage';
import course from './course/courseSlice';
/*** Importing reducers ***/
/*** Importing sagas ***/
import documentSaga from './document/documentSage';
/*** Importing reducers ***/
import document from './document/documentSlice';
import { RootState } from './model';
import progress from './progress/progressSlice';

/*** Importing sagas ***/

export interface ActionBase {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const rootReducer = combineReducers<RootState, ActionBase>({
  app,
  document,
  course,
  progress,
});

function* rootSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(documentSaga);
  yield fork(courseSaga);
  yield fork(appSaga);
}

export { rootReducer, rootSaga };
