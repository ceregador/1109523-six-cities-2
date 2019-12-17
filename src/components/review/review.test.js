import React from 'react';
import Review from './review.jsx';
import Rating from '../rating/rating.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../rating/rating.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
      .create(
          <Review
            review={{
              rating: 1,
              user: {
                name: ``,
                avatarUrl: ``
              },
              comment: ``,
              reviewData: ``}}
          />)
      .toJSON();

  expect(Rating).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
