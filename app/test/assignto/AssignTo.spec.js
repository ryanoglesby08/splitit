import chai, {expect} from "chai";
import {mount} from "enzyme";
import chaiEnzyme from "chai-enzyme";

import React from "react";
import {createStore} from 'redux';

import "../support/jsdom";

import {wantToAssign} from "../../src/assignto/assignToActions";
import Reducers from "../../src/reducers";

import AssignToContainer from "../../src/assignto/AssignToContainer";

describe("Assign To Component", () => {
  chai.use(chaiEnzyme());

  let store;

  beforeEach(() => {
    store = createStore(Reducers);
  });

  it("Shows itself when there is something to assign", () => {
    store.dispatch(wantToAssign("$2.25"));

    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo).to.contain.text("$2.25");
  });

  it("Hides itself when there is nothing to assign", () => {
    const assignTo = mount(<AssignToContainer store={store} />);

    expect(assignTo.html()).eql(null);
  });
});