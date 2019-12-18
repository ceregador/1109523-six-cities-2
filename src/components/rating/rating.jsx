import React from 'react';
import PropTypes from './prop-types';
import RATING_TYPE from '../../constants/rating-type';

const Rating = ({type, value}) => {
  const width = Math.round(value) * 20;

  const getRatingClasses = () => {
    switch (type) {
      case RATING_TYPE.DETAILS:
        return {
          mainClassName: `property__rating rating`,
          starsClassName: `property__stars rating__stars`,
          isValueExist: true
        };
      case RATING_TYPE.PREVIEW:
        return {
          mainClassName: `place-card__rating rating`,
          starsClassName: `place-card__stars rating__stars`,
          isValueExist: false
        };
      case RATING_TYPE.REVIEW:
        return {
          mainClassName: `reviews__rating rating`,
          starsClassName: `reviews__stars rating__stars`,
          isValueExist: false
        };
    }

    throw new Error(`Unknown Rating type.`);
  };

  const ratingClasses = getRatingClasses();

  return <div className={ratingClasses.mainClassName}>
    <div className={ratingClasses.starsClassName}>
      <span style={{width: `${width}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    {ratingClasses.isValueExist ? <span className="property__rating-value rating__value">{value}</span> : ``}
  </div>;
};

Rating.propTypes = PropTypes;

export default Rating;
