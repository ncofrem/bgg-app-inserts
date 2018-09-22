import {
  INSERTS_INDEX_REQUEST,
  INSERTS_INDEX_SUCCESS,
  INSERTS_INDEX_FAILURE,
} from '../actions/inserts';

const initialState = {
  inserts: [],
  ongoingRequest: {
    index: true,
  },
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INSERTS_INDEX_REQUEST:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, index: true },
      };
    case INSERTS_INDEX_SUCCESS:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, index: false },
        inserts: action.result,
      };
    case INSERTS_INDEX_FAILURE:
      return {
        ...state,
        ongoingRequest: { ...state.ongoingRequest, index: false },
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
