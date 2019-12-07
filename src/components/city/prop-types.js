import {requiredString, requiredBoolean, requiredFunc} from '../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  city: PropTypes.shape({
    name: requiredString
  }),
  isActive: requiredBoolean,
  onClick: requiredFunc
};

export default propTypes;
