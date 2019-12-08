import React from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator';
import Rating from '../rating/rating.jsx';
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
  onActiveOfferChanged}) => {

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
        <button className={isBookmarked ? `place-card__bookmark-button place-card__bookmark-button--active button` : `place-card__bookmark-button button`} type="button">
          <svg className="place-card__bookmark-icon" width="18" height="19">
            <use xlinkHref="#icon-bookmark"></use>
          </svg>
          <span className="visually-hidden">To bookmarks</span>
        </button>
      </div>
      <Rating value={rating}/>
      <h2 onClick={onTitleClick} className="place-card__name">
        <a href="#">{name}</a>
      </h2>
      <p className="place-card__type">{type}</p>
    </div>
  </article>;
};

RentObjectCard.propTypes = propTypes;

const mapDispatchToProps = {
  onActiveOfferChanged: (offerId) => ActionCreator.updateActiveCard(offerId)
};

export default connect(null, mapDispatchToProps)(RentObjectCard);
