import {requiredFunc} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  formFields: PropTypes.object.isRequired,
  onFormFieldChange: requiredFunc,
  authorize: requiredFunc
};
