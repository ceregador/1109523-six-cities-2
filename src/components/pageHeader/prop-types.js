import {requiredBoolean} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  isAuthorized: requiredBoolean,
  userEmail: PropTypes.string
};

