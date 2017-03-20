import React, { Component } from 'react';

class ListItems extends Component{
  constructor(props){
    super(props);
    const items = this.props.items;
    const list = items.map((item, idx) => {
      <li key={idx.toString()}>
      <input name="selectedItems" type="checkbox">{item}</input>
      </li>
    });
  }

  render(){
    return (
      <ul>
        {this.list}
      </ul>
    );
  }
}

export default ListItems;
