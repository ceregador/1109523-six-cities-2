import {requiredFunc} from '../../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  formFields: PropTypes.object.isRequired,
  onFormFieldChange: requiredFunc,
  authorize: requiredFunc
};

export default propTypes;
