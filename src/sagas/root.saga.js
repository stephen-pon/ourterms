import { all, takeEvery } from 'redux-saga/effects';
import {
  userConstants
} from '../constants';
import { testSaga } from './test/test.saga';

export function* rootSaga() {
  yield all([
    takeEvery(userConstants.LOGIN, testSaga),
  ]);
}