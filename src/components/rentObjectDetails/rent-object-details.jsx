import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import PageHeader from '../pageHeader/page-header.jsx';
import Rating from '../rating/rating.jsx';
import ReviewList from '../reviewList/review-list.jsx';
import ReviewForm from '../reviewForm/review-form.jsx';
import OffersMap from '../offersMap/offers-map.jsx';
import CardList from '../cardList/card-list.jsx';
import Operation from '../../operation';
import Selector from '../../selectors/selector';
import PropTypes from './prop-types';
import Constants from '../../constants/constants';
import RATING_TYPE from '../../constants/rating-type';

const RentObjectDetails = ({
  isAuthorized,
  offer,
  addToFavorites,
  fetchDataForHotel,
  match,
  activeCity,
  cityOffers}) => {

  useEffect(() => {
    fetchDataForHotel(parseInt(match.params.offerId, Constants.DECIMAL_RADIX));
  }, []);

  if (!offer) {
    return <p>Loading...</p>;
  }

  const {
    id,
    name,
    rating,
    type,
    bedroomsCount,
    maxGuestsCount,
    price,
    equipment,
    host,
    description,
    isPremium,
    isBookmarked,
    images} = offer;

  const onAddToFavoritesClick = (evt) => {
    evt.preventDefault();

    addToFavorites(id, !isBookmarked);
  };

  const renderIsFavoriteButton = (isFavorite) => {
    const className = isFavorite
      ? `property__bookmark-button property__bookmark-button--active button`
      : `property__bookmark-button button`;

    return <button onClick={onAddToFavoritesClick} className={className} type="button">
      <svg className="property__bookmark-icon" width="31" height="33">
        <use xlinkHref="#icon-bookmark"></use>
      </svg>
      <span className="visually-hidden">To bookmarks</span>
    </button>;
  };

  const neighboringOffers = cityOffers
    .filter((cityOffer) => cityOffer.id !== offer.id)
    .slice(0, 3);

  const neighboringOfferCoordinates =
    neighboringOffers.map((cityOffer) => ({
      offerId: cityOffer.id,
      coordinates: cityOffer.coordinates}));
  neighboringOfferCoordinates.push({offerId: offer.id, coordinates: offer.coordinates});

  return <div className="page">
    <PageHeader/>
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((imageUrl, index) => <div key={index} className="property__image-wrapper">
              <img className="property__image" src={imageUrl} alt="Photo studio"/>
            </div>).slice(0, 6)}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {isPremium && <div className="property__mark">
              <span>Premium</span>
            </div>}
            <div className="property__name-wrapper">
              <h1 className="property__name">{name}</h1>
              {renderIsFavoriteButton(isBookmarked)}
            </div>
            <Rating type={RATING_TYPE.DETAILS} value={rating}/>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedroomsCount} Bedrooms
              </li>
              <li className="property__feature property__feature--adults">
                Max {maxGuestsCount} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <div className="property__inside">
              <h2 className="property__inside-title">{`What's inside`}</h2>
              <ul className="property__inside-list">
                {equipment.map((staff) => <li key={staff} className="property__inside-item">
                  {staff}
                </li>)}
              </ul>
            </div>
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img className="property__avatar user__avatar" src={`/${host.avatarUrl}`} width="74" height="74" alt="Host avatar"/>
                </div>
                <span className="property__user-name">
                  {host.name}
                </span>
                <span className="property__user-status">
                  {host.isPro ? `Pro` : ``}
                </span>
              </div>
              <div className="property__description">
                <p className="property__text">
                  {description}
                </p>
              </div>
            </div>
            <ReviewList/>
            {isAuthorized && <ReviewForm/>}
          </div>
        </div>
        <OffersMap
          offersCoordinates={neighboringOfferCoordinates}
          cityCoordinates={activeCity.coordinates}
          className={`property__map map`}
        />
      </section>
      <section className="near-places places">
        <h2 className="near-places__title">Other places in the neighbourhood</h2>
        <CardList
          offers={neighboringOffers}
          containerClassName={`near-places__list places__list`}
          itemClassName={`near-places__card place-card`}
          infoClassName={`place-card__info`}
          imageWrapperClassName={`near-places__image-wrapper place-card__image-wrapper`}
          onActiveItemChange={() => null}/>
      </section>
    </main>
  </div>;
};

RentObjectDetails.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  offer: Selector.getActiveOffer(state),
  activeCity: Selector.activeCitySelector(state),
  cityOffers: Selector.cityOffersSelector(state),
  isAuthorized: Selector.isAuthorizedSelector(state)
});

const mapDispatchToProps = {
  addToFavorites: (offerId, status) => Operation.addToFavorites(offerId, status),
  fetchDataForHotel: (offerId) => Operation.fetchDataForHotel(offerId)
};

export default connect(mapStateToProps, mapDispatchToProps)(RentObjectDetails);
