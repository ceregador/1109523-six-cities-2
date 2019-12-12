import React from 'react';
import City from '../city/city.jsx';
import propTypes from './prop-types';

const CitiesList = ({cities, onItemClick, activeItem}) => {

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <City
          city={city}
          key={city.name}
          onClick={onItemClick}
          isActive={activeItem === city.name}
        />)}
    </ul>
  </section>;
};

CitiesList.propTypes = propTypes;

export default CitiesList;
