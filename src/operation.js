import ActionCreator from './actions/action-creator';
import Translator from './translator';

export default {
  fetchOffers: () => (dispatch, _, api) => {
    api
      .get(`/hotels`)
      .then((responseData) => dispatch(
          ActionCreator.fetchOffers(responseData.data.map((hotel) => Translator.translateOffer(hotel)))));
  },

  tryToAuthorize: () => (dispatch, _, api) => {
    api
      .get(`/login`)
      .then((responseData) => dispatch(ActionCreator.authorize(Translator.translateUser(responseData.data))))
      .catch(() => {});
  },

  authorize: (email, password) => (dispatch, _, api) => {
    api
      .post(`/login`, ({email, password}))
      .then((responseData) => dispatch(ActionCreator.authorize(Translator.translateUser(responseData.data))));
  }
};
