import { all } from 'redux-saga/effects';
import insertsSagas from './inserts';

export default function* rootSaga() {
  yield all([insertsSagas()]);
}
