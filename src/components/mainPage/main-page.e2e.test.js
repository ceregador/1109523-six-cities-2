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

it(`MainPage component calls getOffers if isCityOffersExist is false`, () => {
  const getOffersMock = jest.fn();
  mount(
      <MainPage
        activeCityName={null}
        getOffers={getOffersMock}
        isCityOffersExist={false}
        changeActiveCity={() => null}
        resetActiveCard={()=> jest.fn()}
      />);

  expect(getOffersMock).toHaveBeenCalledTimes(1);
  expect(EmptyCityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});

it(`MainPage component calls getOffers if activeCityName is null`, () => {
  const getOffersMock = jest.fn();
  mount(
      <MainPage
        activeCityName={null}
        getOffers={getOffersMock}
        isCityOffersExist={true}
        changeActiveCity={() => null}
        resetActiveCard={()=> jest.fn()}
      />);

  expect(getOffersMock).toHaveBeenCalledTimes(1);
  expect(CityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});

it(`MainPage component doesn't calls getOffers if activeCityName exists`, () => {
  const getOffersMock = jest.fn();
  mount(
      <MainPage
        activeCityName={`sadsa`}
        getOffers={getOffersMock}
        isCityOffersExist={true}
        changeActiveCity={() => null}
        resetActiveCard={()=> jest.fn()}
      />);

  expect(getOffersMock).not.toHaveBeenCalledTimes(1);
  expect(CityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});

it(`MainPage component calls resetActiveCard`, () => {
  const resetActiveCardMock = jest.fn();
  mount(
      <MainPage
        activeCityName={`sadsa`}
        getOffers={jest.fn()}
        isCityOffersExist={true}
        changeActiveCity={() => null}
        resetActiveCard={resetActiveCardMock}
      />);

  expect(resetActiveCardMock).toHaveBeenCalledTimes(1);
  expect(CityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
});
