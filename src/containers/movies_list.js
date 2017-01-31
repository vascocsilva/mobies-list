import React, {PropTypes, Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteMovie} from '../actions/movie-actions';

class MoviesList extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    const list = this.props.movies.map(movie =>
      <li key={ movie.imdbID }>
        { movie.Title } ({ movie.Year }) · { movie.Director } · { movie.Genre }&nbsp;
        <span>
          <button onClick={ () => this.props.deleteMovie(movie) }>delete</button>
        </span>
      </li>
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
