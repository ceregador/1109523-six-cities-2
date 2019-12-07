import ACTION_TYPE from './action-type';
import {getOffersByCityName} from './offers-extractor';
import rentObjects from '../mocks/offers';

const ActionCreator = {
  setActiveCity: (newActiveCityName) => {

    return {
      type: ACTION_TYPE.SET_CITY,
      payload: newActiveCityName
    };
  },
  getOffers: (cityName) => {
    const offers = getOffersByCityName(rentObjects, cityName);

    return {
      type: ACTION_TYPE.GET_CITY_OFFERS,
      payload: offers
    };
  }
};

export default ActionCreator;
