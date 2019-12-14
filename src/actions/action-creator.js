import ACTION_TYPE from './action-type';
import {getOffersByCityName} from './offers-extractor';
import rentObjects from '../mocks/offers';

const ActionCreator = {
  setCity: (cityName) => {
    return {
      type: ACTION_TYPE.SET_CITY,
      payload: cityName
    };
  },
  getOffers: (cityName) => {
    const offers = getOffersByCityName(rentObjects, cityName);

    return {
      type: ACTION_TYPE.GET_CITY_OFFERS,
      payload: offers
    };
  },
  setSortingType: (sortingType) => {
    return {
      type: ACTION_TYPE.SET_SORTING_TYPE,
      payload: sortingType
    };
  },
  updateActiveCard: (offerId) => {
    return {
      type: ACTION_TYPE.UPDATE_ACTIVE_CARD,
      payload: offerId
    };
  }
};

export default ActionCreator;
