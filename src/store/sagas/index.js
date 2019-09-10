import { takeEvery, all } from 'redux-saga/effects';
import * as types from '../types/home';
import { incrementWithDelaySaga } from './home';

export default function* rootSaga() {
  yield all([takeEvery(types.INCREMENT_WITH_DELAY, incrementWithDelaySaga)]);
}
