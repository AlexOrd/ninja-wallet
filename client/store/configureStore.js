import { applyMiddleware, compose, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';

import createRootReducer from '../reducers';
import history from '../utils/history';

export { history };

const middlewares = [thunkMiddleware, logger, routerMiddleware(history)];
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  createRootReducer(history),
  {},
  composeEnhancer(applyMiddleware(...middlewares))
);

export default store;
