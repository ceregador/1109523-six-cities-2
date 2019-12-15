import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import ActionCreator from '../../actions/action-creator';
import {activeCitySelector} from '../../selectors/active-city-selector';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import OffersMap from '../offersMap/offers-map.jsx';
import propTypes from './prop-types.js';

const CityPlaces = ({activeCity, updateActiveCard}) => {
  const onChangeActiveCard = useCallback((offerId) => {
    updateActiveCard(offerId);
  }, [updateActiveCard]);

  return <div className="cities__places-container container">
    <RentObjectCardList
      cityName={activeCity.name}
      onChangeActiveItem={onChangeActiveCard}
    />
    <div className="cities__right-section">
      <section className="cities__map map">
        <OffersMap cityCoordinates={activeCity.coordinates}/>
      </section>
    </div>
  </div>;
};

CityPlaces.propTypes = propTypes;

const mapStateToProps = (state) => ({
  activeCity: activeCitySelector(state)
});

const mapDispatchToProps = {
  updateActiveCard: (offerId) => ActionCreator.updateActiveCard(offerId)
};

export default connect(mapStateToProps, mapDispatchToProps)(CityPlaces);
