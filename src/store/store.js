import { combineReducers, createStore, compose, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import createHistory from "history/createBrowserHistory";
import createSagaMiddleware from 'redux-saga'

import { rootSaga } from '../sagas';
import { userReducer } from './user.reducer';
import { leaseReducer } from './lease.reducer';

export const history = createHistory();
export const sagaMiddleware = createSagaMiddleware();

const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];
const enhancers = [];

if (process.env.NODE_ENV === "development") {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === "function") {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const appStore = combineReducers({
  router: connectRouter(history),
  // Individual reducers go here
  user: userReducer,
  lease: leaseReducer
});

const store = createStore(appStore, composedEnhancers);

sagaMiddleware.run(rootSaga);

export default store;
