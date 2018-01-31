import React from 'react';
import {mount} from 'enzyme';
import ConnectedChart from './Chart';
import Chart from '../components/Chart';
import configureStore from 'redux-mock-store';;
import thunk from 'redux-thunk';

describe('Chart container', () => {
  it('renders Chart component and loads data from Keen', () => {
    const keen = {
      query: jest.fn(() => Promise.resolve({}))
    };

    const store = configureStore([thunk.withExtraArgument({keen})])();
    const wrapper = mount(<ConnectedChart store={store}/>);

    expect(wrapper.find(Chart).exists()).toBe(true);
    expect(keen.query.mock.calls).toHaveLength(1);
  });
});
