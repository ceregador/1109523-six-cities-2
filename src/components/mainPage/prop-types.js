import {requiredString, requiredFunc, requiredNumber, requiredBoolean} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  })),
  activeCity: PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  }),
  activeCityName: PropTypes.string,
  isCityOffersExist: requiredBoolean,
  changeActiveCity: requiredFunc,
  getOffers: requiredFunc
};
