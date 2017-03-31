import React, { Component } from 'react';
import Loader from './Loader'
import DateInput from './DateInput';
import ListMovies from './ListMovies';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>
        <Loader isVisible={false}/>
        <DateInput value="2017-03-21"/>
        <ListMovies date="2017-03-21"/>
      </div>
    );
  }
}

export default App;
