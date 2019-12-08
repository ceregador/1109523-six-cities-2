import React from 'react';
import propTypes from './prop-types';

const Rating = ({value}) => {
  const width = Math.round(value) * 20;

  return <div className="place-card__rating rating">
    <div className="place-card__stars rating__stars">
      <span style={{width: `${width}%`}}></span>
      <span className="visually-hidden">Rating</span>
    </div>
  </div>;
};

Rating.propTypes = propTypes;

export default Rating;
