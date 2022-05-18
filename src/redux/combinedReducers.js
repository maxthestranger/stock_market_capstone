import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import stockReducer from './stock';
import companyReducer from './company';

const rootReducer = combineReducers({
  stocks: stockReducer,
  company: companyReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export default store;
