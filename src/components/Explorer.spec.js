import React from 'react';
import { mount } from 'enzyme';
import Explorer from './Explorer';

describe('Explorer', () => {
  it('initializes global Keen.Explorer component using existing configuration', () => {
    const keen = {
      config: 'foo'
    };

    const wrapper = mount(<Explorer keen={keen}/>);

    expect(wrapper.instance().explorer.client.mock.calls[0][0]).toBe('foo');
    expect(wrapper.instance().explorer.fetch.mock.calls).toHaveLength(1);
  })
});
