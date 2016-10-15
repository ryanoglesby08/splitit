/* global document, window */

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, hashHistory} from "react-router";
import {createStore} from "redux"
import {Provider} from "react-redux";

import {receiveOcrResponse} from './receipt/receiptActions';
import Reducers from './reducers';

import ReceiptApp from "./ReceiptApp";
import BillContainer from "./bill/BillContainer";

require("../stylesheet/application.scss");

const store = createStore(Reducers);

const ocrResponse = JSON.parse(window.cloudVisionResponse);
store.dispatch(receiveOcrResponse(ocrResponse));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={ReceiptApp} />
      <Route path="bill" component={BillContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);