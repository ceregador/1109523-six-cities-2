import React, {useState} from 'react';
import City from '../city/city.jsx';
import propTypes from './prop-types';

const CitiesList = ({cities, onChangeCity}) => {
  const [activeCityName, updateActiveCityName] = useState(cities[0].name);

  const onClick = (cityName) => {
    updateActiveCityName(cityName);
    onChangeCity(cityName);
  };

  return <section className="locations container">
    <ul className="locations__list tabs__list">
      {cities.map((city) =>
        <City
          city={city}
          isActive={city.name === activeCityName}
          key={city.name}
          onClick={onClick}
        />)}
    </ul>
  </section>;
};

CitiesList.propTypes = propTypes;

export default CitiesList;
