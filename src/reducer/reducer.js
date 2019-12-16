import ACTION_TYPE from '../actions/action-type';
import {getUniqueCitiesFromOffers} from '../actions/offers-extractor';
import SORTING_TYPE from '../actions/sorting-type';

const initialState = {
  isAuthorized: false,
  user: null,
  cities: [],
  activeCityName: null,
  offers: [],
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

    case ACTION_TYPE.ADD_TO_FAVORITES: {
      const offers = state.offers.slice();
      const editedOffer = offers.find((offer) => offer.id === action.payload.offerId);
      const index = offers.findIndex((offer) => offer.id === editedOffer.id);
      const newOffer = Object.assign({}, editedOffer, {
        isBookmarked: action.payload.isFavorite});
      offers[index] = newOffer;

      return Object.assign({}, state, {offers});
    }

    case ACTION_TYPE.SET_CITY:
      const activeCityName = action.payload;

      return Object.assign({}, state, {
        activeCityName
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
