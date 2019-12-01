import React from 'react';
import Renderer from 'react-test-renderer';
import OffersMap from '../offersMap/offers-map.jsx';

jest.mock(`../rentObjectCardList/rent-object-card-list.jsx`);

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <OffersMap
          cityCoordinates={[]}
          offersCoordinates={[]}
        />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
