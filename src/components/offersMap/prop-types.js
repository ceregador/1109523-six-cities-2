import PropTypes from 'prop-types';
import {requiredNumber} from '../../prop-types';

export default {
  cityCoordinates: PropTypes.arrayOf(requiredNumber),
  offersCoordinates: PropTypes.arrayOf(
      PropTypes.shape({
        offerId: requiredNumber,
        coordinates: PropTypes.arrayOf(requiredNumber)
      }))
};

