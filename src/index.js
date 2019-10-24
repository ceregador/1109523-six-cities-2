import ReactDOM from 'react-dom';
import React from 'react';
import MainPage from './components/mainPage/main-page.jsx';
import rentObjects from './__fixtures__/data';

const init = () => {
  ReactDOM.render(
      <MainPage rentObjects={rentObjects}/>,
      document.querySelector(`#root`)
  );
};

init();
