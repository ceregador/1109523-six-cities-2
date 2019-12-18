import {requiredFunc, requiredString, requiredNumber, requiredBoolean} from '../../prop-types';
import PropTypes from 'prop-types';

const propTypes = {
  isAuthorized: requiredBoolean,
  offer: PropTypes.shape({
    id: requiredNumber,
    name: requiredString,
    rating: requiredNumber,
    type: requiredString,
    bedroomsCount: requiredNumber,
    maxGuestsCount: requiredNumber,
    price: requiredNumber,
    equipment: PropTypes.arrayOf(requiredString),
    host: PropTypes.shape({
      name: requiredString,
      isPro: requiredBoolean,
      avatarUrl: requiredString
    }),
    description: requiredString,
    isPremium: requiredBoolean,
    isBookmarked: requiredBoolean,
    images: PropTypes.arrayOf(requiredString)
  }),
  addToFavorites: requiredFunc,
  fetchDataForHotel: requiredFunc,
  match: PropTypes.shape({params: PropTypes.shape({offerId: requiredString})}),
  activeCity: PropTypes.shape({
    name: requiredString,
    coordinates: PropTypes.arrayOf(requiredNumber)
  }),
  cityOffers: PropTypes.arrayOf(PropTypes.shape({
    id: requiredNumber,
    name: requiredString,
    rating: requiredNumber,
    type: requiredString,
    bedroomsCount: requiredNumber,
    maxGuestsCount: requiredNumber,
    price: requiredNumber,
    equipment: PropTypes.arrayOf(requiredString),
    host: PropTypes.shape({
      name: requiredString,
      isPro: requiredBoolean,
      avatarUrl: requiredString
    }),
    description: requiredString,
    isPremium: requiredBoolean,
    isBookmarked: requiredBoolean,
    images: PropTypes.arrayOf(requiredString)
  }))
};

export default propTypes;
