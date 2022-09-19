import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { rootReducer, rootSaga } from 'src/reducers';
import { RootState } from 'src/reducers/model';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: true,
			serializableCheck: false,
		}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
