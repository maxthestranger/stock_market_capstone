import stockAPI from '../api/stockAPI';

// actions

const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_ERROR = 'FETCH_ERROR';

function fetchPostsRequest() {
  return {
    type: FETCH_REQUEST,
  };
}

function fetchPostsSuccess(stocks) {
  return {
    type: FETCH_SUCCESS,
    stocks,
  };
}

function fetchPostsError() {
  return {
    type: FETCH_ERROR,
  };
}

export function fetchInfo(symbol) {
  return (dispatch) => {
    dispatch(fetchPostsRequest());
    return stockAPI.getInfo(symbol).then((data) => {
      if (data) {
        dispatch(fetchPostsSuccess(data));
      } else {
        dispatch(fetchPostsError());
      }
    });
  };
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_REQUEST:
      return state;

    case FETCH_SUCCESS:
      return action.stocks[0];

    default:
      return state;
  }
}
