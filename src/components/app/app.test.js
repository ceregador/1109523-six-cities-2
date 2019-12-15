import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import App from './app.jsx';
import MainPage from '../mainPage/main-page.jsx';
import SignIn from '../signIn/sign-in.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`../mainPage/main-page.jsx`);
jest.mock(`../signIn/sign-in.jsx`);
jest.mock(`react-redux`);
jest.mock(`../../selectors/selector`);

it(`renders SignIn page if not authorized and connects correctly`, () => {
  const tree = Renderer
      .create(
          <App
            isAuthorized={false}
            tryToAuthorize={() => undefined}
          />)
      .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`isAuthorized`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`tryToAuthorize`);

  expect(connectAdvanced).toHaveBeenCalledWith(App);

  expect(SignIn).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});

it(`renders MainPage if authorized and connects correctly`, () => {
  const tree = Renderer
        .create(
            <App
              isAuthorized={true}
              tryToAuthorize={() => undefined}
            />)
        .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`isAuthorized`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`tryToAuthorize`);

  expect(connectAdvanced).toHaveBeenCalledWith(App);

  expect(MainPage).toHaveBeenCalled();
  expect(tree).toMatchSnapshot();
});
