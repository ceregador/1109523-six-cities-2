import React from 'react';
import {connect} from 'react-redux';
import Operation from '../../operation';
import Selector from '../../selectors/selector';
import withForm from '../../hocs/withForm/with-form.jsx';
import propTypes from './prop-types';

const SignIn = ({formFields, onFormFieldChange, authorize}) => {

  const onLoginButtonClick = (evt) => {
    evt.preventDefault();

    const email = formFields[`email`];
    const password = formFields[`password`];

    if (!email || email === ``) {
      throw new Error(`Поле 'Email' является обязательным`);
    }

    if (!password || password === ``) {
      throw new Error(`Поле 'Password' является обязательным`);
    }

    authorize(email, password);
  };

  const onLoginChange = ({target: {value}}) => {
    onFormFieldChange(`email`, value);
  };

  const onPasswordChange = ({target: {value}}) => {
    onFormFieldChange(`password`, value);
  };

  return <div className="page page--gray page--login">
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <a className="header__logo-link" href="main.html">
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </a>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <a className="header__nav-link header__nav-link--profile" href="#">
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__login">Sign in</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>

    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">E-mail</label>
              <input
                className="login__input form__input"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={onLoginChange}
              />
            </div>
            <div className="login__input-wrapper form__input-wrapper">
              <label className="visually-hidden">Password</label>
              <input
                className="login__input form__input"
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={onPasswordChange}
              />
            </div>
            <button className="login__submit form__submit button" type="submit" onClick={onLoginButtonClick}>Sign in</button>
          </form>
        </section>
        <section className="locations locations--login locations--current">
          <div className="locations__item">
            <a className="locations__item-link" href="#">
              <span>Amsterdam</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  </div>;
};

SignIn.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state)
});

const mapDispatchToProps = {
  authorize: (email, password) => Operation.authorize(email, password)
};

export default connect(mapStateToProps, mapDispatchToProps)(withForm(SignIn));
