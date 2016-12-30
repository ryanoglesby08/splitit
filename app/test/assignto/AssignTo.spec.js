import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import React from "react";
import {createStore} from 'redux';

import {aMoneyElement} from "../support/receiptMothers"

import {wantToAssign} from "../../src/assignto/assignToActions";
import reducers from "../../src/reducers";

import AssignToContainer from "../../src/assignto/AssignToContainer";

describe("Assign To Component", () => {
  chai.use(chaiEnzyme());

  let store;

  const storeWithAmountToAssign = (store, amount = "$5.00") => {
    const moneyElement = aMoneyElement({amount});
    store.dispatch(wantToAssign(moneyElement));

    return store;
  };

  beforeEach(() => {
    store = createStore(reducers);
  });

  it("Hides itself when there is nothing to assign", () => {
    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo.html()).eql(null);
  });

  it("Shows itself when there is something to assign", () => {
    store = storeWithAmountToAssign(store, "$2.25");
    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo).to.contain.text("$2.25");
  });

  it("automatically focuses on the new name input field", () => {
    store = storeWithAmountToAssign(store);
    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo.find("input[type='text']").node).to.eql(document.activeElement);
  })

  it("Assigns an amount to someone", () => {
    store = storeWithAmountToAssign(store, "$5.50");
    const assignTo = mount(<AssignToContainer store={store} />);

    assignTo.find("input[type='text']").simulate("change", {target: {value: "Steve"}});
    assignTo.find("input[type='submit']").simulate("click");

    expect(assignTo.html()).eql(null);
    expect(store.getState().bill).to.eql({"Steve": 5.5});
  });
});
