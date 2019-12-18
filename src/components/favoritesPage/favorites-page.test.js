import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import Renderer from 'react-test-renderer';
import FavoritesPage from './favorites-page.jsx';
import {MemoryRouter} from 'react-router-dom';
import FavoritesEmptyPage from '../favoritesEmptyPage/favorites-empty-page.jsx';
import FavoritesList from '../favoritesList/favorites-list.jsx';
import PageHeader from '../pageHeader/page-header.jsx';

jest.mock(`react-redux`);
jest.mock(`../favoritesEmptyPage/favorites-empty-page.jsx`);
jest.mock(`../favoritesList/favorites-list.jsx`);
jest.mock(`../pageHeader/page-header.jsx`);

it(`renders empty list and connects correctly`, () => {
  const tree = Renderer
    .create(
        <MemoryRouter>
          <FavoritesPage
            loadFavorites={() => null}
            favoriteOffers={[]}/>
        </MemoryRouter>)
    .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: []});
  expect(mappedProps).toHaveProperty(`favoriteOffers`);

  const pmapDispatchToProps = connect.mock.calls[0][1];
  expect(pmapDispatchToProps).toHaveProperty(`loadFavorites`);

  expect(connectAdvanced).toHaveBeenCalledWith(FavoritesPage);

  expect(PageHeader).toHaveBeenCalled();
  expect(FavoritesEmptyPage).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});

it(`renders and connects correctly`, () => {
  const tree = Renderer
        .create(
            <MemoryRouter>
              <FavoritesPage
                loadFavorites={() => null}
                favoriteOffers={[{}]}/>
            </MemoryRouter>)
        .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({offers: [
    {
      id: 0,
      city: {name: ``},
      name: ``,
      isPremium: false,
      image: ``,
      type: ``,
      price: 1,
      isBookmarked: false,
      onTitleClick: () => null,
      onActiveOfferChanged: () => null
    }
  ]});
  expect(mappedProps).toHaveProperty(`favoriteOffers`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`loadFavorites`);

  expect(connectAdvanced).toHaveBeenCalledWith(FavoritesPage);

  expect(PageHeader).toHaveBeenCalled();
  expect(FavoritesList).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
