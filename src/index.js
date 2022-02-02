import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './store/reducers';
import App from './App';
import Alert from './components/popups/SnackBar';
import ConfirmAction from './components/popups/ConfirmActionDialog';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(reduxThunk)));

ReactDOM.render((
  <Provider store={store}>
    <App />
    <Alert />
    <ConfirmAction />
  </Provider>
), document.querySelector('#root'));
