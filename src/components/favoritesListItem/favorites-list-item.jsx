import React from 'react';
import PropTypes from './prop-types';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';

const FavoritesListItem = ({city, offers}) => {
  return <li className="favorites__locations-items">
    <div className="favorites__locations locations locations--current">
      <div className="locations__item">
        <a className="locations__item-link" href="#">
          <span>{city}</span>
        </a>
      </div>
    </div>
    <div className="favorites__places">
      {offers.map((offer, index) =>
        <RentObjectCard
          id={offer.id}
          name={offer.name}
          isPremium={offer.isPremium}
          image={offer.image}
          type={offer.type}
          price={offer.price}
          rating={offer.rating}
          isBookmarked={offer.isBookmarked}
          key={index}
          itemClassName={`favorites__card place-card`}
          infoClassName={`favorites__card-info place-card__info`}
          imageWrapperClassName={`favorites__image-wrapper place-card__image-wrapper`}
          onActiveOfferChanged={() => null}/>)}
    </div>
  </li>;
};

FavoritesListItem.propTypes = PropTypes;

export default FavoritesListItem;
