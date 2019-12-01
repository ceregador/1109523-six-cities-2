import PropTypes from 'prop-types';

const requiredFunc = PropTypes.func.isRequired;
const requiredNumber = PropTypes.number.isRequired;
const requiredString = PropTypes.string.isRequired;
const requiredBoolean = PropTypes.bool.isRequired;

const offersPropTypes = PropTypes.arrayOf(
    PropTypes.shape({
      city: requiredString,
      offers: PropTypes.arrayOf(
          PropTypes.shape({
            key: requiredString,
            name: requiredString,
            type: requiredString,
            image: requiredString,
            price: requiredNumber,
            rating: requiredNumber,
            isPremium: requiredBoolean,
            isBookmarked: requiredBoolean,
            coordinates: PropTypes.arrayOf(requiredNumber)
          })
      )})
);

export {requiredFunc, requiredString, requiredNumber, offersPropTypes};
