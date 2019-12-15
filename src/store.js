import thunk from 'redux-thunk';
import {compose} from 'recompose';
import createApi from './api';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer/reducer';

const api = createApi((...args) => store.dispatch(...args));

const store = createStore(
    reducer,
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f));

export default store;

