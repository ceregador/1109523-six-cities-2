import React from 'react';
import Review from '../review/review.jsx';
import ReviewList from './review-list.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../review/review.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
      .create(
          <ReviewList
            reviews={[{
              rating: 1,
              user: {
                name: ``,
                avatarUrl: ``
              },
              comment: ``,
              reviewData: ``
            }]}
          />)
      .toJSON();

  expect(Review).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
