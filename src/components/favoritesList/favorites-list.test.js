import React from 'react';
import FavoritesList from './favorites-list.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <FavoritesList
          offers={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
