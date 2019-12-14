import {requiredString, requiredFunc, requiredNumber} from '../../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  })),
  activeCity: PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  }),
  loadOffers: requiredFunc,
  changeActiveCity: requiredFunc
};

export default propTypes;
