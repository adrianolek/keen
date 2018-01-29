import React from 'react';
import {shallow} from 'enzyme';
import Dashboard from "./Dashboard";

jest.mock('keen-js', () => {
  return {
    Dataviz: jest.fn(() => ({
      el: jest.fn().mockReturnThis(),
      attributes: jest.fn().mockReturnThis(),
      prepare: jest.fn().mockReturnThis(),
      data: jest.fn().mockReturnThis(),
      render: jest.fn().mockReturnThis()
    }))
  };
});

describe('Dashboard', () => {
  afterAll(() => {
    jest.unmock('keen-js');
  });

  it('queries Keen, prepares chart and renders data', () => {
    const query = jest.fn();

    const wrapper = shallow(<Dashboard keenQuery={query}/>);

    expect(query.mock.calls).toHaveLength(1);

    expect(wrapper.instance().chart.prepare.mock.calls).toHaveLength(1);

    wrapper.setProps({bar: 'baz'});

    expect(wrapper.instance().chart.render.mock.calls).toHaveLength(0);

    wrapper.setProps({data: 'foo'});

    expect(wrapper.instance().chart.data.mock.calls[0][0]).toBe('foo');
    expect(wrapper.instance().chart.render.mock.calls).toHaveLength(1);
  });
});
