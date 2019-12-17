import React from 'react';
import PropTypes from './prop-types';

const RatingStar = ({title, rate, onClick, isToggled}) => {

  const id = `${rate}-star`;
  const fill = isToggled ? `#ff9000` : `#c7c7c7`;

  return <label htmlFor={id} className="reviews__rating-label form__rating-label" title={title} onClick={onClick}>
    <input className="form__rating-input visually-hidden" name="rating" value={rate} id={id} type="radio"/>
    <svg className="form__star-image" width="37" height="33" style={{fill}}>
      <use xlinkHref="#icon-star"></use>
    </svg>
  </label>;
};

RatingStar.propTypes = PropTypes;

export default RatingStar;
