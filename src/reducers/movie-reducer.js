import * as types from '../actions/action-types';

export default (state = [], action) => {
  switch (action.type) {
    case types.ADD_MOVIE:
      console.log(action.payload.data);
      if (action.payload.data.Response === "False") {
        return state;
      } else {
        return [...state, Object.assign({}, action.payload.data)];
      }
    case types.DELETE_MOVIE:
      console.log(action.payload);
      const movieId = action.payload.imdbID;
      return state.filter((movie) => movie.imdbID !== movieId);
    // case types.GET_HINT:
    //   const data = action.payload.data;
    // 
    //   if (data.Response === "False") {
    //     return state;
    //   } else {
    //     return [...state, Object.assign({}, action.payload.data)];
    //   }
    default:
      return state;
  }
};
