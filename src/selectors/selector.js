import {createSelector} from 'reselect';
import {getOffersByCityName} from '../actions/offers-extractor';
import sort from './sort';

const getActiveCityName = (state) => state.activeCityName;
const getCities = (state) => state.cities;
const getOffers = (state) => state.offers;
const getSortingType = (state) => state.sortingType;
const getIsAuthorized = (state) => state.isAuthorized;
const getUser = (state) => state.user;

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

  isAuthorizedSelector: createSelector(
      getIsAuthorized,
      (isAuthorized) => isAuthorized
  ),

  getUserEmailSelector: createSelector(
      getUser,
      (user) => !user ? null : user.email
  )
};
