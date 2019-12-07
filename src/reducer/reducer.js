import ACTION_TYPE from '../actions/action-type';
import {getUniqueCitiesFromOffers, getOffersByCityName} from '../actions/offers-extractor';
import rentObjects from '../mocks/offers';

const cities = getUniqueCitiesFromOffers(rentObjects);
const defaultActiveCity = cities[0];

const initialState = {
  activeCityName: defaultActiveCity.name,
  cities,
  cityOffers: getOffersByCityName(rentObjects, defaultActiveCity.name)
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
  }

  return state;
};

export default reducer;
