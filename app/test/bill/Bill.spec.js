import {expect} from "chai";
import {mount} from "enzyme"

import React from "react";
import {createStore, combineReducers} from "redux";

import "../support/jsdom";

import {addToBill} from "../../src/bill/billActions";
import billReducer from "../../src/bill/billReducer";

import BillContainer from "../../src/bill/BillContainer";

describe("Bill Component", () => {
  let store;

  beforeEach(() => {
    store = createStore(combineReducers({bill: billReducer}));
  });

  it("shows the bill participants", () => {
    store.dispatch(addToBill("Steve", 1, "$5.50"));
    store.dispatch(addToBill("Amanda", 2, "$8.25"));

    const bill = mount(<BillContainer store={store} />);

    expect(bill.text()).to
      .contain("Steve - $5.50")
      .contain("Amanda - $8.25");
  });
});