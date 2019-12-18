import React from 'react';
import FavoritesEmptyPage from '../favoritesEmptyPage/favorites-empty-page.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(<FavoritesEmptyPage/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
