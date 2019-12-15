import ReactDOM from 'react-dom';
import React from 'react';
import {Provider} from 'react-redux';
import store from './store';
import MainPage from './components/mainPage/main-page.jsx';

const init = () => {

  ReactDOM.render(
      <Provider store={store}>
        <MainPage/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
