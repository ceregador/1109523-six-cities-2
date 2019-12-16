import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Selector from '../../selectors/selector';
import propTypes from './prop-types';

const PageHeader = ({isAuthorized, userEmail}) => {

  const configureUserNavigationData = () => {
    const url = isAuthorized ? `/favorites` : `/login`;
    const spanClassName = isAuthorized ? `header__user-name user__name` : `header__login`;
    const text = isAuthorized ? `${userEmail}` : `Sign in`;

    return {url, spanClassName, text};
  };

  const {url, spanClassName, text} = configureUserNavigationData();

  return <header className="header">
    <div className="container">
      <div className="header__wrapper">
        <div className="header__left">
          <Link to="/" className="header__logo-link">
            <img className="header__logo" src="/img/logo.svg" alt="6 cities logo" width="81" height="41"/>
          </Link>
        </div>
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item user">
              <Link to={url} className="header__nav-link header__nav-link--profile">
                <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                <span className={spanClassName}>{text}</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>;
};

PageHeader.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state),
  userEmail: Selector.getUserEmailSelector(state)
});

export default connect(mapStateToProps, null)(PageHeader);
