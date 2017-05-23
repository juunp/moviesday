import React from 'react';
import { shallow } from 'enzyme';
import App from './App';


describe('App', () => {

  it('renders without crashing', () => {
    shallow(<App />);
  });

  it('App renders nested components', () => {
    let app = shallow(<App />);
    expect(app.find('Loader').length).toEqual(1);
    expect(app.find('DateInput').length).toEqual(1);
    expect(app.find('ListMovies').length).toEqual(1);
    expect(app.find('button').length).toEqual(1);
    expect(app.find('Planner').length).toEqual(1);
  });

  it('handleChange update date', function(){
    let app = shallow(<App />);
    let dateInput = app.find('DateInput').first();
    dateInput.props().handleChange({target: {value: "2016-05-23"}});
    app.update();
    expect(app.state().date).toEqual("2016-05-23");
  })
});
