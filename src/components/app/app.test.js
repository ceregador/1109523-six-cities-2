import React from 'react';
import App from './app.jsx';
import MainPage from '../mainPage/main-page.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../mainPage/main-page.jsx`);
jest.mock(`react-redux`);

it(`renders MainPage and connects correctly`, () => {
  const tree = Renderer
        .create(
            <App
              tryToAuthorize={() => undefined}
            />)
        .toJSON();

  expect(MainPage).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
