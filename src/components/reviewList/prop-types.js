import {requiredString, requiredNumber} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  reviews: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.shape({
      name: requiredString,
      avatarUrl: requiredString
    }),
    rating: requiredNumber,
    comment: requiredString,
    reviewData: requiredString
  }))
};
