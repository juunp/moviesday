import React, { Component } from 'react';

class ListItems extends Component{

  const items = this.props.items;
  const list = items.map((item, idx) =>
    <li key={idx.toString())}>
      <input name="selectedItems" type="checkbox">{item}</input>
    </li>
  );

  render(){
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export Default ListItems;
