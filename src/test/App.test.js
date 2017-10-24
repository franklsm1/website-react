import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';

describe('App Component Tests', () => {
  it('App component renders', () => {
    let component = shallow(<App/>);
    expect(component.find('.App')).toHaveLength(1);
  });
});
