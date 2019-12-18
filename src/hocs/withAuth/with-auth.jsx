import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Selector from '../../selectors/selector';
import PropTypes from './prop-types';
import {Routes} from '../../constants/routeConstants';

const withAuth = (Component) => {
  return function WithAuth(props) {
    const {isAuthorized} = props;

    WithAuth.propTypes = PropTypes;

    return isAuthorized ? <Component {...props}/> : <Redirect to={Routes.LOGIN_PAGE} />;
  };
};

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state)
});

export default connect(mapStateToProps, null)(withAuth);
