import React from 'react';
import FavoritesListItem from './favorites-list-item.jsx';
import Renderer from 'react-test-renderer';

it(`renders correctly`, () => {
  const tree = Renderer
    .create(
        <FavoritesListItem
          city={``}
          offers={[]}/>)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
