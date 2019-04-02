import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./main/app";
import reduces from './main/reducers';

import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import { Provider } from 'react-redux';

const store = applyMiddleware(promise)(createStore)(reduces);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);