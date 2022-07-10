import { call, put, take, takeEvery } from 'redux-saga/effects';
import SocketAction from './action';
import connectSocket from './helper';

function* watchSocketSaga() {
  const socketChannel = yield call(connectSocket);
  while (true) {
    const eventAction = yield take(socketChannel);
    yield put(eventAction);
  }
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function* socketSaga(): Generator<any, void, unknown> {
  yield takeEvery(SocketAction.CONNECT_SOCKET, watchSocketSaga);
}

export default socketSaga;
