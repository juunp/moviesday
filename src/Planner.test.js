import React from 'react';
import { shallow, render } from 'enzyme';
import Planner from './Planner';

describe('Planner', () => {
  it('renders without crashing', () => {
    shallow(<Planner value={{order: [], start: "", end: ""}} />);
  });
  it('Planner render contained elements ', () => {
    let movies = [
      {
        id: 789,
        title: 'Les Figures de l\'Ombre',
        selectedTt: {
          movieStart: "2017-03-21T16:10:00.000Z",
          movieEnd: "2017-03-21T17:50:00.000Z"
        }
      },
      {
        id: 456,
        title: 'King Kong',
        selectedTt: {
          movieStart: "2017-03-21T20:00:00.000Z",
          movieEnd: "2017-03-21T21:50:00.000Z"
        }
      }
    ];
    let planner = shallow(<Planner value={{order: movies, start:"2017-03-21T16:10:00.000Z", end: "2017-03-21T21:50:00.000Z"}} />);
    expect(planner.find('ul')).toBePresent();
    expect(planner.find('li').length).toEqual(2);
  });

  it('render nothing when value.order is empty', () => {
    var emptyPlanner = shallow(<Planner value={{order:[], start:"", end:""}} />);
    expect(emptyPlanner.nodes).toEqual([null]);
  });
});
