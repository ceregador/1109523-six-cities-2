import React from 'react';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly with isDetail=true`, () => {
  const tree = Renderer
    .create(<Rating isDetail={true} value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with isDetail=false`, () => {
  const tree = Renderer
    .create(<Rating isDetail={false} value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
