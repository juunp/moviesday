import React from 'react';
import { shallow } from 'enzyme';
import CheckboxInputLabel from './CheckboxInputLabel';

describe('CheckboxInputLabel', () => {

  it('renders without crashing', () => {
    shallow(<CheckboxInputLabel />);
  });

  it('contains label & input', () => {
    let cb = shallow(<CheckboxInputLabel />);
    expect(cb.find('label').length).toEqual(1);
    expect(cb.find('input').length).toEqual(1);
  })
});
