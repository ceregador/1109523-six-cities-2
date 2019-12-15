import ACTION_TYPE from '../actions/action-type';
import {getUniqueCitiesFromOffers} from '../actions/offers-extractor';
import SORTING_TYPE from '../actions/sorting-type';

const initialState = {
  cities: [],
  activeCityName: null,
  offers: [],
  sortingType: SORTING_TYPE.POPULAR,
  activeOfferId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

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
