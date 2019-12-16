import React from 'react';
import {mount} from 'enzyme';
import App from './app.jsx';
import MainPage from '../mainPage/main-page.jsx';

jest.mock(`../mainPage/main-page.jsx`);

it(`App component calls tryToAuthorize`, () => {
  const tryToAuthorizeMock = jest.fn();
  mount(
      <App
        tryToAuthorize={tryToAuthorizeMock}
      />);

  expect(tryToAuthorizeMock).toHaveBeenCalledTimes(1);
  expect(MainPage).toHaveBeenCalled();
});
