import {createSelector} from 'reselect';

const getCityOffers = (state) => state.cityOffers;

export const isCityOffersExistSelector = createSelector(
    getCityOffers,
    (cityOffers) => cityOffers.length !== 0);
