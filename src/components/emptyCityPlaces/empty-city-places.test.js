import React from 'react';
import Renderer from 'react-test-renderer';
import EmptyCityPlaces from './empty-city-places.jsx';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <EmptyCityPlaces
          activeCityName={`City`}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
