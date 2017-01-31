import * as types from './action-types';
import axios from 'axios';


export const addMovie = (movie) => {
  const api_url = `http://www.omdbapi.com/?t=*${movie}*&y=&plot=full&r=json`;
  const request = axios.get(api_url);

  return {
    type:    types.ADD_MOVIE,
    payload: request,
  };
}

export const deleteMovie = (movie) => {
  return {
    type:    types.DELETE_MOVIE,
    payload: movie,
  };
}
