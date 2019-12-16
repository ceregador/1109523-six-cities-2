import {requiredBoolean} from '../../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  isAuthorized: requiredBoolean,
  userEmail: PropTypes.string
};

export default propTypes;
