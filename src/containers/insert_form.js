import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addMovie } from '../actions/movie-actions';
import axios from 'axios';
import _ from 'lodash';

class InsertForm extends Component {
  constructor(props) {
    super(props);

      this.state = {
        title:      '',
        moviesList: []
      }
  }

  insertMovie = (e) => {
    e.preventDefault();
    const title = e.target.movie.value;

    if (title.length > 0) {
      this.props.addMovie(title);
      this.setState({title: '', moviesList: []});
    }
  }

  onChangeTitle = (e) => {
    this.setState({title: e.target.value});
  }

  getHints = _.debounce((e) => {
    const self = this;

    if (this.state.title.length > 0) {
      const api_url = `http://www.omdbapi.com/?t=*${this.state.title}*&y=&plot=full&r=json`;

      axios.get(api_url)
      .then((response) => {
        if (response.data.Response === 'False') {
          self.setState({moviesList: []});
        } else {
          console.log(response.data);
          self.setState({moviesList: [response.data]})
        }
      })
      .catch(
        (error) => {
          console.log(error);
        }
      )
    }
  }, 500)

  render() {
    const list = this.state.moviesList.map(mv =>
      <option key={mv.imdbID} value={mv.Title}>{mv.Title}</option>
    );

    return (
      <div>
        <form onSubmit={ this.insertMovie }>
          <input
            type="text"
            name="movie"
            placeholder="movie title"
            value={ this.state.title }
            onChange={ this.onChangeTitle }
            list="movies"
            onKeyUp={ this.getHints }
          />
          <datalist id="movies">
            { list }
          </datalist>
          <input type="submit" value="add"/>
        </form>
      </div>
    )
  }
}

InsertForm.propTypes = {
  addMovie: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return {
    addMovie: bindActionCreators(addMovie, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(InsertForm);
