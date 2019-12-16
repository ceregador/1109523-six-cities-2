import React from 'react';
import {mount} from 'enzyme';
import MainPage from './main-page.jsx';
import EmptyCityPlaces from '../emptyCityPlaces/empty-city-places.jsx';
import CityPlaces from '../cityPlaces/city-places.jsx';
import CitiesList from '../citiesList/cities-list.jsx';

jest.mock(`../emptyCityPlaces/empty-city-places.jsx`);
jest.mock(`../cityPlaces/city-places.jsx`);
jest.mock(`../citiesList/cities-list.jsx`);
jest.mock(`../pageHeader/page-header.jsx`);

it(`MainPage component calls getOffers`, () => {
  const getOffersMock = jest.fn();
  mount(
      <MainPage
        getOffers={getOffersMock}
        isCityOffersExist={true}
        changeActiveCity={() => null}
      />);

  expect(getOffersMock).toHaveBeenCalledTimes(1);
  expect(CityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});

it(`MainPage component calls getOffers`, () => {
  const getOffersMock = jest.fn();
  mount(
      <MainPage
        getOffers={getOffersMock}
        isCityOffersExist={false}
        changeActiveCity={() => null}
      />);

  expect(getOffersMock).toHaveBeenCalledTimes(1);
  expect(EmptyCityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});
