import React from 'react';
import Page from './Page';
import renderer from 'react-test-renderer';

describe('Page', () => {
  it('renders with title', () => {
    const page = renderer.create(<Page title="Hello"/>).toJSON();
    expect(page).toMatchSnapshot();
  });
});
