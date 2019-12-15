import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Renderer from 'react-test-renderer';
import EmptyCityPlaces from './empty-city-places.jsx';

jest.mock(`react-redux`);
jest.mock(`../../selectors/selector`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
    .create(
        <EmptyCityPlaces
          activeCityName={`City`}
        />)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), null);

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`activeCityName`);

  expect(connectAdvanced).toHaveBeenCalledWith(EmptyCityPlaces);

  expect(tree).toMatchSnapshot();
});
