import ACTION_TYPE from '../actions/action-type';
import {getUniqueCitiesFromOffers, getOffersByCityName} from '../actions/offers-extractor';
import SORTING_TYPE from '../actions/sorting-type';
import rentObjects from '../mocks/offers';

const cities = getUniqueCitiesFromOffers(rentObjects);
const defaultActiveCity = cities[0];

const initialState = {
  activeCityName: defaultActiveCity.name,
  cities,
  cityOffers: getOffersByCityName(rentObjects, defaultActiveCity.name),
  sortingType: SORTING_TYPE.POPULAR,
  activeOfferId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPE.SET_CITY:
      return Object.assign({}, state, {
        activeCityName: action.payload
      });

    case ACTION_TYPE.GET_CITY_OFFERS:
      return Object.assign({}, state, {
        cityOffers: action.payload
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
