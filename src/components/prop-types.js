import PropTypes from 'prop-types';

const requiredFunc = PropTypes.func.isRequired;
const requiredNumber = PropTypes.number.isRequired;
const requiredString = PropTypes.string.isRequired;
const requiredBoolean = PropTypes.bool.isRequired;

export {requiredFunc, requiredString, requiredNumber, requiredBoolean};
