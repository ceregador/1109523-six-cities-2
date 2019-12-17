import {createSelector} from 'reselect';
import {getOffersByCityName} from '../actions/offers-extractor';
import sort from './sort';
import Constants from '../constants/constants';

const getActiveCityName = (state) => state.activeCityName;
const getCities = (state) => state.cities;
const getOffers = (state) => state.offers;
const getSortingType = (state) => state.sortingType;
const getIsAuthorized = (state) => state.isAuthorized;
const getUser = (state) => state.user;
const getActiveOfferId = (state) => state.activeOfferId;
const getReviews = (state) => state.currentReviews;

export default {
  activeCityNameSelector: createSelector(
      getActiveCityName,
      (activeCityName) => activeCityName),

  activeCitySelector: createSelector(
      [getActiveCityName, getCities],
      (activeCityName, cities) => cities.find((city) => city.name === activeCityName)),

  citiesSelector: createSelector(
      getCities,
      (cities) => cities),

  isCityOffersExistSelector: createSelector(
      [getOffers, getActiveCityName],
      (offers, cityName) => getOffersByCityName(offers, cityName).length !== 0),

  offersCoordinatesSelector: createSelector(
      [getOffers, getActiveCityName],
      (offers, cityName) => getOffersByCityName(offers, cityName).map((offer) => (
        {
          offerId: offer.id,
          coordinates: offer.coordinates
        }))),

  cityOffersSortingSelector: createSelector(
      [getOffers, getActiveCityName, getSortingType],
      (offers, cityName, sortType) => sort(getOffersByCityName(offers, cityName), sortType)),

  cityOffersSelector: createSelector(
      [getOffers, getActiveCityName],
      (offers, cityName) => getOffersByCityName(offers, cityName)
  ),

  isAuthorizedSelector: createSelector(
      getIsAuthorized,
      (isAuthorized) => isAuthorized
  ),

  getUserEmailSelector: createSelector(
      getUser,
      (user) => !user ? null : user.email
  ),

  getActiveOffer: createSelector(
      [getActiveOfferId, getOffers],
      (offerId, offers) => offers.find((offer) => offer.id === offerId)
  ),

  getActiveOfferId: createSelector(
      getActiveOfferId,
      (offerId) => offerId
  ),

  getReviews: createSelector(
      getReviews,
      (reviews) => reviews.slice(0, Constants.MAX_REVIEW_COUNT)
  )
};
