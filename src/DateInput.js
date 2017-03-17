import React, { Component } from 'react';

class dateInput extends Component{
  constructor(props){
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event){
    this.setState({value: event.target.value});
  }

  render(){
    return (
      <input type="date" value={this.state.value} onChange={this.handleChange}/>
    );
  }
}

export default dateInput;
