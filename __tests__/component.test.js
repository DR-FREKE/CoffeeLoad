import React from 'react';
import AppLayout from '../src/components/AppLayout';
import renderer from 'react-test-renderer';

describe('every component should be rendered properly', () => {
  it('should render the AppLayout component', () => {
    const tree = renderer.create(<AppLayout />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
