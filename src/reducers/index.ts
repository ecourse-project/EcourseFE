import { combineReducers } from 'redux';
import { fork, ForkEffect } from 'redux-saga/effects';

/*** Importing reducers ***/
import document from './document/documentSlice';
/*** Importing reducers ***/

/*** Importing sagas ***/

import documentSaga from './document/documentSage';
import { RootState } from './model';
/*** Importing sagas ***/

export interface ActionBase {
	type: string;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	payload?: any;
}

const rootReducer = combineReducers<RootState, ActionBase>({
	document,
});

function* rootSaga(): Generator<ForkEffect<void>, void, unknown> {
	yield fork(documentSaga);
}

export { rootReducer, rootSaga };
