import { combineReducers } from 'redux';
import inserts from './inserts';
import notice from './notice';

export default combineReducers({
  notice,
  inserts,
});
