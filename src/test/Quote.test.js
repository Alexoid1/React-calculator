import React from 'react';
import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('renders correctly the Quote Page', () => {
  const tree = renderer.create(<Quote />).toJSON();

  expect(tree).toMatchSnapshot();
});
