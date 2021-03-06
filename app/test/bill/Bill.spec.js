import chai, {expect} from "chai";
import {mount} from "enzyme"
import chaiEnzyme from "chai-enzyme";

import React from "react";
import {createStore, combineReducers} from "redux";

import {addToBill} from "../../src/bill/billActions";
import reducers from "../../src/reducers";

import BillContainer from "../../src/bill/BillContainer";

describe("Bill Component", () => {
  chai.use(chaiEnzyme());

  let store;

  beforeEach(() => {
    store = createStore(reducers);
  });

  it("shows the bill participants", () => {
    store.dispatch(addToBill("Steve", 1, "$5.50"));
    store.dispatch(addToBill("Amanda", 2, "$8.25"));

    const bill = mount(<BillContainer store={store} />);

    expect(bill).to.contain.text("Steve -- $5.50");
    expect(bill).to.contain.text("Steve -- $5.50");
  });

  it("sums multiple amounts to the same participant", () => {
    store.dispatch(addToBill("Steve", 1, "$5.00"));
    store.dispatch(addToBill("Steve", 2, "$5.00"));

    const bill = mount(<BillContainer store={store} />);

    expect(bill).to.contain.text("Steve -- $10.00");
  });
});
