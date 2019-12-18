import {requiredString, requiredFunc, requiredNumber} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  })),
  onActiveItemChange: requiredFunc
};
