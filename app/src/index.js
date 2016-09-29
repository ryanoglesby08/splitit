/* global document, window */

import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux"
import {Provider} from "react-redux";

import {receiveOcrResponse} from './receipt/receiptActions';
import Reducers from './reducers';

import App from "./app";

require("../stylesheet/application.scss");

const store = createStore(Reducers);

const ocrResponse = JSON.parse(window.cloudVisionResponse);
store.dispatch(receiveOcrResponse(ocrResponse));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);