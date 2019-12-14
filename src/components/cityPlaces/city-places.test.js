import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Renderer from 'react-test-renderer';
import CityPlaces from './city-places.jsx';
import RentObjectCardList from '../rentObjectCardList/rent-object-card-list.jsx';
import OffersMap from '../offersMap/offers-map.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);
jest.mock(`../offersMap/offers-map.jsx`);
jest.mock(`react-redux`);
jest.mock(`../../selectors/active-city-selector`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <CityPlaces
          activeCity={{name: `City`}}
          updateActiveCard={() => null}
        />)
    .toJSON();

  expect(RentObjectCardList).toHaveBeenCalled();
  expect(OffersMap).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`activeCity`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`updateActiveCard`);

  expect(connectAdvanced).toHaveBeenCalledWith(CityPlaces);
});
