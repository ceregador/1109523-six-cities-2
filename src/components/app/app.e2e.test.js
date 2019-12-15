import React from 'react';
import {mount} from 'enzyme';
import App from './app.jsx';
import MainPage from '../mainPage/main-page.jsx';
import SignIn from '../signIn/sign-in.jsx';

jest.mock(`../mainPage/main-page.jsx`);
jest.mock(`../signIn/sign-in.jsx`);

it(`App component calls tryToAuthorize`, () => {
  const tryToAuthorizeMock = jest.fn();
  mount(
      <App
        tryToAuthorize={tryToAuthorizeMock}
        isAuthorized={true}
      />);

  expect(tryToAuthorizeMock).toHaveBeenCalledTimes(1);
  expect(MainPage).toHaveBeenCalled();
});

it(`App component calls tryToAuthorize`, () => {
  const tryToAuthorizeMock = jest.fn();
  mount(
      <App
        tryToAuthorize={tryToAuthorizeMock}
        isAuthorized={false}
      />);

  expect(tryToAuthorizeMock).toHaveBeenCalledTimes(1);
  expect(SignIn).toHaveBeenCalled();
});
