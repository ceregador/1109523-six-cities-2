import React, {useEffect} from 'react';
import SignIn from '../signIn/sign-in.jsx';
import MainPage from '../mainPage/main-page.jsx';
import {connect} from 'react-redux';
import propTypes from './prop-types';
import Selector from '../../selectors/selector';
import Operation from '../../operation';

const App = ({tryToAuthorize, isAuthorized}) => {
  useEffect(() => tryToAuthorize(), []);

  return isAuthorized ? <MainPage/> : <SignIn/>;
};

App.propTypes = propTypes;

const mapStateToProps = (state) => ({
  isAuthorized: Selector.isAuthorizedSelector(state)
});

const mapDispatchToProps = {
  tryToAuthorize: () => Operation.tryToAuthorize()
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
