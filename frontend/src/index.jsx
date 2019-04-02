import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

import App from "./main/app";
import reduces from './main/reducers';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reduces);

ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
        <App />
    </Provider>
  </HashRouter>,
  document.getElementById("app")
);