import React from 'react';
import renderer from 'react-test-renderer';
import App from '../components/App.js'

it('renders correctly the Calculator Page', () => {
    const tree = renderer.create(<App />).toJSON();
  
    expect(tree).toMatchSnapshot();
});