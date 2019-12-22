import React from 'react';
import App from './app.jsx';
import MainPage from '../mainPage/main-page.jsx';
import Renderer from 'react-test-renderer';
import {connect, connectAdvanced} from 'react-redux';

jest.mock(`../mainPage/main-page.jsx`);
jest.mock(`../signIn/sign-in.jsx`);
jest.mock(`../favoritesPage/favorites-page.jsx`);
jest.mock(`../rentObjectDetails/rent-object-details.jsx`);
jest.mock(`react-redux`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
        .create(
            <App
              tryToAuthorize={() => undefined}
            />)
        .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(null, expect.any(Object));
  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`tryToAuthorize`);

  expect(connectAdvanced).toHaveBeenCalledWith(App);

  expect(MainPage).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
