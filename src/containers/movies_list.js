import React, {PropTypes, Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { deleteMovie } from '../actions/movie-actions';
import MovieItem from '../components/movie_item';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const list = this.props.movies.map(movie =>
      <MovieItem movie={movie} key={movie.imdbID} />
      // <li key={ movie.imdbID }>
      //   <a href={`http://www.imdb.com/title/${ movie.imdbID }`}>{ movie.Title }</a>
      //   &nbsp;({ movie.Year }) · { movie.Director } · { movie.Genre } · Rating: {`${ movie.imdbRating} (${ movie.imdbVotes })`}&nbsp;
      //   <span>
      //     <button onClick={ () => this.props.deleteMovie(movie) }>delete</button>
      //   </span>
      // </li>
    );

    return (
      <ul>
        { list }
      </ul>
    )
  }
}

MoviesList.propTypes = {
  movies: PropTypes.array,
  deleteMovie: PropTypes.func
};

function mapStateToProps({movies}, props) {
  return {
    movies
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteMovie: bindActionCreators(deleteMovie, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
