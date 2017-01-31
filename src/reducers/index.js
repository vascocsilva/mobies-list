import movies from './movie-reducer.js';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
  movies
});

export default rootReducer;
