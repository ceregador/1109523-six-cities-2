import React, {useCallback} from 'react';
import {connect} from 'react-redux';
import EmptyCityPlaces from '../emptyCityPlaces/empty-city-places.jsx';
import CityPlaces from '../cityPlaces/city-places.jsx';
import propTypes from './prop-types';
import CitiesList from '../citiesList/cities-list.jsx';
import ActionCreator from '../../actions/action-creator';
import {isCityOffersExistSelector} from '../../selectors/is-city-offers-exist-selector';
import {citiesSelector} from '../../selectors/cities-selector';
import {activeCitySelector} from '../../selectors/active-city-selector';

const MainPage = ({cities, isCityOffersExist, loadOffers, changeActiveCity, activeCity}) => {

  const onChangeCity = useCallback((cityName) => {
    changeActiveCity(cityName);
    loadOffers(cityName);
  }, []);
  const getDefaultCityName = useCallback(() => cities[0].name, []);

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
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                </a>
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
          getDefaultItem={getDefaultCityName}
        />
      </div>
      <div className="cities">
        {isCityOffersExist
          ? <CityPlaces/>
          : <EmptyCityPlaces cityName={activeCity.name}/>}
      </div>
    </main>
  </div>;
};

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cities: citiesSelector(state),
  activeCity: activeCitySelector(state),
  isCityOffersExist: isCityOffersExistSelector(state)
});

const mapDispatchToProps = {
  loadOffers: (cityName) => ActionCreator.getOffers(cityName),
  changeActiveCity: (cityName) => ActionCreator.setCity(cityName)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
