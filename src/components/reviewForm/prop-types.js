import PropTypes from 'prop-types';
import {requiredFunc, requiredNumber} from '../../prop-types';

export default {
  addReview: requiredFunc,
  onFormFieldChange: requiredFunc,
  activeOfferId: requiredNumber,
  formFields: PropTypes.object.isRequired
};
