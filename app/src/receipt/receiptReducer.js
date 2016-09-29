import {types as receiptActions} from "./receiptActions";
import {types as billActions} from "../bill/billActions";

import createReducer from "../createReducer";

let nextId = 1;

const reducers = {};
reducers[receiptActions.RECEIVE_OCR_RESPONSE] = (state, payload) => {
  const moneyElements =
    payload.textAnnotations
      .filter((annotation) => annotation.description.startsWith("$"))
      .map((annotation) => (
        {
          id: nextId++,
          amount: annotation.description,
          polygon: annotation.boundingPoly.vertices
        }
      ));

  return {
    ...state,
    moneyElements
  }
};

reducers[billActions.ADD_TO_BILL] = (state, payload) => (
  {
    ...state,
    moneyElements: state.moneyElements.filter((element) => element.id !== payload.moneyElementId)
  }
);

// TODO: Switch to using update(...) here.

export default createReducer(reducers);