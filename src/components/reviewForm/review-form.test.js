import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import ReviewForm from './review-form.jsx';
import RatingStar from '../ratingStar/rating-star.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../ratingStar/rating-star.jsx`);
jest.mock(`react-redux`);

it(`renders correctly`, () => {
  const tree = Renderer
      .create(
          <ReviewForm
            addReview={() => null}
            activeOfferId={1}
          />)
      .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`activeOfferId`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`addReview`);

  expect(connectAdvanced).toHaveBeenCalledWith(ReviewForm);

  expect(RatingStar).toHaveBeenCalledTimes(5);
  expect(tree).toMatchSnapshot();
});
