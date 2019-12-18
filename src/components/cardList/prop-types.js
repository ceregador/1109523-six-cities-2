import PropTypes from 'prop-types';
import {requiredString, requiredNumber, requiredBoolean} from '../../prop-types';

export default {
  offers: PropTypes.arrayOf(PropTypes.shape({
    id: requiredNumber,
    name: requiredString,
    isPremium: requiredBoolean,
    image: requiredString,
    type: requiredString,
    price: requiredNumber,
    isBookmarked: requiredBoolean})),
  containerClassName: requiredString,
  itemClassName: requiredString,
  infoClassName: requiredString,
  imageWrapperClassName: requiredString
};
