import ActionCreator from './actions/action-creator';
import translateOffer from './translators/offer-translator';

const fetchOffers = () => (dispatch, _, api) => {
  api
    .get(`/hotels`)
    .then((responseData) => dispatch(
        ActionCreator.fetchOffers(responseData.data.map((hotel) => translateOffer(hotel)))));
};

export {fetchOffers};
