import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ListItems from './ListItems';

it('renders without crashing', () => {
  const div = document.createElement('div');
  let arr = [1,2,3];
  ReactDOM.render(<ListItems items={arr} />, div);
});
