import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Redirect} from 'react-router-dom';
import Selector from '../../selectors/selector';
import PropTypes from './prop-types';
import {Routes} from '../../constants/route-constants';
import Operation from '../../operation';

const mapStateToProps = (state) => Selector.isAuthorizedSelector(state);

const withAuth = (Component) => {
  return function WithAuth(props) {

    WithAuth.propTypes = PropTypes;

    const isAuthorized = useSelector(mapStateToProps);
    const dispatch = useDispatch();

    dispatch(Operation.tryToAuthorize());

    if (isAuthorized === null) {
      return <p>Loading...</p>;
    }

    if (isAuthorized === false) {
      return <Redirect to={Routes.LOGIN_PAGE} />;
    }

    return <Component {...props}/>;
  };
};

export default withAuth;
