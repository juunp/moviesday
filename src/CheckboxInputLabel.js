import React, { Component } from 'react';

class checkboxInputLabel extends Component{
    render(){
      return (
          <label htmlFor={this.props.id}>
            <input name={this.props.id} type="checkbox" value={this.props.value} onChange={() => this.props.handleChange(this.props.id)}/>
            {this.props.label}
          </label>
      )
    }
}

export default checkboxInputLabel;
