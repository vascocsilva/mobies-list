import rootReducer from '../reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxPromise from 'redux-promise';

const createStoreWithMiddleware = compose(
  applyMiddleware(ReduxPromise),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)(createStore);

export default (initialState) => {
  return createStoreWithMiddleware(rootReducer, initialState);
};
