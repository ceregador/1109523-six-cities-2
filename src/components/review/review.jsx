import React from 'react';
import Rating from '../rating/rating.jsx';
import PropTypes from './prop-types';
import RATING_TYPE from '../../constants/rating-type';

const Review = ({review}) => {
  const {user, rating, comment, reviewData} = review;

  const date = new Date(reviewData);
  const dateTextValue = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
  const dateLocaleValue = date.toLocaleDateString(`en`, {month: `long`, year: `numeric`});

  return <li className="reviews__item">
    <div className="reviews__user user">
      <div className="reviews__avatar-wrapper user__avatar-wrapper">
        <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar"/>
      </div>
      <span className="reviews__user-name">
        {user.name}
      </span>
    </div>
    <div className="reviews__info">
      <Rating type={RATING_TYPE.REVIEW} value={rating}/>
      <p className="reviews__text">
        {comment}
      </p>
      <time className="reviews__time" dateTime={dateTextValue}>{dateLocaleValue}</time>
    </div>
  </li>;
};

Review.propTypes = PropTypes;

export default Review;
