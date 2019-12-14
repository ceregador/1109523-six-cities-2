import {createSelector} from 'reselect';

const getCities = (state) => state.cities;

export const citiesSelector = createSelector(getCities, (cities) => cities);
