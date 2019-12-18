import React from 'react';
import {mount} from 'enzyme';
import FavoritesPage from './favorites-page.jsx';
import {MemoryRouter} from 'react-router-dom';

jest.mock(`../pageHeader/page-header.jsx`);

it(`calls loadFavorites at mount`, () => {
  const loadFavoritesMock = jest.fn();
  mount(
      <MemoryRouter>
        <FavoritesPage
          loadFavorites={loadFavoritesMock}
          favoriteOffers={[]}/>
      </MemoryRouter>);

  expect(loadFavoritesMock).toHaveBeenCalled();
});
