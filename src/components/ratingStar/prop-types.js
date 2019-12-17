import {requiredBoolean, requiredFunc, requiredString, requiredNumber} from '../../prop-types';

export default {
  title: requiredString,
  rate: requiredNumber,
  onClick: requiredFunc,
  isToggled: requiredBoolean
};
