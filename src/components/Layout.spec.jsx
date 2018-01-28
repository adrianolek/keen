import React from 'react';
import Layout from './Layout';
import Navigation from './Navigation';
import { shallow } from 'enzyme';

describe('Layout', () => {
  it('renders children and navigation', () => {
    const layout = shallow(<Layout>Hello</Layout>);
    expect(layout.text()).toContain('Hello');
    expect(layout.find(Navigation).exists()).toBe(true);
  });
});
