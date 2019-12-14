import {createSelector} from 'reselect';

const getActiveCityName = (state) => state.activeCityName;
const getCities = (state) => state.cities;

export const activeCitySelector = createSelector(
    [getActiveCityName, getCities],
    (activeCityName, cities) => cities.find((city) => city.name === activeCityName));
