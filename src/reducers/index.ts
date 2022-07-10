import { combineReducers } from 'redux';
import { fork, ForkEffect } from 'redux-saga/effects';
import { RootState } from './model';

/*** Importing reducers ***/
import app from 'src/reducers/app/reducer';
import auth from 'src/reducers/auth/reducer';
import socket from 'src/reducers/socket/reducer';
import user from 'src/reducers/user/reducer';
import home from 'src/reducers/home/reducer';
import mailing from 'src/reducers/mailing/reducer';
import campaignNft from 'src/reducers/campaign-nft/reducer';
/*** Importing reducers ***/

/*** Importing sagas ***/
import socketSaga from 'src/reducers/socket/saga';
import authSaga from 'src/reducers/auth/saga';
import homeSaga from 'src/reducers/home/saga';
import userSaga from 'src/reducers/user/saga';
import mailingSaga from 'src/reducers/mailing/saga';
import campaignNftSaga from './campaign-nft/saga';
/*** Importing sagas ***/

export interface ActionBase {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
}

const rootReducer = combineReducers<RootState, ActionBase>({
  app,
  auth,
  socket,
  user,
  home,
  mailing,
  campaignNft,
});

function* rootSaga(): Generator<ForkEffect<void>, void, unknown> {
  yield fork(authSaga);
  yield fork(homeSaga);
  yield fork(socketSaga);
  yield fork(userSaga);
  yield fork(mailingSaga);
  yield fork(campaignNftSaga);
}

export { rootReducer, rootSaga };
