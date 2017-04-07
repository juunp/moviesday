import React, { Component } from 'react';
import CheckboxInputLabel from './CheckboxInputLabel';
import './ListMovies.css';

class ListMovies extends Component{

  render(){
    this.list = this.props.movies.map((item) =>
    <li key={item.id.toString()}>
      <img src={item.poster} alt={item.title}/>
      <CheckboxInputLabel id={item.id.toString()} value={item.selected} label={item.title} handleChange={this.props.handleChange}/>
    </li>
    );
    return (
      <ul>
        {this.list}
      </ul>
    );
  }
}
export default ListMovies;
