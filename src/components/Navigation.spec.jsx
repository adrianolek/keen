import React from 'react';
import Navigation from './Navigation';
import { Link } from 'react-router-dom'
import { shallow } from 'enzyme';

describe('Navigation', () => {
  it('should display 3 links', () => {
    const navigation = shallow(<Navigation/>);
    expect(navigation.find(Link)).toHaveLength(3);
  });
});
