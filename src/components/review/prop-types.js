import {requiredNumber, requiredString} from '../../prop-types';
import PropTypes from 'prop-types';

export default {
  review: PropTypes.shape({
    user: PropTypes.shape({
      name: requiredString,
      avatarUrl: requiredString
    }),
    rating: requiredNumber,
    comment: requiredString,
    reviewData: requiredString
  })
};
