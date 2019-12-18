import React from 'react';
import City from '../city/city.jsx';
import PropTypes from './prop-types';
import withActiveItem from '../../hocs/withActiveItem/with-active-item.jsx';

const CitiesList = ({cities, onActiveItemChange, activeItem}) => {

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <City
          city={city}
          key={city.name}
          onClick={onActiveItemChange}
          isActive={activeItem === city.name}
        />)}
    </ul>
  </section>;
};

CitiesList.propTypes = PropTypes;

export default withActiveItem(CitiesList);
