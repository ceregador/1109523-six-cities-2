import React from 'react';
import {mount} from 'enzyme';
import SignIn from './sign-in.jsx';

jest.mock(`../pageHeader/page-header.jsx`);

it(`SignIn component calls authorize at click of Login button`, () => {
  const authorizeMock = jest.fn();

  const signIn = mount(
      <SignIn
        authorize={authorizeMock}
        formFields={{email: `a`, password: `1`}}
      />);

  const loginButton = signIn.find(`.login__submit.form__submit.button`);
  loginButton.simulate(`click`);
  expect(authorizeMock).toHaveBeenCalledWith(`a`, `1`);
});
