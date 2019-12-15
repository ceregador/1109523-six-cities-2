import PropTypes from 'prop-types';
import {requiredNumber, requiredString, requiredFunc} from '../../prop-types';

const propTypes = {
  activeCity: PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  }),
  updateActiveCard: requiredFunc
};

export default propTypes;
