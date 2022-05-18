import stockAPI from '../api/stockAPI';

// actions
const FETCH_STOCK = 'FETCH_STOCK';

export const fetchStock = async (dispatch) => {
  const stocks = await stockAPI.getStock();

  if (stocks) {
    dispatch({
      type: FETCH_STOCK,
      stocks,
    });
  }
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_STOCK:
      return action.stocks;

    default:
      return state;
  }
}
