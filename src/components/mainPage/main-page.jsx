import React, {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import EmptyCityPlaces from '../emptyCityPlaces/empty-city-places.jsx';
import CityPlaces from '../cityPlaces/city-places.jsx';
import PropTypes from './prop-types';
import CitiesList from '../citiesList/cities-list.jsx';
import PageHeader from '../pageHeader/page-header.jsx';
import ActionCreator from '../../actions/action-creator';
import Selector from '../../selectors/selector';
import Operation from '../../operation';

const MainPage = ({
  cities,
  activeCityName,
  isCityOffersExist,
  getOffers,
  changeActiveCity,
  resetActiveCard}) => {

  useEffect(() => {
    if (!activeCityName) {
      getOffers();
    }
  }, []);

  useEffect(() => {
    resetActiveCard();
  });

  const onChangeCity = useCallback((cityName) => {
    changeActiveCity(cityName);
  }, []);

  return <div className="page page--gray page--main">
    <PageHeader/>
    <main className={isCityOffersExist
      ? `page__main page__main--index`
      : `page__main page__main--index page__main--index-empty`}>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList
          cities={cities}
          onChangeActiveItem={onChangeCity}
          activeItem={activeCityName}
        />
      </div>
      <div className="cities">
        {isCityOffersExist
          ? <CityPlaces/>
          : <EmptyCityPlaces/>}
      </div>
    </main>
  </div>;
};

MainPage.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  cities: Selector.citiesSelector(state),
  isCityOffersExist: Selector.isCityOffersExistSelector(state),
  activeCityName: Selector.activeCityNameSelector(state),
  userEmail: Selector.getUserEmailSelector(state)
});

const mapDispatchToProps = {
  getOffers: () => Operation.fetchOffers(),
  changeActiveCity: (cityName) => ActionCreator.switchCity(cityName),
  resetActiveCard: () => ActionCreator.updateActiveCard(null)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
