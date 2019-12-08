import {createSelector} from 'reselect';

const getCityOffers = (state) => state.cityOffers;

export const offersCoordinatesSelector = createSelector(
    getCityOffers,
    (cityOffers) => cityOffers.map((offer) => (
      {
        offerId: offer.id,
        coordinates: offer.coordinates
      })));
