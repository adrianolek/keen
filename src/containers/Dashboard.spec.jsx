import React from 'react';
import {shallow} from 'enzyme';
import ConnectedDashboard from './Dashboard';
import Dashboard from '../components/Dashboard';
import configureStore from 'redux-mock-store';

describe('Dashboard container', () => {
  it('renders Dashboard component', () => {
    const store = configureStore()();
    const wrapper = shallow(<ConnectedDashboard store={store}/>);

    expect(wrapper.find(Dashboard).exists()).toBe(true);
  });
});
