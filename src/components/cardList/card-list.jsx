import React from 'react';
import RentObjectCard from '../rentObjectCard/rent-object-card.jsx';
import PropTypes from './prop-types';

const CardList = ({containerClassName, itemClassName, imageWrapperClassName, offers, onActiveItemChange}) => {
  return <div className={containerClassName}>
    {
      offers.map((o) =><RentObjectCard
        key={o.id}
        id={o.id}
        name={o.name}
        type={o.type}
        image={o.image}
        price={o.price}
        rating={o.rating}
        isPremium={o.isPremium}
        isBookmarked={o.isBookmarked}
        onActiveOfferChanged={onActiveItemChange}
        itemClassName={itemClassName}
        imageWrapperClassName={imageWrapperClassName}/>)
    }
  </div>;
};

CardList.propTypes = PropTypes;

export default CardList;
