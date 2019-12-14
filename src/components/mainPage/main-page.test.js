import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import MainPage from './main-page.jsx';
import Renderer from 'react-test-renderer';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import OffersMap from '../offersMap/offers-map.jsx';
import CitiesList from '../citiesList/cities-list.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);
jest.mock(`../offersMap/offers-map.jsx`);
jest.mock(`../citiesList/cities-list.jsx`);
jest.mock(`../city/city.jsx`);
jest.mock(`react-redux`);
jest.mock(`../../selectors/active-city-selector`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(
        <MainPage
          cities={[{name: `City`}]}
          activeCity={{name: `City1`}}
          loadOffers={() => null}
          changeActiveCity={() => null}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`cities`);
  expect(mappedProps).toHaveProperty(`activeCity`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`loadOffers`);
  expect(mapDispatchToProps).toHaveProperty(`changeActiveCity`);

  expect(connectAdvanced).toHaveBeenCalledWith(MainPage);

  expect(RentObjectCardList).toHaveBeenCalled();
  expect(OffersMap).toHaveBeenCalled();
  expect(CitiesList).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
