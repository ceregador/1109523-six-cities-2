import ACTION_TYPE from './action-type';

export default {
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
  fetchReviews: (reviews) => {
    return {
      type: ACTION_TYPE.FETCH_REVIEWS,
      payload: reviews
    };
  },
  switchCity: (newCityName) => {
    return {
      type: ACTION_TYPE.SWITCH_CITY,
      payload: newCityName
    };
  },
  setCity: (offerId) => {
    return {
      type: ACTION_TYPE.SET_CITY,
      payload: offerId
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
