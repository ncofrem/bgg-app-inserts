import { takeEvery, put } from 'redux-saga/effects';
import {
  INSERTS_INDEX_REQUEST,
  INSERTS_INDEX_SUCCESS,
  INSERTS_INDEX_FAILURE,
} from '../actions/inserts';
import { SET_NOTICE } from '../actions/notice';
import API from '../services/api';
import { runDefaultSaga } from './default';

const insertsIndexRequest = () => API.get('/inserts');
function* insertsIndexsSuccessCallback(result, response) {
  if (result.success) {
    yield put({
      type: INSERTS_INDEX_SUCCESS,
      result,
      response,
    });
  } else {
    throw new Error(response.errors.join('\n'));
  }
}
function* insertsIndexsFailureCallback(response) {
  yield put({ type: INSERTS_INDEX_FAILURE });
  yield put({
    type: SET_NOTICE,
    title: 'Error',
    message: API.genericErrorMessage(response.status),
    kind: 'error',
  });
}
function* insertsIndex() {
  yield runDefaultSaga(
    { request: insertsIndexRequest },
    insertsIndexsSuccessCallback,
    insertsIndexsFailureCallback,
  );
}

// DEFINE insertsSagas
export default function* insertsSagas() {
  yield takeEvery(INSERTS_INDEX_REQUEST, insertsIndex);
}
