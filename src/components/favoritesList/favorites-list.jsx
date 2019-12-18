import React from 'react';
import PropTypes from './prop-types';
import FavoritesListItem from '../favoritesListItem/favorites-list-item.jsx';

const FavoritesList = ({offers}) => {

  const offersByCity = offers.reduce((acc, offer) => {
    const cityName = offer.city.name;
    const {
      [cityName]: cityOffers = []
    } = acc;

    cityOffers.push(offer);

    acc[cityName] = cityOffers;
    return acc;
  }, {});

  const renderItems = () => {
    return (
      Object.keys(offersByCity).map((key) => {
        const cityOffers = offersByCity[key];
        return <FavoritesListItem key={key} city={key} offers={cityOffers} />;
      })
    );
  };

  return <main className="page__main page__main--favorites">
    <div className="page__favorites-container container">
      <section className="favorites">
        <h1 className="favorites__title">Saved listing</h1>
        <ul className="favorites__list">
          {renderItems()}
        </ul>
      </section>
    </div>
  </main>;
};

FavoritesList.propTypes = PropTypes;

export default FavoritesList;
