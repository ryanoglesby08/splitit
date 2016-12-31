import {expect} from 'chai';

import {createStore} from 'redux';

import {aMoneyElement, anOcrResponse, someVertices} from '../support/receiptMothers';

import reducers from "../../src/reducers";

import {receiveOcrResponse} from "../../src/receipt/receiptActions";
import {addToBill} from "../../src/bill/billActions";
import {wantToAssign} from "../../src/assignto/assignToActions";

describe("Add to bill", () => {
  let store;

  beforeEach(() => {
    store = createStore(reducers);
  });

  it("removes the amount from the to-assign queue", () => {
    const moneyElement = aMoneyElement({amount: "$10.00"});
    store.dispatch(wantToAssign(moneyElement));
    store.dispatch(addToBill("Bobby", moneyElement.id, "$10.00"));

    expect(store.getState().assignTo.queue).to.eql(null);
  });

  it("adds the amount to the bill", () => {
    const moneyElement = aMoneyElement({amount: "$10.00"});
    store.dispatch(wantToAssign(moneyElement));
    store.dispatch(addToBill("Bobby", moneyElement.id, "$10.00"));

    expect(store.getState().bill).to.eql({"Bobby": 10});
  });

  it("removes the money element from the receipt", () => {
    const ocrResponse = anOcrResponse(
      [
        {description: '$10.00', vertices: someVertices()},
        {description: '$20.00', vertices: someVertices()},
      ]
    );
    store.dispatch(receiveOcrResponse(ocrResponse));

    const moneyElement = aMoneyElement({id: 1, amount: "$10.00"});
    store.dispatch(wantToAssign(moneyElement));
    store.dispatch(addToBill("Bobby", 1, "$10.00"));

    expect(store.getState().receipt.moneyElements).to.have.lengthOf(1);
    expect(store.getState().receipt.moneyElements[0].description).to.not.eql("$10.00")
  });
})
