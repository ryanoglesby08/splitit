import {expect} from 'chai';

import {createStore} from 'redux';

import {anOcrResponse} from '../support/receiptMothers';

import {receiveOcrResponse} from '../../src/receipt/receiptActions';
import receiptReducer from '../../src/receipt/receiptReducer';

describe('Receipt state', () => {
  let store;

  beforeEach(() => {
    store = createStore(receiptReducer);
  });

  it('has the coordinates of all money elements', () => {
    const ocrResponse = anOcrResponse(
      [
        {description: 'words', vertices: [{x: 0, y: 0}, {x: 0, y: 100}, {x: 50, y: 0}, {x: 50, y: 100}]},
        {description: '$1.00', vertices: [{x: 100, y: 100}, {x: 100, y: 200}, {x: 150, y: 100}, {x: 150, y: 200}]}
      ]
    );

    store.dispatch(receiveOcrResponse(ocrResponse));

    expect(store.getState()).to.eql({
      moneyElements: [
        {
          text: '$1.00',
          polygon: [{x: 100, y: 100}, {x: 100, y: 200}, {x: 150, y: 100}, {x: 150, y: 200}]
        }
      ]
    });
  });
});