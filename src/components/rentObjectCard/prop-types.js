import {requiredNumber, requiredBoolean, requiredFunc, requiredString} from '../../prop-types';

const propTypes = {
  id: requiredNumber,
  name: requiredString,
  isPremium: requiredBoolean,
  image: requiredString,
  type: requiredString,
  price: requiredNumber,
  rating: requiredNumber,
  isBookmarked: requiredBoolean,
  onActiveOfferChanged: requiredFunc,
  itemClassName: requiredString,
  infoClassName: requiredString,
  imageWrapperClassName: requiredString
};

export default propTypes;
