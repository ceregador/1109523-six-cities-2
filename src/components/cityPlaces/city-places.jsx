import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator';
import Selector from '../../selectors/selector';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import OffersMap from '../offersMap/offers-map.jsx';
import propTypes from './prop-types.js';

const CityPlaces = ({activeCity, updateActiveCard, offersCoordinates}) => {
  const onChangeActiveCard = useCallback((offerId) => {
    updateActiveCard(offerId);
  }, [updateActiveCard]);

  return <div className="cities__places-container container">
    <RentObjectCardList
      cityName={activeCity.name}
      onChangeActiveItem={onChangeActiveCard}
    />
    <div className="cities__right-section">
      <OffersMap
        offersCoordinates={offersCoordinates}
        cityCoordinates={activeCity.coordinates}
        className={`cities__map map`}
      />
    </div>
  </div>;
};

CityPlaces.propTypes = propTypes;

const mapStateToProps = (state) => ({
  activeCity: Selector.activeCitySelector(state),
  offersCoordinates: Selector.offersCoordinatesSelector(state)
});

const mapDispatchToProps = {
  updateActiveCard: (offerId) => ActionCreator.updateActiveCard(offerId)
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
