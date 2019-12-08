import ReactDOM from 'react-dom';
import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducer/reducer';
import MainPage from './components/mainPage/main-page.jsx';

const init = () => {
  const store = createStore(
      reducer,
      window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f);

  ReactDOM.render(
      <Provider store={store}>
        <MainPage/>
      </Provider>,
      document.querySelector(`#root`)
  );
};

init();
