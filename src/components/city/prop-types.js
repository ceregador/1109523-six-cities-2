import {requiredString, requiredBoolean, requiredFunc} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  city: PropTypes.shape({
    name: requiredString
  }),
  isActive: requiredBoolean,
  onClick: requiredFunc
};
