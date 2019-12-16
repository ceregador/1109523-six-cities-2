import ACTION_TYPE from './action-type';

const ActionCreator = {
  fetchOffers: (offers) => {
    return {
      type: ACTION_TYPE.FETCH_OFFERS,
      payload: offers
    };
  },
  authorize: (userData) => {
    return {
      type: ACTION_TYPE.AUTHORIZE,
      payload: userData
    };
  },
  addToFavorites: ({offerId, isFavorite}) => {
    return {
      type: ACTION_TYPE.ADD_TO_FAVORITES,
      payload: {offerId, isFavorite}
    };
  },
  setCity: (cityName) => {
    return {
      type: ACTION_TYPE.SET_CITY,
      payload: cityName
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
