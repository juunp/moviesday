import React, { Component } from 'react';

class checkboxInputLabel extends Component{
    constructor(props){
      super(props);
      this.state = {value: ''};

      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      if(typeof this.props.value === 'string' && this.props.value !== ''){
        this.setState({value: this.props.value});
      }
    }

    handleChange(event){
      if (event !== undefined){
        this.setState({value: event.target.value});
      }
    }

    render(){
      return (
        <label htmlFor={this.props.id}>
          {this.props.children}
          <input name={this.props.id} type="checkbox" value={this.state.value} onChange={this.handleChange()}/>
        </label>
      )
    }
}

export default checkboxInputLabel;
