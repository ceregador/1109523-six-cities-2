import sort from './sort';
import {createSelector} from 'reselect';

const getCityOffers = (state) => state.cityOffers;
const getSortingType = (state) => state.sortingType;

export const sortingSelector = createSelector(
    [getCityOffers, getSortingType],
    (offers, sortType) => sort(offers, sortType));
