import React from 'react';
import Application from './Application';
import { mount } from 'enzyme';

describe('Application', () => {
  it('tracks page views', async function() {
    const keen = {
      initAutoTracking: jest.fn(),
      recordEvent: jest.fn()
    };
    const wrapper = mount(Application.getComponent({ keen }));
    expect(keen.initAutoTracking.mock.calls).toHaveLength(1);
    expect(keen.recordEvent.mock.calls).toHaveLength(0);

    wrapper.find('Link').last().simulate('click', { button: 0 });

    expect(keen.recordEvent.mock.calls).toHaveLength(1);
  });
});
