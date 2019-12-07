import React from 'react';
import propTypes from './prop-types';

const City = ({city, isActive, onClick}) => {
  const className = `locations__item-link tabs__item`;
  const onCityClick = () => onClick(city.name);

  return <li className="locations__item" onClick={onCityClick}>
    <a className={isActive ? `${className} tabs__item--active` : className} href="#">
      <span>{city.name}</span>
    </a>
  </li>;
};

City.propTypes = propTypes;

export default City;
