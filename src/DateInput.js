import React, { Component } from 'react';

class dateInput extends Component{
  render(){
    return (
      <input type="date" value={this.props.value} onChange={this.props.handleChange}/>
    );
  }
}

export default dateInput;
