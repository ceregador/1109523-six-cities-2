import React, {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import EmptyCityPlaces from '../emptyCityPlaces/empty-city-places.jsx';
import CityPlaces from '../cityPlaces/city-places.jsx';
import propTypes from './prop-types';
import CitiesList from '../citiesList/cities-list.jsx';
import UserFavoritesNavigator from '../userFavoritesNavigator/user-favorites-navigator.jsx';
import ActionCreator from '../../actions/action-creator';
import Selector from '../../selectors/selector';
import Operation from '../../operation';

const MainPage = ({
  cities,
  activeCityName,
  isCityOffersExist,
  getOffers,
  changeActiveCity}) => {

  useEffect(() => {
    getOffers();
  }, []);

  const onChangeCity = useCallback((cityName) => {
    changeActiveCity(cityName);
  }, []);

  return <div className="page page--gray page--main">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link header__logo-link--active">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <UserFavoritesNavigator/>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
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

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cities: Selector.citiesSelector(state),
  isCityOffersExist: Selector.isCityOffersExistSelector(state),
  activeCityName: Selector.activeCityNameSelector(state),
  userEmail: Selector.getUserEmailSelector(state)
});

const mapDispatchToProps = {
  getOffers: () => Operation.fetchOffers(),
  changeActiveCity: (cityName) => ActionCreator.setCity(cityName)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
