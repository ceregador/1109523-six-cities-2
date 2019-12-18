import React, {useEffect, useRef} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import PageHeader from '../pageHeader/page-header.jsx';
import Operation from '../../operation';
import Selector from '../../selectors/selector';
import withForm from '../../hocs/withForm/with-form.jsx';
import PropTypes from './prop-types';

const SignIn = ({isAuthorized, formFields, onFormFieldChange, authorize}) => {

  if (isAuthorized) {
    return <Redirect to="/"/>;
  }

  const isServerErrorWasViewed = useRef(false);

  useEffect(() => {
    if (formFields[`email`] &&
      formFields[`email`] !== `` &&
      formFields[`emailFieldError`]) {
      onFormFieldChange(`emailFieldError`, null);
    }

    if (formFields[`password`] &&
      formFields[`password`] !== `` &&
      formFields[`passwordFieldError`]) {
      onFormFieldChange(`passwordFieldError`, null);
    }

    if (formFields[`serverError`] && !isServerErrorWasViewed.current) {
      isServerErrorWasViewed.current = true;
      return;
    }

    if (formFields[`serverError`] && isServerErrorWasViewed.current) {
      isServerErrorWasViewed.current = false;
      onFormFieldChange(`serverError`, null);
    }
  });

  const onLoginButtonClick = (evt) => {
    evt.preventDefault();

    const email = formFields[`email`];
    const password = formFields[`password`];

    if (!email || email === ``) {
      onFormFieldChange(`emailFieldError`, `Поле Email не должно быть пустым`);
      return;
    }

    if (!password || password === ``) {
      onFormFieldChange(`passwordFieldError`, `Поле Password не должно быть пустым`);
      return;
    }

    authorize(email, password).catch((err) => {
      if (err.response.status === 400) {
        onFormFieldChange(`serverError`, `Поле Email имеет некорректный формат`);
      } else {
        onFormFieldChange(`serverError`, `Неизвестная ошибка`);
      }
    });
  };

  const onLoginChange = ({target: {value}}) => {
    onFormFieldChange(`email`, value);
  };

  const onPasswordChange = ({target: {value}}) => {
    onFormFieldChange(`password`, value);
  };

  return <div className="page page--gray page--login">
    <PageHeader/>
    <main className="page__main page__main--login">
      <div className="page__login-container container">
        <section className="login">
          <h1 className="login__title">Sign in</h1>
          <form className="login__form form" action="#" method="post">
            <div className="login__input-wrapper form__input-wrapper">
              <span style={{color: `red`}}>{formFields[`emailFieldError`]}</span>
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
              <span style={{color: `red`}}>{formFields[`passwordFieldError`]}</span>
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
            <span style={{color: `red`}}>{formFields[`serverError`]}</span>
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

SignIn.propTypes = PropTypes;

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state)
});

const mapDispatchToProps = {
  authorize: (email, password) => Operation.authorize(email, password)
};

export default connect(mapStateToProps, mapDispatchToProps)(withForm(SignIn));
