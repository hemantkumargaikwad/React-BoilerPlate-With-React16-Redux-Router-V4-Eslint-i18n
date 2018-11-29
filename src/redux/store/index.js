import { createStore, applyMiddleware, compose } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'react-router-redux';
import reducers from '../reducers';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();
const isProduction = process.env.NODE_ENV === 'production'; // eslint-disable-line no-undef
const middleWares = [thunk, routerMiddleware(history)];

if (!isProduction) {
  middleWares.push(logger);
}

const Store = createStore(reducers, compose(applyMiddleware(...middleWares)));

export default Store;
