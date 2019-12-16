import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Rating from '../rating/rating.jsx';
import Operation from '../../operation';
import propTypes from './prop-types';

const RentObjectCard = ({
  id,
  name,
  isPremium,
  image,
  type,
  price,
  rating,
  isBookmarked,
  onTitleClick,
  onActiveOfferChanged,
  addToFavorites}) => {

  const onAddToFavoritesClickHandler = (evt) => {
    evt.preventDefault();

    addToFavorites(id, !isBookmarked);
  };

  return <article className="cities__place-card place-card" id={id}
    onMouseEnter={() => onActiveOfferChanged(id)} onMouseLeave={() => onActiveOfferChanged(null)}>
    {isPremium && <div className="place-card__mark">
      <span>Premium</span>
    </div>}
    <div className="cities__image-wrapper place-card__image-wrapper">
      <a href="#">
        <img className="place-card__image" src={image} width="260" height="200" alt="Place image"/>
      </a>
    </div>
    <div className="place-card__info">
      <div className="place-card__price-wrapper">
        <div className="place-card__price">
          <b className="place-card__price-value">€{price}</b>
          <span className="place-card__price-text">/&nbsp;night</span>
        </div>
        <button
          onClick={onAddToFavoritesClickHandler}
          className={isBookmarked
            ? `place-card__bookmark-button place-card__bookmark-button--active button`
            : `place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <Rating isDetail={false} value={rating}/>
      <h2 onClick={onTitleClick} className="place-card__name">
        <Link to={`/offer/${id}`}>{name}</Link>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

RentObjectCard.propTypes = propTypes;

const mapDispatchToProps = {
  addToFavorites: (offerId, status) => Operation.addToFavorites(offerId, status)
};

export default connect(null, mapDispatchToProps)(RentObjectCard);
