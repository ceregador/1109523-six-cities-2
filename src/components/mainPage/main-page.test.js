import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import MainPage from './main-page.jsx';
import Renderer from 'react-test-renderer';
import CityPlaces from '../cityPlaces/city-places.jsx';
import EmptyCityPlaces from '../emptyCityPlaces/empty-city-places.jsx';
import CitiesList from '../citiesList/cities-list.jsx';
import PageHeader from '../pageHeader/page-header.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);
jest.mock(`../cityPlaces/city-places.jsx`);
jest.mock(`../citiesList/cities-list.jsx`);
jest.mock(`../emptyCityPlaces/empty-city-places.jsx`);
jest.mock(`../pageHeader/page-header.jsx`);
jest.mock(`react-redux`);

it(`renders CityPlaces and connects correctly`, () => {
  const tree = Renderer
    .create(
        <MainPage
          cities={[{name: `City`}]}
          isCityOffersExist={true}
          activeCity={{name: `City1`}}
          getOffers={() => undefined}
          changeActiveCity={() => null}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`cities`);
  expect(mappedProps).toHaveProperty(`activeCityName`);
  expect(mappedProps).toHaveProperty(`isCityOffersExist`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`getOffers`);
  expect(mapDispatchToProps).toHaveProperty(`changeActiveCity`);

  expect(connectAdvanced).toHaveBeenCalledWith(MainPage);

  expect(CityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
  expect(PageHeader).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});

it(`renders EmptyCityPlaces and connects correctly`, () => {
  const tree = Renderer
    .create(
        <MainPage
          cities={[{name: `City`}]}
          isCityOffersExist={false}
          activeCity={{name: `City2`}}
          getOffers={() => undefined}
          changeActiveCity={() => null}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`cities`);
  expect(mappedProps).toHaveProperty(`activeCityName`);
  expect(mappedProps).toHaveProperty(`isCityOffersExist`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`getOffers`);
  expect(mapDispatchToProps).toHaveProperty(`changeActiveCity`);

  expect(connectAdvanced).toHaveBeenCalledWith(MainPage);

  expect(EmptyCityPlaces).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
  expect(PageHeader).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
