import {requiredNumber, requiredBoolean, requiredFunc, requiredString} from '../prop-types';

const propTypes = {
  id: requiredNumber,
  name: requiredString,
  isPremium: requiredBoolean,
  image: requiredString,
  type: requiredString,
  price: requiredNumber,
  isBookmarked: requiredBoolean,
  onTitleClick: requiredFunc,
  onActiveOfferChanged: requiredFunc
};

export default propTypes;
