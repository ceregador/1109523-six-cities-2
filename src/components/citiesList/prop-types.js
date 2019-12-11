import {requiredString, requiredFunc, requiredNumber} from '../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  cities: PropTypes.arrayOf(PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  })),
  onChangeCity: requiredFunc
};

export default propTypes;
