import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import React from "react";
import {createStore} from 'redux';

import "../support/jsdom";
import {aMoneyElement} from "../support/receiptMothers"

import {wantToAssign} from "../../src/assignto/assignToActions";
import reducers from "../../src/reducers";

import AssignToContainer from "../../src/assignto/AssignToContainer";

describe("Assign To Component", () => {
  chai.use(chaiEnzyme());

  let store;

  beforeEach(() => {
    store = createStore(reducers);
  });

  it("Hides itself when there is nothing to assign", () => {
    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo.html()).eql(null);
  });

  it("Shows itself when there is something to assign", () => {
    const moneyElement = aMoneyElement({amount: "$2.25"});
    store.dispatch(wantToAssign(moneyElement));

    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo).to.contain.text("$2.25");
  });

  it.skip("Assigns an amount to someone", () => {
    const moneyElement = aMoneyElement({amount: "$5.50"});
    store.dispatch(wantToAssign(moneyElement));

    const assignTo = mount(<AssignToContainer store={store} />);

    assignTo.find("input[type='text']").simulate("change", "Steve");
    // console.log(assignTo.find("input[type='text']").html());
    assignTo.find("input[type='submit']").simulate("click");


    //TODO: assigns to someone, marks that element as done in the receipt, and hides the assign to
    expect(assignTo.html()).eql(null);
    // TODO: Fix this test, and maybe it is two tests?
    expect(store.getState()['bill']).to.eql({
      "Steve": ["$5.50"]
    });
  });
});