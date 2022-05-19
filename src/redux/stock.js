import stockAPI from '../api/stockAPI';

const FETCH_STOCK = 'FETCH_STOCK';

export function fetchStock() {
  return (dispatch) => stockAPI.getStock().then((data) => {
    if (data) {
      dispatch({
        type: FETCH_STOCK,
        stocks: data,
      });
    }
  });
}

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_STOCK:
      return action.stocks;

    default:
      return state;
  }
}
