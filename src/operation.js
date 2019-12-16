import ActionCreator from './actions/action-creator';
import Translator from './translator';
import {ApiRoutes} from './routeConstants';

export default {
  fetchOffers: () => (dispatch, _, api) => {
    api
      .get(ApiRoutes.HOTELS)
      .then((responseData) => dispatch(
          ActionCreator.fetchOffers(responseData.data.map((hotel) => Translator.translateOffer(hotel)))));
  },

  tryToAuthorize: () => (dispatch, _, api) => {
    api
      .get(ApiRoutes.LOGIN)
      .then((responseData) => dispatch(ActionCreator.authorize(Translator.translateUser(responseData.data))))
      .catch(() => {});
  },

  authorize: (email, password) => (dispatch, _, api) => {
    api
      .post(ApiRoutes.LOGIN, ({email, password}))
      .then((responseData) => dispatch(ActionCreator.authorize(Translator.translateUser(responseData.data))));
  },

  addToFavorites: (offerId, isFavorite) => (dispatch, _, api) => {
    api
      .post(`${ApiRoutes.FAVORITE}/${offerId}/${isFavorite ? 1 : 0}`)
      .then(() => dispatch(ActionCreator.addToFavorites({offerId, isFavorite})));
  }
};
