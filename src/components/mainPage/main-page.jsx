import React, {useState, useRef, useEffect, useCallback} from 'react';
import {connect} from 'react-redux';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import propTypes from './prop-types';
import OffersMap from '../offersMap/offers-map.jsx';
import CitiesList from '../citiesList/cities-list.jsx';
import ActionCreator from '../../actions/action-creator';

const MainPage = ({cities, loadOffers}) => {
  const isComponentUpdate = useRef(false);
  const [activeCity, updateActiveCity] = useState(cities[0]);

  useEffect(() => {
    if (isComponentUpdate.current) {
      loadOffers(activeCity.name);
    }
    isComponentUpdate.current = true;
  }, []);

  const onChangeCity = useCallback((cityName) => {
    loadOffers(cityName);
    updateActiveCity(cities.find((city) => city.name === cityName));
  });

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
    <main className="page__main page__main--index">
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <CitiesList cities={cities} onChangeCity={onChangeCity}/>
      </div>
      <div className="cities">
        <div className="cities__places-container container">
          <RentObjectCardList cityName={activeCity.name}/>
          <div className="cities__right-section">
            <section className="cities__map map">
              <OffersMap cityCoordinates={activeCity.coordinates}/>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>;
};

MainPage.propTypes = propTypes;

const mapStateToProps = (state) => ({
  cities: state.cities
});

const mapDispatchToProps = {
  loadOffers: (cityName) => ActionCreator.getOffers(cityName)
};

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
