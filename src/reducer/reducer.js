import ACTION_TYPE from '../actions/action-type';
import {getUniqueCitiesFromOffers, getCityNameByOfferId} from '../actions/offers-extractor';
import SORTING_TYPE from '../actions/sorting-type';

const initialState = {
  isAuthorized: null,
  user: null,
  cities: [],
  activeCityName: null,
  offers: [],
  currentReviews: [],
  currentFavorites: [],
  sortingType: SORTING_TYPE.POPULAR,
  activeOfferId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ACTION_TYPE.AUTHORIZE: {
      return Object.assign({}, state, {
        isAuthorized: true,
        user: action.payload
      });
    }

    case ACTION_TYPE.AUTHORIZATION_FAILED: {
      return Object.assign({}, state, {
        isAuthorized: false,
        user: null
      });
    }

    case ACTION_TYPE.FETCH_OFFERS: {
      const offers = action.payload;
      const cities = getUniqueCitiesFromOffers(offers);
      const defaultCityName = cities[0].name;

      return Object.assign({}, state, {
        offers,
        cities,
        activeCityName: defaultCityName
      });
    }

    case ACTION_TYPE.FETCH_FAVORITES: {
      return Object.assign({}, state, {
        currentFavorites: action.payload
      });
    }

    case ACTION_TYPE.ADD_TO_FAVORITES: {
      const offerId = action.payload.offerId;
      const isFavorite = action.payload.isFavorite;

      const offers = state.offers.slice();
      const editedOffer = offers.find((offer) => offer.id === offerId);
      const index = offers.findIndex((offer) => offer.id === editedOffer.id);
      const newOffer = Object.assign({}, editedOffer, {
        isBookmarked: isFavorite});
      offers[index] = newOffer;

      let newCurrentFavorites = [];
      if (state.currentFavorites && !isFavorite) {
        newCurrentFavorites = state.currentFavorites.slice().filter((offer) => offer.id !== offerId);
      }

      return Object.assign({}, state, {
        offers,
        currentFavorites: newCurrentFavorites
      });
    }

    case ACTION_TYPE.FETCH_REVIEWS: {
      return Object.assign({}, state, {
        currentReviews: action.payload.sort(({reviewData: rev1Date}, {reviewData: rev2Date}) => new Date(rev2Date) - new Date(rev1Date))});
    }

    case ACTION_TYPE.SWITCH_CITY:
      const activeCityName = action.payload;

      return Object.assign({}, state, {
        activeCityName
      });

    case ACTION_TYPE.SET_CITY:
      return Object.assign({}, state, {
        activeCityName: getCityNameByOfferId(state.offers, action.payload)
      });

    case ACTION_TYPE.SET_SORTING_TYPE:
      return Object.assign({}, state, {
        sortingType: action.payload
      });

    case ACTION_TYPE.UPDATE_ACTIVE_CARD:
      return Object.assign({}, state, {
        activeOfferId: action.payload
      });
  }

  return state;
};

export default reducer;
