import React from 'react';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<Rating value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
