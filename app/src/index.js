/* global document */

import React from "react";
import ReactDOM from "react-dom";
import {Router, Route, browserHistory} from "react-router";
import {createStore} from "redux"
import {Provider} from "react-redux";

import Reducers from './reducers';

import ReceiptApp from "./receipt/ReceiptApp";
import BillContainer from "./bill/BillContainer";
import ImportReceiptContainer from "./importreceipt/ImportReceiptContainer";

import "../stylesheet/application.scss";

const store = createStore(Reducers);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={ImportReceiptContainer} />
      <Route path="receipt" component={ReceiptApp} />
      <Route path="bill" component={BillContainer} />
    </Router>
  </Provider>,
  document.getElementById("root")
);
