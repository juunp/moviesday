import React from 'react';
import { shallow } from 'enzyme';
import Planner from './Planner';

describe('Planner', () => {
  it('renders without crashing', () => {
    shallow(<Planner value={{order: [], start: "", end: ""}} />);
  });

});
