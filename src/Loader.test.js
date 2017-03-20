import React from 'react';
import ReactDOM from 'react-dom';
import Loader from './Loader';

it('renders nothing without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader isVisible={false}/>, div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Loader isVisible/>, div);
});
