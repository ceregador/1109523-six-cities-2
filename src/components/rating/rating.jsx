import React from 'react';
import propTypes from './prop-types';

const Rating = ({isDetail, value}) => {
  const width = Math.round(value) * 20;

  const mainClassName = isDetail ? `property__rating rating` : `place-card__rating rating`;
  const starsClassName = isDetail ? `property__stars rating__stars` : `place-card__stars rating__stars`;

  return <div className={mainClassName}>
    <div className={starsClassName}>
      <span style={{width: `${width}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
    {isDetail ? <span className="property__rating-value rating__value">{value}</span> : ``}
  </div>;
};

Rating.propTypes = propTypes;

export default Rating;
