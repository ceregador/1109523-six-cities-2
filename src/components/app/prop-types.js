import {requiredBoolean, requiredFunc} from '../../prop-types';

const propTypes = {
  isAuthorized: requiredBoolean,
  tryToAuthorize: requiredFunc
};

export default propTypes;
