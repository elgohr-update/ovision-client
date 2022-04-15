import { fork, take, cancel } from 'redux-saga/effects';
import { CANCEL_WEBSOCKET, INIT_WEBSOCKET } from '../actionTypes';
import { webSocketSaga } from './webSocket.saga';

// eslint-disable-next-line
export default function* () {
  // grouping all sagas
  // yield all([fork(webSocketSaga)]);

  const connectAction = yield take(INIT_WEBSOCKET);
  while (connectAction) {
    const wsTask = yield fork(webSocketSaga, connectAction);
    yield take(CANCEL_WEBSOCKET);
    yield cancel(wsTask);
  }
}
