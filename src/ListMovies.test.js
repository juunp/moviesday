import React from 'react';
import { shallow } from 'enzyme';
import ListMovies from './ListMovies';

describe('ListMovies', () => {
  it('renders without crashing', () => {
    shallow(<ListMovies movies={[]} />);
  });

  it('renders contained elements', () => {
    let emptyList = shallow(<ListMovies movies={[]} />);
    expect(emptyList.find('ul').length).toEqual(1);
    expect(emptyList.find('li')).not.toBePresent();
    let mov = {
      id: 789,
      selected: false,
      poster: 'img',
      title: 'King',
      handleChange: () => {}
    };
    let notEmptyList = shallow(<ListMovies movies={[mov]} />);
    expect(notEmptyList.find('li').length).toEqual(1);
  });
});
