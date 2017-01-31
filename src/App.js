import React, { Component } from 'react';
import './App.css';
import InsertForm from './containers/insert_form';
import MoviesList from './containers/movies_list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>MobieList</h1>
        <InsertForm />
        <MoviesList />
      </div>
    );
  }
}

export default App;
