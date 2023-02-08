import { configureStore, ThunkAction, Action, compose } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, AnyAction, CombinedState, Store } from 'redux';
import { rootReducer, rootSaga } from '../reducers';
import { RootState } from '../reducers/model';
import reduxReset from 'redux-reset';
import AppAction from '../reducers/actions';

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
