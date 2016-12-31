import {expect} from 'chai';

import {createStore} from 'redux';

import {anOcrResponse, someVertices} from '../support/receiptMothers';

import {receiveOcrResponse} from '../../src/receipt/receiptActions';
import receiptReducer from '../../src/receipt/receiptReducer';

describe('Receipt state', () => {
  let store;

  beforeEach(() => {
    store = createStore(receiptReducer);
  });

  it('has the coordinates of all money elements', () => {
    const vertices1 = someVertices();
    const vertices2 = someVertices();
    const ocrResponse = anOcrResponse(
      [
        {description: 'words', vertices: someVertices()},
        {description: '$1.00', vertices: vertices1},
        {description: '$2.00', vertices: vertices2}
      ]
    );

    store.dispatch(receiveOcrResponse(ocrResponse));

    const elementsWithNoIds = store.getState().moneyElements.map(({id, ...rest}) => rest);
    expect(elementsWithNoIds).to.deep.include.members([
      {
        amount: '$1.00',
        polygon: vertices1
      },
      {
        amount: '$2.00',
        polygon: vertices2
      }
    ]);
  });
});
