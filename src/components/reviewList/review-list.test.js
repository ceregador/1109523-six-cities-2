import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
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

  expect(connect).toHaveBeenCalledWith(expect.any(Function), null);
  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({currentReviews: []});
  expect(mappedProps).toHaveProperty(`reviews`);

  expect(connectAdvanced).toHaveBeenCalledWith(ReviewList);

  expect(Review).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
