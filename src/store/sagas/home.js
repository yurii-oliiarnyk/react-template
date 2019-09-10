import { delay, put } from 'redux-saga/effects';
import * as actions from '../actions/home';

export function* incrementWithDelaySaga(action) {
  yield delay(1000);
  yield put(actions.increment());
}
