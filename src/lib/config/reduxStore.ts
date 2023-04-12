import { createStore } from 'redux';
import reduxReset from 'redux-reset';
import createSagaMiddleware from 'redux-saga';

import { Action, compose, configureStore, ThunkAction } from '@reduxjs/toolkit';

import { rootReducer, rootSaga } from '../reducers';
import AppAction from '../reducers/actions';
import { RootState } from '../reducers/model';

const sagaMiddleware = createSagaMiddleware();
const enhanceCreateStore = compose(reduxReset(AppAction.RESET_ROOT_STATE))(createStore);

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: true,
      serializableCheck: false,
    }).concat(sagaMiddleware),
  enhancers: enhanceCreateStore(rootReducer),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
