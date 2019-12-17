import React from 'react';
import {connect} from 'react-redux';
import Review from '../review/review.jsx';
import Selector from '../../selectors/selector';
import PropTypes from './prop-types';

const ReviewList = ({reviews}) => {
  if (!reviews) {
    return <p>Loading...</p>;
  }

  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews · <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((review, index) => <Review key={index} review={review}/>)}
    </ul>
  </section>;
};

ReviewList.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  reviews: Selector.getReviews(state)
});

export default connect(mapStateToProps, null)(ReviewList);
