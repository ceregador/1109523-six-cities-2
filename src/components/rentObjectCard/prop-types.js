import {offersPropTypes, requiredFunc, requiredString} from '../prop-types';

offersPropTypes.id = requiredString;
offersPropTypes.onTitleClick = requiredFunc;
offersPropTypes.onActiveOfferChanged = requiredFunc;

export default offersPropTypes;
