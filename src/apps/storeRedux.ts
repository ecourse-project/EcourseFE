// import {
// 	createStore,
// 	applyMiddleware,
// 	AnyAction,
// 	CombinedState,
// 	Store,
// 	compose,
// } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { rootReducer } from 'src/reducers';
// import reduxReset from 'redux-reset';
// import AppAction from 'src/reducers/app/action';
// import { RootState } from 'src/reducers/model';

// const sagaMiddleware = createSagaMiddleware();
// const middleWares = [sagaMiddleware];

// type StoreFunc = Store<CombinedState<RootState>, AnyAction> & {
// 	dispatch: unknown;
// };

// const enhanceCreateStore = compose(reduxReset(AppAction.RESET_ROOT_STATE))(
// 	createStore
// );

// const store = (): StoreFunc => {
// 	const middleware = applyMiddleware(...middleWares);
// 	return enhanceCreateStore(rootReducer, middleware);
// };

// export { sagaMiddleware, store };

import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';
import rootSaga from '../features/pokemons/rootSaga';
import documentReducer from 'src/reducers/document/documentSlice';
const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
	reducer: {
		// counter: counterReducer,
		// pokemon: pokemonReducer,
		document: documentReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			thunk: true,
			serializableCheck: false,
		}).concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
	ReturnType,
	RootState,
	unknown,
	Action<string>
>;
