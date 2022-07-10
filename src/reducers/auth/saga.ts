import { ForkEffect, put, select, takeLatest } from 'redux-saga/effects';
import { ActionBase } from '..';
import { RootState } from '../model';
import SocketAction from '../socket/action';
import AuthAction from './action';

function* watchAuthenticateFlow(action: ActionBase) {
  yield put({
    type: AuthAction.UPDATE_MY_PROFILE,
    payload: action.payload,
  });
  const isConnectedSocket = yield select((state: RootState) => state.socket.connected);
  // if (!isConnectedSocket) {
  //   yield put({
  //     type: SocketAction.CONNECT_SOCKET,
  //   });
  // }
}

function* authSaga(): Generator<ForkEffect<never>, void, unknown> {
  yield takeLatest(AuthAction.RUN_AUTHENTICATED_FLOW, watchAuthenticateFlow);
}

export default authSaga;
