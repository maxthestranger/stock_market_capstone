import stockAPI from '../api/stockAPI';

// actions
const FETCH_INFO = 'FETCH_INFO';

export const fetchInfo = async ({ symbol }) => {
  const info = await stockAPI.getInfo(symbol);
  return async (dispatch) => {
    if (info) {
      dispatch({
        type: FETCH_INFO,
        info,
      });
    }
  };
};

export default function reducer(state = [], action) {
  switch (action.type) {
    case FETCH_INFO:
      return action.info;

    default:
      return state;
  }
}
