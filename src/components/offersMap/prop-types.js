import PropTypes from 'prop-types';
import {requiredNumber} from '../prop-types';

const propTypes = {
  cityCoordinates: PropTypes.arrayOf(requiredNumber),
  offersCoordinates: PropTypes.arrayOf(PropTypes.arrayOf(requiredNumber))
};

export default propTypes;
