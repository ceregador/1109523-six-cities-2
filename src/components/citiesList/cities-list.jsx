import React from 'react';
import City from '../city/city.jsx';
import propTypes from './prop-types';
import withActiveItem from '../../hocs/withActiveItem/with-active-item.jsx';

const CitiesList = ({cities, onItemChange, activeItem}) => {

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <City
          city={city}
          key={city.name}
          onClick={onItemChange}
          isActive={activeItem === city.name}
        />)}
    </ul>
  </section>;
};

CitiesList.propTypes = propTypes;

export default withActiveItem(CitiesList);
