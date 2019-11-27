import React from 'react';
import Renderer from 'react-test-renderer';
import Map from '../map/map.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);
jest.mock(`../map/map.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <Map
          cityCoordinates={[]}
          offersCoordinates={[]}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
