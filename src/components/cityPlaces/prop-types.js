import PropTypes from 'prop-types';
import {requiredNumber, requiredString, requiredFunc} from '../../prop-types';

export default {
  activeCity: PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  }),
  updateActiveCard: requiredFunc
};
