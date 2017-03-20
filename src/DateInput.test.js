import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import DateInput from './DateInput';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DateInput />, div);
});
