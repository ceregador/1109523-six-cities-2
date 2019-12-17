import {requiredNumber} from '../../prop-types';
import PropTypes from 'prop-types';
import RATING_TYPE from '../../constants/rating-type';

const propTypes = {
  value: requiredNumber,
  type: PropTypes.oneOf([
    RATING_TYPE.DETAILS,
    RATING_TYPE.PREVIEW,
    RATING_TYPE.REVIEW
  ])
};

export default propTypes;
