import ActionCreator from './actions/action-creator';
import Translator from './translator';
import {ApiRoutes} from './constants/route-constants';

export default {
  fetchOffers: () => (dispatch, _, api) => {
    api
      .get(ApiRoutes.HOTELS)
      .then((responseData) => dispatch(
          ActionCreator.fetchOffers(
              responseData.data.map((offer) => Translator.translateOffer(offer)))));
  },

  tryToAuthorize: () => (dispatch, _, api) => {
    api
      .get(ApiRoutes.LOGIN)
      .then((responseData) => dispatch(
          ActionCreator.authorize(Translator.translateUser(responseData.data))))
      .catch(() => dispatch(ActionCreator.authorizationFailed()));
  },

  authorize: (email, password) => (dispatch, _, api) => {
    return api
      .post(ApiRoutes.LOGIN, ({email, password}))
      .then((responseData) => dispatch(
          ActionCreator.authorize(Translator.translateUser(responseData.data))));
  },

  addToFavorites: (offerId, isFavorite) => (dispatch, _, api) => {
    api
      .post(`${ApiRoutes.FAVORITE}/${offerId}/${isFavorite ? 1 : 0}`)
      .then(() => dispatch(ActionCreator.addToFavorites({offerId, isFavorite})))
      .catch(() => {});
  },
  addReview: (rating, text, offerId) => (dispatch, _, api) => {
    return api
      .post(`${ApiRoutes.COMMENTS}/${offerId}`, {
        rating,
        comment: text})
      .then((response) => dispatch(ActionCreator.fetchReviews(
          response.data.map((review) => Translator.translateReview(review)))
      ));
  },

  fetchDataForHotel: (offerId) => (dispatch, _, api) => {
    api
      .get(ApiRoutes.HOTELS)
      .then((responseData) => dispatch(ActionCreator.fetchOffers(
          responseData.data.map((hotel) => Translator.translateOffer(hotel)))))
      .then(() => dispatch(ActionCreator.updateActiveCard(offerId)))
      .then(() => dispatch(ActionCreator.setCity(offerId)))
      .then(() => api.get(`${ApiRoutes.COMMENTS}/${offerId}`))
      .then((responseData) => dispatch(ActionCreator.fetchReviews(
          responseData.data.map((review) => Translator.translateReview(review)))));
  },

  fetchFavorites: () => (dispatch, _, api) => {
    api
      .get(ApiRoutes.FAVORITE)
      .then((responseData) => dispatch(ActionCreator.fetchFavorites(
          responseData.data.map((favoriteOffer) => Translator.translateOffer(favoriteOffer)))));
  }
};
