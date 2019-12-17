import React from 'react';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';
import RATING_TYPE from '../../constants/rating-type';

it(`renders correctly with RATING_TYPE.REVIEW`, () => {
  const tree = Renderer
    .create(<Rating type={RATING_TYPE.REVIEW} value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with RATING_TYPE.PREVIEW`, () => {
  const tree = Renderer
    .create(<Rating type={RATING_TYPE.PREVIEW} value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});

it(`renders correctly with RATING_TYPE.DETAILS`, () => {
  const tree = Renderer
    .create(<Rating type={RATING_TYPE.DETAILS} value={2.5}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
