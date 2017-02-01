import React, {PropTypes} from 'react';

const MovieItem = ({movie}) => {
  return (
    <li>
      <a href={`http://www.imdb.com/title/${ movie.imdbID }`}>{ movie.Title }</a>
      &nbsp;({ movie.Year }) · { movie.Director } · { movie.Genre } · Rating: {`${ movie.imdbRating} (${ movie.imdbVotes })`}&nbsp;
      <span>
        <button onClick={ () => this.deleteMovie(movie) }>delete</button>
      </span>
    </li>
  );
};

MovieItem.propTypes = {
  movie: PropTypes.object,
};

export default MovieItem;
