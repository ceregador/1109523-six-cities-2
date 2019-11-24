import ReactDOM from 'react-dom';
import React from 'react';
import MainPage from './components/mainPage/main-page.jsx';
import offers from './mocks/offers';

const init = () => {
  ReactDOM.render(
      <MainPage offers={offers}/>,
      document.querySelector(`#root`)
  );
};

init();
