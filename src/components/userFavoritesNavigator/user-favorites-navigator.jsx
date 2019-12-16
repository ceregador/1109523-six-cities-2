import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Selector from '../../selectors/selector';
import propTypes from './prop-types';

const UserFavoritesNavigator = ({isAuthorized, userEmail}) => {

  const configureNavigatorData = () => {
    const url = isAuthorized ? `/favorites` : `/login`;
    const spanClassName = isAuthorized ? `header__user-name user__name` : `header__login`;
    const text = isAuthorized ? `${userEmail}` : `Sign in`;

    return {url, spanClassName, text};
  };

  const {url, spanClassName, text} = configureNavigatorData();

  return <Link to={url} className="header__nav-link header__nav-link--profile">
    <div className="header__avatar-wrapper user__avatar-wrapper"></div>
    <span className={spanClassName}>{text}</span>
  </Link>;
};

UserFavoritesNavigator.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state),
  userEmail: Selector.getUserEmailSelector(state)
});

export default connect(mapStateToProps, null)(UserFavoritesNavigator);
