import React from 'react';
import {connect, connectAdvanced} from 'react-redux';
import SignIn from '../signIn/sign-in.jsx';
import Renderer from 'react-test-renderer';

jest.mock(`react-redux`);
jest.mock(`../../selectors/selector`);

it(`renders and connects correctly`, () => {
  const tree = Renderer
      .create(
          <SignIn
            formFields={{}}
            onFormFieldChange={() => null}
            authorize={() => null}
          />)
      .toJSON();

  expect(connect).toHaveBeenCalledTimes(1);
  expect(connect).toHaveBeenCalledWith(expect.any(Function), expect.any(Object));

  const mapStateToProps = connect.mock.calls[0][0];
  const mappedProps = mapStateToProps({});
  expect(mappedProps).toHaveProperty(`isAuthorized`);

  const mapDispatchToProps = connect.mock.calls[0][1];
  expect(mapDispatchToProps).toHaveProperty(`authorize`);

  expect(connectAdvanced).toHaveBeenCalledWith(SignIn);

  expect(tree).toMatchSnapshot();
});
