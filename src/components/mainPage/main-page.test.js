import React from 'react';
import MainPage from './main-page.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<MainPage rentObjects = {[]}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
