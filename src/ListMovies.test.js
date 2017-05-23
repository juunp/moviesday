import React from 'react';
import { shallow } from 'enzyme';
import ListMovies from './ListMovies';

describe('ListMovies', () => {
  it('renders without crashing', () => {
    shallow(<ListMovies movies={[]} />);
  });
});
